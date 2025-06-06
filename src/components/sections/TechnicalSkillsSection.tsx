import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Target, TrendingUp, Clock, Filter } from 'lucide-react';
import { skillCategories, certifications, learningGoals } from '@/data/skillsData';

export const TechnicalSkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [animatedLevels, setAnimatedLevels] = useState<{ [key: string]: number }>({});

  // Animate skill levels on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const levels: { [key: string]: number } = {};
      skillCategories.forEach(category => {
        category.skills.forEach(skill => {
          levels[skill.name] = skill.level;
        });
      });
      setAnimatedLevels(levels);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const filteredCategories = activeCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.name.toLowerCase().includes(activeCategory.toLowerCase()));

  const allSkills = skillCategories.flatMap(cat => cat.skills);
  const averageLevel = Math.round(allSkills.reduce((sum, skill) => sum + skill.level, 0) / allSkills.length);
  const totalProjects = allSkills.reduce((sum, skill) => sum + (skill.projects || 0), 0);

  const getSkillLevelLabel = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 75) return 'Advanced';
    if (level >= 60) return 'Intermediate';
    return 'Beginner';
  };

  const getSkillLevelColor = (level: number) => {
    if (level >= 90) return 'from-green-400 to-emerald-400';
    if (level >= 75) return 'from-blue-400 to-cyan-400';
    if (level >= 60) return 'from-yellow-400 to-orange-400';
    return 'from-gray-400 to-gray-500';
  };

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-16 w-28 h-28 bg-blue-500/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-36 h-36 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-80 right-32 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-500" />
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
            Technical{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            A comprehensive overview of my technical skills, tools, and ongoing learning journey
          </motion.p>
        </motion.div>

        {/* Skills Overview Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-400/20">
            <div className="text-3xl font-bold text-blue-400 mb-2">{skillCategories.length}</div>
            <div className="text-white/80 text-sm">Categories</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-400/20">
            <div className="text-3xl font-bold text-green-400 mb-2">{allSkills.length}</div>
            <div className="text-white/80 text-sm">Technologies</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-400/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">{averageLevel}%</div>
            <div className="text-white/80 text-sm">Avg. Proficiency</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl border border-yellow-400/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">{totalProjects}+</div>
            <div className="text-white/80 text-sm">Projects</div>
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
          <motion.button
            onClick={() => setActiveCategory('all')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 border ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-blue-500'
                : 'bg-white/5 text-white/80 border-white/20 hover:bg-white/10'
            }`}
          >
            <Filter className="w-4 h-4 inline mr-2" />
            All Skills
          </motion.button>
          {skillCategories.map((category) => (
            <motion.button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 border ${
                activeCategory === category.name
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-blue-500'
                  : 'bg-white/5 text-white/80 border-white/20 hover:bg-white/10'
              }`}
            >
              {category.name.split(' ')[0]}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Categories */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-12 mb-16"
          >
            {filteredCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className={`p-8 bg-gradient-to-r ${category.bgColor} rounded-2xl border border-white/10 backdrop-blur-sm`}
              >
                <div className="flex items-center mb-8">
                  <div className={`h-1 w-12 bg-gradient-to-r ${category.color} rounded-full mr-4`} />
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      className="group p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <div>
                            <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                              {skill.name}
                            </h4>
                            <p className="text-white/60 text-sm">{skill.years}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-medium px-2 py-1 rounded bg-gradient-to-r ${getSkillLevelColor(skill.level)} text-white`}>
                            {getSkillLevelLabel(skill.level)}
                          </div>
                        </div>
                      </div>

                      {/* Skill Level Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-white/70 mb-2">
                          <span>Proficiency</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${animatedLevels[skill.name] || 0}%` }}
                            transition={{ duration: 1.5, delay: 0.5 + skillIndex * 0.1, ease: "easeOut" }}
                            className={`h-full bg-gradient-to-r ${getSkillLevelColor(skill.level)} rounded-full`}
                          />
                        </div>
                      </div>

                      <p className="text-white/70 text-sm mb-3">{skill.description}</p>
                      
                      {skill.projects && (
                        <div className="flex items-center text-white/60 text-sm">
                          <Target className="w-4 h-4 mr-1" />
                          <span>{skill.projects} projects</span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Certifications & Learning Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-8 border border-green-400/20"
          >
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-4 bg-white/5 rounded-lg border border-white/10"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-white">{cert.name}</h4>
                    <span className="text-green-400 text-sm font-medium">{cert.year}</span>
                  </div>
                  <p className="text-white/70 text-sm">{cert.issuer}</p>
                  <div className="mt-2">
                    <span className="text-xs px-2 py-1 bg-green-400/20 text-green-300 rounded">
                      {cert.level}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learning Goals */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-400/20"
          >
            <div className="flex items-center mb-6">
              <TrendingUp className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Learning Goals</h3>
            </div>
            <div className="space-y-4">
              {learningGoals.map((goal, index) => (
                <motion.div
                  key={goal.skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-4 bg-white/5 rounded-lg border border-white/10"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-white">{goal.skill}</h4>
                    <div className="flex items-center text-purple-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {goal.timeline}
                    </div>
                  </div>
                  <p className="text-white/70 text-sm">{goal.reason}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 