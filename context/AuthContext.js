import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated on component mount
    const checkUserAuthentication = async () => {
      try {
        const token = localStorage.getItem('auth_token');
        
        if (!token) {
          setUser(null);
          setLoading(false);
          return;
        }
        
        // Fetch user data from API using the token
        const response = await fetch('/api/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          // Token is invalid, clear it
          localStorage.removeItem('auth_token');
          setUser(null);
        }
      } catch (error) {
        console.error('Authentication error:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    
    checkUserAuthentication();
  }, []);
  
  // Login function
  const login = async (email, password) => {
    try {
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }
      
      // Store token in localStorage
      localStorage.setItem('auth_token', data.token);
      
      // Set user data in state
      setUser(data.user);
      
      // Redirect to dashboard
      router.push('/dashboard');
      
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error.message 
      };
    }
  };
  
  // Signup function
  const signup = async (username, email, password) => {
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          username,
          email, 
          password 
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }
      
      // Store token in localStorage
      localStorage.setItem('auth_token', data.token);
      
      // Set user data in state
      setUser(data.user);
      
      // Redirect to dashboard
      router.push('/dashboard');
      
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error.message 
      };
    }
  };
  
  // Logout function
  const logout = () => {
    // Clear token from localStorage
    localStorage.removeItem('auth_token');
    
    // Clear user data from state
    setUser(null);
    
    // Redirect to homepage
    router.push('/');
  };
  
  // Check if user is authenticated
  const isAuthenticated = !!user;
  
  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    isAuthenticated
  };
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
} 