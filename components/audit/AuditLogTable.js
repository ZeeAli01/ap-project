import { useState, useEffect } from 'react';
import { Clock, User, FileEdit, Info, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import AuditLogCard from './AuditLogCard';
import AuditLogBadge from './AuditLogBadge';

export default function AuditLogTable({ auditLogs, currentPage, totalPages, onPageChange }) {
  const [viewMode, setViewMode] = useState('table');
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setViewMode('card');
      } else {
        setViewMode('table');
      }
    };
    
    // Set initial view mode
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };
  
  // Pagination component
  const Pagination = () => {
    if (totalPages <= 1) return null;
    
    return (
      <div className="flex items-center justify-center space-x-2 mt-6">
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className="p-2 rounded-md border border-border hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Go to first page"
        >
          <ChevronsLeft size={16} />
        </button>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-md border border-border hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Go to previous page"
        >
          <ChevronLeft size={16} />
        </button>
        
        <span className="text-sm text-muted-foreground px-2">
          Page {currentPage} of {totalPages}
        </span>
        
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-md border border-border hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Go to next page"
        >
          <ChevronRight size={16} />
        </button>
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-md border border-border hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Go to last page"
        >
          <ChevronsRight size={16} />
        </button>
      </div>
    );
  };
  
  return (
    <>
      {/* Card view (Mobile) */}
      {viewMode === 'card' && (
        <div className="space-y-4">
          {auditLogs.map(log => (
            <AuditLogCard 
              key={log.id} 
              log={log}
              formatDateTime={formatDateTime}
            />
          ))}
          
          <Pagination />
        </div>
      )}
      
      {/* Table view (Desktop) */}
      {viewMode === 'table' && (
        <>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Date & Time</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-foreground">User</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Action</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {auditLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-muted/40 transition-colors">
                      <td className="px-6 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center">
                          <Clock size={14} className="mr-2 text-muted-foreground" />
                          {formatDateTime(log.timestamp)}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex items-center">
                          <User size={14} className="mr-2 text-muted-foreground" />
                          {log.user}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <AuditLogBadge action={log.action} />
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex items-center">
                          <Info size={14} className="mr-2 text-muted-foreground" />
                          {log.description}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <Pagination />
        </>
      )}
      
      {auditLogs.length === 0 && (
        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <p className="text-muted-foreground">No audit logs found.</p>
        </div>
      )}
    </>
  );
} 