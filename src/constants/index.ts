// API Configuration
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5001/api";

// API Endpoints
export const API_ENDPOINTS = {
  // Projects
  PROJECTS: "/projects",
  PROJECTS_FEATURED: "/projects/featured",
  PROJECT_BY_ID: (id: string) => `/projects/${id}`,
  GITHUB_README: (owner: string, repo: string) =>
    `/projects/${owner}/${repo}/readme`,

  // Blog
  BLOG_POSTS: "/blog/posts",
  BLOG_POSTS_FEATURED: "/blog/posts/featured",
  BLOG_POST_BY_SLUG: (slug: string) => `/blog/posts/${slug}`,
  BLOG_TAGS: "/blog/tags",

  // Templates
  TEMPLATES: "/templates",
  TEMPLATES_FEATURED: "/templates/featured",
  TEMPLATE_BY_ID: (id: string) => `/templates/${id}`,
  TEMPLATE_PURCHASE: (id: string) => `/templates/${id}/purchase`,

  // Features
  FEATURES: "/features",
  FEATURES_FEATURED: "/features/featured",
  FEATURE_BY_ID: (id: string) => `/features/${id}`,
  FEATURE_PURCHASE: (id: string) => `/features/${id}/purchase`,

  // Contact
  CONTACT: "/contact",
} as const;

// Navigation Items
export const NAVIGATION_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Apps", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Templates", href: "/templates" },
  { name: "Contact", href: "/contact" },
] as const;

// Social Links
export const SOCIAL_LINKS = {
  GITHUB: "https://github.com/yourusername",
  LINKEDIN: "https://linkedin.com/in/yourusername",
  TWITTER: "https://twitter.com/yourusername",
  EMAIL: "your.email@example.com",
} as const;

// App Configuration
export const APP_CONFIG = {
  NAME: "Mobile Dev Portfolio",
  DESCRIPTION:
    "Mobile developer specializing in iOS & Android applications, showcasing innovative mobile solutions and cutting-edge apps",
  AUTHOR: "Mobile Developer",
  URL: "https://yourportfolio.com",
  VERSION: import.meta.env.VITE_APP_VERSION || "1.0.0",
} as const;

// Theme Configuration
export const THEME_CONFIG = {
  DEFAULT_THEME: "gradient",
  STORAGE_KEY: "portfolio-theme",
  THEMES: {
    GRADIENT: "gradient",
    DARK_TEXTURED: "dark-textured",
    CYBERPUNK: "cyberpunk",
    MINIMAL: "minimal",
    FOREST: "forest",
  },
} as const;

// Background Textures
export const BACKGROUND_TEXTURES = {
  CIRCUIT:
    "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
  GRID: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
  DOTS: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
  HEXAGON:
    "url(\"data:image/svg+xml,%3Csvg width='28' height='49' viewBox='0 0 28 49' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.04' fill-rule='evenodd'%3E%3Cpolygon points='13 6 13 0 1 0 1 6 7 12 1 18 1 24 13 24 13 18 7 12'/%3E%3Cpolygon points='27 18 27 12 21 6 27 0 27 6 33 12 27 18'/%3E%3C/g%3E%3C/svg%3E\")",
} as const;

// Animation Configuration
export const ANIMATION_CONFIG = {
  DURATION: {
    FAST: 0.2,
    NORMAL: 0.3,
    SLOW: 0.5,
  },
  EASING: {
    EASE_IN: [0.4, 0, 1, 1],
    EASE_OUT: [0, 0, 0.2, 1],
    EASE_IN_OUT: [0.4, 0, 0.2, 1],
  },
} as const;

// Breakpoints (matching Tailwind CSS)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  "2XL": 1536,
} as const;

// Pagination
export const PAGINATION_CONFIG = {
  DEFAULT_PAGE_SIZE: 12,
  BLOG_PAGE_SIZE: 6,
  PROJECTS_PAGE_SIZE: 9,
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  GENERIC: "Something went wrong. Please try again.",
  NETWORK: "Network error. Please check your connection.",
  NOT_FOUND: "The requested resource was not found.",
  VALIDATION: "Please check your input and try again.",
  UNAUTHORIZED: "You are not authorized to perform this action.",
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  CONTACT_FORM: "Thank you for your message! We'll get back to you soon.",
  SUBSCRIPTION: "Successfully subscribed to updates!",
  PURCHASE: "Purchase completed successfully!",
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  THEME: "portfolio-theme",
  CART: "portfolio-cart",
  USER_PREFERENCES: "portfolio-preferences",
} as const;

// File Upload Configuration
export const UPLOAD_CONFIG = {
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_IMAGE_TYPES: ["image/jpeg", "image/png", "image/webp"],
  ALLOWED_VIDEO_TYPES: ["video/mp4", "video/webm"],
} as const;

// SEO Configuration
export const SEO_CONFIG = {
  DEFAULT_TITLE: APP_CONFIG.NAME,
  TITLE_SEPARATOR: " | ",
  DEFAULT_DESCRIPTION: APP_CONFIG.DESCRIPTION,
  DEFAULT_IMAGE: "/og-image.png",
  TWITTER_HANDLE: "@yourusername",
} as const;
