import { CMSSkill } from "../services/cmsService";

export const defaultSkills: Omit<CMSSkill, "id" | "createdAt" | "updatedAt">[] =
  [
    // Frontend Skills
    {
      name: "React",
      level: 90,
      years: "4+ years",
      category: "Frontend",
      description:
        "Advanced React development including hooks, context, state management, and performance optimization.",
      projects: 15,
      icon: "⚛️",
    },
    {
      name: "TypeScript",
      level: 85,
      years: "3+ years",
      category: "Frontend",
      description:
        "Strong typing, interfaces, generics, and advanced TypeScript patterns for robust applications.",
      projects: 12,
      icon: "📘",
    },
    {
      name: "Next.js",
      level: 80,
      years: "2+ years",
      category: "Frontend",
      description:
        "Full-stack React framework with SSR, SSG, API routes, and optimized performance.",
      projects: 8,
      icon: "▲",
    },
    {
      name: "Tailwind CSS",
      level: 85,
      years: "2+ years",
      category: "Frontend",
      description:
        "Utility-first CSS framework for rapid UI development and responsive design.",
      projects: 10,
      icon: "🎨",
    },

    // Backend Skills
    {
      name: "Node.js",
      level: 85,
      years: "3+ years",
      category: "Backend",
      description:
        "Server-side JavaScript development with Express, APIs, and microservices architecture.",
      projects: 12,
      icon: "🟢",
    },
    {
      name: "Python",
      level: 75,
      years: "2+ years",
      category: "Backend",
      description:
        "Web development with Django/Flask, data processing, and automation scripts.",
      projects: 8,
      icon: "🐍",
    },
    {
      name: "Express.js",
      level: 80,
      years: "3+ years",
      category: "Backend",
      description:
        "RESTful APIs, middleware, authentication, and scalable server applications.",
      projects: 10,
      icon: "🚀",
    },

    // Database Skills
    {
      name: "MongoDB",
      level: 75,
      years: "2+ years",
      category: "Database",
      description:
        "NoSQL database design, aggregation pipelines, and performance optimization.",
      projects: 8,
      icon: "🍃",
    },
    {
      name: "PostgreSQL",
      level: 70,
      years: "18 months",
      category: "Database",
      description:
        "Relational database design, complex queries, and performance tuning.",
      projects: 6,
      icon: "🐘",
    },
    {
      name: "Firebase",
      level: 80,
      years: "2+ years",
      category: "Database",
      description:
        "Real-time database, authentication, hosting, and cloud functions.",
      projects: 9,
      icon: "🔥",
    },

    // DevOps & Cloud Skills
    {
      name: "AWS",
      level: 70,
      years: "18 months",
      category: "Cloud",
      description:
        "EC2, S3, Lambda, CloudFront, and infrastructure management.",
      projects: 6,
      icon: "☁️",
    },
    {
      name: "Docker",
      level: 65,
      years: "1+ year",
      category: "DevOps",
      description:
        "Containerization, Docker Compose, and deployment workflows.",
      projects: 5,
      icon: "🐳",
    },
    {
      name: "Git",
      level: 90,
      years: "4+ years",
      category: "Tools",
      description:
        "Version control, branching strategies, and collaborative development workflows.",
      projects: 20,
      icon: "📚",
    },

    // Mobile Development
    {
      name: "React Native",
      level: 75,
      years: "2+ years",
      category: "Mobile",
      description:
        "Cross-platform mobile development with native performance and APIs.",
      projects: 5,
      icon: "📱",
    },

    // Tools & Languages
    {
      name: "JavaScript",
      level: 90,
      years: "4+ years",
      category: "Languages",
      description:
        "ES6+, async programming, functional programming, and modern JavaScript patterns.",
      projects: 18,
      icon: "💛",
    },
    {
      name: "HTML/CSS",
      level: 85,
      years: "5+ years",
      category: "Frontend",
      description:
        "Semantic HTML, modern CSS, animations, and responsive design principles.",
      projects: 20,
      icon: "🌐",
    },
    {
      name: "GraphQL",
      level: 65,
      years: "1+ year",
      category: "Backend",
      description:
        "API design, schema definition, and efficient data fetching.",
      projects: 4,
      icon: "🔗",
    },

    // Testing
    {
      name: "Jest",
      level: 70,
      years: "2+ years",
      category: "Testing",
      description:
        "Unit testing, integration testing, and test-driven development.",
      projects: 8,
      icon: "🧪",
    },

    // Design Tools
    {
      name: "Figma",
      level: 75,
      years: "2+ years",
      category: "Design",
      description: "UI/UX design, prototyping, and design system creation.",
      projects: 10,
      icon: "🎨",
    },
  ];

// Helper function to seed skills
export const seedSkills = async () => {
  const { CMSService } = await import("../services/cmsService");

  try {
    const existingSkills = await CMSService.getSkills();

    // Only seed if no skills exist
    if (existingSkills.length === 0) {
      console.log("Seeding default skills...");

      for (const skill of defaultSkills) {
        await CMSService.createSkill(skill);
      }

      console.log(`Successfully seeded ${defaultSkills.length} skills`);
    }
  } catch (error) {
    console.error("Error seeding skills:", error);
  }
};
