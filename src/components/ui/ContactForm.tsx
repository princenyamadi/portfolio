import React from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { useContactForm } from '@/hooks/useContactForm';

export const ContactForm: React.FC = () => {
  const { register, onSubmit, formState: { errors, isValid }, isSubmitting, submitStatus, resetForm } = useContactForm();

  const getSubmitButtonContent = () => {
    if (isSubmitting) {
      return (
        <>
          <Loader className="w-4 h-4 mr-2 animate-spin" />
          Sending...
        </>
      );
    }
    if (submitStatus === 'success') {
      return (
        <>
          <CheckCircle className="w-4 h-4 mr-2" />
          Sent!
        </>
      );
    }
    return (
      <>
        <Send className="w-4 h-4 mr-2" />
        Send Message
      </>
    );
  };

  const getSubmitButtonStyle = () => {
    if (submitStatus === 'success') {
      return 'bg-green-600 hover:bg-green-700 border-green-500';
    }
    if (submitStatus === 'error') {
      return 'bg-red-600 hover:bg-red-700 border-red-500';
    }
    return 'bg-blue-600 hover:bg-blue-700 border-blue-500';
  };

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Success Message */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-600/20 border border-green-400/30 rounded-lg p-4 text-center"
        >
          <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
          <p className="text-green-300 font-medium">Message sent successfully!</p>
          <p className="text-green-200/70 text-sm mt-1">I'll get back to you within 24 hours.</p>
          <button
            type="button"
            onClick={resetForm}
            className="mt-3 text-green-300 hover:text-green-200 text-sm underline"
          >
            Send another message
          </button>
        </motion.div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-red-600/20 border border-red-400/30 rounded-lg p-4 text-center"
        >
          <AlertCircle className="w-6 h-6 text-red-400 mx-auto mb-2" />
          <p className="text-red-300 font-medium">Failed to send message</p>
          <p className="text-red-200/70 text-sm mt-1">Please try again or email me directly.</p>
        </motion.div>
      )}

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
            Name *
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-300"
            placeholder="Your full name"
          />
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-1"
            >
              {errors.name.message}
            </motion.p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
            Email *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-300"
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-1"
            >
              {errors.email.message}
            </motion.p>
          )}
        </div>
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-white/90 mb-2">
          Subject *
        </label>
        <input
          {...register('subject')}
          type="text"
          id="subject"
          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-300"
          placeholder="What's this about?"
        />
        {errors.subject && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-sm mt-1"
          >
            {errors.subject.message}
          </motion.p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
          Message *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={6}
          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-300 resize-none"
          placeholder="Tell me about your project, ideas, or just say hello..."
        />
        {errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-sm mt-1"
          >
            {errors.message.message}
          </motion.p>
        )}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting || submitStatus === 'success'}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        className={`w-full px-8 py-4 rounded-lg font-medium text-white border transition-all duration-300 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed ${getSubmitButtonStyle()}`}
      >
        {getSubmitButtonContent()}
      </motion.button>

      {/* Form Footer */}
      <p className="text-white/60 text-sm text-center">
        I typically respond within 24 hours. For urgent matters, feel free to email me directly at{' '}
        <a href="mailto:alex@alexchen.dev" className="text-blue-400 hover:text-blue-300 underline">
          alex@alexchen.dev
        </a>
      </p>
    </motion.form>
  );
}; 