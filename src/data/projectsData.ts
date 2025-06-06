export interface TechStack {
  name: string;
  category:
    | "frontend"
    | "backend"
    | "database"
    | "cloud"
    | "tools"
    | "mobile"
    | "blockchain";
  icon?: string;
  proficiency: number; // 1-100
}

export interface ProjectMetric {
  label: string;
  value: string;
  icon?: string;
  trend?: "up" | "down" | "stable";
}

export interface CaseStudy {
  challenge: string;
  solution: string;
  results: string[];
  technicalDetails?: string;
}

export interface CodeSample {
  title: string;
  language: string;
  code: string;
  description: string;
  highlights?: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  gallery?: string[];
  techStack: TechStack[];
  category: "web" | "mobile" | "api" | "fullstack" | "ai" | "blockchain";
  status: "completed" | "in-progress" | "concept";
  timeline: string;
  teamSize?: number;
  myRole: string;
  github?: string;
  live?: string;
  demo?: string;
  caseStudy?: CaseStudy;
  metrics?: ProjectMetric[];
  codeSamples?: CodeSample[];
  features: string[];
  challenges: string[];
  learnings: string[];
  featured: boolean;
  priority: number;
  testimonial?: {
    author: string;
    role: string;
    company: string;
    content: string;
    rating: number;
  };
}

