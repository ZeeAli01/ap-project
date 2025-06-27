import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { useAuth } from '@/context/AuthContext';
import { Upload, Trash2, AlertCircle, Loader2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';

export default function LogosPage() {
  const { user } = useAuth();
  const [logos, setLogos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (user?.user_id) {
      fetchLogos();
    }
  }, [user]);

  const fetchLogos = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch(`/api/logos?userId=${user.user_id}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch logos');
      }
      
      const data = await response.json();
      if (data.success && data.data) {
        setLogos(data.data);
      } else {
        setLogos([]);
      }
    } catch (error) {
      console.error('Error fetching logos:', error);
      setError('Failed to load logos. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    // file type
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file.');
      return;
    }
    
    // file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      setError('Image size should be less than 2MB.');
      return;
    }
    
    try {
      setIsUploading(true);
      setError(null);
      
      const formData = new FormData();
      formData.append('logo', file);
      formData.append('userId', user.user_id);
      
      const response = await fetch('/api/logos', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to upload logo');
      }
      
      await fetchLogos();
      
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Error uploading logo:', error);
      setError(error.message || 'Failed to upload logo. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (logoId) => {
    if (!confirm('Are you sure you want to delete this logo?')) {
      return;
    }
    
    try {
      const response = await fetch(`/api/logos/${logoId}?userId=${user.user_id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete logo');
      }
      
      setLogos(logos.filter(logo => logo.logo_id !== logoId));
    } catch (error) {
      console.error('Error deleting logo:', error);
      setError('Failed to delete logo. Please try again.');
    }
  };

  return (
    <>
      <Head>
        <title>Manage Logos | URL Shortener</title>
      </Head>

      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Manage Logos</h1>

          <div className="relative">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="sr-only"
              id="logo-upload"
              disabled={isUploading}
            />
            <label
              htmlFor="logo-upload"
              className={`btn-primary flex items-center gap-2 ${
                isUploading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isUploading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Uploading...</span>
                </>
              ) : (
                <>
                  <Upload size={16} />
                  <span>Upload Logo</span>
                </>
              )}
            </label>
          </div>
        </div>

        {error && (
          <div className="bg-destructive/10 text-destructive p-4 rounded-md mb-6 flex items-center gap-2">
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 size={24} className="animate-spin text-primary" />
          </div>
        ) : logos.length === 0 ? (
          <div className="bg-muted/50 rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Upload size={24} className="text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-2">No logos yet</h3>
            <p className="text-muted-foreground mb-4">
              Upload your first logo to use with your shortened URLs
            </p>
            <label
              htmlFor="logo-upload"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Upload size={16} />
              <span>Upload Logo</span>
            </label>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {logos.map((logo) => (
              <div
                key={logo.logo_id}
                className="bg-card border border-border rounded-lg overflow-hidden"
              >
                <div className="aspect-square bg-muted relative">
                  <img
                    src={logo.logo_path}
                    alt={`Logo ${logo.logo_id}`}
                    className="w-full h-full object-contain p-2"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      {new Date(logo.created_at).toLocaleDateString()}
                    </div>
                    <button
                      onClick={() => handleDelete(logo.logo_id)}
                      className="p-1.5 text-muted-foreground hover:text-destructive rounded-md hover:bg-destructive/10 transition-colors"
                      aria-label="Delete logo"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
} 