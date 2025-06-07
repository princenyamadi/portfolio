import React, { useState, useEffect } from 'react';
import { 
  PlusIcon, 
  PencilIcon, 
  TrashIcon, 
  EyeIcon,
  CalendarIcon,
  TagIcon,
  ClockIcon,
  BookOpenIcon,
  CheckIcon
} from '@heroicons/react/24/outline';
import { CMSService, CMSBlogPost, BlogCategory } from '../../services/cmsService';
import { Timestamp } from 'firebase/firestore';
import { ImageUpload } from '../ui/ImageUpload';
import { RichTextEditor } from '../ui/RichTextEditor';
import { cn } from '../../utils/cn';

export const BlogAdmin: React.FC = () => {
  const [posts, setPosts] = useState<CMSBlogPost[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingPost, setEditingPost] = useState<CMSBlogPost | null>(null);
  const [filter, setFilter] = useState<'all' | 'published' | 'draft'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const [formData, setFormData] = useState<Partial<CMSBlogPost>>({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    coverImageUrl: '',
    author: 'Prince Nyamadi',
    category: '',
    tags: [],
    featured: false,
    published: false,
    readTime: 0,
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setIsLoading(true);
      const [postsData, categoriesData] = await Promise.all([
        CMSService.getBlogPosts(false), // Get all posts including drafts
        CMSService.getBlogCategories(),
      ]);
      setPosts(postsData);
      setCategories(categoriesData);
    } catch (error) {
      console.error('Error loading blog data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: keyof CMSBlogPost, value: any) => {
    setFormData(prev => {
      const updates = { ...prev, [field]: value };
      
      // Auto-generate slug from title
      if (field === 'title' && value) {
        updates.slug = CMSService.generateSlug(value);
      }
      
      // Auto-calculate reading time from content
      if (field === 'content' && value) {
        updates.readTime = CMSService.calculateReadingTime(value);
      }
      
      return updates;
    });
  };

  const handleTagInput = (value: string) => {
    const tags = value.split(',').map(tag => tag.trim()).filter(tag => tag);
    handleInputChange('tags', tags);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const postData = {
        ...formData,
        publishedAt: formData.published ? Timestamp.now() : undefined,
      } as Omit<CMSBlogPost, 'id' | 'createdAt' | 'updatedAt'>;

      if (editingPost) {
        await CMSService.updateBlogPost(editingPost.id!, postData);
      } else {
        await CMSService.createBlogPost(postData);
      }
      
      await loadData();
      resetForm();
    } catch (error) {
      console.error('Error saving blog post:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      try {
        await CMSService.deleteBlogPost(id);
        await loadData();
      } catch (error) {
        console.error('Error deleting blog post:', error);
      }
    }
  };

  const handlePublishToggle = async (post: CMSBlogPost) => {
    try {
      await CMSService.updateBlogPost(post.id!, {
        published: !post.published,
        publishedAt: !post.published ? Timestamp.now() : undefined,
      });
      await loadData();
    } catch (error) {
      console.error('Error updating blog post:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      coverImageUrl: '',
      author: 'Prince Nyamadi',
      category: '',
      tags: [],
      featured: false,
      published: false,
      readTime: 0,
    });
    setEditingPost(null);
    setShowModal(false);
  };

  const startEdit = (post: CMSBlogPost) => {
    setFormData(post);
    setEditingPost(post);
    setShowModal(true);
  };

  const handleAutoSave = async (content: string) => {
    if (!editingPost || !content) return;
    
    try {
      const updatedData = { ...formData, content };
      await CMSService.updateBlogPost(editingPost.id!, updatedData);
      setFormData(updatedData);
    } catch (error) {
      console.error('Auto-save failed:', error);
      throw error; // Re-throw to let RichTextEditor handle the error display
    }
  };

  const handleImageUpload = async (file: File): Promise<string> => {
    try {
      // Generate unique filename for blog images
      const timestamp = Date.now();
      const extension = file.name.split('.').pop();
      const filename = `${timestamp}-${Math.random().toString(36).substr(2, 9)}.${extension}`;
      const path = `blog/content-images/${filename}`;
      
      // Upload using CMSService
      const imageUrl = await CMSService.uploadFile(file, path);
      return imageUrl;
    } catch (error) {
      console.error('Image upload failed:', error);
      throw error;
    }
  };

  const filteredPosts = posts.filter(post => {
    const matchesFilter = filter === 'all' || 
      (filter === 'published' && post.published) ||
      (filter === 'draft' && !post.published);
    
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <BookOpenIcon className="h-6 w-6" />
            Blog Management
          </h1>
          <p className="text-gray-600 mt-1">Manage your blog posts and content</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors gap-2"
        >
          <PlusIcon className="h-4 w-4" />
          New Post
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex gap-2">
          {(['all', 'published', 'draft'] as const).map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={cn(
                "px-3 py-1 rounded-full text-sm font-medium transition-colors",
                filter === filterOption
                  ? "bg-blue-100 text-blue-700"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
            >
              {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
              <span className="ml-1 text-xs">
                ({filterOption === 'all' ? posts.length : 
                  filterOption === 'published' ? posts.filter(p => p.published).length :
                  posts.filter(p => !p.published).length})
              </span>
            </button>
          ))}
        </div>
        <div className="flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {/* Cover Image */}
            {post.coverImageUrl && (
              <div className="aspect-video bg-gray-100">
                <img 
                  src={post.coverImageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            {/* Content */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">{post.excerpt}</p>
                </div>
                <div className={cn(
                  "ml-2 px-2 py-1 rounded text-xs font-medium",
                  post.published 
                    ? "bg-green-100 text-green-700" 
                    : "bg-yellow-100 text-yellow-700"
                )}>
                  {post.published ? 'Published' : 'Draft'}
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <CalendarIcon className="h-3 w-3" />
                  {new Date(post.createdAt.toDate()).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <ClockIcon className="h-3 w-3" />
                  {post.readTime}min read
                </div>
                <div className="flex items-center gap-1">
                  <TagIcon className="h-3 w-3" />
                  {post.tags.length} tags
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-3">
                {post.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                    {tag}
                  </span>
                ))}
                {post.tags.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                    +{post.tags.length - 3} more
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  <button
                    onClick={() => handlePublishToggle(post)}
                    className={cn(
                      "p-1 rounded hover:bg-gray-100 transition-colors",
                      post.published ? "text-green-600" : "text-yellow-600"
                    )}
                    title={post.published ? "Unpublish" : "Publish"}
                  >
                    {post.published ? <CheckIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                  </button>
                  <button
                    onClick={() => startEdit(post)}
                    className="p-1 rounded hover:bg-gray-100 transition-colors text-blue-600"
                    title="Edit"
                  >
                    <PencilIcon className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(post.id!)}
                    className="p-1 rounded hover:bg-gray-100 transition-colors text-red-600"
                    title="Delete"
                  >
                    <TrashIcon className="h-4 w-4" />
                  </button>
                </div>
                {post.featured && (
                  <span className="text-xs font-medium text-blue-600">★ Featured</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <BookOpenIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No blog posts found</h3>
          <p className="text-gray-600 mb-4">
            {searchTerm ? 'No posts match your search criteria.' : 'Get started by creating your first blog post.'}
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors gap-2"
          >
            <PlusIcon className="h-4 w-4" />
            Create First Post
          </button>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">
                {editingPost ? 'Edit Blog Post' : 'Create New Blog Post'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Title and Slug */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.title || ''}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Slug *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.slug || ''}
                      onChange={(e) => handleInputChange('slug', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Excerpt */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Excerpt *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.excerpt || ''}
                    onChange={(e) => handleInputChange('excerpt', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Brief description of the blog post..."
                  />
                </div>

                {/* Content */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Content *
                  </label>
                  <RichTextEditor
                    value={formData.content || ''}
                    onChange={(content) => handleInputChange('content', content)}
                    height="500px"
                    placeholder="Write your blog post content here..."
                    autoSave={true}
                    autoSaveInterval={15000}
                    onAutoSave={handleAutoSave}
                    enableImageUpload={true}
                    onImageUpload={handleImageUpload}
                    showWordCount={true}
                    showReadingTime={true}
                  />
                </div>

                {/* Cover Image */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cover Image
                  </label>
                                     <ImageUpload
                     value={formData.coverImageUrl || ''}
                     onChange={(url) => handleInputChange('coverImageUrl', url || '')}
                     aspectRatio="wide"
                     maxSize={2}
                     folder="blog"
                     placeholder="Upload cover image for your blog post"
                   />
                </div>

                {/* Category and Author */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Category *
                    </label>
                                         <select
                       required
                       value={formData.category || ''}
                       onChange={(e) => handleInputChange('category', e.target.value)}
                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                       title="Select a blog category"
                     >
                      <option value="">Select a category</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.name}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Author *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.author || ''}
                      onChange={(e) => handleInputChange('author', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tags
                  </label>
                  <input
                    type="text"
                    value={formData.tags?.join(', ') || ''}
                    onChange={(e) => handleTagInput(e.target.value)}
                    placeholder="Enter tags separated by commas..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">Separate multiple tags with commas</p>
                </div>

                {/* Options */}
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center">
                                       <input
                     type="checkbox"
                     checked={formData.featured || false}
                     onChange={(e) => handleInputChange('featured', e.target.checked)}
                     className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                     title="Mark this post as featured"
                   />
                    <span className="ml-2 text-sm text-gray-700">Featured post</span>
                  </label>
                  <label className="flex items-center">
                                       <input
                     type="checkbox"
                     checked={formData.published || false}
                     onChange={(e) => handleInputChange('published', e.target.checked)}
                     className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                     title="Publish this post immediately"
                   />
                    <span className="ml-2 text-sm text-gray-700">Publish immediately</span>
                  </label>
                </div>

                {/* Reading Time Display */}
                {formData.readTime && formData.readTime > 0 && (
                  <div className="text-sm text-gray-600">
                    Estimated reading time: {formData.readTime} minute{formData.readTime !== 1 ? 's' : ''}
                  </div>
                )}

                {/* Actions */}
                <div className="flex justify-end gap-3 pt-4 border-t">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {editingPost ? 'Update Post' : 'Create Post'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 