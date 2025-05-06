import { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const { isAuthenticated, loading } = useAuth();
  
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
  
  const isAuthPage = router.pathname === '/login' || router.pathname === '/signup';
  
  const isHomePage = router.pathname === '/';
  
  const hasSidebar = isAuthenticated && !isAuthPage && !isHomePage;
  
  const showFooter = isHomePage || isAuthPage;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
        isLoggedIn={isAuthenticated}
      />
      
      <div className="flex flex-1">
        {hasSidebar && (
          <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
        )}
        
        <main className={`flex-1 transition-all duration-300 ${hasSidebar ? 'md:ml-64' : ''}`}>
          <div className="container mx-auto px-4 py-8">
            {children}
          </div>
        </main>
      </div>
      
      {showFooter && <Footer />}
    </div>
  );
}