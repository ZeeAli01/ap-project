import Head from 'next/head';
import { useState } from 'react';
import AuditLogTable from '@/components/audit/AuditLogTable';
import { useAuth } from '@/context/AuthContext';

export default function AuditLogPage() {
  const { isAuthenticated } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  
  const [auditLogs, setAuditLogs] = useState([
    {
      id: 1,
      timestamp: '2025-06-05T00:41:00Z',
      user: 'Mukarram-1',
      action: 'Update',
      description: 'Updated 5GhlXnfR',
      linkId: '5GhlXnfR',
      details: {
        oldUrl: 'https://example.com/old',
        newUrl: 'https://example.com/new',
        changedFields: ['originalUrl', 'expiresAt']
      }
    },
    {
      id: 2,
      timestamp: '2025-06-05T00:41:00Z',
      user: 'Mukarram-1',
      action: 'Update',
      description: 'Updated 5GhlXnfR',
      linkId: '5GhlXnfR',
      details: {
        oldStatus: 'Inactive',
        newStatus: 'Active',
        changedFields: ['status']
      }
    },
    {
      id: 3,
      timestamp: '2025-06-04T15:22:33Z',
      user: 'Admin-User',
      action: 'Create',
      description: 'Created new link 7HjkLm3P',
      linkId: '7HjkLm3P',
      details: {
        originalUrl: 'https://github.com/features',
        shortUrl: 'https://shortly.url/7HjkLm3P'
      }
    },
    {
      id: 4,
      timestamp: '2025-06-03T09:17:45Z',
      user: 'Mukarram-1',
      action: 'Delete',
      description: 'Deleted link 9KtR4sWq',
      linkId: '9KtR4sWq'
    },
    {
      id: 5,
      timestamp: '2025-06-02T14:05:21Z',
      user: 'Sarah-J',
      action: 'Create',
      description: 'Created new link 6MzNp8Vb',
      linkId: '6MzNp8Vb',
      details: {
        originalUrl: 'https://nextjs.org/docs',
        shortUrl: 'https://shortly.url/6MzNp8Vb'
      }
    },
    {
      id: 6,
      timestamp: '2025-06-01T11:32:09Z',
      user: 'Admin-User',
      action: 'Update',
      description: 'Updated 3XcVb7Nm',
      linkId: '3XcVb7Nm',
      details: {
        oldTag: 'marketing',
        newTag: 'promotion',
        changedFields: ['tag']
      }
    },
    {
      id: 7,
      timestamp: '2025-05-30T08:45:37Z',
      user: 'Sarah-J',
      action: 'Create',
      description: 'Created new link 2QwEr5Ty',
      linkId: '2QwEr5Ty',
      details: {
        originalUrl: 'https://example.com/product',
        shortUrl: 'https://shortly.url/2QwEr5Ty'
      }
    },
    {
      id: 8,
      timestamp: '2025-05-29T16:20:15Z',
      user: 'Mukarram-1',
      action: 'Delete',
      description: 'Deleted link 1AsD4fGh',
      linkId: '1AsD4fGh'
    }
  ]);
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = auditLogs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(auditLogs.length / itemsPerPage);
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  return (
    <>
      <Head>
        <title>Audit Log - ShortlyURL</title>
        <meta name="description" content="Track all activities on your shortened URLs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <section className="px-4 md:px-0">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Audit Log</h1>
          <p className="text-muted-foreground">Track all activities and changes to your shortened URLs</p>
        </div>
        
        <AuditLogTable 
          auditLogs={currentItems}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </>
  );
} 