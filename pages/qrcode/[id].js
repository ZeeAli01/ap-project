import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { ArrowLeft, Download, Settings } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function QRCodePage() {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();
  const [link, setLink] = useState(null);
  const [qrSize, setQrSize] = useState(200);
  const [showSettings, setShowSettings] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchLink = async () => {
      if (!id || !user?.user_id) return;
      
      try {
        setIsLoading(true);
        const response = await fetch(`/api/urls/${id}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch URL: ${response.status}`);
        }
        
        const data = await response.json();
        
        const formattedLink = {
          id: data.url_id,
          originalUrl: data.original_url,
          shortUrl: `${window.location.origin}/${data.short_url}`,
          status: data.is_deleted ? 'Inactive' : data.status || 'Active',
          type: data.url_type || 'Product',
          tag: data.tag_id ? `Tag ${data.tag_id}` : 'No Tag'
        };
        
        setLink(formattedLink);
        setError(null);
      } catch (err) {
        console.error('Error fetching URL:', err);
        setError('Failed to load URL data. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchLink();
  }, [id, user]);
  
  const getQRCodeUrl = () => {
    if (!link) return '';
    const encodedUrl = encodeURIComponent(link.shortUrl);
    return `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodedUrl}`;
  };
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading QR code...</p>
        </div>
      </div>
    );
  }
  
  if (error || !link) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="text-center">
          <p className="text-error mb-4">{error || 'URL not found'}</p>
          <Link href="/my-links" className="btn-primary">
            Back to My Links
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <Head>
        <title>QR Code for {link.shortUrl.split('//')[1]} - ShortlyURL</title>
        <meta name="description" content={`QR code for your shortened URL ${link.shortUrl.split('//')[1]}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <section className="px-4 md:px-0">
        <div className="mb-6">
          <div className="flex items-center">
            <Link href="/my-links" className="mr-2 p-2 rounded-md hover:bg-muted transition-colors">
              <ArrowLeft size={20} />
            </Link>
            <h1 className="text-2xl font-bold">QR Code</h1>
          </div>
          <p className="text-muted-foreground mt-2">Scan to visit {link.shortUrl.split('//')[1]}</p>
        </div>
        
        <div className="card mb-8">
          <div className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-md mb-4">
              <img 
                src={getQRCodeUrl()} 
                alt={`QR code for ${link.shortUrl}`} 
                className="max-w-full"
                onError={() => setError('Failed to generate QR code. Please try again.')}
              />
            </div>
            
            <div className="mb-4 text-center">
              <p className="text-sm text-muted-foreground mb-1">Original URL:</p>
              <p className="font-medium">{link.originalUrl}</p>
              <p className="text-sm text-muted-foreground mt-3 mb-1">Short URL:</p>
              <p className="text-primary font-medium">{link.shortUrl}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 