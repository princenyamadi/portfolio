import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Database, Globe, Zap, Download, Briefcase, Calendar, ExternalLink, Github, ArrowRight, Star } from 'lucide-react';
import { ContactSection } from '@/components/sections/ContactSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { TechnicalSkillsSection } from '@/components/sections/TechnicalSkillsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { AchievementsSection } from '@/components/sections/AchievementsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import BlogSection from '@/components/sections/BlogSection';
import CodeShowcaseSection from '@/components/sections/CodeShowcaseSection';
import { PerformanceDashboard } from '@/components/sections/PerformanceDashboard';

const HomePage: React.FC = () => {
  const featuredProjects = [
    {
      title: "EcoTracker",
      description: "A comprehensive sustainability platform helping companies track and reduce their carbon footprint with real-time analytics and AI-powered insights.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "D3.js"],
      github: "https://github.com/princenyamadi/ecotracker",
      live: "https://ecotracker-demo.com",
      featured: true
    },
    {
      title: "DevFlow",
      description: "A collaborative development workspace that streamlines team workflows with integrated code review, task management, and deployment pipelines.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["Vue.js", "Python", "Redis", "Docker", "WebSocket"],
      github: "https://github.com/princenyamadi/devflow",
      live: "https://devflow-app.com",
      featured: true
    },
    {
      title: "FinanceAI",
      description: "Personal finance management app with AI-powered budget recommendations and investment insights for smarter financial decisions.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      technologies: ["Next.js", "TensorFlow", "MongoDB", "Stripe", "Chart.js"],
      github: "https://github.com/princenyamadi/financeai",
      live: "https://financeai-demo.com",
      featured: true
    }
  ];

  const workExperience = [
    {
      title: "Senior Full Stack Developer",
      company: "TechVision Labs",
      period: "2022 - Present",
      description: "Lead development of microservices architecture serving 1M+ users. Built real-time analytics dashboard using React, Node.js, and AWS.",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Redis"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupFlow",
      period: "2020 - 2022",
      description: "Developed and maintained e-commerce platform with payment integration. Improved page load times by 40% through optimization.",
      technologies: ["Vue.js", "Python", "Django", "MongoDB", "Docker"]
    },
    {
      title: "Frontend Developer",
      company: "DigitalCraft Agency",
      period: "2019 - 2020",
      description: "Created responsive web applications for diverse clients. Collaborated with design team to implement pixel-perfect UI components.",
      technologies: ["React", "TypeScript", "Sass", "Jest", "Figma"]
    },
    {
      title: "Junior Developer",
      company: "CodeStart Solutions",
      period: "2018 - 2019",
      description: "Built interactive web features and learned industry best practices. Contributed to open-source projects and team code reviews.",
      technologies: ["JavaScript", "HTML/CSS", "Git", "Agile", "Testing"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Prince Nyamadi - Fullstack Developer | Building Digital Experiences</title>
        <meta name="description" content="Explore the digital possibilities. I craft exceptional mobile and web applications with modern technologies, seamless user experiences, and scalable architectures." />
      </Helmet>

      <div className="relative">
        {/* Stars Background */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Shooting Star */}
        <motion.div
          className="absolute w-1 h-20 bg-gradient-to-b from-white to-transparent opacity-80"
          style={{ left: '60%', top: '15%', transform: 'rotate(45deg)' }}
          animate={{
            x: [0, 200],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 8,
          }}
        />

        {/* Crescent Moon */}
        <div className="absolute right-20 top-16">
          <motion.div
            className="w-16 h-16 bg-yellow-200 rounded-full relative"
            animate={{
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          >
            <div className="absolute top-1 right-1 w-12 h-12 bg-gradient-to-b from-indigo-900 via-purple-900 to-gray-900 rounded-full"></div>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Hero Section with Telescope */}
          <section className="flex-1 flex items-center">
            <div className="mobile-container">
              <div className="mobile-grid-2 lg:grid-cols-2 responsive-gap items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Hero Section */}
                 
                  <h1 className="responsive-heading-xl font-light text-white mb-6 leading-tight mt-40 md:mt-20">
                    Explore the digital universe.
                  </h1>
                  <p className="responsive-text-lg text-white/90 mb-8 font-light">
                    Let's build something extraordinary together
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mobile-btn-lg mobile-interactive bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium"
                    >
                      View My Work
                    </motion.button>
                    <motion.a
                      href="/PRINCE_NYAMADI-CV.pdf"
                      download="Prince_Nyamadi_Resume.pdf"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mobile-btn-lg mobile-interactive inline-flex items-center justify-center border border-white/30 hover:border-white/50 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-all duration-300 backdrop-blur-sm"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Resume
                    </motion.a>
                  </div>
                </motion.div>

                {/* Developer with Telescope Silhouette */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="relative"
                >
                  <svg viewBox="0 0 400 300" className="w-full h-auto">
                    {/* Ground/Hill */}
                    <path
                      d="M0 250 Q100 230 200 240 T400 250 L400 300 L0 300 Z"
                      fill="rgba(30, 41, 59, 0.8)"
                    />
                    
                    {/* Grass/Vegetation */}
                    <g fill="rgba(15, 23, 42, 0.6)">
                      <path d="M20 250 L25 240 L30 250 Z" />
                      <path d="M40 245 L45 235 L50 245 Z" />
                      <path d="M320 248 L325 238 L330 248 Z" />
                      <path d="M350 252 L355 242 L360 252 Z" />
                      <path d="M380 250 L385 240 L390 250 Z" />
                    </g>

                    {/* Developer with Laptop */}
                    <g fill="rgba(59, 130, 246, 0.8)">
                      {/* Person Body */}
                      <ellipse cx="180" cy="240" rx="12" ry="20" />
                      {/* Person Head */}
                      <circle cx="180" cy="215" r="8" />
                      {/* Arms working on laptop */}
                      <path d="M175 225 L160 235" stroke="rgba(59, 130, 246, 0.8)" strokeWidth="3" fill="none" />
                      <path d="M185 225 L200 235" stroke="rgba(59, 130, 246, 0.8)" strokeWidth="3" fill="none" />
                      {/* Legs */}
                      <path d="M175 255 L170 270" stroke="rgba(59, 130, 246, 0.8)" strokeWidth="3" fill="none" />
                      <path d="M185 255 L190 270" stroke="rgba(59, 130, 246, 0.8)" strokeWidth="3" fill="none" />
                    </g>

                    {/* Laptop */}
                    <g fill="rgba(59, 130, 246, 0.8)">
                      {/* Laptop Base */}
                      <rect x="155" y="235" width="30" height="3" rx="1" />
                      {/* Laptop Screen */}
                      <rect x="160" y="220" width="20" height="15" rx="1" />
                      {/* Screen glow */}
                      <rect x="162" y="222" width="16" height="11" fill="rgba(147, 197, 253, 0.6)" rx="1" />
                    </g>

                    {/* Code symbols floating */}
                    <g fill="rgba(147, 197, 253, 0.4)" fontSize="8">
                      <text x="140" y="180">&lt;/&gt;</text>
                      <text x="220" y="190">{ }</text>
                      <text x="250" y="170">λ</text>
                    </g>

                    {/* Trees representing tech stack */}
                    <g fill="rgba(15, 23, 42, 0.4)">
                      <rect x="80" y="220" width="3" height="30" />
                      <ellipse cx="81" cy="215" rx="8" ry="12" />
                      <rect x="300" y="225" width="3" height="25" />
                      <ellipse cx="301" cy="220" rx="6" ry="10" />
                    </g>
                  </svg>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Development Skills Section */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl font-light text-blue-300 mb-12">Full Stack Expertise</h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Frontend Excellence */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-4">Frontend Mastery</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    React, TypeScript, Next.js, Vue, Angular. Creating responsive, accessible, and performant user interfaces with modern frameworks and best practices.
                  </p>
                </motion.div>

                {/* Backend Expertise */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Database className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-4">Backend Architecture</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Node.js, Python, PostgreSQL, MongoDB, Redis. Building scalable APIs, microservices, and robust backend systems that power exceptional applications.
                  </p>
                </motion.div>

                {/* DevOps & Cloud */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-4">DevOps & Deployment</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    AWS, Docker, Kubernetes, CI/CD. Automating deployments, optimizing performance, and ensuring reliable, scalable infrastructure for modern applications.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Featured Projects Section */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <div className="flex items-center justify-center mb-4">
                  <Star className="w-8 h-8 text-blue-400 mr-3" />
                  <h2 className="text-3xl font-light text-blue-300">Featured Projects</h2>
                </div>
                <p className="text-white/70 max-w-2xl mx-auto">
                  Showcasing innovative solutions that solve real-world problems with cutting-edge technology
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="group"
                  >
                    <motion.div
                      whileHover={{ y: -10, scale: 1.02 }}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300"
                    >
                      {/* Project Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      </div>

                      {/* Project Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                        <p className="text-white/70 text-sm mb-4 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-400/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Project Links */}
                        <div className="flex space-x-4">
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            className="flex items-center text-white/70 hover:text-white transition-colors duration-300"
                          >
                            <Github className="w-4 h-4 mr-1" />
                            <span className="text-sm">Code</span>
                          </motion.a>
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            className="flex items-center text-white/70 hover:text-white transition-colors duration-300"
                          >
                            <ExternalLink className="w-4 h-4 mr-1" />
                            <span className="text-sm">Live Demo</span>
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* View All Projects Link */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center"
              >
                <motion.a
                  href="/projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center text-blue-300 hover:text-white border border-blue-400/30 hover:border-white/50 bg-blue-600/10 hover:bg-white/10 px-8 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-sm"
                >
                  View All Projects
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.a>
              </motion.div>
            </div>
          </section>

          {/* Work Experience Timeline Section */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <div className="flex items-center justify-center mb-4">
                  <Briefcase className="w-8 h-8 text-blue-400 mr-3" />
                  <h2 className="text-3xl font-light text-blue-300">Professional Journey</h2>
                </div>
                <p className="text-white/70 max-w-2xl mx-auto">
                  A timeline of my career growth, building expertise across the full stack
                </p>
              </motion.div>

              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-transparent"></div>

                  {workExperience.map((job, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      className={`relative flex items-center mb-12 ${
                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      } flex-col md:flex-row`}
                    >
                      {/* Timeline Node */}
                      <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-900 z-10">
                        <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-30"></div>
                      </div>

                      {/* Content Card */}
                      <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                        index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                      }`}>
                        <motion.div
                          whileHover={{ scale: 1.02, y: -5 }}
                          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
                        >
                          <div className="flex items-center mb-3">
                            <Calendar className="w-4 h-4 text-blue-400 mr-2" />
                            <span className="text-blue-300 text-sm font-medium">{job.period}</span>
                          </div>
                          
                          <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                          <h4 className="text-lg text-blue-300 mb-3">{job.company}</h4>
                          
                          <p className="text-white/70 text-sm mb-4 leading-relaxed">
                            {job.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-400/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Projects & Experience Section */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <p className="text-blue-300 text-sm font-medium mb-4 tracking-wider uppercase">
                    Portfolio & Experience
                  </p>
                  <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
                    Connecting ideas with code.
                  </h2>
                  <p className="text-xl text-white/90 mb-6 font-light">
                    Transforming concepts into scalable digital solutions.
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    With 5+ years of experience building full-stack applications, I specialize in creating 
                    seamless user experiences backed by robust, scalable architectures. From startups to enterprise, 
                    I help teams ship quality software that users love.
                  </p>
                </motion.div>

                {/* Code Constellation Illustration */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="relative"
                >
                  <svg viewBox="0 0 400 300" className="w-full h-auto">
                    {/* Ground/Hill */}
                    <path
                      d="M0 250 Q100 230 200 240 T400 250 L400 300 L0 300 Z"
                      fill="rgba(30, 41, 59, 0.8)"
                    />
                    
                    {/* Developer pointing at code constellation */}
                    <g fill="rgba(59, 130, 246, 0.8)">
                      <ellipse cx="200" cy="240" rx="12" ry="20" />
                      <circle cx="200" cy="215" r="8" />
                      {/* Pointing arm */}
                      <path d="M205 225 L230 200 L235 195" stroke="rgba(59, 130, 246, 0.8)" strokeWidth="3" fill="none" />
                      <path d="M195 255 L190 270" stroke="rgba(59, 130, 246, 0.8)" strokeWidth="3" fill="none" />
                      <path d="M205 255 L210 270" stroke="rgba(59, 130, 246, 0.8)" strokeWidth="3" fill="none" />
                    </g>

                    {/* Tech constellation - connecting frontend to backend */}
                    <g>
                      {/* Central API star */}
                      <circle cx="240" cy="120" r="4" fill="rgba(255, 255, 255, 0.9)" />
                      <circle cx="240" cy="120" r="8" fill="rgba(255, 255, 255, 0.3)" />
                      
                      {/* Connected tech nodes */}
                      <circle cx="200" cy="80" r="2" fill="rgba(255, 255, 255, 0.8)" />
                      <circle cx="280" cy="100" r="2" fill="rgba(255, 255, 255, 0.8)" />
                      <circle cx="320" cy="140" r="2" fill="rgba(255, 255, 255, 0.8)" />
                      <circle cx="180" cy="160" r="2" fill="rgba(255, 255, 255, 0.8)" />
                      <circle cx="260" cy="180" r="2" fill="rgba(255, 255, 255, 0.8)" />
                      
                      {/* Connecting lines (data flow) */}
                      <line x1="200" y1="80" x2="240" y2="120" stroke="rgba(147, 197, 253, 0.6)" strokeWidth="1" />
                      <line x1="240" y1="120" x2="280" y2="100" stroke="rgba(147, 197, 253, 0.6)" strokeWidth="1" />
                      <line x1="280" y1="100" x2="320" y2="140" stroke="rgba(147, 197, 253, 0.6)" strokeWidth="1" />
                      <line x1="240" y1="120" x2="180" y2="160" stroke="rgba(147, 197, 253, 0.6)" strokeWidth="1" />
                      <line x1="240" y1="120" x2="260" y2="180" stroke="rgba(147, 197, 253, 0.6)" strokeWidth="1" />
                    </g>

                    {/* Tech stack trees */}
                    <g fill="rgba(15, 23, 42, 0.4)">
                      <rect x="60" y="220" width="3" height="30" />
                      <ellipse cx="61" cy="215" rx="8" ry="12" />
                      <rect x="340" y="225" width="3" height="25" />
                      <ellipse cx="341" cy="220" rx="6" ry="10" />
                    </g>

                    {/* Floating tech symbols */}
                    <g fill="rgba(147, 197, 253, 0.4)" fontSize="10">
                      <text x="190" y="85">React</text>
                      <text x="275" y="105">Node</text>
                      <text x="310" y="145">AWS</text>
                      <text x="170" y="165">DB</text>
                      <text x="250" y="185">API</text>
                    </g>
                  </svg>
                </motion.div>
              </div>
            </div>
          </section>

                     {/* About Section */}
           <AboutSection />

           {/* Technical Skills Section */}
           <TechnicalSkillsSection />

           {/* Enhanced Projects Section */}
           <ProjectsSection />

           {/* Blog Section */}
           <BlogSection />

           {/* Interactive Code Showcase */}
           <CodeShowcaseSection />

           {/* Testimonials Section */}
           <TestimonialsSection />

           {/* Achievements Section */}
           <AchievementsSection />

           {/* Contact Section */}
           <ContactSection />
         </div>
         
         {/* Performance Dashboard */}
         <PerformanceDashboard />
      </div>
    </>
  );
};

export default HomePage; 