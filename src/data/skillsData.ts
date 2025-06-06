export interface Skill {
  name: string;
  level: number; // 1-100
  years: string;
  category: string;
  description: string;
  projects?: number;
  icon?: string;
}

export interface SkillCategory {
  name: string;
  color: string;
  bgColor: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Development",
    color: "from-blue-400 to-cyan-400",
    bgColor: "from-blue-500/10 to-cyan-500/10",
    skills: [
      {
        name: "React",
        level: 95,
        years: "5+ years",
        category: "Frontend",
        description:
          "Advanced React patterns, hooks, context, performance optimization",
        projects: 25,
        icon: "⚛️",
      },
      {
        name: "TypeScript",
        level: 90,
        years: "4+ years",
        category: "Frontend",
        description: "Type-safe development, advanced types, utility types",
        projects: 20,
        icon: "🔷",
      },
      {
        name: "Next.js",
        level: 88,
        years: "3+ years",
        category: "Frontend",
        description: "SSR, SSG, API routes, performance optimization",
        projects: 15,
        icon: "▲",
      },
      {
        name: "Vue.js",
        level: 75,
        years: "2+ years",
        category: "Frontend",
        description: "Vue 3, Composition API, Pinia state management",
        projects: 8,
        icon: "💚",
      },
      {
        name: "Tailwind CSS",
        level: 92,
        years: "3+ years",
        category: "Frontend",
        description:
          "Utility-first CSS, custom configurations, responsive design",
        projects: 30,
        icon: "🎨",
      },
      {
        name: "SASS/SCSS",
        level: 85,
        years: "4+ years",
        category: "Frontend",
        description: "Advanced features, mixins, functions, architecture",
        projects: 18,
        icon: "💄",
      },
    ],
  },
  {
    name: "Backend Development",
    color: "from-green-400 to-emerald-400",
    bgColor: "from-green-500/10 to-emerald-500/10",
    skills: [
      {
        name: "Node.js",
        level: 90,
        years: "5+ years",
        category: "Backend",
        description: "Express, Fastify, microservices, async programming",
        projects: 22,
        icon: "🟢",
      },
      {
        name: "Python",
        level: 85,
        years: "4+ years",
        category: "Backend",
        description: "FastAPI, Django, Flask, data processing",
        projects: 16,
        icon: "🐍",
      },
      {
        name: "PostgreSQL",
        level: 82,
        years: "4+ years",
        category: "Backend",
        description: "Query optimization, indexing, stored procedures",
        projects: 20,
        icon: "🐘",
      },
      {
        name: "MongoDB",
        level: 78,
        years: "3+ years",
        category: "Backend",
        description: "Aggregation pipelines, indexing, schema design",
        projects: 12,
        icon: "🍃",
      },
      {
        name: "GraphQL",
        level: 75,
        years: "2+ years",
        category: "Backend",
        description: "Apollo Server, schema design, resolvers",
        projects: 8,
        icon: "◉",
      },
      {
        name: "Redis",
        level: 80,
        years: "3+ years",
        category: "Backend",
        description: "Caching strategies, pub/sub, session management",
        projects: 15,
        icon: "🔴",
      },
    ],
  },
  {
    name: "Cloud & DevOps",
    color: "from-purple-400 to-pink-400",
    bgColor: "from-purple-500/10 to-pink-500/10",
    skills: [
      {
        name: "AWS",
        level: 85,
        years: "4+ years",
        category: "Cloud",
        description: "EC2, S3, Lambda, RDS, CloudFormation, CDK",
        projects: 18,
        icon: "☁️",
      },
      {
        name: "Docker",
        level: 88,
        years: "4+ years",
        category: "DevOps",
        description: "Containerization, multi-stage builds, optimization",
        projects: 25,
        icon: "🐳",
      },
      {
        name: "Kubernetes",
        level: 70,
        years: "2+ years",
        category: "DevOps",
        description: "Orchestration, deployments, services, ingress",
        projects: 6,
        icon: "⚙️",
      },
      {
        name: "GitHub Actions",
        level: 90,
        years: "3+ years",
        category: "DevOps",
        description: "CI/CD pipelines, automated testing, deployments",
        projects: 30,
        icon: "🚀",
      },
      {
        name: "Terraform",
        level: 72,
        years: "2+ years",
        category: "DevOps",
        description: "Infrastructure as code, state management",
        projects: 8,
        icon: "🏗️",
      },
      {
        name: "Nginx",
        level: 75,
        years: "3+ years",
        category: "DevOps",
        description: "Reverse proxy, load balancing, SSL configuration",
        projects: 12,
        icon: "🌐",
      },
    ],
  },
  {
    name: "Tools & Others",
    color: "from-yellow-400 to-orange-400",
    bgColor: "from-yellow-500/10 to-orange-500/10",
    skills: [
      {
        name: "Git",
        level: 95,
        years: "6+ years",
        category: "Tools",
        description: "Advanced workflows, rebasing, hooks, strategies",
        projects: 50,
        icon: "📝",
      },
      {
        name: "Jest/Testing",
        level: 85,
        years: "4+ years",
        category: "Tools",
        description: "Unit testing, integration tests, TDD practices",
        projects: 20,
        icon: "🧪",
      },
      {
        name: "Figma",
        level: 80,
        years: "3+ years",
        category: "Design",
        description: "UI/UX design, prototyping, design systems",
        projects: 15,
        icon: "🎨",
      },
      {
        name: "Webpack/Vite",
        level: 82,
        years: "3+ years",
        category: "Tools",
        description: "Build optimization, configuration, plugins",
        projects: 18,
        icon: "📦",
      },
      {
        name: "Linux/Unix",
        level: 88,
        years: "5+ years",
        category: "Tools",
        description: "System administration, shell scripting, automation",
        projects: 25,
        icon: "🐧",
      },
      {
        name: "API Design",
        level: 90,
        years: "5+ years",
        category: "Architecture",
        description: "REST, GraphQL, OpenAPI, versioning strategies",
        projects: 30,
        icon: "🔌",
      },
    ],
  },
];

export const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
    level: "Associate",
  },
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    year: "2022",
    level: "Professional",
  },
  {
    name: "React Developer Certification",
    issuer: "Meta",
    year: "2021",
    level: "Professional",
  },
];

export const learningGoals = [
  {
    skill: "Rust",
    reason: "System programming and WebAssembly",
    timeline: "2024 Q2",
  },
  {
    skill: "Machine Learning",
    reason: "AI integration in web applications",
    timeline: "2024 Q3",
  },
  {
    skill: "Web3/Blockchain",
    reason: "Decentralized application development",
    timeline: "2024 Q4",
  },
];
