interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}

interface SitemapData {
  projects: Array<{
    id: string;
    slug?: string;
    updatedAt: Date;
  }>;
  blogPosts: Array<{
    id: string;
    slug?: string;
    updatedAt: Date;
    published?: boolean;
  }>;
  staticPages: Array<{
    path: string;
    priority: number;
    changefreq: SitemapUrl["changefreq"];
  }>;
}

export class SitemapGenerator {
  private baseUrl: string;

  constructor(baseUrl: string = "https://yourportfolio.com") {
    this.baseUrl = baseUrl.replace(/\/$/, ""); // Remove trailing slash
  }

  /**
   * Generate complete XML sitemap
   */
  public generateSitemap(data: SitemapData): string {
    const urls: SitemapUrl[] = [];

    // Add static pages
    data.staticPages.forEach((page) => {
      urls.push({
        loc: `${this.baseUrl}${page.path}`,
        changefreq: page.changefreq,
        priority: page.priority,
        lastmod: new Date().toISOString().split("T")[0],
      });
    });

    // Add projects
    data.projects.forEach((project) => {
      const slug = project.slug || project.id;
      urls.push({
        loc: `${this.baseUrl}/projects/${slug}`,
        lastmod: project.updatedAt.toISOString().split("T")[0],
        changefreq: "monthly",
        priority: 0.8,
      });
    });

    // Add published blog posts
    data.blogPosts
      .filter((post) => post.published !== false)
      .forEach((post) => {
        const slug = post.slug || post.id;
        urls.push({
          loc: `${this.baseUrl}/blog/${slug}`,
          lastmod: post.updatedAt.toISOString().split("T")[0],
          changefreq: "monthly",
          priority: 0.7,
        });
      });

    return this.buildXmlSitemap(urls);
  }

  /**
   * Generate robots.txt content
   */
  public generateRobotsTxt(
    options: {
      allowAll?: boolean;
      disallowedPaths?: string[];
      crawlDelay?: number;
      sitemapUrl?: string;
    } = {}
  ): string {
    const {
      allowAll = true,
      disallowedPaths = ["/admin", "/api"],
      crawlDelay,
      sitemapUrl = `${this.baseUrl}/sitemap.xml`,
    } = options;

    let robots = "";

    // User-agent directive
    robots += "User-agent: *\n";

    // Allow/Disallow directives
    if (allowAll) {
      robots += "Allow: /\n";
    }

    disallowedPaths.forEach((path) => {
      robots += `Disallow: ${path}\n`;
    });

    // Crawl delay if specified
    if (crawlDelay) {
      robots += `Crawl-delay: ${crawlDelay}\n`;
    }

    // Sitemap reference
    robots += `\nSitemap: ${sitemapUrl}\n`;

    return robots;
  }

  /**
   * Get default static pages configuration
   */
  public static getDefaultStaticPages(): SitemapData["staticPages"] {
    return [
      {
        path: "/",
        priority: 1.0,
        changefreq: "weekly",
      },
      {
        path: "/about",
        priority: 0.9,
        changefreq: "monthly",
      },
      {
        path: "/projects",
        priority: 0.9,
        changefreq: "weekly",
      },
      {
        path: "/blog",
        priority: 0.8,
        changefreq: "daily",
      },
      {
        path: "/contact",
        priority: 0.7,
        changefreq: "monthly",
      },
      {
        path: "/templates",
        priority: 0.6,
        changefreq: "monthly",
      },
    ];
  }

  /**
   * Build XML sitemap from URLs
   */
  private buildXmlSitemap(urls: SitemapUrl[]): string {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    urls.forEach((url) => {
      xml += "  <url>\n";
      xml += `    <loc>${this.escapeXml(url.loc)}</loc>\n`;

      if (url.lastmod) {
        xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
      }

      if (url.changefreq) {
        xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
      }

      if (url.priority !== undefined) {
        xml += `    <priority>${url.priority.toFixed(1)}</priority>\n`;
      }

      xml += "  </url>\n";
    });

    xml += "</urlset>\n";
    return xml;
  }

