export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
  project?: string;
  relationship: "client" | "colleague" | "manager" | "mentee";
  linkedinUrl?: string;
  companyUrl?: string;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "CEO",
    company: "GreenTech Solutions",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b3c4?w=150&h=150&fit=crop&crop=face",
    content:
      "Alex transformed our sustainability platform vision into reality. His technical expertise in React and Node.js, combined with his understanding of our business needs, resulted in a 40% increase in user engagement. The real-time analytics dashboard he built became our competitive advantage.",
    rating: 5,
    project: "EcoTracker Platform",
    relationship: "client",
    linkedinUrl: "https://linkedin.com/in/sarahmitchell",
    companyUrl: "https://greentech-solutions.com",
    featured: true,
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "CTO",
    company: "StartupFlow",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content:
      "Working with Alex was a game-changer for our development team. He architected our microservices infrastructure that now handles 1M+ requests daily. His code reviews and mentorship elevated our entire team's technical standards. A true full-stack expert.",
    rating: 5,
    project: "DevFlow Platform",
    relationship: "manager",
    linkedinUrl: "https://linkedin.com/in/michaelchen",
    companyUrl: "https://startupflow.io",
    featured: true,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "FinanceAI Corp",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content:
      "Alex brings a rare combination of technical brilliance and product intuition. He delivered our AI-powered finance app 2 weeks ahead of schedule with features that exceeded our expectations. His attention to user experience is remarkable.",
    rating: 5,
    project: "FinanceAI Mobile App",
    relationship: "colleague",
    linkedinUrl: "https://linkedin.com/in/emilyrodriguez",
    companyUrl: "https://financeai.com",
    featured: true,
  },
  {
    id: "4",
    name: "David Park",
    role: "Senior Developer",
    company: "TechVision Labs",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content:
      "Alex is the kind of developer every team needs. His code is clean, well-documented, and scalable. He mentored me through complex React patterns and AWS architecture. Thanks to his guidance, I was promoted to senior developer.",
    rating: 5,
    relationship: "mentee",
    linkedinUrl: "https://linkedin.com/in/davidpark",
    companyUrl: "https://techvision.com",
    featured: false,
  },
  {
    id: "5",
    name: "Lisa Thompson",
    role: "UX Director",
    company: "DigitalCraft Agency",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    content:
      "Alex bridges the gap between design and development beautifully. He implemented our complex design system with pixel-perfect accuracy while suggesting performance optimizations that improved load times by 60%. A pleasure to collaborate with.",
    rating: 5,
    relationship: "colleague",
    linkedinUrl: "https://linkedin.com/in/lisathompson",
    companyUrl: "https://digitalcraft.agency",
    featured: false,
  },
  {
    id: "6",
    name: "James Wilson",
    role: "Startup Founder",
    company: "LocalMarket",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    content:
      "As a non-technical founder, I was worried about finding the right developer. Alex not only built our MVP flawlessly but also educated me on technical decisions and their business impact. His communication and delivery are top-notch.",
    rating: 5,
    project: "LocalMarket MVP",
    relationship: "client",
    linkedinUrl: "https://linkedin.com/in/jameswilson",
    companyUrl: "https://localmarket.app",
    featured: true,
  },
];

export const testimonialStats = {
  totalTestimonials: testimonials.length,
  averageRating:
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length,
  clientSatisfaction: 100, // Percentage
  repeatedClients: 85, // Percentage
  onTimeDelivery: 98, // Percentage
  recommendationRate: 100, // Percentage
};

export const recognitions = [
  {
    title: "Top Contributor",
    organization: "GitHub",
    year: "2023",
    description: "Recognized for significant open source contributions",
    icon: "🏆",
  },
  {
    title: "Excellence in Development",
    organization: "TechVision Labs",
    year: "2023",
    description: "Annual award for outstanding technical leadership",
    icon: "⭐",
  },
  {
    title: "Mentor of the Year",
    organization: "CodePath.org",
    year: "2022",
    description: "Recognized for mentoring junior developers",
    icon: "🎓",
  },
  {
    title: "Innovation Award",
    organization: "StartupFlow",
    year: "2022",
    description: "For architecting scalable microservices infrastructure",
    icon: "💡",
  },
];
