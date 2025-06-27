import { Calendar, Link as LinkIcon, ExternalLink, Edit, Trash2, QrCode } from 'lucide-react';

export default function LinkCard({ link, onEdit, onDelete, StatusBadge, Tag }) {
  const truncateUrl = (url, maxLength = 30) => {
    if (url.length <= maxLength) return url;
    return url.substring(0, maxLength) + '...';
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };
  
  return (
    <div className="card animate-fade-in">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1 mr-2">
          <a 
            href={link.originalUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-medium text-foreground hover:text-primary transition-colors flex items-center mb-1"
          >
            {truncateUrl(link.originalUrl)}
            <ExternalLink size={14} className="ml-1 flex-shrink-0" />
          </a>
          
          <div className="flex items-center mt-2">
            <a
              href={link.shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm flex items-center"
            >
              <LinkIcon size={14} className="mr-1" />
              {link.shortUrl.split('//')[1]}
            </a>
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-3">
        <StatusBadge status={link.status} />
        <div className="text-sm">{link.type}</div>
        <Tag text={link.tag} />
      </div>
      
      <div className="flex justify-between items-center text-sm text-muted-foreground mt-4 pt-3 border-t border-border">
        <div className="flex items-center">
          <Calendar size={14} className="mr-1" />
          {formatDate(link.expiresAt)}
        </div>
        
        <div className="flex space-x-1">
          <button
            onClick={onEdit}
            className="p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="Edit link"
          >
            <Edit size={16} />
          </button>
          <button
            onClick={() => window.open(`/qrcode/${link.id}`, '_blank')}
            className="p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="Generate QR code"
          >
            <QrCode size={16} />
          </button>
          <button
            onClick={onDelete}
            className="p-2 rounded-md hover:bg-muted transition-colors text-error"
            aria-label="Delete link"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
} 