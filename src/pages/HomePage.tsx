import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { SEO_CONFIG } from '@/constants';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>{SEO_CONFIG.DEFAULT_TITLE}</title>
        <meta name="description" content={SEO_CONFIG.DEFAULT_DESCRIPTION} />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}  
        <section className="section bg-gradient-mobile bg-textured-circuit relative overflow-hidden">
          <div className="absolute inset-0 bg-textured-hexagon opacity-30"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div 
                  className="flex justify-center mb-6"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="relative">
                    <motion.div 
                      className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm border border-white/30 shadow-2xl"
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                        rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                      }}
                      whileHover={{ scale: 1.1, rotate: 15 }}
                    >
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9H21ZM19 21H5V3H13V9H19V21Z"/>
                      </svg>
                    </motion.div>
                    <motion.div 
                      className="absolute -top-2 -right-2 w-6 h-6 bg-neon-400 rounded-full"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    />
                  </div>
                </motion.div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Mobile App{' '}
                  <span className="text-gradient-neon">Developer</span>
                </h1>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Crafting innovative iOS & Android applications with cutting-edge technology. 
                  Transforming ideas into powerful mobile experiences that users love.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn bg-white text-gray-900 hover:bg-gray-100 btn-lg shadow-lg transition-all duration-300"
                  >
                    View My Apps
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </motion.div>
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn border-white/30 bg-white/10 hover:bg-white/20 btn-lg backdrop-blur-sm transition-all duration-300"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub Portfolio
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="section bg-gray-900 bg-textured-dots relative">
          <div className="absolute inset-0 bg-gradient-to-r from-electric-900/50 to-cyber-900/50"></div>
          <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-electric-400 mb-2">50+</div>
                <div className="text-gray-300">Mobile Apps</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-cyber-400 mb-2">2M+</div>
                <div className="text-gray-300">Downloads</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-neon-400 mb-2">4.8★</div>
                <div className="text-gray-300">Average Rating</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary-400 mb-2">5+</div>
                <div className="text-gray-300">Years Experience</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Apps Preview */}
        <section className="section bg-gray-100 bg-textured-grid relative">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured <span className="text-gradient-mobile">Mobile Apps</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover my latest mobile applications built with React Native, Flutter, 
                and native iOS/Android development. Each app solves real-world problems.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Mobile App Cards */}
              {[
                { name: "FitTracker Pro", tech: ["React Native", "Firebase"], gradient: "from-electric-400 to-cyber-400", icon: "💪" },
                { name: "CryptoWallet", tech: ["Flutter", "Blockchain"], gradient: "from-neon-400 to-electric-400", icon: "💰" },
                { name: "FoodieExplorer", tech: ["Swift", "Core Data"], gradient: "from-cyber-400 to-primary-400", icon: "🍕" }
              ].map((app, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="card card-hover bg-white/80 backdrop-blur-sm border-gray-200/50"
                >
                  <div className={`aspect-video bg-gradient-to-br ${app.gradient} rounded-t-lg flex items-center justify-center text-6xl`}>
                    {app.icon}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {app.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      A powerful mobile app delivering exceptional user experience with modern design patterns.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        {app.tech.map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        <button 
                          className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                          aria-label="View project on GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </button>
                        <button 
                          className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                          aria-label="View live project"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-primary-600">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Work Together?
              </h2>
              <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
                I'm always interested in new opportunities and exciting projects.
                Let's discuss how we can bring your ideas to life.
              </p>
              <button className="btn bg-white text-primary-600 hover:bg-gray-100 btn-lg">
                Get In Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage; 