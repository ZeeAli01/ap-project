import { useState, useEffect } from 'react';
import { Edit, Trash2, QrCode, ChevronDown, Link as LinkIcon, ExternalLink } from 'lucide-react';
import LinkCard from './LinkCard';

export default function LinksTable({ links, onEdit, onDelete }) {
  const [viewMode, setViewMode] = useState('table');
  const [showDropdown, setShowDropdown] = useState(null);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setViewMode('card');
      } else {
        setViewMode('table');
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const toggleDropdown = (id) => {
    if (showDropdown === id) {
      setShowDropdown(null);
    } else {
      setShowDropdown(id);
    }
  };
  
  const handleActionClick = (e, action, link) => {
    e.stopPropagation();
    
    if (action === 'edit') {
      onEdit(link);
    } else if (action === 'delete') {
      onDelete(link.id);
    } else if (action === 'qr') {
      window.open(`/qrcode/${link.id}`, '_blank');
    }
    
    setShowDropdown(null);
  };
  
  const truncateUrl = (url, maxLength = 40) => {
    if (!url) return 'unassigned';
    if (url.length <= maxLength) return url;
    return url.substring(0, maxLength) + '...';
  };
  
  // Status Badge Component
  const StatusBadge = ({ status }) => {
    const getColor = () => {
      switch (status) {
        case 'Active':
          return 'bg-success/20 text-success border-success/30';
        case 'Inactive':
          return 'bg-warning/20 text-warning border-warning/30';
        case 'Expired':
          return 'bg-error/20 text-error border-error/30';
        default:
          return 'bg-muted text-muted-foreground';
      }
    };
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getColor()}`}>
        {status}
      </span>
    );
  };

  const Tag = ({ text }) => (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-secondary text-foreground">
      {text}
    </span>
  );
  
  const ActionButtons = ({ link }) => (
    <div className="flex justify-end items-center space-x-1">
      <button
        onClick={(e) => handleActionClick(e, 'edit', link)}
        className="p-2 rounded-md hover:bg-muted transition-colors"
        aria-label="Edit link"
      >
        <Edit size={16} />
      </button>
      <button
        onClick={(e) => handleActionClick(e, 'qr', link)}
        className="p-2 rounded-md hover:bg-muted transition-colors"
        aria-label="Generate QR code"
      >
        <QrCode size={16} />
      </button>
      <button
        onClick={(e) => handleActionClick(e, 'delete', link)}
        className="p-2 rounded-md hover:bg-muted transition-colors text-error"
        aria-label="Delete link"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
  
  // Action dropdown for mobile
  const ActionDropdown = ({ link }) => (
    <div className="relative">
      <button
        onClick={() => toggleDropdown(link.id)}
        className="p-2 rounded-md hover:bg-muted transition-colors"
        aria-label="Link actions"
      >
        <ChevronDown size={16} />
      </button>
      
      {showDropdown === link.id && (
        <div className="absolute right-0 mt-2 w-48 py-2 bg-card rounded-md shadow-lg z-10 border border-border">
          <button
            onClick={(e) => handleActionClick(e, 'edit', link)}
            className="flex items-center w-full px-4 py-2 text-sm hover:bg-muted transition-colors"
          >
            <Edit size={16} className="mr-2" />
            Edit
          </button>
          <button
            onClick={(e) => handleActionClick(e, 'qr', link)}
            className="flex items-center w-full px-4 py-2 text-sm hover:bg-muted transition-colors"
          >
            <QrCode size={16} className="mr-2" />
            QR Code
          </button>
          <button
            onClick={(e) => handleActionClick(e, 'delete', link)}
            className="flex items-center w-full px-4 py-2 text-sm text-error hover:bg-muted transition-colors"
          >
            <Trash2 size={16} className="mr-2" />
            Delete
          </button>
        </div>
      )}
    </div>
  );
  
  return (
    <>
      {/* Card view (Mobile) */}
      {viewMode === 'card' && (
        <div className="space-y-4">
          {links.map(link => (
            <LinkCard 
              key={link.id} 
              link={link} 
              onEdit={() => onEdit(link)}
              onDelete={() => onDelete(link.id)}
              StatusBadge={StatusBadge}
              Tag={Tag}
            />
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
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Original</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Short</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Type</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Tag</th>
                  <th className="px-6 py-4 text-right text-sm font-medium text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {links.map((link) => (
                  <tr key={link.id} className="hover:bg-muted/40 transition-colors">
                    <td className="px-6 py-4 text-sm">
                      <a 
                        href={link.originalUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors flex items-center"
                      >
                        {truncateUrl(link.originalUrl)}
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <a
                          href={link.shortUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline flex items-center"
                        >
                          <LinkIcon size={14} className="mr-1" />
                          {link.shortUrl.split('//')[1]}
                        </a>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <StatusBadge status={link.status} />
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {link.type}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <Tag text={link.tag} />
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <ActionButtons link={link} />
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