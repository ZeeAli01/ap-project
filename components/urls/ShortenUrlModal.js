import { useState, useEffect, useRef } from 'react';
import { X, Link as LinkIcon, Calendar, Image } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function ShortenUrlModal({ onSave, onClose }) {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    originalUrl: '',
    urlType: 'product',
    tagId: '',
    logoId: '',
    expirationDate: ''
  });
  const [tags, setTags] = useState([]);
  const [logos, setLogos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingTags, setIsLoadingTags] = useState(false);
  const [isLoadingLogos, setIsLoadingLogos] = useState(false);
  
  const modalRef = useRef(null);
  const inputRef = useRef(null);
  
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    
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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const urlData = {
        userId: user?.user_id,
        originalUrl: formData.originalUrl,
        urlType: formData.urlType,
        tagId: formData.tagId ? parseInt(formData.tagId) : null,
        logoId: formData.logoId ? parseInt(formData.logoId) : null,
        expirationDate: formData.expirationDate || null
      };

      console.log(urlData);

      await onSave(urlData);
    } catch (error) {
      console.error('Error creating URL:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="fixed inset-0 bg-foreground/20 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div 
        ref={modalRef}
        className="bg-card rounded-lg shadow-lg w-full max-w-md animate-in fade-in-50 zoom-in-95"
      >
        <div className="flex justify-between items-center p-6 border-b border-border">
          <h2 className="text-xl font-bold">Shorten URL</h2>
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
              Original URL*
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <LinkIcon size={16} className="text-muted-foreground" />
              </div>
              <input
                ref={inputRef}
                type="url"
                id="originalUrl"
                name="originalUrl"
                value={formData.originalUrl}
                onChange={handleChange}
                placeholder="https://example.com/your-page"
                className="input-field pl-10"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="urlType" className="block text-sm font-medium text-foreground mb-1">
              Type
            </label>
            <select
              id="urlType"
              name="urlType"
              value={formData.urlType}
              onChange={handleChange}
              className="input-field"
            >
              <option value="product">Product</option>
              <option value="store">Store</option>
              <option value="misc">Miscellaneous</option>
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
          
          <div>
            <label htmlFor="expirationDate" className="block text-sm font-medium text-foreground mb-1">
              Expiration Date (Optional)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Calendar size={16} className="text-muted-foreground" />
              </div>
              <input
                type="date"
                id="expirationDate"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleChange}
                className="input-field pl-10"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>
          
          <div className="flex justify-end space-x-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary"
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary"
              disabled={isLoading || !formData.originalUrl}
            >
              {isLoading ? 'Creating...' : 'Shorten URL'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 