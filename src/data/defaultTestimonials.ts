import { CMSTestimonial } from "../services/cmsService";
import { Timestamp } from "firebase/firestore";

export const defaultTestimonials: Omit<CMSTestimonial, "id">[] = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp Inc.",
    avatarUrl: "",
    email: "sarah.johnson@techcorp.com",
    linkedinUrl: "https://linkedin.com/in/sarah-johnson-pm",
    relationship: "client",
    content:
      "Working with this developer was an absolute pleasure. They delivered our e-commerce platform ahead of schedule and exceeded all expectations. The attention to detail and proactive communication made this project a huge success.",
    rating: 5,
    project: "", // Will be set based on actual project IDs
    dateReceived: Timestamp.fromDate(new Date("2024-01-15")),
    featured: true,
    isPublic: true,
    status: "approved",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    name: "Michael Chen",
    role: "Engineering Manager",
    company: "InnovateLabs",
    avatarUrl: "",
    email: "mchen@innovatelabs.com",
    linkedinUrl: "https://linkedin.com/in/michael-chen-eng",
    relationship: "colleague",
    content:
      "As a colleague, I've had the opportunity to work alongside this talented developer on multiple projects. Their technical expertise in React and Node.js is outstanding, and they consistently deliver clean, maintainable code.",
    rating: 5,
    project: "",
    dateReceived: Timestamp.fromDate(new Date("2024-02-03")),
    featured: true,
    isPublic: true,
    status: "approved",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    name: "Emily Rodriguez",
    role: "Startup Founder",
    company: "GreenTech Solutions",
    avatarUrl: "",
    email: "emily@greentech.co",
    linkedinUrl: "https://linkedin.com/in/emily-rodriguez-founder",
    relationship: "client",
    content:
      "This developer helped us build our MVP from scratch. Their full-stack expertise and understanding of modern web technologies was exactly what we needed. They guided us through technical decisions and delivered a robust product.",
    rating: 5,
    project: "",
    dateReceived: Timestamp.fromDate(new Date("2024-01-28")),
    featured: false,
    isPublic: true,
    status: "approved",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    name: "David Kim",
    role: "Senior Director",
    company: "Digital Dynamics",
    avatarUrl: "",
    email: "dkim@digitaldynamics.com",
    linkedinUrl: "https://linkedin.com/in/david-kim-director",
    relationship: "manager",
    content:
      "Having managed this developer for over a year, I can confidently say they are one of the most reliable and skilled engineers I've worked with. They consistently take ownership of complex projects and deliver exceptional results.",
    rating: 5,
    project: "",
    dateReceived: Timestamp.fromDate(new Date("2024-02-10")),
    featured: true,
    isPublic: true,
    status: "approved",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    name: "Jessica Thompson",
    role: "UX/UI Designer",
    company: "Creative Studio Pro",
    avatarUrl: "",
    email: "jessica@creativestudiopro.com",
    linkedinUrl: "https://linkedin.com/in/jessica-thompson-designer",
    relationship: "colleague",
    content:
      "The collaboration on our design system project was seamless. This developer has a great eye for design implementation and brought our Figma designs to life perfectly with attention to responsive design and accessibility.",
    rating: 4,
    project: "",
    dateReceived: Timestamp.fromDate(new Date("2024-01-20")),
    featured: false,
    isPublic: true,
    status: "approved",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    name: "Robert Anderson",
    role: "CTO",
    company: "DataFlow Systems",
    avatarUrl: "",
    email: "robert@dataflow.com",
    linkedinUrl: "https://linkedin.com/in/robert-anderson-cto",
    relationship: "client",
    content:
      "We hired them for a critical API integration project. The quality of work was excellent, documentation was thorough, and they provided ongoing support even after project completion. Highly recommended for enterprise-level work.",
    rating: 5,
    project: "",
    dateReceived: Timestamp.fromDate(new Date("2024-02-15")),
    featured: false,
    isPublic: true,
    status: "approved",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    name: "Amanda Foster",
    role: "Lead Developer",
    company: "WebSolutions Inc.",
    avatarUrl: "",
    email: "amanda@websolutions.com",
    linkedinUrl: "https://linkedin.com/in/amanda-foster-dev",
    relationship: "partner",
    content:
      "Our partnership on the client portal project was incredibly productive. Their expertise in TypeScript and Firebase integration helped us deliver a scalable solution that our clients love. Great communication throughout.",
    rating: 4,
    project: "",
    dateReceived: Timestamp.fromDate(new Date("2024-01-25")),
    featured: false,
    isPublic: true,
    status: "approved",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    name: "Mark Williams",
    role: "Business Owner",
    company: "Local Bistro Chain",
    avatarUrl: "",
    email: "mark@localbistro.com",
    linkedinUrl: "https://linkedin.com/in/mark-williams-business",
    relationship: "client",
    content:
      "They built our restaurant management system and it has transformed our operations. The real-time ordering system and inventory tracking features have increased our efficiency significantly. Professional service from start to finish.",
    rating: 5,
    project: "",
    dateReceived: Timestamp.fromDate(new Date("2024-02-08")),
    featured: false,
    isPublic: true,
    status: "approved",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    name: "Lisa Chang",
    role: "Marketing Director",
    company: "BrandBoost Agency",
    avatarUrl: "",
    email: "lisa@brandboost.com",
    linkedinUrl: "https://linkedin.com/in/lisa-chang-marketing",
    relationship: "client",
    content:
      "The landing page optimization project exceeded our expectations. Conversion rates improved by 40% after the redesign and implementation. The developer understood our marketing goals and translated them into effective technical solutions.",
    rating: 4,
    project: "",
    dateReceived: Timestamp.fromDate(new Date("2024-01-18")),
    featured: false,
    isPublic: true,
    status: "pending",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    name: "James Miller",
    role: "Project Manager",
    company: "AgileWorks Consulting",
    avatarUrl: "",
    email: "james@agileworks.com",
    linkedinUrl: "https://linkedin.com/in/james-miller-pm",
    relationship: "colleague",
    content:
      "Managing projects with this developer is a PM's dream. They provide accurate estimates, communicate blockers early, and consistently deliver high-quality code on time. Their problem-solving skills are exceptional.",
    rating: 5,
    project: "",
    dateReceived: Timestamp.fromDate(new Date("2024-02-12")),
    featured: false,
    isPublic: true,
    status: "approved",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
];
