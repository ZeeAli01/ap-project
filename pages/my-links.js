import Head from 'next/head';
import { useState } from 'react';
import LinksTable from '@/components/links/LinksTable';
import EditLinkModal from '@/components/links/EditLinkModal';
import { useAuth } from '@/context/AuthContext';

export default function MyLinksPage() {
  const { isAuthenticated } = useAuth();
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentLink, setCurrentLink] = useState(null);
  
  // Dummy data for links
  const [links, setLinks] = useState([
    {
      id: 1,
      originalUrl: 'https://www.ziprecruiter.com/partner/documentation/#candidate-delivery',
      shortUrl: 'https://shortly.url/job421',
      status: 'Active',
      type: 'Product',
      tag: 'web',
      createdAt: '2023-08-15T14:30:00Z',
      expiresAt: '2024-08-15T14:30:00Z',
      logo: null,
      clicks: 126
    },
    {
      id: 2,
      originalUrl: 'https://github.com/features/copilot',
      shortUrl: 'https://shortly.url/ai123',
      status: 'Active',
      type: 'Development',
      tag: 'tools',
      createdAt: '2023-09-10T09:15:00Z',
      expiresAt: '2024-09-10T09:15:00Z',
      logo: null,
      clicks: 342
    },
    {
      id: 3,
      originalUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      shortUrl: 'https://shortly.url/jsdev',
      status: 'Inactive',
      type: 'Education',
      tag: 'docs',
      createdAt: '2023-07-22T11:45:00Z',
      expiresAt: '2024-01-22T11:45:00Z',
      logo: null,
      clicks: 89
    },
    {
      id: 4,
      originalUrl: 'https://tailwindcss.com/docs/installation',
      shortUrl: 'https://shortly.url/twcss',
      status: 'Active',
      type: 'Development',
      tag: 'css',
      createdAt: '2023-10-05T16:20:00Z',
      expiresAt: '2024-10-05T16:20:00Z',
      logo: null,
      clicks: 211
    },
    {
      id: 5,
      originalUrl: 'https://nextjs.org/docs/app/building-your-application/routing',
      shortUrl: 'https://shortly.url/nxtrg',
      status: 'Active',
      type: 'Documentation',
      tag: 'framework',
      createdAt: '2023-11-12T13:10:00Z',
      expiresAt: '2024-11-12T13:10:00Z',
      logo: null,
      clicks: 175
    }
  ]);
  
  const handleEdit = (link) => {
    setCurrentLink(link);
    setShowEditModal(true);
  };
  
  const handleDelete = (id) => {
    // In a real app, this would call your API
    if (confirm('Are you sure you want to delete this link?')) {
      setLinks(links.filter(link => link.id !== id));
    }
  };
  
  const handleEditSave = (editedLink) => {
    // In a real app, this would call your API
    setLinks(links.map(link => link.id === editedLink.id ? editedLink : link));
    setShowEditModal(false);
  };
  
  const handleModalClose = () => {
    setShowEditModal(false);
    setCurrentLink(null);
  };
  
  return (
    <>
      <Head>
        <title>My Links - ShortlyURL</title>
        <meta name="description" content="Manage your shortened URLs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <section className="px-4 md:px-0">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Links</h1>
          <p className="text-muted-foreground">View and manage all your shortened URLs</p>
        </div>
        
        <LinksTable 
          links={links} 
          onEdit={handleEdit} 
          onDelete={handleDelete} 
        />
      </section>
      
      {showEditModal && (
        <EditLinkModal 
          link={currentLink} 
          onSave={handleEditSave} 
          onClose={handleModalClose} 
        />
      )}
    </>
  );
} 