import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, Clock, Coffee } from 'lucide-react';
import { ContactForm } from '@/components/ui/ContactForm';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'prince@princenyamadi.dev',
    href: 'mailto:prince@princenyamadi.dev',
    description: 'Send me an email anytime'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
    description: 'Available 9 AM - 6 PM PST'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'San Francisco, CA',
    href: 'https://maps.google.com/?q=San+Francisco,CA',
    description: 'Available for local meetings'
  },
  {
    icon: Calendar,
    title: 'Schedule',
    value: 'Book a Meeting',
    href: 'https://calendly.com/princenyamadi',
    description: '30-min consultation call'
  }
];

const quickInfo = [
  {
    icon: Clock,
    title: 'Response Time',
    value: 'Within 24 hours'
  },
  {
    icon: Coffee,
    title: 'Meeting Style',
    value: 'Coffee & Code'
  }
];

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
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
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Amazing
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to turn your ideas into reality? I'm here to help you create exceptional digital experiences. 
            Whether you need a full-stack application, consultation, or just want to chat about tech, let's connect!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1 space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
            
            {/* Contact Method Cards */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={method.title}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="group block p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                          {method.title}
                        </h4>
                        <p className="text-white/90 font-medium">{method.value}</p>
                        <p className="text-white/60 text-sm mt-1">{method.description}</p>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Quick Info */}
            <div className="mt-8 space-y-4">
              {quickInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-3 text-white/80"
                  >
                    <Icon className="w-5 h-5 text-purple-400" />
                    <span className="font-medium">{info.title}:</span>
                    <span>{info.value}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg border border-green-400/20"
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-300 font-medium text-sm">Available for new projects</span>
              </div>
              <p className="text-white/70 text-sm">
                Currently booking consultations for Q2 2024. Let's discuss your project!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-white/60 max-w-2xl mx-auto">
            Prefer a more direct approach? Feel free to reach out via email or schedule a call. 
            I'm always excited to discuss new opportunities and interesting projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}; 