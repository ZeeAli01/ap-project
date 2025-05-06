import { useState, useEffect, useRef } from 'react';
import { X, LinkIcon } from 'lucide-react';

export default function AssignUrlModal({ url, onClose, onSave }) {
  const [originalUrl, setOriginalUrl] = useState(url.originalUrl || '');
  const modalRef = useRef(null);
  const inputRef = useRef(null);
  
  // Focus the input when modal opens
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  
  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (originalUrl.trim()) {
      onSave(url.id, originalUrl.trim());
    }
  };
  
  const isEditing = !!url.originalUrl;
  
  return (
    <div className="fixed inset-0 bg-foreground/20 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div 
        ref={modalRef}
        className="bg-card rounded-lg shadow-lg w-full max-w-md"
      >
        <div className="flex justify-between items-center p-6 border-b border-border">
          <h2 className="text-xl font-bold">
            {isEditing ? 'Edit URL Assignment' : 'Assign URL'}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="mb-4">
            <div className="flex items-center text-sm mb-2 text-muted-foreground">
              <LinkIcon size={14} className="mr-1" />
              <span>Short URL: </span>
              <span className="ml-1 font-medium text-primary">
                {url.shortUrl.split('//')[1]}
              </span>
            </div>
          </div>
          
          <div>
            <label htmlFor="original-url" className="block text-sm font-medium text-foreground mb-1">
              Original URL
            </label>
            <input
              ref={inputRef}
              type="url"
              id="original-url"
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
              placeholder="https://example.com/your-page"
              className="input-field"
              required
            />
          </div>
          
          <div className="pt-4 flex justify-end space-x-2 border-t border-border">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary"
              disabled={!originalUrl.trim()}
            >
              {isEditing ? 'Update' : 'Assign'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 