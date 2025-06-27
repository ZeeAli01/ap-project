import { Plus, Edit, Trash, Eye } from 'lucide-react';

export default function AuditLogBadge({ action }) {
  const getStyle = () => {
    switch (action) {
      case 'Create':
        return {
          bg: 'bg-success/20',
          text: 'text-success',
          border: 'border-success/30',
          icon: <Plus size={12} className="mr-1" />
        };
      case 'Update':
        return {
          bg: 'bg-primary/20',
          text: 'text-primary',
          border: 'border-primary/30',
          icon: <Edit size={12} className="mr-1" />
        };
      case 'Delete':
        return {
          bg: 'bg-error/20',
          text: 'text-error',
          border: 'border-error/30',
          icon: <Trash size={12} className="mr-1" />
        };
      case 'View':
        return {
          bg: 'bg-warning/20',
          text: 'text-warning',
          border: 'border-warning/30',
          icon: <Eye size={12} className="mr-1" />
        };
      default:
        return {
          bg: 'bg-muted',
          text: 'text-muted-foreground',
          border: 'border-border',
          icon: null
        };
    }
  };
  
  const { bg, text, border, icon } = getStyle();
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${bg} ${text} ${border}`}>
      {icon}
      {action}
    </span>
  );
} 