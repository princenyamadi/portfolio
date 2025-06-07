import { useEffect } from "react";

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "profile";
  twitterCard?: "summary" | "summary_large_image" | "app" | "player";
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterSite?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  structuredData?: any;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

interface SEOConfig {
  defaultTitle: string;
  titleSeparator: string;
  defaultDescription: string;
  defaultImage: string;
  twitterHandle: string;
  siteUrl: string;
  siteName: string;
}

const defaultConfig: SEOConfig = {
  defaultTitle: "Prince Nyamadi - Full Stack Developer Portfolio",
  titleSeparator: " | ",
  defaultDescription:
    "Professional portfolio showcasing innovative web applications, mobile apps, and software solutions.",
  defaultImage: "/og-image.png",
  twitterHandle: "@princenyamadi",
  siteUrl: "https://yourportfolio.com",
  siteName: "Prince Nyamadi Portfolio",
};

export const useSEO = (
  seoData: SEOData = {},
  config: Partial<SEOConfig> = {}
) => {
  const seoConfig = { ...defaultConfig, ...config };

  // Build final SEO values with fallbacks
  const finalTitle = seoData.title
    ? `${seoData.title}${seoConfig.titleSeparator}${seoConfig.siteName}`
    : seoConfig.defaultTitle;

  const finalDescription = seoData.description || seoConfig.defaultDescription;
  const finalKeywords = seoData.keywords?.join(", ") || "";
  const finalImage = seoData.ogImage || seoConfig.defaultImage;
  const finalUrl = seoData.canonicalUrl || window.location.href;

  // Open Graph data
  const ogTitle = seoData.ogTitle || seoData.title || seoConfig.defaultTitle;
  const ogDescription = seoData.ogDescription || finalDescription;
  const ogType = seoData.ogType || "website";

  // Twitter Card data
  const twitterCard = seoData.twitterCard || "summary_large_image";
  const twitterTitle =
    seoData.twitterTitle || seoData.title || seoConfig.defaultTitle;
  const twitterDescription = seoData.twitterDescription || finalDescription;
  const twitterImage = seoData.twitterImage || finalImage;
  const twitterSite = seoData.twitterSite || seoConfig.twitterHandle;

  // Robots meta
  const robotsContent = [
    seoData.noIndex ? "noindex" : "index",
    seoData.noFollow ? "nofollow" : "follow",
  ].join(", ");

  useEffect(() => {
    // Update document title for better UX
    document.title = finalTitle;
  }, [finalTitle]);

  // Return SEO configuration object
  return {
    title: finalTitle,
    description: finalDescription,
    keywords: finalKeywords,
    canonicalUrl: finalUrl,
    ogTitle,
    ogDescription,
    ogImage: finalImage,
    ogType,
    ogUrl: finalUrl,
    ogSiteName: seoConfig.siteName,
    twitterCard,
    twitterTitle,
    twitterDescription,
    twitterImage,
    twitterSite,
    robotsContent,
    structuredData: seoData.structuredData,
    publishedTime: seoData.publishedTime,
    modifiedTime: seoData.modifiedTime,
    author: seoData.author,
    siteUrl: seoConfig.siteUrl,
  };
};

// Utility function to generate structured data for different content types
export const generateStructuredData = {
  person: (data: {
    name: string;
    jobTitle: string;
    url: string;
    image?: string;
    email?: string;
    sameAs?: string[];
  }) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: data.name,
    jobTitle: data.jobTitle,
    url: data.url,
    image: data.image,
    email: data.email,
    sameAs: data.sameAs || [],
  }),

  website: (data: {
    name: string;
    url: string;
    description: string;
    author: string;
  }) => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: data.name,
    url: data.url,
    description: data.description,
    author: {
      "@type": "Person",
      name: data.author,
    },
  }),

  article: (data: {
    headline: string;
    description: string;
    author: string;
    datePublished: string;
    dateModified?: string;
    image?: string;
    url: string;
  }) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.headline,
    description: data.description,
    author: {
      "@type": "Person",
      name: data.author,
    },
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
    image: data.image,
    url: data.url,
  }),

  project: (data: {
    name: string;
    description: string;
    author: string;
    url: string;
    image?: string;
    technologies?: string[];
  }) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: data.name,
    description: data.description,
    creator: {
      "@type": "Person",
      name: data.author,
    },
    url: data.url,
    image: data.image,
    keywords: data.technologies?.join(", "),
  }),
};
