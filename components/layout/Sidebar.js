import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Link as LinkIcon, BarChart, Settings, Users, Menu, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Sidebar({ isOpen, closeSidebar }) {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: <BarChart size={20} /> },
    { name: 'My Links', href: '/links', icon: <LinkIcon size={20} /> },
    { name: 'Analytics', href: '/analytics', icon: <BarChart size={20} /> },
    { name: 'Settings', href: '/settings', icon: <Settings size={20} /> },
  ];

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden" 
          onClick={closeSidebar}
        />
      )}
      
      {/* Sidebar */}
      <div className={`sidebar ${collapsed ? 'sidebar-collapsed' : ''} ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="h-16 flex items-center justify-between p-4 border-b border-border">
          {!collapsed && (
            <Link href="/dashboard" className="text-xl font-bold text-primary">
              ShortlyURL
            </Link>
          )}
          
          <button 
            onClick={toggleCollapse}
            className="p-2 rounded-md hover:bg-muted transition-colors ml-auto"
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>
        
        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = router.pathname === item.href;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center ${collapsed ? 'justify-center' : 'space-x-3'} px-3 py-3 rounded-md transition-colors
                  ${isActive 
                    ? 'bg-primary/10 text-primary font-medium' 
                    : 'text-foreground hover:bg-muted'}`}
              >
                <span>{item.icon}</span>
                {!collapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>
        
        <div className="absolute bottom-0 w-full p-4 border-t border-border">
          {!collapsed && (
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                <Users size={20} />
              </div>
              <div>
                <p className="font-medium">Guest User</p>
                <p className="text-sm text-muted-foreground">guest@example.com</p>
              </div>
            </div>
          )}
          
          <Link 
            href="/logout"
            className={`w-full flex items-center ${collapsed ? 'justify-center' : 'justify-between'} px-3 py-2 rounded-md bg-muted hover:bg-muted/80 transition-colors`}
          >
            {collapsed ? (
              <Menu size={20} />
            ) : (
              <>
                <span>Logout</span>
                <Menu size={20} />
              </>
            )}
          </Link>
        </div>
      </div>
    </>
  );
}