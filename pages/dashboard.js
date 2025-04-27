import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { Copy, ExternalLink, MoreHorizontal, BarChart, Trash2, Edit, CheckCircle } from 'lucide-react';

export default function Dashboard() {
  const [links, setLinks] = useState([
    {
      id: 1,
      originalUrl: 'https://example.com/very/long/url/that/needs/to/be/shortened/for/better/sharing/on/social/media',
      shortUrl: 'https://shortly.url/abc123',
      createdAt: '2023-08-15T14:30:00Z',
      clicks: 256,
      active: true
    },
    {
      id: 2,
      originalUrl: 'https://anotherexample.com/blog/article/12345',
      shortUrl: 'https://shortly.url/def456',
      createdAt: '2023-08-14T09:15:00Z',
      clicks: 127,
      active: true
    },
    {
      id: 3,
      originalUrl: 'https://website.com/products/featured',
      shortUrl: 'https://shortly.url/ghi789',
      createdAt: '2023-08-10T11:45:00Z',
      clicks: 543,
      active: true
    }
  ]);
  
  const [copiedId, setCopiedId] = useState(null);
  const [newUrl, setNewUrl] = useState('');
  const [showDropdown, setShowDropdown] = useState(null);
  
  const copyToClipboard = (id, url) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!newUrl) return;
    
    // In a real app, this would call your API
    const newLink = {
      id: links.length + 1,
      originalUrl: newUrl,
      shortUrl: `https://shortly.url/${Math.random().toString(36).substring(2, 8)}`,
      createdAt: new Date().toISOString(),
      clicks: 0,
      active: true
    };
    
    setLinks([newLink, ...links]);
    setNewUrl('');
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
    if (url.length <= maxLength) return url;
    return url.substring(0, maxLength) + '...';
  };
  
  return (
    <>
      <Head>
        <title>Dashboard - ShortlyURL</title>
        <meta name="description" content="Manage your shortened URLs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <section>
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Manage and track all your shortened URLs</p>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-xl font-bold mb-4">Create a New Short URL</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="url-input-container">
              <input
                type="url"
                placeholder="Enter a long URL to shorten"
                className="url-input"
                value={newUrl}
                onChange={(e) => setNewUrl(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className="shorten-button"
              >
                Shorten URL
              </button>
            </div>
          </form>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Your Links</h2>
          
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
                            href={link.shortUrl}
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
        </div>
      </section>
    </>
  );
}