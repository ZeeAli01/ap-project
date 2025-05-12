import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import PreGenerateForm from '@/components/pre-generate/PreGenerateForm';
import PreGenerateTable from '@/components/pre-generate/PreGenerateTable';
import AssignUrlModal from '@/components/pre-generate/AssignUrlModal';

export default function PreGeneratePage() {
  const { isAuthenticated, user } = useAuth();
  const [generatedUrls, setGeneratedUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(null);

  useEffect(() => {
    if (user?.user_id) {
       const fetchPreGeneratedUrls = async () => {
         try {
           const response = await fetch(
             `/api/urls?userId=${user.user_id}&isPreGenerated=true`
           );
           if (response.ok) {
             const data = await response.json();
             const formattedUrls = data.map((url) => ({
               id: url.url_id,
               shortUrl: `${window.location.origin}/${url.short_url}`,
               shortCode: url.short_url,
               createdAt: url.created_at,
               originalUrl: url.original_url,
               assigned: !!url.original_url,
               userId: url.user_id,
             }));
             setGeneratedUrls(formattedUrls);
           }
         } catch (error) {
           console.error("Error fetching pre-generated URLs:", error);
         }
       };
      fetchPreGeneratedUrls();
    }
  }, [user]);
  
  const handleGenerate = async (count) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/urls/pregenerate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.user_id,
          count: count
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate URLs');
      }
      const data = await response.json();
      const newUrls = data.urls.map(url => ({
        id: url.url_id,
        shortUrl: `${window.location.origin}/${url.short_url}`,
        shortCode: url.short_url,
        createdAt: url.created_at,
        originalUrl: url.original_url,
        assigned: !!url.original_url,
        userId: url.user_id
      }));
      setGeneratedUrls([...newUrls, ...generatedUrls]);
    } catch (error) {
      console.error('Error generating URLs:', error);
      alert('Failed to generate URLs. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this URL?')) {
      try {
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
        
        setGeneratedUrls(generatedUrls.filter(url => url.id !== id));
      } catch (error) {
        console.error('Error deleting URL:', error);
        alert('Failed to delete URL. Please try again.');
      }
    }
  };
  
  const handleAssignModal = (url) => {
    setCurrentUrl(url);
    setShowAssignModal(true);
  };
  
  const handleAssign = async (id, originalUrl) => {
    try {
      const response = await fetch(`/api/urls/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          userId: user.user_id,
          originalUrl: originalUrl
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to assign URL');
      }
      
      const updatedUrl = await response.json();
      setGeneratedUrls(generatedUrls.map(url => 
        url.id === id 
          ? { 
              ...url, 
              originalUrl: updatedUrl.original_url, 
              assigned: !!updatedUrl.original_url 
            }
          : url
      ));
      
      setShowAssignModal(false);
      setCurrentUrl(null);
    } catch (error) {
      console.error('Error assigning URL:', error);
      alert('Failed to assign URL. Please try again.');
    }
  };
  
  return (
    <>
      <Head>
        <title>Pre-Generate URLs - ShortlyURL</title>
        <meta name="description" content="Pre-generate short URLs for future use" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <section className="px-4 md:px-0">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Pre-Generate URLs</h1>
          <p className="text-muted-foreground">Generate short URLs in advance and assign them later</p>
        </div>
        
        <PreGenerateForm onGenerate={handleGenerate} isLoading={isLoading} />
        
        {generatedUrls.length > 0 ? (
          <div className="mt-8">
            <PreGenerateTable 
              urls={generatedUrls} 
              onDelete={handleDelete} 
              onAssign={handleAssignModal} 
            />
          </div>
        ) : !isLoading && (
          <div className="bg-card border border-border rounded-lg p-8 text-center mt-8">
            <p className="text-muted-foreground mb-4">You don&apos;t have any pre-generated URLs yet.</p>
            <button 
              onClick={() => handleGenerate(5)}
              className="btn-primary"
            >
              Generate your first URLs
            </button>
          </div>
        )}
      </section>
      
      {showAssignModal && currentUrl && (
        <AssignUrlModal 
          url={currentUrl} 
          onClose={() => setShowAssignModal(false)} 
          onSave={handleAssign}
        />
      )}
    </>
  );
} 