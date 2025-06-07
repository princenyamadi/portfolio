import React, { useState, useEffect, useCallback } from 'react';
import {
  PhotoIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  DocumentDuplicateIcon,
  EyeIcon,
  Squares2X2Icon,
  ListBulletIcon,
  ArrowUpTrayIcon,
  DocumentIcon
} from '@heroicons/react/24/outline';
import { ImageUpload } from '../ui/ImageUpload';
import { formatFileSize, formatDate } from '../../utils/format';
import { cn } from '../../utils/cn';

interface MediaFile {
  id: string;
  name: string;
  originalName: string;
  url: string;
  thumbnailUrl?: string;
  folder: string;
  size: number;
  type: string;
  uploadedAt: Date;
  uploadedBy: string;
  tags: string[];
  altText?: string;
  usageCount: number;
  usedIn: Array<{
    type: 'project' | 'blog' | 'testimonial' | 'skill';
    id: string;
    title: string;
  }>;
  metadata?: {
    width?: number;
    height?: number;
    format?: string;
  };
}

type ViewMode = 'grid' | 'list';
type SortBy = 'date' | 'name' | 'size' | 'usage';
type FilterBy = 'all' | 'images' | 'documents' | 'unused' | 'recent';

export const MediaLibrary: React.FC = () => {
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const [filteredFiles, setFilteredFiles] = useState<MediaFile[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFolder, setSelectedFolder] = useState<string>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sortBy, setSortBy] = useState<SortBy>('date');
  const [filterBy, setFilterBy] = useState<FilterBy>('all');
  const [showUpload, setShowUpload] = useState(false);
  const [showFileDetails, setShowFileDetails] = useState<MediaFile | null>(null);
  const [editingFile, setEditingFile] = useState<MediaFile | null>(null);

  // Folders extracted from files
  const [folders, setFolders] = useState<string[]>([]);

  useEffect(() => {
    loadMediaFiles();
  }, []);

  useEffect(() => {
    filterAndSortFiles();
  }, [mediaFiles, searchTerm, selectedFolder, sortBy, filterBy]);

  const loadMediaFiles = async () => {
    try {
      setIsLoading(true);
      // For demo purposes, use mock data
      // In a real implementation, you'd load from Firestore or Firebase Storage
      const files = generateMockMediaFiles();
      setMediaFiles(files);
      
      // Extract unique folders
      const uniqueFolders = [...new Set(files.map((f: MediaFile) => f.folder))];
      setFolders(uniqueFolders);
    } catch (error) {
      console.error('Error loading media files:', error);
      setMediaFiles([]);
      setFolders(['projects', 'blog', 'avatars', 'general']);
    } finally {
      setIsLoading(false);
    }
  };

  const filterAndSortFiles = useCallback(() => {
    let filtered = [...mediaFiles];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(file => 
        file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        file.originalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        file.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        file.altText?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Folder filter
    if (selectedFolder !== 'all') {
      filtered = filtered.filter(file => file.folder === selectedFolder);
    }

    // Type filter
    switch (filterBy) {
      case 'images':
        filtered = filtered.filter(file => file.type.startsWith('image/'));
        break;
      case 'documents':
        filtered = filtered.filter(file => !file.type.startsWith('image/'));
        break;
      case 'unused':
        filtered = filtered.filter(file => file.usageCount === 0);
        break;
      case 'recent':
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        filtered = filtered.filter(file => file.uploadedAt > oneWeekAgo);
        break;
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'size':
          return b.size - a.size;
        case 'usage':
          return b.usageCount - a.usageCount;
        case 'date':
        default:
          return b.uploadedAt.getTime() - a.uploadedAt.getTime();
      }
    });

    setFilteredFiles(filtered);
  }, [mediaFiles, searchTerm, selectedFolder, sortBy, filterBy]);

  const handleFileSelect = (fileId: string, selected: boolean) => {
    const newSelected = new Set(selectedFiles);
    if (selected) {
      newSelected.add(fileId);
    } else {
      newSelected.delete(fileId);
    }
    setSelectedFiles(newSelected);
  };

  const handleBulkDelete = async () => {
    if (selectedFiles.size === 0) return;
    
    const confirmed = window.confirm(`Delete ${selectedFiles.size} selected file(s)?`);
    if (!confirmed) return;

    try {
      // For demo purposes, just remove from local state
      // In a real implementation, you'd call CMSService.deleteMediaFile
      const updatedFiles = mediaFiles.filter(file => !selectedFiles.has(file.id));
      setMediaFiles(updatedFiles);
      setSelectedFiles(new Set());
    } catch (error) {
      console.error('Error deleting files:', error);
    }
  };

  const handleFileUpdate = async (file: MediaFile, updates: Partial<MediaFile>) => {
    try {
      // For demo purposes, update local state
      // In a real implementation, you'd call CMSService.updateMediaFile
      const updatedFiles = mediaFiles.map(f => 
        f.id === file.id ? { ...f, ...updates } : f
      );
      setMediaFiles(updatedFiles);
      setEditingFile(null);
    } catch (error) {
      console.error('Error updating file:', error);
    }
  };

  const handleCopyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    // You might want to show a toast notification here
  };

  const generateMockMediaFiles = (): MediaFile[] => {
    return [
      {
        id: '1',
        name: 'project-hero-1.jpg',
        originalName: 'My Project Screenshot.jpg',
        url: 'https://images.unsplash.com/photo-1551650733-74db1c07cb5b?w=800',
        thumbnailUrl: 'https://images.unsplash.com/photo-1551650733-74db1c07cb5b?w=200',
        folder: 'projects',
        size: 2048576,
        type: 'image/jpeg',
        uploadedAt: new Date('2024-01-15'),
        uploadedBy: 'Prince Nyamadi',
        tags: ['hero', 'project', 'screenshot'],
        altText: 'Project hero image',
        usageCount: 3,
        usedIn: [
          { type: 'project', id: 'proj1', title: 'E-commerce Platform' },
          { type: 'blog', id: 'blog1', title: 'Building Modern Apps' }
        ],
        metadata: { width: 1920, height: 1080, format: 'JPEG' }
      },
      {
        id: '2',
        name: 'blog-cover-ai.webp',
        originalName: 'AI Article Cover.png',
        url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
        thumbnailUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200',
        folder: 'blog',
        size: 456789,
        type: 'image/webp',
        uploadedAt: new Date('2024-01-10'),
        uploadedBy: 'Prince Nyamadi',
        tags: ['ai', 'technology', 'cover'],
        altText: 'AI and technology concept',
        usageCount: 1,
        usedIn: [
          { type: 'blog', id: 'blog2', title: 'The Future of AI' }
        ],
        metadata: { width: 1200, height: 630, format: 'WebP' }
      }
    ];
  };

  const FilePreview: React.FC<{ file: MediaFile; className?: string }> = ({ file, className = '' }) => {
    if (file.type.startsWith('image/')) {
      return (
        <img
          src={file.thumbnailUrl || file.url}
          alt={file.altText || file.name}
          className={cn('object-cover', className)}
        />
      );
    }
    
    return (
      <div className={cn('flex items-center justify-center bg-gray-100', className)}>
        <DocumentIcon className="h-12 w-12 text-gray-400" />
      </div>
    );
  };

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
            <PhotoIcon className="h-6 w-6" />
            Media Library
          </h1>
          <p className="text-gray-600 mt-1">
            Manage your media files and assets ({filteredFiles.length} files)
          </p>
        </div>
        <button
          onClick={() => setShowUpload(true)}
          className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors gap-2"
        >
          <ArrowUpTrayIcon className="h-4 w-4" />
          Upload Files
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search files, tags, or descriptions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-2">
          <select
            value={selectedFolder}
            onChange={(e) => setSelectedFolder(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Folders</option>
            {folders.map(folder => (
              <option key={folder} value={folder}>{folder}</option>
            ))}
          </select>

          <select
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value as FilterBy)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Files</option>
            <option value="images">Images</option>
            <option value="documents">Documents</option>
            <option value="unused">Unused</option>
            <option value="recent">Recent</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortBy)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="date">Sort by Date</option>
            <option value="name">Sort by Name</option>
            <option value="size">Sort by Size</option>
            <option value="usage">Sort by Usage</option>
          </select>
        </div>

        {/* View Toggle */}
        <div className="flex rounded-lg border border-gray-300 overflow-hidden">
          <button
            onClick={() => setViewMode('grid')}
            className={cn(
              'px-3 py-2 transition-colors',
              viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
            )}
          >
            <Squares2X2Icon className="h-4 w-4" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={cn(
              'px-3 py-2 transition-colors',
              viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
            )}
          >
            <ListBulletIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedFiles.size > 0 && (
        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
          <span className="text-sm text-blue-700">
            {selectedFiles.size} file{selectedFiles.size !== 1 ? 's' : ''} selected
          </span>
          <div className="flex gap-2">
            <button
              onClick={handleBulkDelete}
              className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors"
            >
              Delete Selected
            </button>
            <button
              onClick={() => setSelectedFiles(new Set())}
              className="px-3 py-1 bg-gray-600 text-white text-sm rounded hover:bg-gray-700 transition-colors"
            >
              Clear Selection
            </button>
          </div>
        </div>
      )}

      {/* Files Display */}
      {filteredFiles.length === 0 ? (
        <div className="text-center py-12">
          <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No files found</h3>
          <p className="mt-1 text-sm text-gray-500">
            {searchTerm || selectedFolder !== 'all' || filterBy !== 'all'
              ? 'Try adjusting your filters or search terms.'
              : 'Get started by uploading your first file.'}
          </p>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredFiles.map((file) => (
            <div
              key={file.id}
              className="relative group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Selection Checkbox */}
              <div className="absolute top-2 left-2 z-10">
                <input
                  type="checkbox"
                  checked={selectedFiles.has(file.id)}
                  onChange={(e) => handleFileSelect(file.id, e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </div>

              {/* Preview */}
              <div 
                className="aspect-square cursor-pointer"
                onClick={() => setShowFileDetails(file)}
              >
                <FilePreview file={file} className="w-full h-full" />
              </div>

              {/* File Info */}
              <div className="p-3">
                <div className="text-xs text-gray-500 truncate">{file.folder}</div>
                <div className="font-medium text-sm truncate" title={file.name}>
                  {file.name}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {formatFileSize(file.size)}
                </div>
                {file.usageCount > 0 && (
                  <div className="text-xs text-green-600 mt-1">
                    Used {file.usageCount} time{file.usageCount !== 1 ? 's' : ''}
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex gap-1">
                  <button
                    onClick={() => handleCopyUrl(file.url)}
                    className="p-1 bg-white bg-opacity-90 rounded hover:bg-opacity-100 transition-all"
                    title="Copy URL"
                  >
                    <DocumentDuplicateIcon className="h-3 w-3 text-gray-600" />
                  </button>
                  <button
                    onClick={() => setEditingFile(file)}
                    className="p-1 bg-white bg-opacity-90 rounded hover:bg-opacity-100 transition-all"
                    title="Edit"
                  >
                    <PencilIcon className="h-3 w-3 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input
                    type="checkbox"
                    checked={selectedFiles.size === filteredFiles.length && filteredFiles.length > 0}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedFiles(new Set(filteredFiles.map(f => f.id)));
                      } else {
                        setSelectedFiles(new Set());
                      }
                    }}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  File
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Folder
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Size
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Usage
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Uploaded
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredFiles.map((file) => (
                <tr key={file.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={selectedFiles.has(file.id)}
                      onChange={(e) => handleFileSelect(file.id, e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <FilePreview file={file} className="h-10 w-10 rounded" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{file.name}</div>
                        <div className="text-sm text-gray-500">{file.type}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {file.folder}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatFileSize(file.size)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {file.usageCount > 0 ? (
                      <span className="text-green-600">{file.usageCount} uses</span>
                    ) : (
                      <span className="text-gray-400">Unused</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(file.uploadedAt)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setShowFileDetails(file)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <EyeIcon className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleCopyUrl(file.url)}
                        className="text-green-600 hover:text-green-900"
                      >
                        <DocumentDuplicateIcon className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => setEditingFile(file)}
                        className="text-gray-600 hover:text-gray-900"
                      >
                        <PencilIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Upload Modal */}
      {showUpload && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-2xl">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Upload Files</h2>
              <ImageUpload
                value=""
                onChange={(url) => {
                  if (url) {
                    // Handle successful upload
                    loadMediaFiles();
                    setShowUpload(false);
                  }
                }}
                folder="general"
                maxSize={10}
                placeholder="Drop files here or click to upload"
              />
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setShowUpload(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* File Details Modal */}
      {showFileDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-xl font-semibold">File Details</h2>
                <button
                  onClick={() => setShowFileDetails(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Preview */}
                <div className="space-y-4">
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <FilePreview file={showFileDetails} className="w-full h-full" />
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleCopyUrl(showFileDetails.url)}
                      className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      Copy URL
                    </button>
                    <button
                      onClick={() => setEditingFile(showFileDetails)}
                      className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                    >
                      Edit Details
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">File Name</label>
                    <p className="mt-1 text-sm text-gray-900">{showFileDetails.name}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Original Name</label>
                    <p className="mt-1 text-sm text-gray-900">{showFileDetails.originalName}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Size</label>
                      <p className="mt-1 text-sm text-gray-900">{formatFileSize(showFileDetails.size)}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Type</label>
                      <p className="mt-1 text-sm text-gray-900">{showFileDetails.type}</p>
                    </div>
                  </div>

                  {showFileDetails.metadata && (
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Dimensions</label>
                        <p className="mt-1 text-sm text-gray-900">
                          {showFileDetails.metadata.width} × {showFileDetails.metadata.height}
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Format</label>
                        <p className="mt-1 text-sm text-gray-900">{showFileDetails.metadata.format}</p>
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Folder</label>
                    <p className="mt-1 text-sm text-gray-900">{showFileDetails.folder}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Uploaded</label>
                    <p className="mt-1 text-sm text-gray-900">
                      {formatDate(showFileDetails.uploadedAt)} by {showFileDetails.uploadedBy}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Tags</label>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {showFileDetails.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {showFileDetails.usedIn.length > 0 && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Used In</label>
                      <div className="mt-1 space-y-1">
                        {showFileDetails.usedIn.map((usage, index) => (
                          <div key={index} className="text-sm text-gray-900">
                            <span className="capitalize">{usage.type}</span>: {usage.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit File Modal */}
      {editingFile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-2xl">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Edit File Details</h2>
              
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const updates = {
                    name: formData.get('name') as string,
                    altText: formData.get('altText') as string,
                    tags: (formData.get('tags') as string).split(',').map(tag => tag.trim()).filter(Boolean),
                  };
                  handleFileUpdate(editingFile, updates);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    File Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={editingFile.name}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Alt Text
                  </label>
                  <input
                    type="text"
                    name="altText"
                    defaultValue={editingFile.altText || ''}
                    placeholder="Describe this image for accessibility"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tags
                  </label>
                  <input
                    type="text"
                    name="tags"
                    defaultValue={editingFile.tags.join(', ')}
                    placeholder="Enter tags separated by commas"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t">
                  <button
                    type="button"
                    onClick={() => setEditingFile(null)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Save Changes
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
