import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!url) {
      setError('Please enter a URL');
      return;
    }
    
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      setError('Please enter a valid URL starting with http:// or https://');
      return;
    }
    
    setError('');
    setIsLoading(true);
    
    // Simulate API call - in a real app, this would call your backend
    setTimeout(() => {
      setIsLoading(false);
      setShortenedUrl('https://shortly.url/a1b2c3');
    }, 1000);
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortenedUrl);
    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Shorten, share, and track your links with ease
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-in">
              A professional URL shortening service to create concise links, track performance, and enhance your brand presence.
            </p>
            
            <div className="space-y-6">
              <form onSubmit={handleSubmit} className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
                <div className="url-input-container">
                  <input
                    type="text"
                    placeholder="Enter your long URL here"
                    className="url-input"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                  <button 
                    type="submit" 
                    className="shorten-button"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Shortening...' : 'Shorten URL'}
                  </button>
                </div>
                
                {error && (
                  <div className="mt-2 text-error text-sm">{error}</div>
                )}
              </form>
              
              {shortenedUrl && (
                <div className="p-4 rounded-lg border border-border bg-card animate-fade-in">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Your shortened URL:</p>
                      <a 
                        href={shortenedUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center"
                      >
                        {shortenedUrl} <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                    
                    <button
                      onClick={copyToClipboard}
                      className="p-2 rounded-md hover:bg-muted transition-colors"
                      aria-label="Copy to clipboard"
                    >
                      {copied ? (
                        <CheckCircle size={20} className="text-success" />
                      ) : (
                        <Copy size={20} />
                      )}
                    </button>
                  </div>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 animate-slide-in" style={{ animationDelay: '0.2s' }}>
                <Link href="/signup" className="btn-primary flex items-center justify-center">
                  <span>Get Started for Free</span>
                  <ArrowRight size={16} className="ml-2" />
                </Link>
                
                <Link href="/features" className="text-foreground hover:text-primary transition-colors flex items-center justify-center">
                  <span>Learn More</span>
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl p-8">
                <div className="bg-card shadow-lg rounded-xl overflow-hidden border border-border">
                  <div className="px-6 py-4 border-b border-border flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-error"></div>
                    <div className="w-3 h-3 rounded-full bg-warning"></div>
                    <div className="w-3 h-3 rounded-full bg-success"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="h-8 w-3/4 bg-muted rounded mb-4"></div>
                    <div className="h-40 bg-muted rounded mb-4"></div>
                    <div className="h-8 w-1/2 bg-muted rounded mb-4"></div>
                    <div className="h-8 w-full bg-primary/20 rounded"></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-gradient-to-tr from-primary to-accent rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}