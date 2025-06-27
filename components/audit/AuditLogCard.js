import { Clock, User, Info } from 'lucide-react';
import AuditLogBadge from './AuditLogBadge';

export default function AuditLogCard({ log, formatDateTime }) {
  return (
    <div className="card animate-fade-in">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <User size={16} className="text-muted-foreground mr-2" />
          <span className="font-medium">{log.user}</span>
        </div>
        <AuditLogBadge action={log.action} />
      </div>
      
      <div className="mb-3">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <Clock size={14} className="mr-2" />
          {formatDateTime(log.timestamp)}
        </div>
        <div className="flex items-start mt-2">
          <Info size={16} className="text-muted-foreground mr-2 mt-0.5" />
          <div>
            <p className="text-foreground">{log.description}</p>
            {log.details && (
              <div className="mt-2 text-xs text-muted-foreground">
                <DetailsView details={log.details} action={log.action} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper component to display details based on action type
function DetailsView({ details, action }) {
  if (!details) return null;
  
  switch (action) {
    case 'Create':
      return (
        <>
          <div className="mt-1">Original URL: {details.originalUrl}</div>
          <div className="mt-1">Short URL: {details.shortUrl}</div>
        </>
      );
    case 'Update':
      return (
        <div className="mt-1">
          Changed: {details.changedFields?.join(', ')}
          {details.oldUrl && details.newUrl && (
            <div className="mt-1">
              URL: {details.oldUrl} → {details.newUrl}
            </div>
          )}
          {details.oldStatus && details.newStatus && (
            <div className="mt-1">
              Status: {details.oldStatus} → {details.newStatus}
            </div>
          )}
          {details.oldTag && details.newTag && (
            <div className="mt-1">
              Tag: {details.oldTag} → {details.newTag}
            </div>
          )}
        </div>
      );
    case 'Delete':
      return (
        <div className="mt-1">Link ID: {details.linkId || 'Unknown'}</div>
      );
    default:
      return null;
  }
} 