export const projects: Project[] = [
  {
    id: "ecotracker",
    title: "EcoTracker",
    subtitle: "Sustainability Analytics Platform",
    description:
      "A comprehensive sustainability platform helping companies track and reduce their carbon footprint with real-time analytics and AI-powered insights.",
    longDescription:
      "EcoTracker is an enterprise-grade sustainability platform that revolutionizes how companies approach environmental responsibility. Built with a microservices architecture, it processes millions of data points to provide actionable insights for carbon footprint reduction.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
    ],
    techStack: [
      { name: "React", category: "frontend", proficiency: 95 },
      { name: "TypeScript", category: "frontend", proficiency: 90 },
      { name: "Node.js", category: "backend", proficiency: 88 },
      { name: "PostgreSQL", category: "database", proficiency: 85 },
      { name: "AWS", category: "cloud", proficiency: 82 },
      { name: "D3.js", category: "frontend", proficiency: 78 },
      { name: "Redis", category: "database", proficiency: 80 },
      { name: "Docker", category: "tools", proficiency: 85 },
    ],
    category: "fullstack",
    status: "completed",
    timeline: "6 months",
    teamSize: 5,
    myRole: "Lead Full Stack Developer & Technical Architect",
    github: "https://github.com/princenyamadi/ecotracker",
    live: "https://ecotracker-demo.com",
    demo: "https://ecotracker-demo.com/demo",
    caseStudy: {
      challenge:
        "GreenTech Solutions needed a way to help their enterprise clients track, analyze, and reduce carbon emissions across complex supply chains with real-time data processing and actionable insights.",
      solution:
        "Developed a microservices-based platform with real-time data ingestion, AI-powered analytics, and an intuitive dashboard. Implemented automated reporting, predictive modeling, and integration with existing enterprise systems.",
      results: [
        "40% increase in user engagement within 3 months",
        "60% reduction in data processing time",
        "$2.1M ARR generated for the client",
        "25+ enterprise customers onboarded",
        "99.9% uptime achieved with auto-scaling infrastructure",
      ],
      technicalDetails:
        "Built using event-driven architecture with Apache Kafka for real-time data streaming, implemented caching strategies with Redis, and used machine learning models for predictive analytics.",
    },
    metrics: [
      { label: "Users", value: "100K+", trend: "up" },
      { label: "Data Points", value: "10M+", trend: "up" },
      { label: "Uptime", value: "99.9%", trend: "stable" },
      { label: "Response Time", value: "<200ms", trend: "up" },
    ],
    codeSamples: [
      {
        title: "Real-time Data Processing Pipeline",
        language: "typescript",
        description:
          "Event-driven data processing with type safety and error handling",
        code: `interface EmissionData {
  source: string;
  value: number;
  timestamp: Date;
  metadata: Record<string, any>;
}

class EmissionProcessor {
  private kafka: KafkaClient;
  private redis: RedisClient;
  
  async processEmissionEvent(data: EmissionData): Promise<void> {
    try {
      // Validate and transform data
      const processed = await this.validateAndTransform(data);
      
      // Store in time-series database
      await this.storeTimeSeries(processed);
      
      // Update real-time aggregations
      await this.updateAggregations(processed);
      
      // Trigger alerts if thresholds exceeded
      await this.checkThresholds(processed);
      
    } catch (error) {
      await this.handleProcessingError(error, data);
    }
  }
}`,
        highlights: [
          "Type-safe data processing",
          "Error handling",
          "Real-time aggregations",
        ],
      },
    ],
    features: [
      "Real-time carbon footprint tracking",
      "AI-powered emission predictions",
      "Interactive sustainability dashboard",
      "Automated compliance reporting",
      "Supply chain integration",
      "Mobile-responsive design",
    ],
    challenges: [
      "Processing millions of data points in real-time",
      "Integrating with diverse enterprise systems",
      "Ensuring 99.9% uptime for mission-critical operations",
      "Building intuitive visualizations for complex data",
    ],
    learnings: [
      "Microservices architecture for scalability",
      "Event-driven design patterns",
      "Advanced data visualization techniques",
      "Enterprise-grade security implementations",
    ],
    featured: true,
    priority: 1,
    testimonial: {
      author: "Sarah Mitchell",
      role: "CEO",
      company: "GreenTech Solutions",
      content:
        "Alex transformed our sustainability platform vision into reality. The real-time analytics dashboard became our competitive advantage.",
      rating: 5,
    },
  },
  {
    id: "devflow",
    title: "DevFlow",
    subtitle: "Collaborative Development Workspace",
    description:
      "A collaborative development workspace that streamlines team workflows with integrated code review, task management, and deployment pipelines.",
    longDescription:
      "DevFlow revolutionizes how development teams collaborate by providing an integrated workspace that combines code review, project management, and CI/CD pipelines in a single, intuitive platform.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
    ],
    techStack: [
      { name: "Vue.js", category: "frontend", proficiency: 85 },
      { name: "Python", category: "backend", proficiency: 88 },
      { name: "FastAPI", category: "backend", proficiency: 82 },
      { name: "Redis", category: "database", proficiency: 80 },
      { name: "Docker", category: "tools", proficiency: 85 },
      { name: "WebSocket", category: "backend", proficiency: 78 },
    ],
    category: "web",
    status: "completed",
    timeline: "8 months",
    teamSize: 4,
    myRole: "Full Stack Developer & DevOps Engineer",
    github: "https://github.com/princenyamadi/devflow",
    live: "https://devflow-app.com",
    caseStudy: {
      challenge:
        "Development teams were using multiple disconnected tools for code review, project management, and deployments, leading to inefficiencies and communication gaps.",
      solution:
        "Created an integrated platform with real-time collaboration features, automated workflows, and seamless integration with existing development tools.",
      results: [
        "50% reduction in deployment time",
        "30% improvement in code review efficiency",
        "90% team adoption rate within first month",
        "200+ active development teams using the platform",
      ],
    },
    metrics: [
      { label: "Teams", value: "200+", trend: "up" },
      { label: "Code Reviews", value: "5K+/month", trend: "up" },
      { label: "Deployments", value: "50% faster", trend: "up" },
    ],
    features: [
      "Integrated code review system",
      "Real-time collaboration tools",
      "Automated CI/CD pipelines",
      "Project management dashboard",
      "Team analytics and insights",
      "Third-party integrations",
    ],
    challenges: [
      "Real-time synchronization across multiple users",
      "Complex workflow automation",
      "Integration with various development tools",
      "Scaling WebSocket connections",
    ],
    learnings: [
      "Real-time application architecture",
      "WebSocket optimization techniques",
      "DevOps automation strategies",
      "Team collaboration patterns",
    ],
    featured: true,
    priority: 2,
  },
  {
    id: "financeai",
    title: "FinanceAI",
    subtitle: "AI-Powered Personal Finance App",
    description:
      "Personal finance management app with AI-powered budget recommendations and investment insights for smarter financial decisions.",
    longDescription:
      "FinanceAI combines machine learning algorithms with intuitive design to provide personalized financial guidance, helping users make informed decisions about budgeting, saving, and investing.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    techStack: [
      { name: "Next.js", category: "frontend", proficiency: 90 },
      { name: "TensorFlow", category: "backend", proficiency: 75 },
      { name: "MongoDB", category: "database", proficiency: 82 },
      { name: "Stripe", category: "tools", proficiency: 80 },
      { name: "Chart.js", category: "frontend", proficiency: 85 },
    ],
    category: "ai",
    status: "completed",
    timeline: "5 months",
    teamSize: 3,
    myRole: "Lead Full Stack Developer",
    github: "https://github.com/princenyamadi/financeai",
    live: "https://financeai-demo.com",
    caseStudy: {
      challenge:
        "Users struggle with personal finance management and lack personalized insights to make informed financial decisions.",
      solution:
        "Developed an AI-powered platform that analyzes spending patterns, provides personalized recommendations, and offers investment insights.",
      results: [
        "75% user engagement increase",
        "40% improvement in user savings rates",
        "4.8/5 app store rating",
        "50K+ active monthly users",
      ],
    },
    features: [
      "AI-powered budget recommendations",
      "Investment portfolio analysis",
      "Expense categorization and tracking",
      "Financial goal setting and monitoring",
      "Secure bank account integration",
      "Personalized financial insights",
    ],
    challenges: [
      "Implementing secure financial data handling",
      "Training AI models for financial predictions",
      "Creating intuitive data visualizations",
      "Ensuring regulatory compliance",
    ],
    learnings: [
      "Machine learning in finance applications",
      "Financial data security best practices",
      "Regulatory compliance (PCI DSS)",
      "Advanced data visualization techniques",
    ],
    featured: true,
    priority: 3,
  },
  {
    id: "healthtrack",
    title: "HealthTrack",
    subtitle: "Comprehensive Health Monitoring Platform",
    description:
      "A comprehensive health monitoring platform that integrates wearable devices and provides personalized health insights.",
    longDescription:
      "HealthTrack provides a unified platform for health monitoring, integrating data from various wearable devices and providing AI-powered health insights and recommendations.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    techStack: [
      { name: "React Native", category: "mobile", proficiency: 80 },
      { name: "Node.js", category: "backend", proficiency: 88 },
      { name: "GraphQL", category: "backend", proficiency: 75 },
      { name: "MongoDB", category: "database", proficiency: 82 },
      { name: "AWS IoT", category: "cloud", proficiency: 70 },
    ],
    category: "mobile",
    status: "in-progress",
    timeline: "4 months",
    teamSize: 6,
    myRole: "Mobile Developer & IoT Integration Specialist",
    github: "https://github.com/princenyamadi/healthtrack",
    features: [
      "Wearable device integration",
      "Real-time health monitoring",
      "AI-powered health insights",
      "Personalized recommendations",
      "Healthcare provider integration",
      "Emergency alert system",
    ],
    challenges: [
      "IoT device integration complexity",
      "Real-time data synchronization",
      "Healthcare data privacy compliance",
      "Cross-platform mobile development",
    ],
    learnings: [
      "IoT architecture patterns",
      "Healthcare industry standards",
      "React Native optimization",
      "Real-time data processing",
    ],
    featured: false,
    priority: 4,
  },
  {
    id: "cryptoanalyzer",
    title: "CryptoAnalyzer",
    subtitle: "Blockchain Analytics Dashboard",
    description:
      "Advanced cryptocurrency analytics platform with real-time market data, portfolio tracking, and trading insights.",
    longDescription:
      "CryptoAnalyzer provides comprehensive cryptocurrency market analysis with advanced charting, portfolio management, and algorithmic trading insights.",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop",
    techStack: [
      { name: "React", category: "frontend", proficiency: 95 },
      { name: "Web3.js", category: "blockchain", proficiency: 70 },
      { name: "Solidity", category: "blockchain", proficiency: 65 },
      { name: "Node.js", category: "backend", proficiency: 88 },
      { name: "PostgreSQL", category: "database", proficiency: 85 },
    ],
    category: "blockchain",
    status: "concept",
    timeline: "3 months",
    myRole: "Blockchain Developer & Data Analyst",
    features: [
      "Real-time cryptocurrency tracking",
      "Advanced charting and analytics",
      "Portfolio management tools",
      "DeFi protocol integration",
      "Automated trading strategies",
      "Market sentiment analysis",
    ],
    challenges: [
      "Blockchain data indexing",
      "Real-time price feeds integration",
      "Complex financial calculations",
      "Cryptocurrency market volatility handling",
    ],
    learnings: [
      "Blockchain development fundamentals",
      "DeFi protocol interactions",
      "Financial data analysis",
      "Cryptocurrency market dynamics",
    ],
    featured: false,
    priority: 5,
  },
];

export const projectCategories = [
  { id: "all", name: "All Projects", count: projects.length },
  {
    id: "web",
    name: "Web Applications",
    count: projects.filter((p) => p.category === "web").length,
  },
  {
    id: "fullstack",
    name: "Full Stack",
    count: projects.filter((p) => p.category === "fullstack").length,
  },
  {
    id: "mobile",
    name: "Mobile Apps",
    count: projects.filter((p) => p.category === "mobile").length,
  },
  {
    id: "ai",
    name: "AI/ML",
    count: projects.filter((p) => p.category === "ai").length,
  },
  {
    id: "blockchain",
    name: "Blockchain",
    count: projects.filter((p) => p.category === "blockchain").length,
  },
];

export const projectStats = {
  totalProjects: projects.length,
  completedProjects: projects.filter((p) => p.status === "completed").length,
  inProgressProjects: projects.filter((p) => p.status === "in-progress").length,
  totalTeamMembers: projects.reduce((sum, p) => sum + (p.teamSize || 1), 0),
  averageTimeline: "5 months",
  techStackVariety: [
    ...new Set(projects.flatMap((p) => p.techStack.map((t) => t.name))),
  ].length,
};
