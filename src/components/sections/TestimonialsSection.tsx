import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink, Linkedin, Users, Award, TrendingUp } from 'lucide-react';
import { testimonials, testimonialStats, recognitions, type Testimonial } from '@/data/testimonialsData';

export const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredTestimonials = testimonials.filter(t => t.featured);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % featuredTestimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredTestimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % featuredTestimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
        }`}
      />
    ));
  };

  const getRelationshipBadge = (relationship: Testimonial['relationship']) => {
    const badges = {
      client: { label: 'Client', color: 'from-blue-400 to-blue-600' },
      colleague: { label: 'Colleague', color: 'from-green-400 to-green-600' },
      manager: { label: 'Manager', color: 'from-purple-400 to-purple-600' },
      mentee: { label: 'Mentee', color: 'from-orange-400 to-orange-600' }
    };
    
    const badge = badges[relationship];
    return (
      <span className={`inline-block px-3 py-1 bg-gradient-to-r ${badge.color} text-white text-xs font-medium rounded-full`}>
        {badge.label}
      </span>
    );
  };

  return (
    <section id="testimonials" className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-24 left-12 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-24 right-12 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-64 right-24 w-28 h-28 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500" />
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
            What{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Real feedback from clients, colleagues, and team members who've experienced the impact of collaborative work
          </motion.p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-400/20">
            <div className="text-3xl font-bold text-blue-400 mb-2">{testimonialStats.clientSatisfaction}%</div>
            <div className="text-white/80 text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl border border-yellow-400/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">{testimonialStats.averageRating.toFixed(1)}</div>
            <div className="text-white/80 text-sm">Average Rating</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-400/20">
            <div className="text-3xl font-bold text-green-400 mb-2">{testimonialStats.onTimeDelivery}%</div>
            <div className="text-white/80 text-sm">On-Time Delivery</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-400/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">{testimonialStats.repeatedClients}%</div>
            <div className="text-white/80 text-sm">Repeat Clients</div>
          </div>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Quote Icon */}
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-blue-400/20 transform -rotate-12" />
                
                {/* Rating */}
                <div className="flex items-center justify-center mb-6">
                  <div className="flex space-x-1">
                    {renderStars(featuredTestimonials[currentTestimonial].rating)}
                  </div>
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-xl md:text-2xl text-white/90 text-center leading-relaxed mb-8 max-w-4xl mx-auto">
                  "{featuredTestimonials[currentTestimonial].content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                  <div className="relative">
                    <img
                      src={featuredTestimonials[currentTestimonial].image}
                      alt={featuredTestimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full border-2 border-blue-400/30"
                    />
                    <div className="absolute -bottom-2 -right-2">
                      {getRelationshipBadge(featuredTestimonials[currentTestimonial].relationship)}
                    </div>
                  </div>
                  
                  <div className="text-center md:text-left">
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {featuredTestimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-blue-300 font-medium">
                      {featuredTestimonials[currentTestimonial].role}
                    </p>
                    <p className="text-white/60 text-sm">
                      {featuredTestimonials[currentTestimonial].company}
                    </p>
                    {featuredTestimonials[currentTestimonial].project && (
                      <p className="text-white/50 text-xs mt-1">
                        Project: {featuredTestimonials[currentTestimonial].project}
                      </p>
                    )}
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-3">
                    {featuredTestimonials[currentTestimonial].linkedinUrl && (
                      <motion.a
                        href={featuredTestimonials[currentTestimonial].linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="p-2 bg-blue-600/20 rounded-full hover:bg-blue-600/30 transition-colors"
                      >
                        <Linkedin className="w-4 h-4 text-blue-400" />
                      </motion.a>
                    )}
                    {featuredTestimonials[currentTestimonial].companyUrl && (
                      <motion.a
                        href={featuredTestimonials[currentTestimonial].companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="p-2 bg-purple-600/20 rounded-full hover:bg-purple-600/30 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-purple-400" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
              <motion.button
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </motion.button>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
              <motion.button
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </motion.button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-6">
            {featuredTestimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                whileHover={{ scale: 1.2 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-blue-400 ring-2 ring-blue-400/50'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Recognition & Awards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Recognition & Awards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recognitions.map((recognition, index) => (
              <motion.div
                key={recognition.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group text-center p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="text-4xl mb-4">{recognition.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {recognition.title}
                </h4>
                <p className="text-blue-300 font-medium text-sm mb-2">{recognition.organization}</p>
                <p className="text-white/60 text-sm">{recognition.description}</p>
                <div className="mt-3 text-white/50 text-xs">{recognition.year}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Testimonials Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">More Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.filter(t => !t.featured).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -3 }}
                className="p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border border-white/20 mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-white text-sm">{testimonial.name}</h4>
                    <p className="text-white/60 text-xs">{testimonial.role}</p>
                    <div className="flex space-x-1 mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  "{testimonial.content.substring(0, 120)}..."
                </p>
                <div className="mt-3">
                  {getRelationshipBadge(testimonial.relationship)}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-blue-400/20">
            <p className="text-xl text-white mb-6 max-w-3xl mx-auto">
              Ready to join these satisfied clients? Let's discuss how we can achieve 
              similar results for your project.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 border border-blue-500"
            >
              Start Your Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 