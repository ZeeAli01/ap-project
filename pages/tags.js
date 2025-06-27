import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Plus, Edit, Trash2, X } from 'lucide-react';

export default function TagsPage() {
  const { user } = useAuth();
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newTagName, setNewTagName] = useState('');
  const [editingTag, setEditingTag] = useState(null);
  const [editTagName, setEditTagName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (user?.user_id) {
      fetchTags();
    }
  }, [user]);

  const fetchTags = async () => {
    try {
      const response = await fetch(`/api/urltags?userId=${user.user_id}`);
      if (response.ok) {
        const data = await response.json();
        setTags(data);
      }
    } catch (error) {
      console.error('Error fetching tags:', error);
      setError('Failed to fetch tags');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateTag = async (e) => {
    e.preventDefault();
    if (!newTagName.trim()) return;

    try {
      const response = await fetch(`/api/urltags?userId=${user.user_id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tag_name: newTagName.trim(),
        }),
      });

      if (response.ok) {
        const newTag = await response.json();
        setTags([newTag, ...tags]);
        setNewTagName('');
        setError('');
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to create tag');
      }
    } catch (error) {
      console.error('Error creating tag:', error);
      setError('Failed to create tag');
    }
  };

  const handleUpdateTag = async (e) => {
    e.preventDefault();
    if (!editTagName.trim() || !editingTag) return;

    try {
      const response = await fetch(`/api/urltags/${editingTag.tag_id}?userId=${user.user_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tag_name: editTagName.trim(),
        }),
      });

      if (response.ok) {
        const updatedTag = await response.json();
        setTags(tags.map(tag => 
          tag.tag_id === editingTag.tag_id ? updatedTag : tag
        ));
        setEditingTag(null);
        setEditTagName('');
        setError('');
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to update tag');
      }
    } catch (error) {
      console.error('Error updating tag:', error);
      setError('Failed to update tag');
    }
  };

  const handleDeleteTag = async (tagId) => {
    if (!confirm('Are you sure you want to delete this tag?')) return;

    try {
      const response = await fetch(`/api/urltags/${tagId}?userId=${user.user_id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setTags(tags.filter(tag => tag.tag_id !== tagId));
        setError('');
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to delete tag');
      }
    } catch (error) {
      console.error('Error deleting tag:', error);
      setError('Failed to delete tag');
    }
  };

  return (
    <>
      <Head>
        <title>Tags - ShortlyURL</title>
        <meta name="description" content="Manage your URL tags" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <section className="px-4 md:px-0">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Tags</h1>
          <p className="text-muted-foreground">Manage your URL tags for better organization</p>
        </div>

        {/* Create Tag Form */}
        <form onSubmit={handleCreateTag} className="mb-8">
          <div className="flex gap-2">
            <input
              type="text"
              value={newTagName}
              onChange={(e) => setNewTagName(e.target.value)}
              placeholder="Enter tag name"
              className="input-field flex-1"
              maxLength={50}
            />
            <button type="submit" className="btn-primary flex items-center">
              <Plus size={16} className="mr-1" />
              Add Tag
            </button>
          </div>
        </form>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-error/10 text-error rounded-md">
            {error}
          </div>
        )}

        {/* Tags List */}
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : tags.length > 0 ? (
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Tag Name</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Created</th>
                    <th className="px-6 py-4 text-right text-sm font-medium text-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {tags.map((tag) => (
                    <tr key={tag.tag_id} className="hover:bg-muted/40 transition-colors">
                      <td className="px-6 py-4 text-sm">
                        {editingTag?.tag_id === tag.tag_id ? (
                          <form onSubmit={handleUpdateTag} className="flex gap-2">
                            <input
                              type="text"
                              value={editTagName}
                              onChange={(e) => setEditTagName(e.target.value)}
                              className="input-field flex-1"
                              maxLength={50}
                              autoFocus
                            />
                            <button type="submit" className="btn-primary">
                              Save
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                setEditingTag(null);
                                setEditTagName('');
                              }}
                              className="btn-secondary"
                            >
                              <X size={16} />
                            </button>
                          </form>
                        ) : (
                          tag.tag_name
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground">
                        {new Date(tag.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-right text-sm font-medium">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => {
                              setEditingTag(tag);
                              setEditTagName(tag.tag_name);
                            }}
                            className="p-2 rounded-md hover:bg-muted transition-colors"
                            title="Edit tag"
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            onClick={() => handleDeleteTag(tag.tag_id)}
                            className="p-2 rounded-md hover:bg-muted transition-colors text-error"
                            title="Delete tag"
                          >
                            <Trash2 size={16} />
                          </button>
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
            <p className="text-muted-foreground mb-4">You don&apos;t have any tags yet.</p>
            <p className="text-sm text-muted-foreground">Create your first tag to start organizing your URLs.</p>
          </div>
        )}
      </section>
    </>
  );
} 