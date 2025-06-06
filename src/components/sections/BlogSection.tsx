import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiClock, FiEye, FiHeart, FiMessageCircle, FiSearch, FiTag, FiBookOpen, FiTrendingUp } from 'react-icons/fi';
import { blogPosts, blogCategories, blogTags, blogStats, featuredPosts, BlogPost } from '../../data/blogData';

const BlogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'latest' | 'popular' | 'trending'>('latest');

  const filteredPosts = useMemo(() => {
    let posts = [...blogPosts];

    // Filter by category
    if (selectedCategory !== 'all') {
      posts = posts.filter(post => post.category.id === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      posts = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.name.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      posts = posts.filter(post =>
        selectedTags.every(tagId => post.tags.some(tag => tag.id === tagId))
      );
    }

    // Sort posts
    switch (sortBy) {
      case 'popular':
        posts.sort((a, b) => b.views - a.views);
        break;
      case 'trending':
        posts.sort((a, b) => b.likes - a.likes);
        break;
      case 'latest':
      default:
        posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        break;
    }

    return posts;
  }, [selectedCategory, searchQuery, selectedTags, sortBy]);

  const toggleTag = (tagId: string) => {
    setSelectedTags(prev =>
      prev.includes(tagId)
        ? prev.filter(id => id !== tagId)
        : [...prev, tagId]
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-400 bg-green-500/20';
      case 'intermediate': return 'text-yellow-400 bg-yellow-500/20';
      case 'advanced': return 'text-red-400 bg-red-500/20';
      default: return 'text-blue-400 bg-blue-500/20';
    }
  };

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Technical Blog</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Insights, tutorials, and deep dives into modern web development, AI, and software engineering
          </p>
          
          {/* Blog Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            {[
              { label: 'Articles Published', value: blogStats.totalPosts, icon: FiBookOpen },
              { label: 'Total Views', value: `${Math.floor(blogStats.totalViews / 1000)}K+`, icon: FiEye },
              { label: 'Average Read Time', value: `${blogStats.averageReadTime} min`, icon: FiClock },
              { label: 'Categories', value: blogStats.categoriesCount, icon: FiTag }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles, tags, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-400 transition-colors"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              All Articles ({blogPosts.length})
            </button>
            {blogCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>

          {/* Sort Options */}
          <div className="flex items-center justify-center space-x-4">
            <span className="text-slate-300 text-sm">Sort by:</span>
            {[
              { id: 'latest', label: 'Latest', icon: FiCalendar },
              { id: 'popular', label: 'Most Viewed', icon: FiEye },
              { id: 'trending', label: 'Most Liked', icon: FiTrendingUp }
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => setSortBy(option.id as any)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  sortBy === option.id
                    ? 'bg-purple-500/20 text-purple-300'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <option.icon className="w-4 h-4" />
                <span>{option.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && selectedCategory === 'all' && !searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Articles</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      FEATURED
                    </div>

                    {/* Difficulty Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(post.difficulty)}`}>
                      {post.difficulty.toUpperCase()}
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Category and Stats */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-${post.category.color}-500/20 text-${post.category.color}-300`}>
                        {post.category.name}
                      </span>
                      <div className="flex items-center space-x-4 text-slate-400 text-sm">
                        <span className="flex items-center">
                          <FiEye className="w-4 h-4 mr-1" />
                          {post.views.toLocaleString()}
                        </span>
                        <span className="flex items-center">
                          <FiHeart className="w-4 h-4 mr-1" />
                          {post.likes}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag.id}
                          className="px-2 py-1 text-xs rounded-md bg-white/10 text-slate-300"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>

                    {/* Author and Date */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <div className="text-sm font-medium text-white">{post.author.name}</div>
                          <div className="text-xs text-slate-400">{formatDate(post.publishedAt)}</div>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => setSelectedPost(post)}
                        className="px-4 py-2 text-sm font-medium text-purple-300 hover:text-white bg-purple-500/20 hover:bg-purple-500/30 rounded-lg transition-all duration-200"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredPosts.slice(0, 9).map((post, index) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Difficulty Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(post.difficulty)}`}>
                    {post.difficulty.toUpperCase()}
                  </div>
                </div>

                <div className="p-6">
                  {/* Category and Read Time */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-${post.category.color}-500/20 text-${post.category.color}-300`}>
                      {post.category.name}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center">
                      <FiClock className="w-3 h-3 mr-1" />
                      {post.readTime} min read
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag.id}
                        className="px-2 py-1 text-xs rounded-md bg-white/10 text-slate-300"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>

                  {/* Stats and Author */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-slate-400 text-xs">
                      <span className="flex items-center">
                        <FiEye className="w-3 h-3 mr-1" />
                        {post.views.toLocaleString()}
                      </span>
                      <span className="flex items-center">
                        <FiHeart className="w-3 h-3 mr-1" />
                        {post.likes}
                      </span>
                    </div>
                    
                    <button
                      onClick={() => setSelectedPost(post)}
                      className="px-3 py-1 text-xs font-medium text-purple-300 hover:text-white bg-purple-500/20 hover:bg-purple-500/30 rounded-md transition-all duration-200"
                    >
                      Read
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {filteredPosts.length > 9 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg transition-colors duration-200">
              Load More Articles ({filteredPosts.length - 9} remaining)
            </button>
          </motion.div>
        )}

        {/* Popular Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Popular Tags</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {blogTags.slice(0, 12).map((tag) => (
              <button
                key={tag.id}
                onClick={() => toggleTag(tag.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedTags.includes(tag.id)
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                #{tag.name}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Blog Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <BlogPostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

// Blog Post Modal Component
const BlogPostModal: React.FC<{ post: BlogPost; onClose: () => void }> = ({ post, onClose }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg bg-black/50 text-white hover:bg-black/70 transition-all duration-200"
          >
            ✕
          </button>

          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center space-x-4 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium bg-${post.category.color}-500/20 text-${post.category.color}-300`}>
                {post.category.name}
              </span>
              <span className="text-xs text-slate-300 flex items-center">
                <FiClock className="w-3 h-3 mr-1" />
                {post.readTime} min read
              </span>
              <span className="text-xs text-slate-300 flex items-center">
                <FiCalendar className="w-3 h-3 mr-1" />
                {formatDate(post.publishedAt)}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">{post.title}</h2>
            <p className="text-slate-300">{post.subtitle}</p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 max-h-[50vh] overflow-y-auto">
          {/* Author Info */}
          <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-slate-700">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
              <div className="font-semibold text-white">{post.author.name}</div>
              <div className="text-sm text-slate-400">{post.author.role}</div>
              <div className="text-sm text-slate-300">{post.author.bio}</div>
            </div>
            <div className="flex items-center space-x-4 text-slate-400">
              <span className="flex items-center">
                <FiEye className="w-4 h-4 mr-1" />
                {post.views.toLocaleString()}
              </span>
              <span className="flex items-center">
                <FiHeart className="w-4 h-4 mr-1" />
                {post.likes}
              </span>
              <span className="flex items-center">
                <FiMessageCircle className="w-4 h-4 mr-1" />
                {post.comments}
              </span>
            </div>
          </div>

          {/* Content Preview */}
          <div className="prose prose-invert max-w-none">
            <div className="text-slate-300 leading-relaxed whitespace-pre-line">
              {post.content.substring(0, 1000)}...
            </div>
          </div>

          {/* Tags */}
          <div className="mt-6 pt-6 border-t border-slate-700">
            <h4 className="text-sm font-semibold text-white mb-3">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="px-3 py-1 text-xs rounded-full bg-white/10 text-slate-300"
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-6 text-center">
            <button className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg transition-colors duration-200">
              Read Full Article
            </button>
            <p className="text-xs text-slate-400 mt-2">
              This is a preview. Click to read the complete article.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BlogSection; 