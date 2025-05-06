import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { ArrowLeft, Download, Settings } from 'lucide-react';
import Link from 'next/link';

export default function QRCodePage() {
  const router = useRouter();
  const { id } = router.query;
  const [link, setLink] = useState(null);
  const [qrSize, setQrSize] = useState(200);
  const [showSettings, setShowSettings] = useState(false);
  
  // In a real app, fetch the link data from your API
  useEffect(() => {
    if (id) {
      // Simulating API call
      const mockLinks = [
        {
          id: 1,
          originalUrl: 'https://www.ziprecruiter.com/partner/documentation/#candidate-delivery',
          shortUrl: 'https://shortly.url/job421',
          status: 'Active',
          type: 'Product',
          tag: 'web',
        },
        {
          id: 2,
          originalUrl: 'https://github.com/features/copilot',
          shortUrl: 'https://shortly.url/ai123',
          status: 'Active',
          type: 'Development',
          tag: 'tools',
        },
        {
          id: 3,
          originalUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          shortUrl: 'https://shortly.url/jsdev',
          status: 'Inactive',
          type: 'Education',
          tag: 'docs',
        },
        {
          id: 4,
          originalUrl: 'https://tailwindcss.com/docs/installation',
          shortUrl: 'https://shortly.url/twcss',
          status: 'Active',
          type: 'Development',
          tag: 'css',
        },
        {
          id: 5,
          originalUrl: 'https://nextjs.org/docs/app/building-your-application/routing',
          shortUrl: 'https://shortly.url/nxtrg',
          status: 'Active',
          type: 'Documentation',
          tag: 'framework',
        }
      ];
      
      const foundLink = mockLinks.find(l => l.id.toString() === id.toString());
      setLink(foundLink || null);
    }
  }, [id]);
  
  // Generate QR code URL using a free API
  const getQRCodeUrl = () => {
    if (!link) return '';
    const encodedUrl = encodeURIComponent(link.shortUrl);
    return `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodedUrl}`;
  };
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = getQRCodeUrl();
    link.download = `qrcode-${id}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const handleSizeChange = (e) => {
    setQrSize(parseInt(e.target.value, 10));
  };
  
  if (!link) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="text-center">
          <p className="text-muted-foreground">Loading QR code...</p>
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
              />
            </div>
            
            <div className="mb-4 text-center">
              <p className="text-sm text-muted-foreground mb-1">Original URL:</p>
              <p className="font-medium">{link.originalUrl}</p>
              <p className="text-sm text-muted-foreground mt-3 mb-1">Short URL:</p>
              <p className="text-primary font-medium">{link.shortUrl}</p>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center mt-2">
              <button
                onClick={handleDownload}
                className="btn-primary flex items-center"
              >
                <Download size={16} className="mr-1" />
                Download
              </button>
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="btn-secondary flex items-center"
              >
                <Settings size={16} className="mr-1" />
                Settings
              </button>
            </div>
            
            {showSettings && (
              <div className="mt-4 w-full max-w-xs">
                <label className="block text-sm font-medium text-foreground mb-1">
                  QR Code Size
                </label>
                <input
                  type="range"
                  min="100"
                  max="500"
                  step="10"
                  value={qrSize}
                  onChange={handleSizeChange}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Small</span>
                  <span>{qrSize}px</span>
                  <span>Large</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
} 