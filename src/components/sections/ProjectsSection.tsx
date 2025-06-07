import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiPlay, FiCode, FiTrendingUp, FiUsers, FiClock, FiStar } from 'react-icons/fi';
import { projects, projectCategories, projectStats, Project } from '../../data/projectsData';

const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'case-study' | 'code' | 'metrics'>('overview');

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projects;
    return projects.filter(project => project.category === selectedCategory);
  }, [selectedCategory]);



  return (
    <section id="projects" className="responsive-padding-section bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
      <div className="mobile-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="responsive-heading-lg font-bold text-white mb-4">Featured Projects</h2>
          <p className="responsive-text-lg text-slate-300 max-w-3xl mx-auto">
            Explore my portfolio of innovative solutions, from enterprise platforms to AI-powered applications
          </p>
          
          {/* Project Stats */}
          <div className="mobile-grid-4 gap-4 sm:gap-6 mt-8 sm:mt-12 max-w-4xl mx-auto">
            {[
              { label: 'Projects Completed', value: projectStats.completedProjects, icon: FiStar },
              { label: 'Technologies Used', value: `${projectStats.techStackVariety}+`, icon: FiCode },
              { label: 'Team Members', value: `${projectStats.totalTeamMembers}+`, icon: FiUsers },
              { label: 'Avg Timeline', value: projectStats.averageTimeline, icon: FiClock }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="mobile-grid-3 xl:grid-cols-3 responsive-gap responsive-margin-section">
          <AnimatePresence>
            {filteredProjects.slice(0, 6).map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'completed' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                    project.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                    'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                  }`}>
                    {project.status.replace('-', ' ').toUpperCase()}
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      FEATURED
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.category === 'fullstack' ? 'bg-purple-500/20 text-purple-300' :
                      project.category === 'web' ? 'bg-blue-500/20 text-blue-300' :
                      project.category === 'mobile' ? 'bg-green-500/20 text-green-300' :
                      project.category === 'ai' ? 'bg-pink-500/20 text-pink-300' :
                      'bg-orange-500/20 text-orange-300'
                    }`}>
                      {project.category.toUpperCase()}
                    </span>
                    {project.testimonial && (
                      <div className="flex items-center text-yellow-400">
                        {[...Array(project.testimonial.rating)].map((_, i) => (
                          <FiStar key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-blue-300 mb-3">{project.subtitle}</p>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech.name}
                        className="px-2 py-1 text-xs rounded-md bg-white/10 text-slate-300"
                      >
                        {tech.name}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 text-xs rounded-md bg-white/10 text-slate-300">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Project Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white transition-all duration-200"
                        >
                          <FiGithub className="w-4 h-4" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white transition-all duration-200"
                        >
                          <FiExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white transition-all duration-200"
                        >
                          <FiPlay className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2 text-sm font-medium text-blue-300 hover:text-white bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-all duration-200"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200">
              View All Projects ({filteredProjects.length})
            </button>
          </motion.div>
        )}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-slate-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-700">
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                  <p className="text-blue-300">{selectedProject.subtitle}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white transition-all duration-200"
                >
                  ✕
                </button>
              </div>

              {/* Modal Tabs */}
              <div className="flex border-b border-slate-700">
                {[
                  { id: 'overview', label: 'Overview' },
                  { id: 'case-study', label: 'Case Study', show: !!selectedProject.caseStudy },
                  { id: 'code', label: 'Code Samples', show: !!selectedProject.codeSamples?.length },
                  { id: 'metrics', label: 'Metrics', show: !!selectedProject.metrics?.length }
                ].filter(tab => tab.show !== false).map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-6 py-3 text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'text-blue-300 border-b-2 border-blue-300'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Modal Content */}
              <div className="p-6 max-h-[60vh] overflow-y-auto">
                {activeTab === 'overview' && (
                  <ProjectOverview project={selectedProject} />
                )}
                {activeTab === 'case-study' && selectedProject.caseStudy && (
                  <ProjectCaseStudy project={selectedProject} />
                )}
                {activeTab === 'code' && selectedProject.codeSamples && (
                  <ProjectCodeSamples project={selectedProject} />
                )}
                {activeTab === 'metrics' && selectedProject.metrics && (
                  <ProjectMetrics project={selectedProject} />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Project Overview Component
const ProjectOverview: React.FC<{ project: Project }> = ({ project }) => (
  <div className="space-y-6">
    {/* Project Gallery */}
    {project.gallery && (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {project.gallery.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${project.title} screenshot ${index + 1}`}
            className="w-full h-48 object-cover rounded-lg"
          />
        ))}
      </div>
    )}

    {/* Long Description */}
    <div>
      <h4 className="text-lg font-semibold text-white mb-3">About This Project</h4>
      <p className="text-slate-300 leading-relaxed">{project.longDescription}</p>
    </div>

    {/* Project Details */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
        <ul className="space-y-2">
          {project.features.map((feature, index) => (
            <li key={index} className="flex items-start text-slate-300">
              <span className="text-blue-400 mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-white mb-3">Tech Stack</h4>
        <div className="space-y-2">
          {project.techStack.map((tech) => (
            <div key={tech.name} className="flex items-center justify-between">
              <span className="text-slate-300">{tech.name}</span>
              <div className="flex items-center space-x-2">
                <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-400 transition-all duration-300"
                    style={{ width: `${tech.proficiency}%` }}
                  />
                </div>
                <span className="text-xs text-slate-400">{tech.proficiency}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Challenges & Learnings */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h4 className="text-lg font-semibold text-white mb-3">Challenges</h4>
        <ul className="space-y-2">
          {project.challenges.map((challenge, index) => (
            <li key={index} className="flex items-start text-slate-300">
              <span className="text-red-400 mr-2">⚡</span>
              {challenge}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-white mb-3">Key Learnings</h4>
        <ul className="space-y-2">
          {project.learnings.map((learning, index) => (
            <li key={index} className="flex items-start text-slate-300">
              <span className="text-green-400 mr-2">✓</span>
              {learning}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Testimonial */}
    {project.testimonial && (
      <div className="bg-slate-700/50 rounded-xl p-6">
        <h4 className="text-lg font-semibold text-white mb-3">Client Testimonial</h4>
        <blockquote className="text-slate-300 italic mb-4">
          "{project.testimonial.content}"
        </blockquote>
        <div className="flex items-center space-x-4">
          <div>
            <div className="font-medium text-white">{project.testimonial.author}</div>
            <div className="text-sm text-slate-400">
              {project.testimonial.role} at {project.testimonial.company}
            </div>
          </div>
          <div className="flex items-center text-yellow-400">
            {[...Array(project.testimonial.rating)].map((_, i) => (
              <FiStar key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
        </div>
      </div>
    )}
  </div>
);

// Project Case Study Component
const ProjectCaseStudy: React.FC<{ project: Project }> = ({ project }) => (
  <div className="space-y-6">
    {project.caseStudy && (
      <>
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Challenge</h4>
          <p className="text-slate-300 leading-relaxed">{project.caseStudy.challenge}</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Solution</h4>
          <p className="text-slate-300 leading-relaxed">{project.caseStudy.solution}</p>
        </div>

        {project.caseStudy.technicalDetails && (
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Technical Implementation</h4>
            <p className="text-slate-300 leading-relaxed">{project.caseStudy.technicalDetails}</p>
          </div>
        )}

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
          <ul className="space-y-2">
            {project.caseStudy.results.map((result, index) => (
              <li key={index} className="flex items-start text-slate-300">
                <FiTrendingUp className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                {result}
              </li>
            ))}
          </ul>
        </div>
      </>
    )}
  </div>
);

// Project Code Samples Component
const ProjectCodeSamples: React.FC<{ project: Project }> = ({ project }) => (
  <div className="space-y-6">
    {project.codeSamples?.map((sample, index) => (
      <div key={index} className="bg-slate-900 rounded-xl overflow-hidden">
        <div className="p-4 border-b border-slate-700">
          <h4 className="text-lg font-semibold text-white mb-2">{sample.title}</h4>
          <p className="text-slate-300 text-sm">{sample.description}</p>
          {sample.highlights && (
            <div className="flex flex-wrap gap-2 mt-3">
              {sample.highlights.map((highlight, i) => (
                <span key={i} className="px-2 py-1 text-xs rounded bg-blue-500/20 text-blue-300">
                  {highlight}
                </span>
              ))}
            </div>
          )}
        </div>
        <pre className="p-4 overflow-x-auto text-sm">
          <code className="text-slate-300 language-typescript">
            {sample.code}
          </code>
        </pre>
      </div>
    ))}
  </div>
);

// Project Metrics Component
const ProjectMetrics: React.FC<{ project: Project }> = ({ project }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {project.metrics?.map((metric, index) => (
      <div key={index} className="bg-slate-700/50 rounded-xl p-6 text-center">
        <div className={`text-3xl font-bold mb-2 ${
          metric.trend === 'up' ? 'text-green-400' :
          metric.trend === 'down' ? 'text-red-400' :
          'text-blue-400'
        }`}>
          {metric.value}
        </div>
        <div className="text-slate-300 text-sm mb-2">{metric.label}</div>
        {metric.trend && (
          <div className={`flex items-center justify-center text-xs ${
            metric.trend === 'up' ? 'text-green-400' :
            metric.trend === 'down' ? 'text-red-400' :
            'text-slate-400'
          }`}>
            <FiTrendingUp className={`w-3 h-3 mr-1 ${
              metric.trend === 'down' ? 'rotate-180' : ''
            }`} />
            {metric.trend === 'up' ? 'Increasing' :
             metric.trend === 'down' ? 'Decreasing' :
             'Stable'}
          </div>
        )}
      </div>
    ))}
  </div>
);

export default ProjectsSection; 