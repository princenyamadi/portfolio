// Core Data Models (matching backend types)
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  images: string[];
  featured: boolean;
  readme?: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  tags: string[];
  coverImage?: string;
  slug: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Template {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  demoUrl?: string;
  technologies: string[];
  category: string;
  featured: boolean;
  downloadCount: number;
  downloadUrl: string;
  sourceCodeUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  price: number;
  sourceCodeUrl?: string;
  technologies: string[];
  category: string;
  downloadCount: number;
  createdAt: string;
  updatedAt: string;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface PurchaseFormData {
  itemId: string;
  itemType: "template" | "feature";
  customerEmail: string;
  customerName?: string;
}

// Navigation Types
export interface NavItem {
  name: string;
  href: string;
  current?: boolean;
}

// Component Props Types
export interface PageProps {
  className?: string;
}

export interface SectionProps {
  className?: string;
  children?: React.ReactNode;
}

// GitHub README Types
export interface GitHubReadme {
  content: string;
  html: string;
  downloadUrl: string;
}

// Store Types
export interface AppState {
  // Theme
  isDarkMode: boolean;
  toggleDarkMode: () => void;

  // Loading states
  isLoading: boolean;
  setLoading: (loading: boolean) => void;

  // Error handling
  error: string | null;
  setError: (error: string | null) => void;
  clearError: () => void;
}

export interface ProjectsState {
  projects: Project[];
  featuredProjects: Project[];
  currentProject: Project | null;
  isLoading: boolean;
  error: string | null;

  // Actions
  setProjects: (projects: Project[]) => void;
  setFeaturedProjects: (projects: Project[]) => void;
  setCurrentProject: (project: Project | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
}

export interface BlogState {
  posts: BlogPost[];
  featuredPosts: BlogPost[];
  currentPost: BlogPost | null;
  tags: string[];
  isLoading: boolean;
  error: string | null;

  // Actions
  setPosts: (posts: BlogPost[]) => void;
  setFeaturedPosts: (posts: BlogPost[]) => void;
  setCurrentPost: (post: BlogPost | null) => void;
  setTags: (tags: string[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
}

// Utility Types
export type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";

export interface ViewportDimensions {
  width: number;
  height: number;
  breakpoint: Breakpoint;
}

// Animation Types
export interface MotionProps {
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  variants?: any;
}
