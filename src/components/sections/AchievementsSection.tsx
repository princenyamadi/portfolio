import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus, Filter, Calendar } from 'lucide-react';
import { achievements, milestones, keyMetrics } from '@/data/achievementsData';

// Counter hook for animated numbers
const useCounter = (end: number, duration: number = 2000, isInView: boolean = false) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationId: number;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationId);
  }, [end, duration, isInView]);
  
  return count;
};

export const AchievementsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const categories = ['all', 'technical', 'business', 'leadership', 'quality'];
  
  const filteredAchievements = activeCategory === 'all' 
    ? achievements 
    : achievements.filter(a => a.category === activeCategory);

  const featuredAchievements = achievements.filter(a => a.featured);

  const getTrendIcon = (trend?: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-400" />;
      default:
        return <Minus className="w-4 h-4 text-gray-400" />;
    }
  };

  const getTrendColor = (trend?: string) => {
    switch (trend) {
      case 'up':
        return 'text-green-400';
      case 'down':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const formatValue = (value: string | number, unit?: string) => {
    if (typeof value === 'string') {
      return value;
    }
    return `${value}${unit || ''}`;
  };

  return (
    <section id="achievements" className="relative py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-16 w-32 h-32 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-80 right-32 w-28 h-28 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Achievements &{' '}
            <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Impact
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Measurable results and key performance indicators that demonstrate the impact of our collaborations
          </motion.p>
        </motion.div>

        {/* Key Metrics Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-400/20">
            <div className="text-3xl font-bold text-blue-400 mb-2">{keyMetrics.yearsOfExperience}+</div>
            <div className="text-white/80 text-sm">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-400/20">
            <div className="text-3xl font-bold text-green-400 mb-2">{keyMetrics.totalProjects}+</div>
            <div className="text-white/80 text-sm">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-400/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">{keyMetrics.clientsServed}+</div>
            <div className="text-white/80 text-sm">Clients Served</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl border border-yellow-400/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">{keyMetrics.linesOfCode}</div>
            <div className="text-white/80 text-sm">Lines of Code</div>
          </div>
        </motion.div>

        {/* Featured Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAchievements.map((achievement, index) => {
              const Icon = achievement.icon;
              const animatedValue = useCounter(
                typeof achievement.value === 'number' ? achievement.value : 0, 
                2000, 
                isInView
              );
              
              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`group p-6 bg-gradient-to-br ${achievement.bgColor} rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 bg-gradient-to-r ${achievement.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    {achievement.trend && (
                      <div className="flex items-center space-x-1">
                        {getTrendIcon(achievement.trend)}
                        <span className={`text-sm font-medium ${getTrendColor(achievement.trend)}`}>
                          {achievement.trendValue}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      {typeof achievement.value === 'number' ? 
                        formatValue(animatedValue, achievement.unit) : 
                        achievement.value
                      }
                    </div>
                    <h4 className="text-lg font-semibold text-white/90 mb-2 group-hover:text-blue-300 transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-white/60 text-sm leading-relaxed">{achievement.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 border ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-green-600 to-yellow-600 text-white border-green-500'
                  : 'bg-white/5 text-white/80 border-white/20 hover:bg-white/10'
              }`}
            >
              <Filter className="w-4 h-4 inline mr-2" />
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* All Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Detailed Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAchievements.map((achievement, index) => {
              const Icon = achievement.icon;
              
              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2 bg-gradient-to-r ${achievement.color} rounded-lg`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-white">
                        {formatValue(achievement.value, achievement.unit)}
                      </div>
                      {achievement.trend && (
                        <div className="flex items-center justify-end space-x-1 mt-1">
                          {getTrendIcon(achievement.trend)}
                          <span className={`text-xs ${getTrendColor(achievement.trend)}`}>
                            {achievement.trendValue}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-white mb-2">{achievement.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed">{achievement.description}</p>
                  
                  <div className="mt-3">
                    <span className={`inline-block px-2 py-1 bg-gradient-to-r ${achievement.color} text-white text-xs font-medium rounded`}>
                      {achievement.category}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Milestones Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center mb-12">
            <Calendar className="w-8 h-8 text-yellow-400 mr-3" />
            <h3 className="text-3xl font-bold text-white">Milestone Timeline</h3>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-yellow-400 via-green-400 to-blue-400"></div>

              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:flex-row`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full border-4 border-gray-900 z-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-ping opacity-30"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className={`bg-gradient-to-br ${milestone.color} p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm`}
                    >
                      <div className="flex items-center mb-3">
                        <span className="text-2xl mr-3">{milestone.icon}</span>
                        <span className="text-white/80 text-sm font-medium">
                          {new Date(milestone.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long' 
                          })}
                        </span>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-white mb-2">{milestone.title}</h4>
                      <p className="text-white/80 text-sm leading-relaxed">{milestone.description}</p>
                      
                      <div className="mt-3">
                        <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full">
                          {milestone.type}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 rounded-2xl p-8 border border-blue-400/20">
            <h3 className="text-2xl font-bold text-white mb-6">Preferred Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {keyMetrics.preferredTechStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 font-medium rounded-full border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            <p className="text-white/70 max-w-2xl mx-auto">
              Constantly evolving with the latest technologies while maintaining expertise in proven solutions
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 