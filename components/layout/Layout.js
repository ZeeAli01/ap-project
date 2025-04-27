import { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  
  // Close sidebar on route change on mobile
  useEffect(() => {
    const handleRouteChange = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      }
    };
    
    router.events.on('routeChangeComplete', handleRouteChange);
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  
  // Check if the current route is auth-related (login/signup)
  const isAuthPage = router.pathname === '/login' || router.pathname === '/signup';
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex flex-1">
        {!isAuthPage && (
          <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
        )}
        
        <main className={`flex-1 transition-all duration-300 ${!isAuthPage ? 'md:ml-64' : ''}`}>
          <div className="container mx-auto px-4 py-8">
            {children}
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
}