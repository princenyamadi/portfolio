import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, AlertCircle, Check } from 'lucide-react';
import { CMSService } from '../../services/cmsService';

interface ImageUploadProps {
  value?: string; // Current image URL
  onChange: (imageUrl: string | null) => void;
  onUploadStart?: () => void;
  onUploadEnd?: () => void;
  className?: string;
  folder?: string; // Storage folder (e.g., 'projects', 'blog', 'avatars')
  accept?: string;
  maxSize?: number; // in MB
  aspectRatio?: 'square' | 'wide' | 'tall' | 'free';
  placeholder?: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  value,
  onChange,
  onUploadStart,
  onUploadEnd,
  className = '',
  folder = 'uploads',
  accept = 'image/jpeg,image/png,image/webp',
  maxSize = 5, // 5MB default
  aspectRatio = 'free',
  placeholder = 'Click to upload or drag and drop'
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Get aspect ratio classes
  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case 'square': return 'aspect-square';
      case 'wide': return 'aspect-video';
      case 'tall': return 'aspect-[3/4]';
      default: return 'min-h-[200px]';
    }
  };

  // Validate file
  const validateFile = (file: File): string | null => {
    // Check file type
    const allowedTypes = accept.split(',').map(type => type.trim());
    if (!allowedTypes.some(type => file.type.match(type.replace('*', '.*')))) {
      return `File type not supported. Allowed: ${allowedTypes.join(', ')}`;
    }

    // Check file size
    const sizeInMB = file.size / (1024 * 1024);
    if (sizeInMB > maxSize) {
      return `File too large. Maximum size: ${maxSize}MB`;
    }

    return null;
  };

  // Handle file upload
  const handleFileUpload = async (file: File) => {
    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);
    setIsUploading(true);
    setUploadProgress(0);
    onUploadStart?.();

    try {
      // Create preview
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);

      // Generate unique filename
      const timestamp = Date.now();
      const extension = file.name.split('.').pop();
      const filename = `${timestamp}-${Math.random().toString(36).substr(2, 9)}.${extension}`;
      const path = `${folder}/${filename}`;

      // Simulate upload progress (Firebase doesn't provide real progress for small files)
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => Math.min(prev + 10, 90));
      }, 100);

      // Upload to Firebase Storage
      const downloadURL = await CMSService.uploadFile(file, path);
      
      clearInterval(progressInterval);
      setUploadProgress(100);

      // Clean up preview
      URL.revokeObjectURL(previewUrl);
      setPreview(null);

      onChange(downloadURL);
    } catch (error: any) {
      console.error('Upload error:', error);
      setError(error.message || 'Failed to upload image');
      if (preview) {
        URL.revokeObjectURL(preview);
        setPreview(null);
      }
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
      onUploadEnd?.();
    }
  };

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  // Handle drag events
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  }, []);

  // Handle remove image
  const handleRemove = () => {
    onChange(null);
    setError(null);
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Handle click to upload
  const handleClick = () => {
    if (!isUploading) {
      fileInputRef.current?.click();
    }
  };

  const currentImage = preview || value;
  const hasImage = !!currentImage;

  return (
    <div className={`relative ${className}`}>
      {/* Upload Area */}
      <div
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          relative border-2 border-dashed rounded-lg transition-all cursor-pointer
          ${getAspectRatioClass()}
          ${isDragging 
            ? 'border-primary bg-primary/10' 
            : hasImage 
            ? 'border-border hover:border-primary/50' 
            : 'border-border hover:border-primary hover:bg-muted/50'
          }
          ${isUploading ? 'pointer-events-none' : ''}
        `}
      >
        {/* Current Image */}
        {hasImage && (
          <div className="absolute inset-0">
            <img
              src={currentImage}
              alt="Upload preview"
              className="w-full h-full object-cover rounded-lg"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
              <div className="text-white text-center">
                <Upload className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">Click to replace</p>
              </div>
            </div>
          </div>
        )}

        {/* Upload Placeholder */}
        {!hasImage && !isUploading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <div className={`
              w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors
              ${isDragging ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}
            `}>
              <Upload className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-medium text-foreground mb-1">
              {isDragging ? 'Drop image here' : placeholder}
            </h3>
            <p className="text-xs text-muted-foreground">
              {accept.includes('image/') ? 'PNG, JPG, WebP' : 'Various formats'} up to {maxSize}MB
            </p>
          </div>
        )}

        {/* Upload Progress */}
        {isUploading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/90 rounded-lg">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
            <p className="text-sm font-medium text-foreground mb-2">Uploading...</p>
            <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${uploadProgress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">{uploadProgress}%</p>
          </div>
        )}

        {/* Remove Button */}
        {hasImage && !isUploading && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleRemove();
            }}
            className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2 p-3 bg-red-50 border border-red-200 rounded-lg"
          >
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Message */}
      <AnimatePresence>
        {hasImage && !preview && !error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2 p-3 bg-green-50 border border-green-200 rounded-lg"
          >
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <p className="text-sm text-green-700">Image uploaded successfully</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 