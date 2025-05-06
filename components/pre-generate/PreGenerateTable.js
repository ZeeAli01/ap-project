import { useState, useEffect } from 'react';
import { Link as LinkIcon, Edit, Trash2, CheckCircle } from 'lucide-react';

export default function PreGenerateTable({ urls, onDelete, onAssign }) {
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
  
  // URL Card for mobile view
  const UrlCard = ({ url }) => (
    <div className="card mb-4 animate-fade-in">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1 mr-2">
          <div className="flex items-center">
            <LinkIcon size={14} className="mr-1 text-primary" />
            <a
              href={url.shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm"
            >
              {url.shortUrl.split('//')[1]}
            </a>
            
            {url.assigned && (
              <CheckCircle size={14} className="ml-2 text-success" />
            )}
          </div>
          
          {url.originalUrl && (
            <div className="mt-2 text-sm text-muted-foreground overflow-hidden text-ellipsis">
              {url.originalUrl.length > 40 
                ? url.originalUrl.substring(0, 40) + '...' 
                : url.originalUrl}
            </div>
          )}
        </div>
      </div>
      
      <div className="flex justify-end space-x-2 mt-4 pt-3 border-t border-border">
        <button
          onClick={() => onAssign(url)}
          className="p-2 rounded-md hover:bg-muted transition-colors"
          aria-label={url.assigned ? "Edit URL assignment" : "Assign URL"}
        >
          <Edit size={16} className="text-primary" />
        </button>
        <button
          onClick={() => onDelete(url.id)}
          className="p-2 rounded-md hover:bg-muted transition-colors"
          aria-label="Delete URL"
        >
          <Trash2 size={16} className="text-error" />
        </button>
      </div>
    </div>
  );
  
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Generated URLs</h2>
      
      {/* Card view (Mobile) */}
      {viewMode === 'card' && (
        <div className="space-y-4">
          {urls.map(url => (
            <UrlCard key={url.id} url={url} />
          ))}
        </div>
      )}
      
      {/* Table view (Desktop) */}
      {viewMode === 'table' && (
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border">
              <thead className="bg-muted">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Short URL</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Original URL</th>
                  <th className="px-6 py-4 text-right text-sm font-medium text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {urls.map((url) => (
                  <tr key={url.id} className="hover:bg-muted/40 transition-colors">
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center">
                        <LinkIcon size={14} className="mr-1 text-primary" />
                        <a
                          href={url.shortUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {url.shortUrl.split('//')[1]}
                        </a>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span 
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border
                        ${url.assigned 
                          ? 'bg-success/20 text-success border-success/30' 
                          : 'bg-warning/20 text-warning border-warning/30'}`}
                      >
                        {url.assigned ? 'Assigned' : 'Unassigned'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      <div className="max-w-xs overflow-hidden text-ellipsis">
                        {url.originalUrl || '—'}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-right">
                      <div className="flex justify-end space-x-2">
                        <button
                          onClick={() => onAssign(url)}
                          className="p-2 rounded-md hover:bg-muted transition-colors"
                          aria-label={url.assigned ? "Edit URL assignment" : "Assign URL"}
                        >
                          <Edit size={16} className="text-primary" />
                        </button>
                        <button
                          onClick={() => onDelete(url.id)}
                          className="p-2 rounded-md hover:bg-muted transition-colors"
                          aria-label="Delete URL"
                        >
                          <Trash2 size={16} className="text-error" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
} 