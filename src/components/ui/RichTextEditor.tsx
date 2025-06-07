import React, { useState, useEffect, useCallback, useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'highlight.js/styles/github.css';
import hljs from 'highlight.js';
import { 
  DocumentCheckIcon as SaveIcon, 
  ClockIcon, 
  DocumentTextIcon as FileTextIcon, 
  CodeBracketIcon as CodeIcon,
  PhotoIcon as ImageIcon,
  PencilIcon as TypeIcon
} from '@heroicons/react/24/outline';

// Configure Quill to use highlight.js
hljs.configure({
  languages: ['javascript', 'typescript', 'html', 'css', 'python', 'java', 'sql', 'json', 'bash']
});

interface RichTextEditorProps {
  value: string;
  onChange: (content: string) => void;
  placeholder?: string;
  height?: string;
  autoSave?: boolean;
  autoSaveInterval?: number;
  onAutoSave?: (content: string) => void;
  showWordCount?: boolean;
  showReadingTime?: boolean;
  enableCodeBlocks?: boolean;
  enableImageUpload?: boolean;
  onImageUpload?: (file: File) => Promise<string>;
}

export const RichTextEditor: React.FC<RichTextEditorProps> = ({
  value,
  onChange,
  placeholder = 'Start writing...',
  height = '400px',
  autoSave = true,
  autoSaveInterval = 30000, // 30 seconds
  onAutoSave,
  showWordCount = true,
  showReadingTime = true,
  enableCodeBlocks = true,
  enableImageUpload = true,
  onImageUpload
}) => {
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [isAutoSaving, setIsAutoSaving] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [readingTime, setReadingTime] = useState(0);

  // Custom toolbar configuration
  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'font': [] }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'script': 'sub'}, { 'script': 'super' }],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'indent': '-1'}, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'align': [] }],
        ['blockquote', 'code-block'],
        ['link', 'image', 'video'],
        ['clean']
      ],
      handlers: {
        image: enableImageUpload ? handleImageUpload : undefined
      }
    },
    syntax: enableCodeBlocks ? {
      highlight: (text: string) => hljs.highlightAuto(text).value
    } : false,
    clipboard: {
      matchVisual: false
    }
  }), [enableCodeBlocks, enableImageUpload]);

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'script',
    'list', 'bullet', 'indent',
    'direction', 'align',
    'link', 'image', 'video',
    'blockquote', 'code-block'
  ];

  // Handle image upload
  function handleImageUpload() {
    if (!onImageUpload) return;

    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      if (input.files && input.files[0]) {
        const file = input.files[0];
        try {
          const imageUrl = await onImageUpload(file);
          
          // Insert image into editor
          const quill = (document.querySelector('.ql-editor') as any)?.__quill;
          if (quill) {
            const range = quill.getSelection();
            quill.insertEmbed(range ? range.index : 0, 'image', imageUrl);
          }
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      }
    };
  }

  // Calculate word count and reading time
  const calculateStats = useCallback((content: string) => {
    // Remove HTML tags and get plain text
    const plainText = content.replace(/<[^>]*>/g, '').trim();
    const words = plainText ? plainText.split(/\s+/).length : 0;
    const readingTimeMinutes = Math.ceil(words / 200); // 200 words per minute
    
    setWordCount(words);
    setReadingTime(readingTimeMinutes);
  }, []);

  // Handle content change
  const handleChange = useCallback((content: string) => {
    onChange(content);
    calculateStats(content);
  }, [onChange, calculateStats]);

  // Auto-save functionality
  useEffect(() => {
    if (!autoSave || !onAutoSave || !value) return;

    const autoSaveTimer = setTimeout(async () => {
      setIsAutoSaving(true);
      try {
        await onAutoSave(value);
        setLastSaved(new Date());
      } catch (error) {
        console.error('Auto-save failed:', error);
      } finally {
        setIsAutoSaving(false);
      }
    }, autoSaveInterval);

    return () => clearTimeout(autoSaveTimer);
  }, [value, autoSave, onAutoSave, autoSaveInterval]);

  // Calculate stats on mount
  useEffect(() => {
    calculateStats(value);
  }, [value, calculateStats]);

  // Format last saved time
  const formatLastSaved = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMinutes = Math.floor(diffMs / 60000);
    
    if (diffMinutes < 1) return 'just now';
    if (diffMinutes === 1) return '1 minute ago';
    if (diffMinutes < 60) return `${diffMinutes} minutes ago`;
    
    const diffHours = Math.floor(diffMinutes / 60);
    if (diffHours === 1) return '1 hour ago';
    if (diffHours < 24) return `${diffHours} hours ago`;
    
    return date.toLocaleDateString();
  };

  return (
    <div className="space-y-4">
      {/* Editor Toolbar Info */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <TypeIcon className="h-4 w-4" />
            <span>Rich Editor</span>
          </div>
          
          {enableCodeBlocks && (
            <div className="flex items-center space-x-1">
              <CodeIcon className="h-4 w-4" />
              <span>Code Highlighting</span>
            </div>
          )}
          
          {enableImageUpload && (
            <div className="flex items-center space-x-1">
              <ImageIcon className="h-4 w-4" />
              <span>Image Upload</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center space-x-4">
          {autoSave && (
            <div className="flex items-center space-x-1">
              {isAutoSaving ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
              ) : (
                <SaveIcon className="h-4 w-4" />
              )}
              <span>
                {isAutoSaving ? 'Saving...' : lastSaved ? `Saved ${formatLastSaved(lastSaved)}` : 'Auto-save enabled'}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Rich Text Editor */}
      <div className="border border-gray-300 rounded-lg overflow-hidden">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          modules={modules}
          formats={formats}
          style={{ height }}
        />
      </div>

      {/* Statistics and Info */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-4">
          {showWordCount && (
            <div className="flex items-center space-x-1">
              <FileTextIcon className="h-4 w-4" />
              <span>{wordCount} {wordCount === 1 ? 'word' : 'words'}</span>
            </div>
          )}
          
          {showReadingTime && (
            <div className="flex items-center space-x-1">
              <ClockIcon className="h-4 w-4" />
              <span>{readingTime} min read</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center space-x-2 text-xs">
          <span>Tip: Use</span>
          <code className="px-1 py-0.5 bg-gray-100 rounded">Ctrl+B</code>
          <span>for bold,</span>
          <code className="px-1 py-0.5 bg-gray-100 rounded">Ctrl+I</code>
          <span>for italic</span>
        </div>
      </div>
    </div>
  );
};

// Export utility functions for use in other components
export const calculateReadingTime = (content: string): number => {
  const plainText = content.replace(/<[^>]*>/g, '').trim();
  const words = plainText ? plainText.split(/\s+/).length : 0;
  return Math.ceil(words / 200);
};

export const getWordCount = (content: string): number => {
  const plainText = content.replace(/<[^>]*>/g, '').trim();
  return plainText ? plainText.split(/\s+/).length : 0;
};

export const stripHtml = (content: string): string => {
  return content.replace(/<[^>]*>/g, '').trim();
};