import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Copy, ExternalLink, MoreHorizontal, BarChart, Trash2, Edit, CheckCircle, Plus } from 'lucide-react';
import ShortenUrlModal from '@/components/urls/ShortenUrlModal';
import { useAuth } from '@/context/AuthContext';

export default function Dashboard() {
  const { isAuthenticated, user } = useAuth();
  const [links, setLinks] = useState([]);
  const [copiedId, setCopiedId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
     const fetchLinks = async () => {
       if (!user || !user.user_id) {
         setIsLoading(false);
         return;
       }
      
       setIsLoading(true);
       try {
         const response = await fetch(`/api/urls?userId=${user.user_id}`);

         if (!response.ok) {
           throw new Error("Failed to fetch URLs");
         }

         const data = await response.json();
         const formattedLinks = await Promise.all(data.map(async (link) => {
           let clickCount = 0;
           try {
             const clicksResponse = await fetch(`/api/urlclicks?urlId=${link.url_id}`);
             if (clicksResponse.ok) {
               const clicksData = await clicksResponse.json();
               clickCount = clicksData.pagination?.total || 0;
             }
           } catch (error) {
             console.error(`Error fetching clicks for URL ${link.url_id}:`, error);
           }
           
           return {
             id: link.url_id,
             originalUrl: link.original_url,
             shortUrl: `${window.location.origin}/${link.short_url}`,
             shortCode: link.short_url,
             createdAt: link.created_at,
             clicks: clickCount,
             active: !link.is_deleted,
             urlType: link.url_type,
             tagId: link.tag_id,
             expirationDate: link.expiration_date,
           };
         }));

         setLinks(formattedLinks);
       } catch (error) {
         console.error("Error fetching URLs:", error);
         setLinks([]);
       } finally {
         setIsLoading(false);
       }
     };

     fetchLinks();
  }, [user]);
  
  
  const copyToClipboard = (id, url) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };
  
  const handleCreateUrl = async (urlData) => {
    try {
      const payload = {
        ...urlData,
        userId: user?.user_id
      };
      
      const response = await fetch('/api/urls', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      if (!response.ok) {
        throw new Error('Failed to create URL');
      }
      
      const data = await response.json();
      
      const newLink = {
        id: data.url_id,
        originalUrl: data.original_url,
        shortUrl: `${window.location.origin}/${data.short_url}`,
        shortCode: data.short_url,
        createdAt: data.created_at,
        clicks: 0,
        active: true,
        urlType: data.url_type,
        tagId: data.tag_id,
        expirationDate: data.expiration_date
      };
      
      setLinks([newLink, ...links]);
      setShowModal(false);
    } catch (error) {
      console.error('Error creating URL:', error);
    }
  };
  
  const toggleDropdown = (id) => {
    if (showDropdown === id) {
      setShowDropdown(null);
    } else {
      setShowDropdown(id);
    }
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };
  
  const truncateUrl = (url, maxLength = 40) => {
    if (!url) return 'unassigned';
    if (url.length <= maxLength) return url;
    return url.substring(0, maxLength) + '...';
  };
  
  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this URL?')) {
      try {
        if (isAuthenticated && user?.user_id) {
          const response = await fetch(`/api/urls/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId: user.user_id }),
          });
          
          if (!response.ok) {
            throw new Error('Failed to delete URL');
          }
        }
        
        setLinks(links.filter(link => link.id !== id));
      } catch (error) {
        console.error('Error deleting URL:', error);
      }
    }
  };
  
  return (
    <>
      <Head>
        <title>Dashboard - ShortlyURL</title>
        <meta name="description" content="Manage your shortened URLs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <section className="px-4 md:px-0">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Manage and track all your shortened URLs</p>
          </div>
          
          <button 
            onClick={() => setShowModal(true)}
            className="btn-primary flex items-center"
          >
            <Plus size={16} className="mr-1" />
            Shorten URL
          </button>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Your Links</h2>
          
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : links.length > 0 ? (
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-border">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Original URL</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Short URL</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Created</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Clicks</th>
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
                              href={`/api/urls/redirect/${link.shortCode}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              {link.shortUrl.split('//')[1]}
                            </a>
                            
                            <button
                              onClick={() => copyToClipboard(link.id, link.shortUrl)}
                              className="p-1 rounded-md hover:bg-muted transition-colors"
                              aria-label="Copy to clipboard"
                            >
                              {copiedId === link.id ? (
                                <CheckCircle size={16} className="text-success" />
                              ) : (
                                <Copy size={16} />
                              )}
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-foreground">
                          {formatDate(link.createdAt)}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-foreground">
                          {link.clicks}
                        </td>
                        <td className="px-6 py-4 text-right text-sm font-medium">
                          <div className="relative">
                            <button
                              onClick={() => toggleDropdown(link.id)}
                              className="p-2 rounded-md hover:bg-muted transition-colors"
                            >
                              <MoreHorizontal size={18} />
                            </button>
                            
                            {showDropdown === link.id && (
                              <div className="absolute right-0 mt-2 w-48 py-2 bg-card rounded-md shadow-lg z-10 border border-border">
                                <Link 
                                  href={`/analytics/${link.id}`}
                                  className="flex items-center w-full px-4 py-2 text-sm hover:bg-muted transition-colors"
                                >
                                  <BarChart size={16} className="mr-2" />
                                  View Analytics
                                </Link>
                                <button 
                                  className="flex items-center w-full px-4 py-2 text-sm hover:bg-muted transition-colors"
                                >
                                  <Edit size={16} className="mr-2" />
                                  Edit
                                </button>
                                <button 
                                  onClick={() => handleDelete(link.id)}
                                  className="flex items-center w-full px-4 py-2 text-sm text-error hover:bg-muted transition-colors"
                                >
                                  <Trash2 size={16} className="mr-2" />
                                  Delete
                                </button>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <p className="text-muted-foreground mb-4">You don&apos;t have any shortened URLs yet.</p>
              <button 
                onClick={() => setShowModal(true)}
                className="btn-primary"
              >
                Create your first short URL
              </button>
            </div>
          )}
        </div>
      </section>
      
      {showModal && (
        <ShortenUrlModal 
          onClose={() => setShowModal(false)} 
          onSave={handleCreateUrl}
        />
      )}
    </>
  );
}