import Head from 'next/head';
import { useState } from 'react';
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
  
  // Handle generating new URLs
  const handleGenerate = async (count) => {
    setIsLoading(true);
    
    try {
      // In a real app, this would call your API
      // Simulated API response
      const newUrls = Array.from({ length: count }, (_, index) => {
        const randomId = Math.random().toString(36).substring(2, 8);
        return {
          id: Date.now() + index,
          shortUrl: `https://shortly.url/${randomId}`,
          shortCode: randomId,
          createdAt: new Date().toISOString(),
          originalUrl: null,
          assigned: false,
          userId: user?.userId || 'user123'
        };
      });
      
      setGeneratedUrls([...generatedUrls, ...newUrls]);
    } catch (error) {
      console.error('Error generating URLs:', error);
      // Handle error state
    } finally {
      setIsLoading(false);
    }
  };
  
  // Handle deleting a URL
  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this URL?')) {
      setGeneratedUrls(generatedUrls.filter(url => url.id !== id));
    }
  };
  
  // Handle opening the assign modal
  const handleAssignModal = (url) => {
    setCurrentUrl(url);
    setShowAssignModal(true);
  };
  
  // Handle assigning a URL
  const handleAssign = (id, originalUrl) => {
    // Update the URL with the original URL
    setGeneratedUrls(generatedUrls.map(url => 
      url.id === id 
        ? { ...url, originalUrl, assigned: true }
        : url
    ));
    
    setShowAssignModal(false);
    setCurrentUrl(null);
    
    // In a real app, this would also update the assigned URL in your database
    // and potentially add it to the user's links collection
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
        
        {generatedUrls.length > 0 && (
          <div className="mt-8">
            <PreGenerateTable 
              urls={generatedUrls} 
              onDelete={handleDelete} 
              onAssign={handleAssignModal} 
            />
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