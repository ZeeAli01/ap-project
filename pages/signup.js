import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Eye, EyeOff, Check, ArrowRight } from 'lucide-react';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const router = useRouter();
  
  // Password strength indicators
  const hasMinLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  const isPasswordStrong = 
    hasMinLength && 
    hasUpperCase && 
    hasLowerCase && 
    hasNumbers && 
    hasSpecialChar;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (!isPasswordStrong) {
      setError('Please create a stronger password');
      return;
    }
    
    setError('');
    setIsLoading(true);
    
    // Simulate API call - in a real app, this would call your backend
    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard');
    }, 1500);
  };
  
  return (
    <>
      <Head>
        <title>Sign Up - ShortlyURL</title>
        <meta name="description" content="Create your ShortlyURL account" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Create your account</h1>
            <p className="mt-2 text-muted-foreground">Start shortening and tracking your URLs today</p>
          </div>
          
          <div className="mt-8 card">
            {error && (
              <div className="mb-4 p-3 bg-error/10 border border-error/30 text-error rounded-md text-sm">
                {error}
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="input-field"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    required
                    className="input-field pr-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex="-1"
                  >
                    {showPassword ? (
                      <EyeOff size={20} className="text-muted-foreground" />
                    ) : (
                      <Eye size={20} className="text-muted-foreground" />
                    )}
                  </button>
                </div>
                
                {/* Password strength indicators */}
                {password.length > 0 && (
                  <div className="mt-2 space-y-2">
                    <div className="text-sm font-medium">Password strength:</div>
                    <ul className="space-y-1 text-sm">
  <li className={`flex items-center ${hasMinLength ? 'text-success' : 'text-muted-foreground'}`}>
    {hasMinLength ? <Check size={16} className="mr-1" /> : <span className="w-4 mr-1">•</span>}
    At least 8 characters
  </li>
  <li className={`flex items-center ${hasUpperCase ? 'text-success' : 'text-muted-foreground'}`}>
    {hasUpperCase ? <Check size={16} className="mr-1" /> : <span className="w-4 mr-1">•</span>}
    At least one uppercase letter
  </li>
  <li className={`flex items-center ${hasLowerCase ? 'text-success' : 'text-muted-foreground'}`}>
    {hasLowerCase ? <Check size={16} className="mr-1" /> : <span className="w-4 mr-1">•</span>}
    At least one lowercase letter
  </li>
  <li className={`flex items-center ${hasNumbers ? 'text-success' : 'text-muted-foreground'}`}>
    {hasNumbers ? <Check size={16} className="mr-1" /> : <span className="w-4 mr-1">•</span>}
    At least one number
  </li>
  <li className={`flex items-center ${hasSpecialChar ? 'text-success' : 'text-muted-foreground'}`}>
    {hasSpecialChar ? <Check size={16} className="mr-1" /> : <span className="w-4 mr-1">•</span>}
    At least one special character
  </li>
</ul>

                  </div>
                )}
              </div>
              
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-foreground mb-1">
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  className="input-field"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              
              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-foreground">
                  I agree to the{' '}
                  <Link href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full btn-primary py-3 flex items-center justify-center"
                  disabled={isLoading || !isPasswordStrong}
                >
                  {isLoading ? 'Creating account...' : 'Create account'}
                  {!isLoading && <ArrowRight size={16} className="ml-2" />}
                </button>
              </div>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link href="/login" className="text-primary hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}