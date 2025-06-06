import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { personalInfo, coreValues, achievements, personalTouches, funFacts } from '@/data/aboutData';

export const AboutSection: React.FC = () => {
  const [showFunFacts, setShowFunFacts] = useState(false);

  return (
    <section id="about" className="relative responsive-padding-section">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 sm:top-40 left-4 sm:left-20 w-16 sm:w-24 h-16 sm:h-24 bg-blue-500/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 sm:bottom-40 right-4 sm:right-20 w-20 sm:w-32 h-20 sm:h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-700" />
        <div className="absolute top-40 sm:top-60 right-8 sm:right-40 w-12 sm:w-20 h-12 sm:h-20 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <div className="relative mobile-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="responsive-heading-lg font-bold text-white mb-6"
          >
            About{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Prince Nyamadi
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="responsive-text-lg text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            {personalInfo.title} based in {personalInfo.location}
          </motion.p>
        </motion.div>

        {/* Personal Story */}
        <div className="mobile-grid-2 lg:grid-cols-2 responsive-gap responsive-margin-section">
          {/* Main Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="relative">
              <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-400/40 transform -rotate-12" />
              <p className="text-lg text-white/90 leading-relaxed pl-6">
                {personalInfo.intro}
              </p>
            </div>
            
            <p className="text-white/80 leading-relaxed">
              {personalInfo.story}
            </p>
            
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 border border-blue-400/20">
              <p className="text-white/90 leading-relaxed italic">
                {personalInfo.philosophy}
              </p>
            </div>
          </motion.div>

          {/* Personal Touches */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Beyond the Code</h3>
            <div className="space-y-4">
              {personalTouches.map((touch, index) => {
                const Icon = touch.icon;
                return (
                  <motion.div
                    key={touch.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <Icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{touch.title}</h4>
                      <p className="text-white/70 text-sm mt-1">{touch.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Fun Facts Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <motion.button
                onClick={() => setShowFunFacts(!showFunFacts)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between w-full p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-400/30 text-white hover:from-yellow-500/20 hover:to-orange-500/20 transition-all duration-300"
              >
                <span className="font-medium">Fun Facts & Random Trivia</span>
                {showFunFacts ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </motion.button>
              
              <AnimatePresence>
                {showFunFacts && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 space-y-2 overflow-hidden"
                  >
                    {funFacts.map((fact, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg"
                      >
                        <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <p className="text-white/80 text-sm">{fact}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group text-center p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${value.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-white/70 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">By the Numbers</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-400/20 backdrop-blur-sm hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{achievement.metric}</div>
                  <div className="text-sm font-medium text-blue-300 mb-2">{achievement.title}</div>
                  <div className="text-xs text-white/60">{achievement.description}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-blue-400/20">
            <p className="text-xl text-white mb-6 max-w-3xl mx-auto">
              Ready to work with someone who's as excited about your project as you are? 
              Let's turn your vision into reality.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 border border-blue-500"
            >
              Let's Connect
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 