  /**
   * Escape XML special characters
   */
  private escapeXml(text: string): string {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
}

/**
 * Generate and download sitemap file
 */
export const downloadSitemap = (
  sitemapContent: string,
  filename: string = "sitemap.xml"
) => {
  const blob = new Blob([sitemapContent], { type: "application/xml" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
};

/**
 * Generate and download robots.txt file
 */
export const downloadRobotsTxt = (
  robotsContent: string,
  filename: string = "robots.txt"
) => {
  const blob = new Blob([robotsContent], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
};

/**
 * SEO analysis utilities
 */
export const seoAnalyzer: {
  analyzeTitle: (title: string) => any;
  analyzeDescription: (description: string) => any;
  analyzeKeywords: (
    keywords: string[],
    title: string,
    description: string
  ) => any;
  calculateOverallScore: (
    titleAnalysis: any,
    descriptionAnalysis: any,
    keywordsAnalysis: any
  ) => any;
} = {
  /**
   * Analyze page title
   */
  analyzeTitle: (title: string) => {
    const length = title.length;
    const recommendations = [];

    if (length < 30) {
      recommendations.push({
        type: "warning" as const,
        message:
          "Title is too short. Consider adding more descriptive keywords.",
        impact: "medium" as const,
      });
    } else if (length > 60) {
      recommendations.push({
        type: "error" as const,
        message: "Title is too long and may be truncated in search results.",
        impact: "high" as const,
      });
    } else {
      recommendations.push({
        type: "success" as const,
        message: "Title length is optimal for search engines.",
        impact: "low" as const,
      });
    }

    return {
      score: length >= 30 && length <= 60 ? 100 : length < 30 ? 60 : 40,
      length,
      recommendations,
    };
  },

  /**
   * Analyze meta description
   */
  analyzeDescription: (description: string) => {
    const length = description.length;
    const recommendations = [];

    if (length < 120) {
      recommendations.push({
        type: "warning" as const,
        message:
          "Description is too short. Add more details to improve click-through rates.",
        impact: "medium" as const,
      });
    } else if (length > 160) {
      recommendations.push({
        type: "error" as const,
        message:
          "Description is too long and may be truncated in search results.",
        impact: "high" as const,
      });
    } else {
      recommendations.push({
        type: "success" as const,
        message: "Description length is optimal for search engines.",
        impact: "low" as const,
      });
    }

    return {
      score: length >= 120 && length <= 160 ? 100 : length < 120 ? 70 : 50,
      length,
      recommendations,
    };
  },

  /**
   * Analyze keywords
   */
  analyzeKeywords: (keywords: string[], title: string, description: string) => {
    const recommendations = [];
    const titleLower = title.toLowerCase();
    const descriptionLower = description.toLowerCase();

    if (keywords.length === 0) {
      recommendations.push({
        type: "warning" as const,
        message: "No keywords specified. Add relevant keywords for better SEO.",
        impact: "medium" as const,
      });
    } else if (keywords.length > 10) {
      recommendations.push({
        type: "warning" as const,
        message: "Too many keywords. Focus on 5-10 most relevant keywords.",
        impact: "low" as const,
      });
    }

    // Check if keywords appear in title and description
    const keywordsInTitle = keywords.filter((keyword) =>
      titleLower.includes(keyword.toLowerCase())
    ).length;

    const keywordsInDescription = keywords.filter((keyword) =>
      descriptionLower.includes(keyword.toLowerCase())
    ).length;

    if (keywordsInTitle === 0 && keywords.length > 0) {
      recommendations.push({
        type: "error" as const,
        message:
          "None of your keywords appear in the title. Include primary keywords in the title.",
        impact: "high" as const,
      });
    }

    if (keywordsInDescription === 0 && keywords.length > 0) {
      recommendations.push({
        type: "warning" as const,
        message:
          "None of your keywords appear in the description. Include keywords naturally in the description.",
        impact: "medium" as const,
      });
    }

    const score =
      keywords.length === 0
        ? 30
        : (keywordsInTitle > 0 ? 50 : 0) +
          (keywordsInDescription > 0 ? 30 : 0) +
          (keywords.length <= 10 ? 20 : 10);

    return {
      score: Math.min(score, 100),
      keywordsInTitle,
      keywordsInDescription,
      recommendations,
    };
  },

  /**
   * Overall SEO score calculation
   */
  calculateOverallScore: (
    titleAnalysis: ReturnType<typeof seoAnalyzer.analyzeTitle>,
    descriptionAnalysis: ReturnType<typeof seoAnalyzer.analyzeDescription>,
    keywordsAnalysis: ReturnType<typeof seoAnalyzer.analyzeKeywords>
  ) => {
    const weights = {
      title: 0.4,
      description: 0.3,
      keywords: 0.3,
    };

    const score = Math.round(
      titleAnalysis.score * weights.title +
        descriptionAnalysis.score * weights.description +
        keywordsAnalysis.score * weights.keywords
    );

    let rating: "excellent" | "good" | "fair" | "poor";
    if (score >= 90) rating = "excellent";
    else if (score >= 70) rating = "good";
    else if (score >= 50) rating = "fair";
    else rating = "poor";

    return {
      score,
      rating,
      allRecommendations: [
        ...titleAnalysis.recommendations,
        ...descriptionAnalysis.recommendations,
        ...keywordsAnalysis.recommendations,
      ],
    };
  },
};
