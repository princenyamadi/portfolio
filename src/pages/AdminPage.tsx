import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Code, 
  MessageSquare, 
  Star,
  BarChart3,
  Shield,
  Database,
  LogOut,
  Image,
  Search,
  Users
} from 'lucide-react';
import { ProjectsAdmin } from '../components/admin/ProjectsAdmin';
import { BlogAdmin } from '../components/admin/BlogAdmin';
import { SkillsAdmin } from '../components/admin/SkillsAdmin';
import { TestimonialsAdmin } from '../components/admin/TestimonialsAdmin';
import { MediaLibrary } from '../components/admin/MediaLibrary';
import { ContentAnalytics } from '../components/admin/ContentAnalytics';
import { ImportExport } from '../components/admin/ImportExport';
import SEOManager from '../components/admin/SEOManager';
import ContactManager from '../components/admin/ContactManager';
import { useAuth } from '../hooks/useAuth';
import { getUserInitials, getUserDisplayName } from '../services/authService';

type AdminSection = 'projects' | 'blog' | 'skills' | 'testimonials' | 'media' | 'analytics' | 'import-export' | 'seo' | 'contacts' | 'overview';

const AdminPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AdminSection>('overview');
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    if (confirm('Are you sure you want to sign out?')) {
      await signOut();
    }
  };

  const menuItems = [
    {
      id: 'overview' as AdminSection,
      label: 'Overview',
      icon: BarChart3,
      description: 'Dashboard overview'
    },
    {
      id: 'projects' as AdminSection,
      label: 'Projects',
      icon: Code,
      description: 'Manage portfolio projects'
    },
    {
      id: 'blog' as AdminSection,
      label: 'Blog Posts',
      icon: FileText,
      description: 'Write and manage blog posts'
    },
    {
      id: 'skills' as AdminSection,
      label: 'Skills',
      icon: Star,
      description: 'Update technical skills'
    },
    {
      id: 'testimonials' as AdminSection,
      label: 'Testimonials',
      icon: MessageSquare,
      description: 'Manage client testimonials'
    },
    {
      id: 'media' as AdminSection,
      label: 'Media Library',
      icon: Image,
      description: 'Manage images and files'
    },
    {
      id: 'analytics' as AdminSection,
      label: 'Analytics',
      icon: BarChart3,
      description: 'Content performance insights'
    },
    {
      id: 'import-export' as AdminSection,
      label: 'Import/Export',
      icon: Database,
      description: 'Backup and migrate data'
    },
    {
      id: 'seo' as AdminSection,
      label: 'SEO Manager',
      icon: Search,
      description: 'Search engine optimization'
    },
    {
      id: 'contacts' as AdminSection,
      label: 'Contact & Leads',
      icon: Users,
      description: 'Manage leads and contact forms'
    },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'projects':
        return <ProjectsAdmin />;
      case 'blog':
        return <BlogAdmin />;
      case 'skills':
        return <SkillsAdmin />;
      case 'testimonials':
        return <TestimonialsAdmin />;
      case 'media':
        return <MediaLibrary />;
      case 'analytics':
        return <ContentAnalytics />;
      case 'import-export':
        return <ImportExport />;
      case 'seo':
        return <SEOManager />;
      case 'contacts':
        return <ContactManager />;
      case 'overview':
      default:
        return <AdminOverview />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Panel | Portfolio CMS</title>
        <meta name="description" content="Content Management System for Portfolio" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-card border-r border-border min-h-screen">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-8">
                <Shield className="w-8 h-8 text-primary" />
                <div>
                  <h1 className="text-xl font-bold text-foreground">Portfolio CMS</h1>
                  <p className="text-sm text-muted-foreground">Admin Panel</p>
                </div>
              </div>

              <nav className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeSection === item.id
                          ? 'bg-primary text-primary-foreground'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <div>
                        <div className="font-medium">{item.label}</div>
                        <div className="text-xs opacity-75">{item.description}</div>
                      </div>
                    </button>
                  );
                })}
              </nav>

              {/* User Profile & Sign Out */}
              <div className="mt-auto pt-4 border-t border-border">
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg mb-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                    {getUserInitials(user)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-foreground truncate">
                      {getUserDisplayName(user)}
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      {user?.email}
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={handleSignOut}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-sm">Sign Out</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="p-8">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {renderContent()}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Admin Overview Component
const AdminOverview: React.FC = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage your portfolio content</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-2">
            <Code className="w-8 h-8 text-blue-500" />
            <h3 className="text-lg font-semibold text-foreground">Projects</h3>
          </div>
          <p className="text-2xl font-bold text-foreground">0</p>
          <p className="text-sm text-muted-foreground">Portfolio projects</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-8 h-8 text-green-500" />
            <h3 className="text-lg font-semibold text-foreground">Blog Posts</h3>
          </div>
          <p className="text-2xl font-bold text-foreground">0</p>
          <p className="text-sm text-muted-foreground">Published articles</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-2">
            <Star className="w-8 h-8 text-yellow-500" />
            <h3 className="text-lg font-semibold text-foreground">Skills</h3>
          </div>
          <p className="text-2xl font-bold text-foreground">0</p>
          <p className="text-sm text-muted-foreground">Technical skills</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-2">
            <MessageSquare className="w-8 h-8 text-purple-500" />
            <h3 className="text-lg font-semibold text-foreground">Testimonials</h3>
          </div>
          <p className="text-2xl font-bold text-foreground">0</p>
          <p className="text-sm text-muted-foreground">Client reviews</p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Database className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Getting Started</h2>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-medium">1</div>
            <div>
              <h3 className="font-medium text-foreground">Add Your First Project</h3>
              <p className="text-sm text-muted-foreground">Navigate to Projects and create your first portfolio project</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-medium">2</div>
            <div>
              <h3 className="font-medium text-foreground">Write a Blog Post</h3>
              <p className="text-sm text-muted-foreground">Share your knowledge by creating your first blog post</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-medium">3</div>
            <div>
              <h3 className="font-medium text-foreground">Update Your Skills</h3>
              <p className="text-sm text-muted-foreground">Add your technical skills and proficiency levels</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-medium">4</div>
            <div>
              <h3 className="font-medium text-foreground">Collect Testimonials</h3>
              <p className="text-sm text-muted-foreground">Add client testimonials to build credibility</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage; 