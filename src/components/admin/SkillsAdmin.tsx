import React, { useState, useEffect } from 'react';
import { 
  PlusIcon, 
  PencilIcon, 
  TrashIcon,
  AcademicCapIcon,
  ChartBarIcon,
  TagIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import { CMSService, CMSSkill } from '../../services/cmsService';
import { cn } from '../../utils/cn';

// Skill categories with colors and icons
const SKILL_CATEGORIES = [
  { name: 'Frontend', color: '#3B82F6', icon: '🎨' },
  { name: 'Backend', color: '#10B981', icon: '⚙️' },
  { name: 'Mobile', color: '#8B5CF6', icon: '📱' },
  { name: 'DevOps', color: '#F59E0B', icon: '🚀' },
  { name: 'Database', color: '#EF4444', icon: '🗄️' },
  { name: 'Design', color: '#EC4899', icon: '🎨' },
  { name: 'Cloud', color: '#06B6D4', icon: '☁️' },
  { name: 'Testing', color: '#84CC16', icon: '🧪' },
  { name: 'Tools', color: '#6366F1', icon: '🔧' },
  { name: 'Languages', color: '#059669', icon: '💬' },
];

// Proficiency levels
const PROFICIENCY_LEVELS = [
  { value: 0, label: 'Learning', description: 'Just getting started', color: '#EF4444' },
  { value: 25, label: 'Beginner', description: 'Basic understanding', color: '#F59E0B' },
  { value: 50, label: 'Intermediate', description: 'Can work independently', color: '#8B5CF6' },
  { value: 75, label: 'Advanced', description: 'Strong expertise', color: '#10B981' },
  { value: 100, label: 'Expert', description: 'Master level', color: '#3B82F6' },
];

interface SkillFormData {
  name: string;
  level: number;
  years: string;
  category: string;
  description: string;
  projects: number;
  icon: string;
}

export const SkillsAdmin: React.FC = () => {
  const [skills, setSkills] = useState<CMSSkill[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingSkill, setEditingSkill] = useState<CMSSkill | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'level' | 'category' | 'projects'>('level');
  const [searchTerm, setSearchTerm] = useState('');

  const [formData, setFormData] = useState<SkillFormData>({
    name: '',
    level: 50,
    years: '',
    category: 'Frontend',
    description: '',
    projects: 0,
    icon: '⭐',
  });

  useEffect(() => {
    loadSkills();
  }, []);

  const loadSkills = async () => {
    try {
      setIsLoading(true);
      const data = await CMSService.getSkills();
      setSkills(data);
    } catch (error) {
      console.error('Error loading skills:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: keyof SkillFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const skillData = formData as Omit<CMSSkill, 'id' | 'createdAt' | 'updatedAt'>;
      
      if (editingSkill) {
        await CMSService.updateSkill(editingSkill.id!, skillData);
      } else {
        await CMSService.createSkill(skillData);
      }
      
      await loadSkills();
      resetForm();
    } catch (error) {
      console.error('Error saving skill:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this skill?')) {
      try {
        await CMSService.deleteSkill(id);
        await loadSkills();
      } catch (error) {
        console.error('Error deleting skill:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      level: 50,
      years: '',
      category: 'Frontend',
      description: '',
      projects: 0,
      icon: '⭐',
    });
    setEditingSkill(null);
    setShowModal(false);
  };

  const startEdit = (skill: CMSSkill) => {
    setFormData({
      name: skill.name,
      level: skill.level,
      years: skill.years,
      category: skill.category,
      description: skill.description,
      projects: skill.projects,
      icon: skill.icon,
    });
    setEditingSkill(skill);
    setShowModal(true);
  };

  const getProficiencyInfo = (level: number) => {
    return PROFICIENCY_LEVELS.reduce((prev, curr) => 
      Math.abs(curr.value - level) < Math.abs(prev.value - level) ? curr : prev
    );
  };

  const getCategoryInfo = (categoryName: string) => {
    return SKILL_CATEGORIES.find(cat => cat.name === categoryName) || SKILL_CATEGORIES[0];
  };

  // Filter and sort skills
  const filteredSkills = skills
    .filter(skill => {
      const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
      const matchesSearch = searchTerm === '' || 
        skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name': return a.name.localeCompare(b.name);
        case 'level': return b.level - a.level;
        case 'category': return a.category.localeCompare(b.category);
        case 'projects': return b.projects - a.projects;
        default: return 0;
      }
    });

  // Group skills by category for overview
  const skillsByCategory = SKILL_CATEGORIES.map(category => ({
    ...category,
    skills: skills.filter(skill => skill.category === category.name),
    averageLevel: skills
      .filter(skill => skill.category === category.name)
      .reduce((sum, skill) => sum + skill.level, 0) / 
      Math.max(skills.filter(skill => skill.category === category.name).length, 1)
  }));

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <AcademicCapIcon className="h-6 w-6" />
            Skills Management
          </h1>
          <p className="text-gray-600 mt-1">Manage your technical skills and expertise levels</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors gap-2"
        >
          <PlusIcon className="h-4 w-4" />
          Add Skill
        </button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2">
            <AcademicCapIcon className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-600">Total Skills</span>
          </div>
          <p className="text-2xl font-bold text-gray-900 mt-1">{skills.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2">
            <TagIcon className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-gray-600">Categories</span>
          </div>
          <p className="text-2xl font-bold text-gray-900 mt-1">
            {new Set(skills.map(s => s.category)).size}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2">
            <StarIcon className="h-5 w-5 text-yellow-600" />
            <span className="text-sm font-medium text-gray-600">Average Level</span>
          </div>
          <p className="text-2xl font-bold text-gray-900 mt-1">
            {skills.length > 0 ? Math.round(skills.reduce((sum, skill) => sum + skill.level, 0) / skills.length) : 0}%
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2">
            <ChartBarIcon className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium text-gray-600">Expert Skills</span>
          </div>
          <p className="text-2xl font-bold text-gray-900 mt-1">
            {skills.filter(skill => skill.level >= 75).length}
          </p>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex gap-2 flex-wrap">
          {['All', ...SKILL_CATEGORIES.map(cat => cat.name)].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-3 py-1 rounded-full text-sm font-medium transition-colors",
                selectedCategory === category
                  ? "bg-blue-100 text-blue-700"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
            >
              {category}
              {category !== 'All' && (
                <span className="ml-1 text-xs">
                  ({skills.filter(s => s.category === category).length})
                </span>
              )}
            </button>
          ))}
        </div>
        
        <div className="flex gap-2 items-center">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-3 py-1 border border-gray-300 rounded-lg text-sm"
          >
            <option value="level">Sort by Level</option>
            <option value="name">Sort by Name</option>
            <option value="category">Sort by Category</option>
            <option value="projects">Sort by Projects</option>
          </select>
          
          <div className="flex border border-gray-300 rounded-lg">
            <button
              onClick={() => setViewMode('grid')}
              className={cn(
                "p-1 rounded-l-lg",
                viewMode === 'grid' ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:bg-gray-100"
              )}
            >
              <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                <div className="bg-current rounded-sm"></div>
                <div className="bg-current rounded-sm"></div>
                <div className="bg-current rounded-sm"></div>
                <div className="bg-current rounded-sm"></div>
              </div>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={cn(
                "p-1 rounded-r-lg",
                viewMode === 'list' ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:bg-gray-100"
              )}
            >
              <div className="flex flex-col gap-0.5 w-4 h-4">
                <div className="bg-current h-0.5 rounded-sm"></div>
                <div className="bg-current h-0.5 rounded-sm"></div>
                <div className="bg-current h-0.5 rounded-sm"></div>
                <div className="bg-current h-0.5 rounded-sm"></div>
              </div>
            </button>
          </div>
        </div>

        <div className="flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Skills Display */}
      {viewMode === 'grid' ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredSkills.map((skill) => {
            const proficiency = getProficiencyInfo(skill.level);
            const categoryInfo = getCategoryInfo(skill.category);
            
            return (
              <div key={skill.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{skill.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                      <div className="flex items-center gap-1">
                        <span 
                          className="px-2 py-0.5 rounded text-xs font-medium text-white"
                          style={{ backgroundColor: categoryInfo.color }}
                        >
                          {skill.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <button
                      onClick={() => startEdit(skill)}
                      className="p-1 rounded hover:bg-gray-100 transition-colors text-blue-600"
                      title="Edit"
                    >
                      <PencilIcon className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(skill.id!)}
                      className="p-1 rounded hover:bg-gray-100 transition-colors text-red-600"
                      title="Delete"
                    >
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium" style={{ color: proficiency.color }}>
                      {proficiency.label}
                    </span>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-300"
                      style={{ 
                        width: `${skill.level}%`,
                        backgroundColor: proficiency.color 
                      }}
                    ></div>
                  </div>
                </div>

                {/* Description */}
                {skill.description && (
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{skill.description}</p>
                )}

                {/* Stats */}
                <div className="flex justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <ChartBarIcon className="h-3 w-3" />
                    {skill.projects} projects
                  </div>
                  <div className="flex items-center gap-1">
                    <AcademicCapIcon className="h-3 w-3" />
                    {skill.years}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-6 py-3 border-b border-gray-200 bg-gray-50">
            <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-700">
              <div className="col-span-4">Skill</div>
              <div className="col-span-2">Category</div>
              <div className="col-span-2">Level</div>
              <div className="col-span-2">Experience</div>
              <div className="col-span-1">Projects</div>
              <div className="col-span-1">Actions</div>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {filteredSkills.map((skill) => {
              const proficiency = getProficiencyInfo(skill.level);
              const categoryInfo = getCategoryInfo(skill.category);
              
              return (
                <div key={skill.id} className="px-6 py-3 hover:bg-gray-50">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-4 flex items-center gap-2">
                      <span className="text-lg">{skill.icon}</span>
                      <div>
                        <div className="font-medium text-gray-900">{skill.name}</div>
                        {skill.description && (
                          <div className="text-sm text-gray-600 line-clamp-1">{skill.description}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-span-2">
                      <span 
                        className="px-2 py-1 rounded text-xs font-medium text-white"
                        style={{ backgroundColor: categoryInfo.color }}
                      >
                        {skill.category}
                      </span>
                    </div>
                    <div className="col-span-2">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="h-2 rounded-full"
                            style={{ 
                              width: `${skill.level}%`,
                              backgroundColor: proficiency.color 
                            }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600 w-10">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="col-span-2 text-sm text-gray-600">{skill.years}</div>
                    <div className="col-span-1 text-sm text-gray-600">{skill.projects}</div>
                    <div className="col-span-1 flex gap-1">
                      <button
                        onClick={() => startEdit(skill)}
                        className="p-1 rounded hover:bg-gray-100 transition-colors text-blue-600"
                        title="Edit"
                      >
                        <PencilIcon className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(skill.id!)}
                        className="p-1 rounded hover:bg-gray-100 transition-colors text-red-600"
                        title="Delete"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {filteredSkills.length === 0 && (
        <div className="text-center py-12">
          <AcademicCapIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No skills found</h3>
          <p className="text-gray-600 mb-4">
            {searchTerm ? 'No skills match your search criteria.' : 'Get started by adding your first skill.'}
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors gap-2"
          >
            <PlusIcon className="h-4 w-4" />
            Add First Skill
          </button>
        </div>
      )}

      {/* Category Overview */}
      {skills.length > 0 && (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Skills by Category</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillsByCategory.filter(cat => cat.skills.length > 0).map((category) => (
              <div key={category.name} className="p-4 rounded-lg border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{category.icon}</span>
                  <h3 className="font-medium" style={{ color: category.color }}>
                    {category.name}
                  </h3>
                  <span className="text-sm text-gray-500">({category.skills.length})</span>
                </div>
                <div className="mb-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">Average Level</span>
                    <span className="text-sm font-medium">{Math.round(category.averageLevel)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full"
                      style={{ 
                        width: `${category.averageLevel}%`,
                        backgroundColor: category.color 
                      }}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {category.skills.slice(0, 3).map((skill) => (
                    <span key={skill.id} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      {skill.name}
                    </span>
                  ))}
                  {category.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      +{category.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">
                {editingSkill ? 'Edit Skill' : 'Add New Skill'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name and Icon */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Skill Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., React, Python, AWS"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Icon
                    </label>
                    <input
                      type="text"
                      value={formData.icon}
                      onChange={(e) => handleInputChange('icon', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-lg"
                      placeholder="⭐"
                    />
                  </div>
                </div>

                {/* Category and Years */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Category *
                    </label>
                    <select
                      required
                      value={formData.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {SKILL_CATEGORIES.map((category) => (
                        <option key={category.name} value={category.name}>
                          {category.icon} {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Years of Experience *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.years}
                      onChange={(e) => handleInputChange('years', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., 3+ years, 6 months"
                    />
                  </div>
                </div>

                {/* Proficiency Level */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Proficiency Level: {formData.level}% - {getProficiencyInfo(formData.level).label}
                  </label>
                  <div className="mt-2">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="5"
                      value={formData.level}
                      onChange={(e) => handleInputChange('level', parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, ${getProficiencyInfo(formData.level).color} 0%, ${getProficiencyInfo(formData.level).color} ${formData.level}%, #E5E7EB ${formData.level}%, #E5E7EB 100%)`
                      }}
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Learning</span>
                      <span>Beginner</span>
                      <span>Intermediate</span>
                      <span>Advanced</span>
                      <span>Expert</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {getProficiencyInfo(formData.level).description}
                  </p>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe your experience and expertise with this skill..."
                  />
                </div>

                {/* Projects Count */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Projects *
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    value={formData.projects}
                    onChange={(e) => handleInputChange('projects', parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Number of projects where you used this skill"
                  />
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-3 pt-4 border-t">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {editingSkill ? 'Update Skill' : 'Add Skill'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 