import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Hash, FileText, Code, Award, MessageSquare } from 'lucide-react';
import { projects } from '../../data/projectsData';
import { blogPosts } from '../../data/blogData';
import { skillCategories } from '../../data/skillsData';
import { achievements } from '../../data/achievementsData';
import { testimonials } from '../../data/testimonialsData';

interface SearchResult {
  id: string;
  title: string;
  content: string;
  type: 'project' | 'blog' | 'skill' | 'achievement' | 'testimonial';
  category?: string;
  url?: string;
  icon: React.ComponentType<{ className?: string }>;
  metadata?: Record<string, string>;
}

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (url: string) => void;
}

export const GlobalSearch: React.FC<GlobalSearchProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Create searchable data
  const searchableData = useMemo(() => {
    const data: SearchResult[] = [];

    // Add projects
    projects.forEach(project => {
      data.push({
        id: `project-${project.id}`,
        title: project.title,
        content: `${project.description} ${project.features.join(' ')} ${project.techStack.map(t => t.name).join(' ')}`,
        type: 'project',
        category: project.category,
        url: `#projects`,
        icon: Code,
        metadata: {
          status: project.status,
          timeline: project.timeline
        }
      });
    });

    // Add blog posts
    blogPosts.forEach(post => {
      data.push({
        id: `blog-${post.id}`,
        title: post.title,
        content: `${post.excerpt} ${post.tags.map(t => t.name).join(' ')}`,
        type: 'blog',
        category: post.category.name,
        url: `#blog`,
        icon: FileText,
        metadata: {
          readTime: `${post.readTime} min`,
          difficulty: post.difficulty
        }
      });
    });

    // Add skills
    skillCategories.forEach(category => {
      category.skills.forEach(skill => {
        data.push({
          id: `skill-${skill.name}`,
          title: skill.name,
          content: `${category.name} skill`,
          type: 'skill',
          category: category.name,
          url: `#skills`,
          icon: Hash,
          metadata: {
            category: category.name
          }
        });
      });
    });

    // Add achievements
    achievements.forEach(achievement => {
              data.push({
          id: `achievement-${achievement.id}`,
          title: achievement.title,
          content: achievement.description,
          type: 'achievement',
          category: achievement.category,
          url: `#achievements`,
          icon: Award,
          metadata: {
            value: String(achievement.value),
            trend: achievement.trend || 'stable'
          }
        });
    });

    // Add testimonials
    testimonials.forEach(testimonial => {
      data.push({
        id: `testimonial-${testimonial.id}`,
        title: `${testimonial.name} - ${testimonial.company}`,
        content: testimonial.content,
        type: 'testimonial',
        category: testimonial.relationship,
        url: `#testimonials`,
        icon: MessageSquare,
        metadata: {
          rating: `${testimonial.rating}/5`,
          role: testimonial.role
        }
      });
    });

    return data;
  }, []);

  // Filter results based on query
  const filteredResults = useMemo(() => {
    if (!query.trim()) return [];

    const searchTerm = query.toLowerCase().trim();
    const results = searchableData.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(searchTerm);
      const contentMatch = item.content.toLowerCase().includes(searchTerm);
      const categoryMatch = item.category?.toLowerCase().includes(searchTerm);
      const metadataMatch = Object.values(item.metadata || {}).some(value => 
        value.toLowerCase().includes(searchTerm)
      );

      return titleMatch || contentMatch || categoryMatch || metadataMatch;
    });

    // Sort by relevance
    return results.sort((a, b) => {
      const aTitle = a.title.toLowerCase().includes(searchTerm) ? 1 : 0;
      const bTitle = b.title.toLowerCase().includes(searchTerm) ? 1 : 0;
      return bTitle - aTitle;
    }).slice(0, 10); // Limit to 10 results
  }, [query, searchableData]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev < filteredResults.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev > 0 ? prev - 1 : filteredResults.length - 1
          );
          break;
        case 'Enter':
          e.preventDefault();
          if (filteredResults[selectedIndex]) {
            handleResultClick(filteredResults[selectedIndex]);
          }
          break;
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredResults, selectedIndex, onClose]);

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredResults]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Scroll selected item into view
  useEffect(() => {
    if (resultsRef.current) {
      const selectedElement = resultsRef.current.children[selectedIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest'
        });
      }
    }
  }, [selectedIndex]);

  const handleResultClick = (result: SearchResult) => {
    if (result.url) {
      if (onNavigate) {
        onNavigate(result.url);
      } else {
        // Smooth scroll to section
        const element = document.querySelector(result.url);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    onClose();
  };

  const getTypeColor = (type: SearchResult['type']) => {
    switch (type) {
      case 'project': return 'text-blue-400 bg-blue-500/20';
      case 'blog': return 'text-purple-400 bg-purple-500/20';
      case 'skill': return 'text-green-400 bg-green-500/20';
      case 'achievement': return 'text-yellow-400 bg-yellow-500/20';
      case 'testimonial': return 'text-pink-400 bg-pink-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return text;
    
    const regex = new RegExp(`(${query.trim()})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-400/30 text-yellow-200 rounded px-1">
          {part}
        </mark>
      ) : part
    );
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.95 }}
          className="w-full max-w-2xl mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Input */}
          <div className="bg-slate-800/95 backdrop-blur-sm border border-white/20 rounded-t-xl p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects, blog posts, skills, achievements..."
                className="w-full pl-12 pr-12 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors"
              />
              <button
                onClick={onClose}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Search Results */}
          <div className="bg-slate-800/95 backdrop-blur-sm border-x border-b border-white/20 rounded-b-xl max-h-96 overflow-hidden">
            {query.trim() && (
              <div className="p-2 border-b border-white/10 text-xs text-slate-400">
                {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''} found
              </div>
            )}

            <div ref={resultsRef} className="max-h-80 overflow-y-auto">
              {filteredResults.length > 0 ? (
                filteredResults.map((result, index) => {
                  const IconComponent = result.icon;
                  const isSelected = index === selectedIndex;

                  return (
                    <motion.div
                      key={result.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className={`p-4 cursor-pointer transition-all duration-200 ${
                        isSelected 
                          ? 'bg-white/10 border-l-4 border-blue-400' 
                          : 'hover:bg-white/5'
                      }`}
                      onClick={() => handleResultClick(result)}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-lg ${getTypeColor(result.type)}`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-sm font-medium text-white truncate">
                              {highlightMatch(result.title, query)}
                            </h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(result.type)}`}>
                              {result.type}
                            </span>
                          </div>
                          
                          <p className="text-xs text-slate-300 line-clamp-2 mb-2">
                            {highlightMatch(result.content.slice(0, 100) + '...', query)}
                          </p>
                          
                          {result.metadata && (
                            <div className="flex items-center space-x-4 text-xs text-slate-400">
                              {Object.entries(result.metadata).map(([key, value]) => (
                                <span key={key}>
                                  <span className="capitalize">{key}:</span> {value}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              ) : query.trim() ? (
                <div className="p-8 text-center text-slate-400">
                  <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p>No results found for "{query}"</p>
                  <p className="text-xs mt-1">Try searching for projects, skills, or technologies</p>
                </div>
              ) : (
                <div className="p-8 text-center text-slate-400">
                  <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p>Start typing to search across all content</p>
                  <div className="flex items-center justify-center space-x-4 mt-4 text-xs">
                    <span className="flex items-center">
                      <Code className="w-3 h-3 mr-1" /> Projects
                    </span>
                    <span className="flex items-center">
                      <FileText className="w-3 h-3 mr-1" /> Blog
                    </span>
                    <span className="flex items-center">
                      <Hash className="w-3 h-3 mr-1" /> Skills
                    </span>
                    <span className="flex items-center">
                      <Award className="w-3 h-3 mr-1" /> Achievements
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Keyboard shortcuts */}
            {query.trim() && filteredResults.length > 0 && (
              <div className="p-2 border-t border-white/10 bg-slate-900/50">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Use ↑↓ to navigate</span>
                  <span>Press Enter to select</span>
                  <span>Esc to close</span>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}; 