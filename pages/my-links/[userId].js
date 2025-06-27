import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import LinksTable from '@/components/links/LinksTable';
import EditLinkModal from '@/components/links/EditLinkModal';
import { useAuth } from '@/context/AuthContext';

export default function MyLinksPage({links,tags}) {
  const { user } = useAuth();
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentLink, setCurrentLink] = useState(null);
  // const [links, setLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [tags, setTags] = useState({});
  
  // useEffect(() => {
  //   const fetchTags = async () => {
  //     if (!user?.user_id) return {};
      
  //     try {
  //       const response = await fetch(`/api/urltags?userId=${user.user_id}`);
  //       if (!response.ok) throw new Error('Failed to fetch tags');
        
  //       const tagsData = await response.json();
  //       const tagsMap = {};
  //       tagsData.forEach(tag => {
  //         tagsMap[tag.tag_id] = tag.tag_name;
  //       });
        
  //       setTags(tagsMap);
  //       return tagsMap;
  //     } catch (error) {
  //       console.error('Error fetching tags:', error);
  //       return {};
  //     }
  //   };
    
  //   const fetchLinks = async (tagsMap) => {
  //     if (!user || !user.user_id) {
  //       setLinks([]);
  //       setIsLoading(false);
  //       return;
  //     }
      
  //     try {
  //       const response = await fetch(`/api/urls?userId=${user.user_id}`);
        
  //       if (!response.ok) {
  //         throw new Error(`Failed to fetch links: ${response.status}`);
  //       }
        
  //       const data = await response.json();
  //       const formattedLinks = data.map(link => ({
  //         id: link.url_id,
  //         originalUrl: link.original_url,
  //         shortUrl: `${window.location.origin}/${link.short_url}`,
  //         status: link.is_deleted ? 'Inactive' : link.status || 'Active',
  //         type: link.url_type || 'Personal',
  //         tagId: link.tag_id,
  //         tag: link.tag_id ? (tagsMap[link.tag_id] || 'Unknown Tag') : 'No Tag',
  //         createdAt: link.created_at,
  //         expiresAt: link.expiration_date,
  //         clicks: link.click_count || 0
  //       }));
        
  //       setLinks(formattedLinks);
  //     } catch (error) {
  //       console.error('Error fetching links:', error);
  //       setLinks([]);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
    
  //   const loadData = async () => {
  //     setIsLoading(true);
  //     const tagsMap = await fetchTags();
  //     await fetchLinks(tagsMap);
  //   };
    
  //   loadData();
  // }, [user]);
  const mylinks = links.filter(link => link.status === 'active');
  const handleEdit = (link) => {
    setCurrentLink(link);
    setShowEditModal(true);
  };
  
  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this link?')) {
      try {
        if (user && user.user_id) {
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
        alert('Failed to delete link. Please try again.');
      }
    }
  };
  
  const handleEditSave = (editedLink) => {
    if (editedLink.tagId && tags[editedLink.tagId]) {
      editedLink.tag = tags[editedLink.tagId];
    } else if (!editedLink.tagId) {
      editedLink.tag = 'No Tag';
    }
    
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
          <p className="text-muted-foreground">
            View and manage all your shortened URLs
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : mylinks.length > 0 ? (
          <LinksTable
            links={mylinks}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ) : (
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <p className="text-muted-foreground mb-4">
              You don&apos;t have any shortened URLs yet.
            </p>
            <Link href="/dashboard" className="btn-primary">
              Create your first short URL
            </Link>
          </div>
        )}
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
export async function getStaticPaths() {  
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
    const {userId} = context.params;
    const tagsResponse = await fetch(`http://localhost:3000/api/urltags?userId=${userId}`);
    const data = await fetch(`http://localhost:3000/api/urls?userId=${userId}`);
    const tagsData = await tagsResponse.json();
    const links = await data.json()
    if (!links) {
      return {
        notFound: true,
      };
    }
     const tagsMap = {};
     tagsData.forEach((tag) => {
       tagsMap[tag.tag_id] = tag.tag_name;
     });
    const formattedLinks = links?.map((link) => ({
      id: link.url_id,
      originalUrl: link.original_url,
      shortUrl: `http://localhost:3000/${link.short_url}`,
      status: link.is_deleted ? "Inactive" : link.status || "Active",
      type: link.url_type || "Personal",
      tagId: link.tag_id,
      tag: link.tag_id ? tagsMap[link.tag_id] || "Unknown Tag" : "No Tag",
      createdAt: link.created_at,
      expiresAt: link.expiration_date,
      clicks: link.click_count || 0,
    }));
    console.log("Links", formattedLinks)
    return {
      props: {
        links: formattedLinks,
        tags: tagsMap,
        revalidate: 3600,
      },
    };
}