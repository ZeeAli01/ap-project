import { useState, useEffect, useRef } from 'react';
import { X, Upload, Image } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

// Define valid enum values based on Prisma schema
const URL_TYPES = {
  PRODUCT: 'product',
  STORE: 'store',
  MISC: 'misc'
};

const STATUS_TYPES = {
  ACTIVE: 'active',
  INACTIVE: 'inactive'
};

export default function EditLinkModal({ link, onSave, onClose }) {
  const { user } = useAuth();
  
  // Ensure the type is one of the valid enum values
  const getValidUrlType = (type) => {
    if (!type) return URL_TYPES.PRODUCT;
    
    // Convert to lowercase for case-insensitive comparison
    const lowerType = type.toLowerCase();
    
    // Check if it's one of our valid enum values
    if (Object.values(URL_TYPES).includes(lowerType)) {
      return lowerType;
    }
    
    // Default to 'product' if not valid
    return URL_TYPES.PRODUCT;
  };
  
  const [formData, setFormData] = useState({
    id: link.id,
    originalUrl: link.originalUrl || '',
    expiresAt: formatDateForInput(link.expiresAt),
    status: link.status?.toLowerCase() === STATUS_TYPES.INACTIVE ? STATUS_TYPES.INACTIVE : STATUS_TYPES.ACTIVE,
    type: getValidUrlType(link.type),
    tagId: link.tagId || '',
    logoId: link.logoId || ''
  });
  
  const [tags, setTags] = useState([]);
  const [logos, setLogos] = useState([]);
  const [isLoadingTags, setIsLoadingTags] = useState(false);
  const [isLoadingLogos, setIsLoadingLogos] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const modalRef = useRef(null);
  
  // Function to format date for the input field
  function formatDateForInput(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  }
  
  // Fetch tags and logos when component mounts
  useEffect(() => {
    if (user?.user_id) {
      fetchTags();
      fetchLogos();
    }
  }, [user]);
  
  const fetchTags = async () => {
    try {
      setIsLoadingTags(true);
      const response = await fetch(`/api/urltags?userId=${user.user_id}`);

      if (!response.ok) {
        throw new Error("Failed to fetch tags");
      }

      const data = await response.json();
      setTags(data);
    } catch (error) {
      console.error("Error fetching tags:", error);
    } finally {
      setIsLoadingTags(false);
    }
  };
  
  const fetchLogos = async () => {
    try {
      setIsLoadingLogos(true);
      const response = await fetch(`/api/logos?userId=${user.user_id}`);
      
      if (!response.ok) {
        throw new Error("Failed to fetch logos");
      }
      
      const data = await response.json();
      if (data.success && data.data) {
        setLogos(data.data);
      }
    } catch (error) {
      console.error("Error fetching logos:", error);
    } finally {
      setIsLoadingLogos(false);
    }
  };
  
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Ensure we're using a valid enum value for urlType
      const urlType = getValidUrlType(formData.type);
      
      // Prepare data for API
      const updateData = {
        userId: user.user_id,
        originalUrl: formData.originalUrl,
        tagId: formData.tagId ? parseInt(formData.tagId) : null,
        logoId: formData.logoId ? parseInt(formData.logoId) : null,
        urlType: urlType, // Use validated enum value
        status: formData.status,
        expirationDate: formData.expiresAt ? new Date(formData.expiresAt).toISOString() : null
      };
      
      console.log('Updating URL with data:', updateData);
      
      // Call the API to update the link
      const response = await fetch(`/api/urls/${link.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update URL');
      }
      
      const updatedUrl = await response.json();
      
      // Format the response for the UI
      const formattedLink = {
        ...link,
        originalUrl: updatedUrl.original_url,
        tagId: updatedUrl.tag_id,
        logoId: updatedUrl.logo_id,
        type: updatedUrl.url_type || urlType,
        status: updatedUrl.status || formData.status,
        expiresAt: updatedUrl.expiration_date
      };
      
      // Call the onSave callback with the updated link
      onSave(formattedLink);
    } catch (error) {
      console.error('Error updating URL:', error);
      alert(error.message || 'Failed to update URL');
    } finally {
      setIsSubmitting(false);
    }
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
              <option value={STATUS_TYPES.ACTIVE}>Active</option>
              <option value={STATUS_TYPES.INACTIVE}>Inactive</option>
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
              <option value={URL_TYPES.PRODUCT}>Product</option>
              <option value={URL_TYPES.STORE}>Store</option>
              <option value={URL_TYPES.MISC}>Miscellaneous</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="tagId" className="block text-sm font-medium text-foreground mb-1">
              Tag
            </label>
            <select
              id="tagId"
              name="tagId"
              value={formData.tagId}
              onChange={handleChange}
              className="input-field"
              disabled={isLoadingTags}
            >
              <option value="">No Tag</option>
              {tags.map((tag) => (
                <option key={tag.tag_id} value={tag.tag_id}>
                  {tag.tag_name}
                </option>
              ))}
            </select>
            {isLoadingTags && (
              <div className="text-xs text-muted-foreground mt-1">Loading tags...</div>
            )}
          </div>
          
          <div>
            <label htmlFor="logoId" className="block text-sm font-medium text-foreground mb-1">
              Logo
            </label>
            {isLoadingLogos ? (
              <div className="text-xs text-muted-foreground mt-1">Loading logos...</div>
            ) : logos.length > 0 ? (
              <div>
                <div className="grid grid-cols-3 gap-2 mb-2">
                  {logos.map((logo) => (
                    <div 
                      key={logo.logo_id} 
                      onClick={() => handleChange({
                        target: { name: 'logoId', value: logo.logo_id.toString() }
                      })}
                      className={`cursor-pointer border rounded-md p-1 transition-all ${
                        formData.logoId === logo.logo_id.toString() 
                          ? 'border-primary ring-1 ring-primary' 
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="aspect-square bg-muted rounded-md overflow-hidden">
                        <img 
                          src={logo.logo_path} 
                          alt={`Logo ${new Date(logo.created_at).toLocaleDateString()}`}
                          className="w-full h-full object-contain p-1"
                        />
                      </div>
                    </div>
                  ))}
                  <div 
                    onClick={() => handleChange({
                      target: { name: 'logoId', value: '' }
                    })}
                    className={`cursor-pointer border rounded-md p-1 transition-all flex items-center justify-center ${
                      !formData.logoId 
                        ? 'border-primary ring-1 ring-primary' 
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="text-xs text-center text-muted-foreground">
                      No Logo
                    </div>
                  </div>
                </div>
                
                {formData.logoId && (
                  <div className="mt-2 p-2 border border-border rounded-md">
                    <div className="flex items-center">
                      <div className="w-12 h-12 mr-3 bg-muted rounded-md overflow-hidden">
                        <img 
                          src={logos.find(logo => logo.logo_id.toString() === formData.logoId)?.logo_path} 
                          alt="Selected logo"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Selected logo
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                <div className="flex items-center">
                  <Image size={16} className="text-muted-foreground mr-2" />
                  <span className="text-sm text-muted-foreground">No logos available</span>
                </div>
                <a href="/logos" className="text-xs text-primary hover:underline">
                  Upload logos
                </a>
              </div>
            )}
          </div>
          
          <div className="pt-4 flex justify-end space-x-2 border-t border-border">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 