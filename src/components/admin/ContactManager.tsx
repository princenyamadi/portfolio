import React, { useState, useEffect } from 'react';
import {
  PlusIcon,
  MagnifyingGlassIcon,
  EnvelopeIcon,
  PhoneIcon,
  CalendarIcon,
  UserIcon,
  BriefcaseIcon,
  StarIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  DocumentArrowDownIcon,
  FunnelIcon,
  ChatBubbleBottomCenterTextIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import { Switch } from '@headlessui/react';

interface ContactSubmission {
  id: string;
  formId: string;
  formName: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  status: 'new' | 'contacted' | 'qualified' | 'proposal' | 'won' | 'lost';
  priority: 'low' | 'medium' | 'high';
  source: string;
  submittedAt: Date;
  lastContactedAt?: Date;
  notes: string[];
  tags: string[];
  leadScore: number;
}

interface ContactForm {
  id: string;
  name: string;
  title: string;
  description: string;
  fields: FormField[];
  settings: {
    autoResponder: boolean;
    autoResponderSubject: string;
    autoResponderMessage: string;
    notificationEmail: string;
    redirectUrl?: string;
    requireCaptcha: boolean;
  };
  isActive: boolean;
  submissions: number;
  conversionRate: number;
  createdAt: Date;
  updatedAt: Date;
}

interface FormField {
  id: string;
  type: 'text' | 'email' | 'phone' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'file';
  label: string;
  placeholder?: string;
  required: boolean;
  options?: string[];
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
  };
  order: number;
}

