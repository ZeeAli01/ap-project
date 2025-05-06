import { useState, useEffect, useRef } from 'react';
import { X, Upload } from 'lucide-react';

export default function EditLinkModal({ link, onSave, onClose }) {
  const [formData, setFormData] = useState({
    id: link.id,
    originalUrl: link.originalUrl,
    expiresAt: formatDateForInput(link.expiresAt),
    status: link.status,
    type: link.type,
    tag: link.tag,
    logo: link.logo
  });
  
  const [logoPreview, setLogoPreview] = useState(null);
  const modalRef = useRef(null);
  
  // Function to format date for the input field
  function formatDateForInput(dateString) {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  }
  
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
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle logo upload
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // In a real app, you'd upload this to your server
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
        setFormData({
          ...formData,
          logo: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...link,
      ...formData,
      expiresAt: new Date(formData.expiresAt).toISOString()
    });
  };
  
  return (
    <div className="fixed inset-0 bg-foreground/20 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div 
        ref={modalRef}
        className="bg-card rounded-lg shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center p-6 border-b border-border">
          <h2 className="text-xl font-bold">Edit Link</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="originalUrl" className="block text-sm font-medium text-foreground mb-1">
              Original URL
            </label>
            <input
              type="url"
              id="originalUrl"
              name="originalUrl"
              value={formData.originalUrl}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>
          
          <div>
            <label htmlFor="expiresAt" className="block text-sm font-medium text-foreground mb-1">
              Expiration Date
            </label>
            <input
              type="date"
              id="expiresAt"
              name="expiresAt"
              value={formData.expiresAt}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-foreground mb-1">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="input-field"
              required
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Expired">Expired</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-foreground mb-1">
              Type
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="input-field"
              required
            >
              <option value="Product">Product</option>
              <option value="Development">Development</option>
              <option value="Marketing">Marketing</option>
              <option value="Documentation">Documentation</option>
              <option value="Education">Education</option>
              <option value="Personal">Personal</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="tag" className="block text-sm font-medium text-foreground mb-1">
              Tag
            </label>
            <input
              type="text"
              id="tag"
              name="tag"
              value={formData.tag}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Logo
            </label>
            <div className="mt-1 flex items-center">
              {(logoPreview || formData.logo) ? (
                <div className="relative w-16 h-16 rounded-md overflow-hidden border border-border">
                  <img 
                    src={logoPreview || formData.logo || '/placeholder-image.png'} 
                    alt="Logo preview" 
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setLogoPreview(null);
                      setFormData({...formData, logo: null});
                    }}
                    className="absolute top-0 right-0 p-1 bg-background/80 rounded-bl-md"
                    aria-label="Remove logo"
                  >
                    <X size={12} />
                  </button>
                </div>
              ) : (
                <label className="cursor-pointer w-16 h-16 rounded-md border-2 border-dashed border-border flex flex-col items-center justify-center hover:border-primary transition-colors">
                  <Upload size={20} className="text-muted-foreground" />
                  <span className="text-xs text-muted-foreground mt-1">Upload</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoChange}
                    className="sr-only"
                  />
                </label>
              )}
            </div>
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
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 