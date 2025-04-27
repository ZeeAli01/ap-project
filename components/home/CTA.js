import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary/90 to-primary-dark rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to supercharge your links?</h2>
            
            <p className="text-xl mb-8 text-white/80">
              Join thousands of professionals who trust ShortlyURL for their link management needs.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/signup" className="bg-white text-primary font-medium px-6 py-3 rounded-md hover:bg-white/90 transition-colors flex items-center justify-center">
                <span>Get Started for Free</span>
                <ChevronRight size={16} className="ml-1" />
              </Link>
              
              <Link href="/contact" className="bg-transparent border border-white/50 text-white font-medium px-6 py-3 rounded-md hover:bg-white/10 transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}