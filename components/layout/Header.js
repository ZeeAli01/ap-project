import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Menu, Sun, Moon, Monitor, X, ChevronDown, LogOut, User } from 'lucide-react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';

export default function Header({ toggleSidebar, isLoggedIn }) {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const router = useRouter();
  const { logout, user } = useAuth();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = () => {
    logout();
  };

  const renderThemeToggle = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center space-x-1 p-2 rounded-md hover:bg-muted transition-colors"
          aria-label="Toggle theme"
        >
          {currentTheme === 'dark' ? (
            <Moon size={20} />
          ) : (
            <Sun size={20} />
          )}
          <ChevronDown size={16} />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 py-2 bg-card rounded-md shadow-lg z-50 border border-border animate-fade-in">
            <button
              onClick={() => {
                setTheme('light');
                setDropdownOpen(false);
              }}
              className="flex items-center w-full px-4 py-2 text-sm hover:bg-muted transition-colors"
            >
              <Sun size={16} className="mr-2" />
              Light
            </button>
            <button
              onClick={() => {
                setTheme('dark');
                setDropdownOpen(false);
              }}
              className="flex items-center w-full px-4 py-2 text-sm hover:bg-muted transition-colors"
            >
              <Moon size={16} className="mr-2" />
              Dark
            </button>
            <button
              onClick={() => {
                setTheme('system');
                setDropdownOpen(false);
              }}
              className="flex items-center w-full px-4 py-2 text-sm hover:bg-muted transition-colors"
            >
              <Monitor size={16} className="mr-2" />
              System
            </button>
          </div>
        )}
      </div>
    );
  };

  const renderAuthLinks = () => {
    if (isLoggedIn) {
      const username = user?.username || 'User';
      
      return (
        <div className="relative">
          <button
            onClick={() => setUserDropdownOpen(!userDropdownOpen)}
            className="flex items-center space-x-1 p-2 btn-secondary rounded-md"
            aria-label="User menu"
          >
            <User size={18} className="mr-1" />
            <span>{username}</span>
            <ChevronDown size={14} />
          </button>

          {userDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 py-2 bg-card rounded-md shadow-lg z-50 border border-border animate-fade-in">
              <Link 
                href="/dashboard" 
                className="flex items-center w-full px-4 py-2 text-sm hover:bg-muted transition-colors"
                onClick={() => setUserDropdownOpen(false)}
              >
                Dashboard
              </Link>
              <Link 
                href="/profile" 
                className="flex items-center w-full px-4 py-2 text-sm hover:bg-muted transition-colors"
                onClick={() => setUserDropdownOpen(false)}
              >
                Profile
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setUserDropdownOpen(false);
                }}
                className="flex items-center w-full px-4 py-2 text-sm hover:bg-muted transition-colors text-left"
              >
                <LogOut size={16} className="mr-2" />
                Logout
              </button>
            </div>
          )}
        </div>
      );
    }

    return (
      <>
        <Link href="/login" className="btn-secondary">
          Log In
        </Link>
        <Link href="/signup" className="btn-primary">
          Sign Up
        </Link>
      </>
    );
  };

  return (
    <header className="navbar">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            {isLoggedIn && (
              <button
                onClick={toggleSidebar}
                className="mr-4 p-2 rounded-md md:hidden hover:bg-muted transition-colors"
                aria-label="Toggle sidebar"
              >
                <Menu size={24} />
              </button>
            )}
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">ShortlyURL</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            {!isLoggedIn && (
              <>
                <Link href="/features" className="text-foreground hover:text-primary transition-colors">
                  Features
                </Link>
                <Link href="/pricing" className="text-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </>
            )}
            {isLoggedIn && (
              <Link href="/dashboard" className="text-foreground hover:text-primary transition-colors">
                Dashboard
              </Link>
            )}
            <div className="ml-4 flex items-center space-x-2">
              {renderThemeToggle()}
              {renderAuthLinks()}
            </div>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden items-center space-x-2">
            {renderThemeToggle()}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-4 py-3 space-y-3 bg-card border-t border-border">
            <Link 
              href="/" 
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            {!isLoggedIn ? (
              <>
                <Link 
                  href="/features" 
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link 
                  href="/pricing" 
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <div className="pt-2 flex space-x-2">
                  <Link href="/login" className="btn-secondary flex-1 text-center" onClick={() => setMobileMenuOpen(false)}>
                    Log In
                  </Link>
                  <Link href="/signup" className="btn-primary flex-1 text-center" onClick={() => setMobileMenuOpen(false)}>
                    Sign Up
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link 
                  href="/dashboard" 
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link 
                  href="/profile" 
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="block py-2 text-foreground hover:text-primary transition-colors w-full text-left"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}