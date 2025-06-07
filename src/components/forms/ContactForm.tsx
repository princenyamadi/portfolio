import React, { useState } from 'react';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  UserIcon, 
  BuildingOfficeIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

interface ContactFormProps {
  formId?: string;
  title?: string;
  subtitle?: string;
  onSubmit?: (data: ContactFormData) => void;
  showBudgetFields?: boolean;
  variant?: 'default' | 'minimal' | 'detailed';
}

const ContactForm: React.FC<ContactFormProps> = ({
  formId = 'general-contact',
  title = 'Start Your Project',
  subtitle = 'Let's discuss your next great idea',
  onSubmit,
  showBudgetFields = true,
  variant = 'default'
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const projectTypes = [
    'Website Development',
    'Mobile App Development',
    'E-commerce Platform',
    'Custom Software',
    'API Development',
    'UI/UX Design',
    'Consultation',
    'Maintenance & Support',
    'Other'
  ];

  const budgetRanges = [
    'Under $2,000',
    '$2,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    'Over $50,000',
    'Let\'s discuss'
  ];

  const timelineOptions = [
    'ASAP',
    '2-4 weeks',
    '1-2 months',
    '3-4 months',
    '6+ months',
    'Flexible'
  ];

  const validateField = (name: keyof ContactFormData, value: string): string | null => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return null;
      
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return null;
      
      case 'phone':
        if (value && !/^[\+]?[1-9][\d]{0,15}$/.test(value.replace(/[-\s\(\)]/g, ''))) {
          return 'Please enter a valid phone number';
        }
        return null;
      
      case 'projectType':
        if (variant !== 'minimal' && !value) return 'Please select a project type';
        return null;
      
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return null;
      
      default:
        return null;
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      const fieldName = key as keyof ContactFormData;
      const error = validateField(fieldName, formData[fieldName]);
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const fieldName = name as keyof ContactFormData;
    
    setFormData(prev => ({ ...prev, [fieldName]: value }));
    
    // Clear error when user starts typing
    if (errors[fieldName]) {
      setErrors(prev => ({ ...prev, [fieldName]: undefined }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const fieldName = name as keyof ContactFormData;
    const error = validateField(fieldName, value);
    
    if (error) {
      setErrors(prev => ({ ...prev, [fieldName]: error }));
    }
  };

  const calculateLeadScore = (data: ContactFormData): number => {
    let score = 0;
    
    // Project type scoring
    const highValueProjects = ['E-commerce Platform', 'Custom Software', 'Mobile App Development'];
    const mediumValueProjects = ['Website Development', 'API Development'];
    
    if (highValueProjects.includes(data.projectType)) score += 30;
    else if (mediumValueProjects.includes(data.projectType)) score += 20;
    else score += 10;
    
    // Budget scoring
    if (data.budget.includes('$50,000') || data.budget.includes('Over')) score += 40;
    else if (data.budget.includes('$25,000') || data.budget.includes('$10,000')) score += 30;
    else if (data.budget.includes('$5,000')) score += 20;
    else score += 10;
    
    // Company presence
    if (data.company.trim()) score += 15;
    
    // Phone provided
    if (data.phone.trim()) score += 10;
    
    // Message quality (basic heuristic)
    if (data.message.length > 100) score += 5;
    
    return Math.min(score, 100);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Calculate lead score
      const leadScore = calculateLeadScore(formData);
      
      // Prepare submission data
      const submissionData = {
        ...formData,
        formId,
        leadScore,
        submittedAt: new Date().toISOString(),
        source: 'Portfolio Contact Form',
        status: 'new' as const,
        priority: leadScore >= 70 ? 'high' as const : leadScore >= 50 ? 'medium' as const : 'low' as const
      };
      
      // Mock API call - replace with actual Firebase submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (onSubmit) {
        onSubmit(formData);
      }
      
      // Simulate sending auto-responder email
      console.log('Contact form submitted:', submissionData);
      
      setIsSubmitted(true);
      
      // Reset form after success message is shown
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          budget: '',
          timeline: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
      
    } catch (error) {
      setSubmitError('Failed to send message. Please try again.');
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        <div className="text-center">
          <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Thank You!
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Your message has been sent successfully. I'll get back to you within 24 hours.
          </p>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 text-sm font-medium">
            <CheckCircleIcon className="h-4 w-4 mr-2" />
            Message Delivered
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="px-6 py-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">{subtitle}</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {/* Error Alert */}
        {submitError && (
          <div className="flex items-center p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <ExclamationTriangleIcon className="h-5 w-5 text-red-600 dark:text-red-400 mr-3" />
            <p className="text-red-800 dark:text-red-400 text-sm">{submitError}</p>
          </div>
        )}

        {/* Basic Contact Info */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name *
            </label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
                placeholder="John Doe"
              />
            </div>
            {errors.name && (
              <p className="text-red-600 dark:text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address *
            </label>
            <div className="relative">
              <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
                placeholder="john@company.com"
              />
            </div>
            {errors.email && (
              <p className="text-red-600 dark:text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Phone & Company */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Phone Number
            </label>
            <div className="relative">
              <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
                placeholder="+1 (555) 123-4567"
              />
            </div>
            {errors.phone && (
              <p className="text-red-600 dark:text-red-400 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Company
            </label>
            <div className="relative">
              <BuildingOfficeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="Your Company"
              />
            </div>
          </div>
        </div>

        {/* Project Details */}
        {variant !== 'minimal' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    errors.projectType ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  }`}
                >
                  <option value="">Select project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {errors.projectType && (
                  <p className="text-red-600 dark:text-red-400 text-sm mt-1">{errors.projectType}</p>
                )}
              </div>

              {/* Timeline */}
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select timeline</option>
                  {timelineOptions.map((timeline) => (
                    <option key={timeline} value={timeline}>{timeline}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Budget */}
            {showBudgetFields && (
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((budget) => (
                    <option key={budget} value={budget}>{budget}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
        )}

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Project Description *
          </label>
          <textarea
            id="message"
            name="message"
            rows={variant === 'minimal' ? 4 : 6}
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical ${
              errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            }`}
            placeholder="Tell me about your project, goals, and any specific requirements you have in mind..."
          />
          {errors.message && (
            <p className="text-red-600 dark:text-red-400 text-sm mt-1">{errors.message}</p>
          )}
          <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
            {formData.message.length}/1000 characters
          </p>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-medium py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <PaperAirplaneIcon className="h-5 w-5" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </div>

        {/* Privacy Notice */}
        <div className="text-center">
          <p className="text-gray-500 dark:text-gray-400 text-xs">
            Your information is secure and will only be used to respond to your inquiry. 
            <br />
            I typically respond within 24 hours.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;