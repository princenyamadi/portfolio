import {
  TrendingUp,
  Users,
  Code2,
  Zap,
  Award,
  Target,
  Clock,
  Star,
} from "lucide-react";

export interface Achievement {
  id: string;
  title: string;
  value: string | number;
  unit?: string;
  description: string;
  icon: any;
  color: string;
  bgColor: string;
  category: "technical" | "business" | "leadership" | "quality";
  trend?: "up" | "down" | "stable";
  trendValue?: string;
  featured: boolean;
}

export const achievements: Achievement[] = [
  {
    id: "projects-delivered",
    title: "Projects Delivered",
    value: 50,
    unit: "+",
    description: "Successfully completed projects from concept to production",
    icon: Target,
    color: "from-blue-400 to-cyan-400",
    bgColor: "from-blue-500/10 to-cyan-500/10",
    category: "business",
    trend: "up",
    trendValue: "15%",
    featured: true,
  },
  {
    id: "code-quality",
    title: "Code Quality Score",
    value: 98,
    unit: "%",
    description: "Average code quality across all projects (SonarQube metrics)",
    icon: Code2,
    color: "from-green-400 to-emerald-400",
    bgColor: "from-green-500/10 to-emerald-500/10",
    category: "technical",
    trend: "up",
    trendValue: "12%",
    featured: true,
  },
  {
    id: "user-impact",
    title: "Users Impacted",
    value: "2.5M",
    unit: "+",
    description: "Total users across all applications built and maintained",
    icon: Users,
    color: "from-purple-400 to-pink-400",
    bgColor: "from-purple-500/10 to-pink-500/10",
    category: "business",
    trend: "up",
    trendValue: "40%",
    featured: true,
  },
  {
    id: "performance-improvement",
    title: "Performance Boost",
    value: 65,
    unit: "%",
    description: "Average performance improvement in applications optimized",
    icon: Zap,
    color: "from-yellow-400 to-orange-400",
    bgColor: "from-yellow-500/10 to-orange-500/10",
    category: "technical",
    trend: "up",
    trendValue: "25%",
    featured: true,
  },
  {
    id: "team-members-mentored",
    title: "Developers Mentored",
    value: 25,
    unit: "+",
    description: "Junior and mid-level developers guided and mentored",
    icon: Award,
    color: "from-indigo-400 to-purple-400",
    bgColor: "from-indigo-500/10 to-purple-500/10",
    category: "leadership",
    trend: "up",
    trendValue: "30%",
    featured: false,
  },
  {
    id: "client-satisfaction",
    title: "Client Satisfaction",
    value: 100,
    unit: "%",
    description:
      "Client satisfaction rate based on project reviews and feedback",
    icon: Star,
    color: "from-pink-400 to-red-400",
    bgColor: "from-pink-500/10 to-red-500/10",
    category: "quality",
    trend: "stable",
    featured: false,
  },
  {
    id: "on-time-delivery",
    title: "On-Time Delivery",
    value: 98,
    unit: "%",
    description: "Projects delivered on or ahead of scheduled deadlines",
    icon: Clock,
    color: "from-teal-400 to-blue-400",
    bgColor: "from-teal-500/10 to-blue-500/10",
    category: "quality",
    trend: "up",
    trendValue: "8%",
    featured: false,
  },
  {
    id: "revenue-generated",
    title: "Revenue Generated",
    value: "$5.2M",
    unit: "+",
    description:
      "Total revenue generated for clients through applications built",
    icon: TrendingUp,
    color: "from-emerald-400 to-green-400",
    bgColor: "from-emerald-500/10 to-green-500/10",
    category: "business",
    trend: "up",
    trendValue: "85%",
    featured: true,
  },
];

export interface Milestone {
  id: string;
  title: string;
  description: string;
  date: string;
  type: "career" | "project" | "recognition" | "skill";
  icon: string;
  color: string;
}

export const milestones: Milestone[] = [
  {
    id: "senior-promotion",
    title: "Promoted to Senior Full Stack Developer",
    description: "Led team of 5 developers and architected scalable solutions",
    date: "2022-03",
    type: "career",
    icon: "🚀",
    color: "from-blue-400 to-purple-400",
  },
  {
    id: "aws-certification",
    title: "AWS Solutions Architect Certification",
    description: "Achieved AWS certification for cloud architecture expertise",
    date: "2023-01",
    type: "skill",
    icon: "☁️",
    color: "from-orange-400 to-red-400",
  },
  {
    id: "open-source-milestone",
    title: "10K+ GitHub Stars Achieved",
    description: "Open source projects reached significant community adoption",
    date: "2023-06",
    type: "recognition",
    icon: "⭐",
    color: "from-yellow-400 to-orange-400",
  },
  {
    id: "financeai-launch",
    title: "FinanceAI Platform Launch",
    description:
      "Successfully launched AI-powered finance platform serving 100K+ users",
    date: "2023-09",
    type: "project",
    icon: "💡",
    color: "from-green-400 to-blue-400",
  },
  {
    id: "mentor-recognition",
    title: "Mentor of the Year Award",
    description:
      "Recognized for outstanding contribution to developer community",
    date: "2022-12",
    type: "recognition",
    icon: "🏆",
    color: "from-purple-400 to-pink-400",
  },
];

export const keyMetrics = {
  yearsOfExperience: 6,
  totalProjects: 50,
  clientsServed: 25,
  linesOfCode: "500K+",
  technologiesMastered: 30,
  certifications: 4,
  openSourceContributions: 150,
  averageProjectDuration: "3 months",
  preferredTechStack: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
};
