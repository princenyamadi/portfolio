import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSEO, SEOData } from '../hooks/useSEO';

interface SEOHeadProps {
  seoData?: SEOData;
  config?: {
    defaultTitle?: string;
    titleSeparator?: string;
    defaultDescription?: string;
    defaultImage?: string;
    twitterHandle?: string;
    siteUrl?: string;
    siteName?: string;
  };
}

const SEOHead: React.FC<SEOHeadProps> = ({ seoData = {}, config = {} }) => {
  const seo = useSEO(seoData, config);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {seo.keywords && <meta name="keywords" content={seo.keywords} />}
      {seo.author && <meta name="author" content={seo.author} />}
      <meta name="robots" content={seo.robotsContent} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seo.canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={seo.ogType} />
      <meta property="og:title" content={seo.ogTitle} />
      <meta property="og:description" content={seo.ogDescription} />
      <meta property="og:image" content={`${seo.siteUrl}${seo.ogImage}`} />
      <meta property="og:url" content={seo.ogUrl} />
      <meta property="og:site_name" content={seo.ogSiteName} />
      {seo.publishedTime && <meta property="article:published_time" content={seo.publishedTime} />}
      {seo.modifiedTime && <meta property="article:modified_time" content={seo.modifiedTime} />}
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content={seo.twitterCard} />
      <meta name="twitter:title" content={seo.twitterTitle} />
      <meta name="twitter:description" content={seo.twitterDescription} />
      <meta name="twitter:image" content={`${seo.siteUrl}${seo.twitterImage}`} />
      {seo.twitterSite && <meta name="twitter:site" content={seo.twitterSite} />}
      {seo.author && <meta name="twitter:creator" content={seo.author} />}
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      
      {/* JSON-LD Structured Data */}
      {seo.structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(seo.structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead; 