const ContactManager: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'leads' | 'forms' | 'analytics'>('leads');
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [forms, setForms] = useState<ContactForm[]>([]);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [priorityFilter, setPriorityFilter] = useState<string>('all');
  const [showFormBuilder, setShowFormBuilder] = useState(false);
  const [editingForm, setEditingForm] = useState<ContactForm | null>(null);

  // Mock data - replace with Firebase integration
  useEffect(() => {
    const mockSubmissions: ContactSubmission[] = [
      {
        id: '1',
        formId: 'form1',
        formName: 'General Contact',
        name: 'Sarah Johnson',
        email: 'sarah@techstartup.com',
        phone: '+1 (555) 123-4567',
        company: 'Tech Startup Inc.',
        message: 'We need a complete e-commerce platform with inventory management. Looking for a full-stack developer.',
        projectType: 'E-commerce Platform',
        budget: '$10,000 - $25,000',
        timeline: '3-4 months',
        status: 'new',
        priority: 'high',
        source: 'Website Contact Form',
        submittedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        notes: [],
        tags: ['e-commerce', 'high-budget', 'urgent'],
        leadScore: 85
      },
      {
        id: '2',
        formId: 'form1',
        formName: 'General Contact',
        name: 'Michael Chen',
        email: 'mike@designagency.com',
        phone: '+1 (555) 987-6543',
        company: 'Creative Design Agency',
        message: 'Looking for a developer to help with React components and performance optimization.',
        projectType: 'Frontend Development',
        budget: '$5,000 - $10,000',
        timeline: '1-2 months',
        status: 'contacted',
        priority: 'medium',
        source: 'LinkedIn',
        submittedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        lastContactedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        notes: ['Sent initial proposal', 'Follow-up scheduled for next week'],
        tags: ['react', 'frontend', 'agency'],
        leadScore: 70
      },
      {
        id: '3',
        formId: 'form2',
        formName: 'Project Inquiry',
        name: 'Emily Rodriguez',
        email: 'emily@nonprofit.org',
        company: 'Local Nonprofit',
        message: 'We need a simple website to showcase our programs and accept donations.',
        projectType: 'Website Development',
        budget: '$2,000 - $5,000',
        timeline: '4-6 weeks',
        status: 'qualified',
        priority: 'low',
        source: 'Google Search',
        submittedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        lastContactedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        notes: ['Budget confirmed', 'Requirements gathering completed'],
        tags: ['nonprofit', 'website', 'donations'],
        leadScore: 60
      }
    ];

    const mockForms: ContactForm[] = [
      {
        id: 'form1',
        name: 'general-contact',
        title: 'General Contact Form',
        description: 'Main contact form for the portfolio website',
        fields: [
          { id: '1', type: 'text', label: 'Full Name', required: true, order: 1 },
          { id: '2', type: 'email', label: 'Email Address', required: true, order: 2 },
          { id: '3', type: 'phone', label: 'Phone Number', required: false, order: 3 },
          { id: '4', type: 'text', label: 'Company', required: false, order: 4 },
          { id: '5', type: 'select', label: 'Project Type', required: true, order: 5, options: ['Website Development', 'Mobile App', 'E-commerce Platform', 'API Development', 'Consultation'] },
          { id: '6', type: 'select', label: 'Budget Range', required: true, order: 6, options: ['Under $2,000', '$2,000 - $5,000', '$5,000 - $10,000', '$10,000 - $25,000', 'Over $25,000'] },
          { id: '7', type: 'textarea', label: 'Project Description', required: true, order: 7 }
        ],
        settings: {
          autoResponder: true,
          autoResponderSubject: 'Thank you for your inquiry!',
          autoResponderMessage: 'Hi {name},\n\nThank you for reaching out! I\'ve received your project inquiry and will get back to you within 24 hours.\n\nBest regards,\nPrince Nyamadi',
          notificationEmail: 'prince@yourportfolio.com',
          requireCaptcha: true
        },
        isActive: true,
        submissions: 15,
        conversionRate: 12.5,
        createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
      },
      {
        id: 'form2',
        name: 'quick-quote',
        title: 'Quick Quote Request',
        description: 'Simplified form for quick project quotes',
        fields: [
          { id: '1', type: 'text', label: 'Name', required: true, order: 1 },
          { id: '2', type: 'email', label: 'Email', required: true, order: 2 },
          { id: '3', type: 'select', label: 'Service Needed', required: true, order: 3, options: ['Website Design', 'App Development', 'E-commerce', 'Maintenance'] },
          { id: '4', type: 'textarea', label: 'Brief Description', required: true, order: 4 }
        ],
        settings: {
          autoResponder: false,
          autoResponderSubject: '',
          autoResponderMessage: '',
          notificationEmail: 'prince@yourportfolio.com',
          requireCaptcha: false
        },
        isActive: true,
        submissions: 8,
        conversionRate: 18.7,
        createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
      }
    ];

    setSubmissions(mockSubmissions);
    setForms(mockForms);
    setSelectedSubmission(mockSubmissions[0]);
  }, []);

  const filteredSubmissions = submissions.filter(submission => {
    const matchesSearch = submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         submission.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         submission.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         submission.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || submission.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || submission.priority === priorityFilter;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const getStatusColor = (status: ContactSubmission['status']) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'contacted': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'qualified': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      case 'proposal': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      case 'won': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'lost': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
    }
  };

  const getPriorityColor = (priority: ContactSubmission['priority']) => {
    switch (priority) {
      case 'high': return 'text-red-600 dark:text-red-400';
      case 'medium': return 'text-yellow-600 dark:text-yellow-400';
      case 'low': return 'text-green-600 dark:text-green-400';
    }
  };

  const getPriorityIcon = (priority: ContactSubmission['priority']) => {
    switch (priority) {
      case 'high': return <ExclamationTriangleIcon className="h-4 w-4" />;
      case 'medium': return <ClockIcon className="h-4 w-4" />;
      case 'low': return <CheckCircleIcon className="h-4 w-4" />;
    }
  };

  const updateSubmissionStatus = (id: string, status: ContactSubmission['status']) => {
    setSubmissions(prev => prev.map(submission => 
      submission.id === id 
        ? { ...submission, status, lastContactedAt: new Date() }
        : submission
    ));
    
    if (selectedSubmission?.id === id) {
      setSelectedSubmission(prev => prev ? { ...prev, status, lastContactedAt: new Date() } : null);
    }
  };

  const addNote = (id: string, note: string) => {
    const timestamp = new Date().toLocaleString();
    const noteWithTimestamp = `${timestamp}: ${note}`;
    
    setSubmissions(prev => prev.map(submission => 
      submission.id === id 
        ? { ...submission, notes: [...submission.notes, noteWithTimestamp] }
        : submission
    ));
    
    if (selectedSubmission?.id === id) {
      setSelectedSubmission(prev => prev ? { 
        ...prev, 
        notes: [...prev.notes, noteWithTimestamp] 
      } : null);
    }
  };

  const exportLeads = () => {
    const csvContent = [
      ['Name', 'Email', 'Phone', 'Company', 'Project Type', 'Budget', 'Status', 'Priority', 'Lead Score', 'Submitted Date'].join(','),
      ...filteredSubmissions.map(submission => [
        submission.name,
        submission.email,
        submission.phone || '',
        submission.company || '',
        submission.projectType || '',
        submission.budget || '',
        submission.status,
        submission.priority,
        submission.leadScore,
        submission.submittedAt.toLocaleDateString()
      ].join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `leads-export-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const getConversionStats = () => {
    const totalSubmissions = submissions.length;
    const wonDeals = submissions.filter(s => s.status === 'won').length;
    const qualifiedLeads = submissions.filter(s => s.status === 'qualified' || s.status === 'proposal' || s.status === 'won').length;
    
    return {
      totalSubmissions,
      wonDeals,
      qualifiedLeads,
      conversionRate: totalSubmissions > 0 ? (wonDeals / totalSubmissions * 100).toFixed(1) : '0',
      qualificationRate: totalSubmissions > 0 ? (qualifiedLeads / totalSubmissions * 100).toFixed(1) : '0'
    };
  };

  const stats = getConversionStats();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Contact & Lead Management</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage contact forms, track leads, and convert visitors into clients
          </p>
        </div>
        
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <button
            onClick={exportLeads}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
          >
            <DocumentArrowDownIcon className="h-5 w-5" />
            <span>Export Leads</span>
          </button>
          <button
            onClick={() => setShowFormBuilder(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
          >
            <PlusIcon className="h-5 w-5" />
            <span>New Form</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <EnvelopeIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Leads</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalSubmissions}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <StarIcon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Qualified</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.qualifiedLeads}</p>
              <p className="text-sm text-purple-600 dark:text-purple-400">{stats.qualificationRate}% rate</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <CheckCircleIcon className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Won Deals</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.wonDeals}</p>
              <p className="text-sm text-green-600 dark:text-green-400">{stats.conversionRate}% conversion</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <BriefcaseIcon className="h-8 w-8 text-orange-600 dark:text-orange-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Forms</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{forms.filter(f => f.isActive).length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'leads', name: 'Lead Management', icon: UserIcon },
            { id: 'forms', name: 'Contact Forms', icon: ChatBubbleBottomCenterTextIcon },
            { id: 'analytics', name: 'Analytics', icon: StarIcon }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              <tab.icon className="h-5 w-5" />
              <span>{tab.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'leads' && (
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Leads List */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              {/* Filters */}
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search leads..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="all">All Status</option>
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="qualified">Qualified</option>
                    <option value="proposal">Proposal</option>
                    <option value="won">Won</option>
                    <option value="lost">Lost</option>
                  </select>
                  <select
                    value={priorityFilter}
                    onChange={(e) => setPriorityFilter(e.target.value)}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="all">All Priority</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
              </div>

              {/* Leads */}
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredSubmissions.map((submission) => (
                  <div
                    key={submission.id}
                    onClick={() => setSelectedSubmission(submission)}
                    className={`p-4 cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 ${
                      selectedSubmission?.id === submission.id
                        ? 'bg-blue-50 dark:bg-blue-900/20 border-r-2 border-blue-500'
                        : ''
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <h3 className="font-medium text-gray-900 dark:text-white">
                            {submission.name}
                          </h3>
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(submission.status)}`}>
                            {submission.status}
                          </span>
                          <div className={`flex items-center space-x-1 ${getPriorityColor(submission.priority)}`}>
                            {getPriorityIcon(submission.priority)}
                            <span className="text-xs font-medium">{submission.priority}</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {submission.email} • {submission.company}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                          {submission.projectType} • {submission.budget}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                          {submission.submittedAt.toLocaleDateString()} • Score: {submission.leadScore}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Lead Details */}
          <div className="lg:col-span-1">
            {selectedSubmission ? (
              <LeadDetails 
                submission={selectedSubmission}
                onStatusUpdate={updateSubmissionStatus}
                onAddNote={addNote}
              />
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 text-center">
                <UserIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Select a lead
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Choose a lead from the list to view details and manage communication
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'forms' && (
        <ContactFormsTab 
          forms={forms}
          onEditForm={(form) => {
            setEditingForm(form);
            setShowFormBuilder(true);
          }}
        />
      )}

      {activeTab === 'analytics' && (
        <ContactAnalytics 
          submissions={submissions}
          forms={forms}
        />
      )}

      {/* Form Builder Modal */}
      {showFormBuilder && (
        <FormBuilderModal
          form={editingForm}
          onClose={() => {
            setShowFormBuilder(false);
            setEditingForm(null);
          }}
          onSave={(form) => {
            if (editingForm) {
              setForms(prev => prev.map(f => f.id === form.id ? form : f));
            } else {
              setForms(prev => [...prev, form]);
            }
            setShowFormBuilder(false);
            setEditingForm(null);
          }}
        />
      )}
    </div>
  );
};

// Lead Details Component
interface LeadDetailsProps {
  submission: ContactSubmission;
  onStatusUpdate: (id: string, status: ContactSubmission['status']) => void;
  onAddNote: (id: string, note: string) => void;
}

const LeadDetails: React.FC<LeadDetailsProps> = ({ submission, onStatusUpdate, onAddNote }) => {
  const [newNote, setNewNote] = useState('');

  const handleAddNote = () => {
    if (newNote.trim()) {
      onAddNote(submission.id, newNote);
      setNewNote('');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Lead Details</h3>
      </div>
      
      <div className="p-6 space-y-6">
        {/* Contact Info */}
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white mb-3">Contact Information</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <UserIcon className="h-4 w-4 text-gray-400" />
              <span className="text-gray-900 dark:text-white">{submission.name}</span>
            </div>
            <div className="flex items-center space-x-2">
              <EnvelopeIcon className="h-4 w-4 text-gray-400" />
              <a href={`mailto:${submission.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                {submission.email}
              </a>
            </div>
            {submission.phone && (
              <div className="flex items-center space-x-2">
                <PhoneIcon className="h-4 w-4 text-gray-400" />
                <a href={`tel:${submission.phone}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                  {submission.phone}
                </a>
              </div>
            )}
            {submission.company && (
              <div className="flex items-center space-x-2">
                <BriefcaseIcon className="h-4 w-4 text-gray-400" />
                <span className="text-gray-900 dark:text-white">{submission.company}</span>
              </div>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white mb-3">Project Details</h4>
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-gray-600 dark:text-gray-400">Type: </span>
              <span className="text-gray-900 dark:text-white">{submission.projectType}</span>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Budget: </span>
              <span className="text-gray-900 dark:text-white">{submission.budget}</span>
            </div>
            {submission.timeline && (
              <div>
                <span className="text-gray-600 dark:text-gray-400">Timeline: </span>
                <span className="text-gray-900 dark:text-white">{submission.timeline}</span>
              </div>
            )}
          </div>
          <div className="mt-3">
            <span className="text-gray-600 dark:text-gray-400">Message: </span>
            <p className="text-gray-900 dark:text-white mt-1">{submission.message}</p>
          </div>
        </div>

        {/* Status Update */}
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white mb-3">Status</h4>
          <select
            value={submission.status}
            onChange={(e) => onStatusUpdate(submission.id, e.target.value as ContactSubmission['status'])}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="qualified">Qualified</option>
            <option value="proposal">Proposal Sent</option>
            <option value="won">Won</option>
            <option value="lost">Lost</option>
          </select>
        </div>

        {/* Notes */}
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white mb-3">Notes</h4>
          <div className="space-y-2 mb-3">
            {submission.notes.map((note, index) => (
              <div key={index} className="text-sm bg-gray-50 dark:bg-gray-700 p-3 rounded">
                {note}
              </div>
            ))}
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder="Add a note..."
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              onKeyPress={(e) => e.key === 'Enter' && handleAddNote()}
            />
            <button
              onClick={handleAddNote}
              disabled={!newNote.trim()}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Add
            </button>
          </div>
        </div>

        {/* Tags */}
        {submission.tags.length > 0 && (
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {submission.tags.map((tag, index) => (
                <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Placeholder components for tabs
const ContactFormsTab: React.FC<{
  forms: ContactForm[];
  onEditForm: (form: ContactForm) => void;
}> = ({ forms, onEditForm }) => (
  <div className="text-center py-12">
    <ChatBubbleBottomCenterTextIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Contact Forms</h3>
    <p className="text-gray-600 dark:text-gray-400">Form builder coming in next update...</p>
  </div>
);

const ContactAnalytics: React.FC<{
  submissions: ContactSubmission[];
  forms: ContactForm[];
}> = ({ submissions, forms }) => (
  <div className="text-center py-12">
    <StarIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Contact Analytics</h3>
    <p className="text-gray-600 dark:text-gray-400">Analytics dashboard coming in next update...</p>
  </div>
);

const FormBuilderModal: React.FC<{
  form: ContactForm | null;
  onClose: () => void;
  onSave: (form: ContactForm) => void;
}> = ({ form, onClose, onSave }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Form Builder</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">Advanced form builder coming in next update...</p>
      <div className="flex justify-end space-x-3">
        <button
          onClick={onClose}
          className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
        >
          Cancel
        </button>
        <button
          onClick={onClose}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          Save
        </button>
      </div>
    </div>
  </div>
);

export default ContactManager;