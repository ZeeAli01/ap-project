import Link from 'next/link';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">ShortlyURL</h3>
            <p className="text-muted-foreground mb-4">
              ShortlyURL is a modern URL shortener with powerful tracking and analytics features.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-muted-foreground hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="text-muted-foreground hover:text-primary transition-colors">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="text-muted-foreground hover:text-primary transition-colors">
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-muted-foreground hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/developers" className="text-muted-foreground hover:text-primary transition-colors">
                  Developers
                </Link>
              </li>
              <li>
                <Link href="/status" className="text-muted-foreground hover:text-primary transition-colors">
                  Status
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-muted-foreground hover:text-primary transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {currentYear} ShortlyURL Inc. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center space-x-6">
            <Link href="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors mb-2 md:mb-0">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors mb-2 md:mb-0">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-muted-foreground hover:text-primary text-sm transition-colors mb-2 md:mb-0">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}