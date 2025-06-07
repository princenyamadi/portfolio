import React, { useState, useEffect } from 'react';
import {
  MagnifyingGlassIcon,
  ShareIcon,
  ChartBarIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  PhotoIcon,

} from '@heroicons/react/24/outline';
import { Switch } from '@headlessui/react';
import { seoAnalyzer, SitemapGenerator, downloadSitemap, downloadRobotsTxt } from '../../utils/sitemapGenerator';

interface SEOSettings {
  id: string;
  pageType: 'home' | 'about' | 'projects' | 'blog' | 'contact' | 'project' | 'blog-post';
  pageName: string;
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType: 'website' | 'article' | 'profile';
  twitterCard: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterSite?: string;
  noIndex: boolean;
  noFollow: boolean;
  structuredData?: any;
  lastModified: Date;
}

const SEOManager: React.FC = () => {
  const [seoSettings, setSeoSettings] = useState<SEOSettings[]>([]);
  const [selectedSetting, setSelectedSetting] = useState<SEOSettings | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'basic' | 'social' | 'advanced' | 'analytics'>('basic');

  // Mock data - replace with Firebase integration
  useEffect(() => {
    const mockSettings: SEOSettings[] = [
      {
        id: '1',
        pageType: 'home',
        pageName: 'Homepage',
        title: 'Prince Nyamadi - Full Stack Developer Portfolio',
        description: 'Professional portfolio of Prince Nyamadi, showcasing innovative web applications, mobile apps, and software solutions.',
        keywords: ['full stack developer', 'web developer', 'React', 'Node.js', 'portfolio'],
        ogTitle: 'Prince Nyamadi - Full Stack Developer Portfolio',
        ogDescription: 'Professional portfolio showcasing innovative web applications and software solutions.',
        ogImage: '/og-home.png',
        ogType: 'website',
        twitterCard: 'summary_large_image',
        twitterSite: '@princenyamadi',
        noIndex: false,
        noFollow: false,
        lastModified: new Date()
      },
      {
        id: '2',
        pageType: 'projects',
        pageName: 'Projects',
        title: 'Projects - Portfolio Solutions & Applications',
        description: 'Explore my portfolio of web applications, mobile apps, and innovative software solutions.',
        keywords: ['projects', 'web applications', 'mobile apps', 'software development'],
        ogType: 'website',
        twitterCard: 'summary_large_image',
        noIndex: false,
        noFollow: false,
        lastModified: new Date()
      },
      {
        id: '3',
        pageType: 'blog',
        pageName: 'Blog',
        title: 'Blog - Development Insights & Tutorials',
        description: 'Read the latest articles on web development, programming tutorials, and tech insights.',
        keywords: ['blog', 'web development', 'programming', 'tutorials', 'tech'],
        ogType: 'website',
        twitterCard: 'summary_large_image',
        noIndex: false,
        noFollow: false,
        lastModified: new Date()
      }
    ];
    setSeoSettings(mockSettings);
    setSelectedSetting(mockSettings[0]);
  }, []);

  const filteredSettings = seoSettings.filter(setting =>
    setting.pageName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    setting.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSave = async () => {
    if (!selectedSetting) return;
    
    setLoading(true);
    try {
      // Here you would save to Firebase
      console.log('Saving SEO settings:', selectedSetting);
      
      // Update local state
      setSeoSettings(prev => 
        prev.map(setting => 
          setting.id === selectedSetting.id 
            ? { ...selectedSetting, lastModified: new Date() }
            : setting
        )
      );
    } catch (error) {
      console.error('Error saving SEO settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const addKeyword = (keyword: string) => {
    if (!selectedSetting || !keyword.trim()) return;
    
    const newKeywords = [...selectedSetting.keywords, keyword.trim()];
    setSelectedSetting({
      ...selectedSetting,
      keywords: newKeywords
    });
  };

  const removeKeyword = (index: number) => {
    if (!selectedSetting) return;
    
    const newKeywords = selectedSetting.keywords.filter((_, i) => i !== index);
    setSelectedSetting({
      ...selectedSetting,
      keywords: newKeywords
    });
  };

  const generatePreview = () => {
    if (!selectedSetting) return null;

    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Search Engine Preview</h3>
        
        {/* Google Search Preview */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Google Search Result</h4>
          <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-700">
            <div className="text-blue-600 dark:text-blue-400 text-lg hover:underline cursor-pointer">
              {selectedSetting.title}
            </div>
            <div className="text-green-700 dark:text-green-400 text-sm">
              https://yourportfolio.com/{selectedSetting.pageType === 'home' ? '' : selectedSetting.pageType}
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              {selectedSetting.description}
            </div>
          </div>
        </div>

        {/* Social Media Preview */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Social Media Preview</h4>
          <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-700">
            <div className="flex space-x-4">
              <div className="w-20 h-20 bg-gray-300 dark:bg-gray-600 rounded flex items-center justify-center">
                <PhotoIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900 dark:text-white">
                  {selectedSetting.ogTitle || selectedSetting.title}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                  {selectedSetting.ogDescription || selectedSetting.description}
                </div>
                <div className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                  yourportfolio.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">SEO Manager</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Optimize your portfolio for search engines and social media
          </p>
        </div>
        
        <div className="mt-4 sm:mt-0">
          <button
            onClick={handleSave}
            disabled={loading || !selectedSetting}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Settings List */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search pages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>
            
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredSettings.map((setting) => (
                <div
                  key={setting.id}
                  onClick={() => setSelectedSetting(setting)}
                  className={`p-4 cursor-pointer transition-colors ${
                    selectedSetting?.id === setting.id
                      ? 'bg-blue-50 dark:bg-blue-900/20 border-r-2 border-blue-500'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {setting.pageName}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                        {setting.pageType}
                      </p>
                    </div>
                    <div className="flex space-x-1">
                      {setting.noIndex && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
                          No Index
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Settings Editor */}
        <div className="lg:col-span-2">
          {selectedSetting ? (
            <div className="space-y-6">
              {/* Tabs */}
              <div className="border-b border-gray-200 dark:border-gray-700">
                <nav className="-mb-px flex space-x-8">
                  {[
                    { id: 'basic', name: 'Basic SEO', icon: DocumentTextIcon },
                    { id: 'social', name: 'Social Media', icon: ShareIcon },
                    { id: 'advanced', name: 'Advanced', icon: GlobeAltIcon },
                    { id: 'analytics', name: 'Analytics', icon: ChartBarIcon }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                      }`}
                    >
                      <tab.icon className="h-5 w-5" />
                      <span>{tab.name}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                {activeTab === 'basic' && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Page Title
                      </label>
                      <input
                        type="text"
                        value={selectedSetting.title}
                        onChange={(e) => setSelectedSetting({
                          ...selectedSetting,
                          title: e.target.value
                        })}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="Enter page title (50-60 characters recommended)"
                      />
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {selectedSetting.title.length}/60 characters
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Meta Description
                      </label>
                      <textarea
                        value={selectedSetting.description}
                        onChange={(e) => setSelectedSetting({
                          ...selectedSetting,
                          description: e.target.value
                        })}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="Enter meta description (150-160 characters recommended)"
                      />
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {selectedSetting.description.length}/160 characters
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Keywords
                      </label>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {selectedSetting.keywords.map((keyword, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                          >
                            {keyword}
                            <button
                              onClick={() => removeKeyword(index)}
                              className="ml-1 h-4 w-4 hover:bg-blue-200 dark:hover:bg-blue-800 rounded-full flex items-center justify-center"
                            >
                              ×
                            </button>
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          placeholder="Add keyword"
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              addKeyword((e.target as HTMLInputElement).value);
                              (e.target as HTMLInputElement).value = '';
                            }
                          }}
                          className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        />
                        <button
                          onClick={() => {
                            const input = document.querySelector('input[placeholder="Add keyword"]') as HTMLInputElement;
                            if (input?.value) {
                              addKeyword(input.value);
                              input.value = '';
                            }
                          }}
                          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-300 rounded-lg"
                        >
                          Add
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Canonical URL (Optional)
                      </label>
                      <input
                        type="url"
                        value={selectedSetting.canonicalUrl || ''}
                        onChange={(e) => setSelectedSetting({
                          ...selectedSetting,
                          canonicalUrl: e.target.value
                        })}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="https://yourportfolio.com/canonical-url"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Search Engine Indexing
                        </label>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Control how search engines interact with this page
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-gray-700 dark:text-gray-300">No Index</span>
                          <Switch
                            checked={selectedSetting.noIndex}
                            onChange={(checked) => setSelectedSetting({
                              ...selectedSetting,
                              noIndex: checked
                            })}
                            className={`${
                              selectedSetting.noIndex ? 'bg-red-600' : 'bg-gray-200 dark:bg-gray-600'
                            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
                          >
                            <span
                              className={`${
                                selectedSetting.noIndex ? 'translate-x-6' : 'translate-x-1'
                              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                            />
                          </Switch>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-gray-700 dark:text-gray-300">No Follow</span>
                          <Switch
                            checked={selectedSetting.noFollow}
                            onChange={(checked) => setSelectedSetting({
                              ...selectedSetting,
                              noFollow: checked
                            })}
                            className={`${
                              selectedSetting.noFollow ? 'bg-red-600' : 'bg-gray-200 dark:bg-gray-600'
                            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
                          >
                            <span
                              className={`${
                                selectedSetting.noFollow ? 'translate-x-6' : 'translate-x-1'
                              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                            />
                          </Switch>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'social' && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Open Graph */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Open Graph (Facebook/LinkedIn)</h3>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            OG Title
                          </label>
                          <input
                            type="text"
                            value={selectedSetting.ogTitle || ''}
                            onChange={(e) => setSelectedSetting({
                              ...selectedSetting,
                              ogTitle: e.target.value
                            })}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            placeholder="Use page title if empty"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            OG Description
                          </label>
                          <textarea
                            value={selectedSetting.ogDescription || ''}
                            onChange={(e) => setSelectedSetting({
                              ...selectedSetting,
                              ogDescription: e.target.value
                            })}
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            placeholder="Use meta description if empty"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            OG Image URL
                          </label>
                          <input
                            type="url"
                            value={selectedSetting.ogImage || ''}
                            onChange={(e) => setSelectedSetting({
                              ...selectedSetting,
                              ogImage: e.target.value
                            })}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            placeholder="/og-image.png"
                          />
                        </div>

                                                 <div>
                           <label htmlFor="og-type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                             OG Type
                           </label>
                           <select
                             id="og-type"
                             value={selectedSetting.ogType}
                             onChange={(e) => setSelectedSetting({
                               ...selectedSetting,
                               ogType: e.target.value as 'website' | 'article' | 'profile'
                             })}
                             className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                           >
                             <option value="website">Website</option>
                             <option value="article">Article</option>
                             <option value="profile">Profile</option>
                           </select>
                         </div>
                      </div>

                      {/* Twitter Cards */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Twitter Cards</h3>
                        
                                                 <div>
                           <label htmlFor="twitter-card" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                             Card Type
                           </label>
                           <select
                             id="twitter-card"
                             value={selectedSetting.twitterCard}
                             onChange={(e) => setSelectedSetting({
                               ...selectedSetting,
                               twitterCard: e.target.value as any
                             })}
                             className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                           >
                             <option value="summary">Summary</option>
                             <option value="summary_large_image">Summary Large Image</option>
                             <option value="app">App</option>
                             <option value="player">Player</option>
                           </select>
                         </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Twitter Site
                          </label>
                          <input
                            type="text"
                            value={selectedSetting.twitterSite || ''}
                            onChange={(e) => setSelectedSetting({
                              ...selectedSetting,
                              twitterSite: e.target.value
                            })}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            placeholder="@yourusername"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Twitter Title
                          </label>
                          <input
                            type="text"
                            value={selectedSetting.twitterTitle || ''}
                            onChange={(e) => setSelectedSetting({
                              ...selectedSetting,
                              twitterTitle: e.target.value
                            })}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            placeholder="Use page title if empty"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Twitter Description
                          </label>
                          <textarea
                            value={selectedSetting.twitterDescription || ''}
                            onChange={(e) => setSelectedSetting({
                              ...selectedSetting,
                              twitterDescription: e.target.value
                            })}
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            placeholder="Use meta description if empty"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Twitter Image URL
                          </label>
                          <input
                            type="url"
                            value={selectedSetting.twitterImage || ''}
                            onChange={(e) => setSelectedSetting({
                              ...selectedSetting,
                              twitterImage: e.target.value
                            })}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            placeholder="/twitter-image.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'advanced' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Structured Data (JSON-LD)</h3>
                      <textarea
                        value={selectedSetting.structuredData ? JSON.stringify(selectedSetting.structuredData, null, 2) : ''}
                        onChange={(e) => {
                          try {
                            const data = e.target.value ? JSON.parse(e.target.value) : null;
                            setSelectedSetting({
                              ...selectedSetting,
                              structuredData: data
                            });
                          } catch (error) {
                            // Invalid JSON, ignore
                          }
                        }}
                        rows={12}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-mono text-sm"
                        placeholder={`{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Prince Nyamadi",
  "jobTitle": "Full Stack Developer",
  "url": "https://yourportfolio.com"
}`}
                      />
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                        Valid JSON-LD structured data for rich snippets
                      </p>
                    </div>
                  </div>
                )}

                                 {activeTab === 'analytics' && (
                   <SEOAnalytics 
                     title={selectedSetting.title}
                     description={selectedSetting.description}
                     keywords={selectedSetting.keywords}
                   />
                 )}
              </div>

              {/* Preview */}
              {generatePreview()}
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 text-center">
              <MagnifyingGlassIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Select a page to manage SEO settings
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Choose a page from the left sidebar to start optimizing its SEO
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// SEO Analytics Component
interface SEOAnalyticsProps {
  title: string;
  description: string;
  keywords: string[];
}

const SEOAnalytics: React.FC<SEOAnalyticsProps> = ({ title, description, keywords }) => {
  const titleAnalysis = seoAnalyzer.analyzeTitle(title);
  const descriptionAnalysis = seoAnalyzer.analyzeDescription(description);
  const keywordsAnalysis = seoAnalyzer.analyzeKeywords(keywords, title, description);
  const overallAnalysis = seoAnalyzer.calculateOverallScore(titleAnalysis, descriptionAnalysis, keywordsAnalysis);

  const handleGenerateSitemap = () => {
    const generator = new SitemapGenerator();
    const sitemapData = {
      projects: [
        { id: '1', slug: 'ecommerce-platform', updatedAt: new Date() },
        { id: '2', slug: 'mobile-app-ui', updatedAt: new Date() }
      ],
      blogPosts: [
        { id: '1', slug: 'react-best-practices', updatedAt: new Date(), published: true },
        { id: '2', slug: 'typescript-tips', updatedAt: new Date(), published: true }
      ],
      staticPages: SitemapGenerator.getDefaultStaticPages()
    };
    
    const sitemap = generator.generateSitemap(sitemapData);
    downloadSitemap(sitemap);
  };

  const handleGenerateRobots = () => {
    const generator = new SitemapGenerator();
    const robots = generator.generateRobotsTxt({
      disallowedPaths: ['/admin', '/api']
    });
    downloadRobotsTxt(robots);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 dark:text-green-400';
    if (score >= 70) return 'text-blue-600 dark:text-blue-400';
    if (score >= 50) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getRecommendationColor = (type: 'success' | 'warning' | 'error') => {
    switch (type) {
      case 'success': return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800';
      case 'warning': return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800';
      case 'error': return 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800';
    }
  };

  const getRecommendationIcon = (type: 'success' | 'warning' | 'error') => {
    switch (type) {
      case 'success': return 'bg-green-500';
      case 'warning': return 'bg-yellow-500';
      case 'error': return 'bg-red-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* SEO Score Overview */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Overall SEO Score</h4>
          <div className={`text-3xl font-bold ${getScoreColor(overallAnalysis.score)}`}>
            {overallAnalysis.score}/100
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">
            {overallAnalysis.rating} optimization
          </p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Title Score</h4>
          <div className={`text-3xl font-bold ${getScoreColor(titleAnalysis.score)}`}>
            {titleAnalysis.score}/100
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {titleAnalysis.length} characters
          </p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Description Score</h4>
          <div className={`text-3xl font-bold ${getScoreColor(descriptionAnalysis.score)}`}>
            {descriptionAnalysis.score}/100
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {descriptionAnalysis.length} characters
          </p>
        </div>
      </div>

      {/* Detailed Analysis */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white mb-4">Keyword Analysis</h4>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Keywords in title:</span>
              <span className="font-medium text-gray-900 dark:text-white">
                {keywordsAnalysis.keywordsInTitle}/{keywords.length}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Keywords in description:</span>
              <span className="font-medium text-gray-900 dark:text-white">
                {keywordsAnalysis.keywordsInDescription}/{keywords.length}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Keyword score:</span>
              <span className={`font-medium ${getScoreColor(keywordsAnalysis.score)}`}>
                {keywordsAnalysis.score}/100
              </span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 dark:text-white mb-4">SEO Tools</h4>
          <div className="space-y-3">
            <button
              onClick={handleGenerateSitemap}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Generate XML Sitemap
            </button>
            <button
              onClick={handleGenerateRobots}
              className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Generate Robots.txt
            </button>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div>
        <h4 className="font-medium text-gray-900 dark:text-white mb-4">
          SEO Recommendations ({overallAnalysis.allRecommendations.length})
        </h4>
        <div className="space-y-3">
          {overallAnalysis.allRecommendations.length === 0 ? (
            <div className="flex items-start space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Perfect SEO optimization!
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Your page is fully optimized for search engines.
                </p>
              </div>
            </div>
          ) : (
            overallAnalysis.allRecommendations.map((recommendation: any, index: number) => (
              <div
                key={index}
                className={`flex items-start space-x-3 p-3 rounded-lg border ${getRecommendationColor(recommendation.type)}`}
              >
                <div className={`w-2 h-2 rounded-full mt-2 ${getRecommendationIcon(recommendation.type)}`}></div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {recommendation.message}
                  </p>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-1 ${
                    recommendation.impact === 'high' ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400' :
                    recommendation.impact === 'medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400' :
                    'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                  }`}>
                    {recommendation.impact} impact
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SEOManager;