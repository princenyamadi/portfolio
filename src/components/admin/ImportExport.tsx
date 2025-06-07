import React, { useState } from 'react';
import {
  ArrowUpTrayIcon,
  ArrowDownTrayIcon,
  DocumentArrowUpIcon,
  CloudArrowUpIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  FolderIcon,
  DocumentTextIcon,
  PhotoIcon,
  CogIcon
} from '@heroicons/react/24/outline';
import { formatDate } from '../../utils/format';
import { cn } from '../../utils/cn';

interface ExportOptions {
  includeProjects: boolean;
  includeBlogPosts: boolean;
  includeSkills: boolean;
  includeTestimonials: boolean;
  includeMedia: boolean;
  includeAnalytics: boolean;
  format: 'json' | 'csv' | 'xml';
  dateRange?: {
    start?: string;
    end?: string;
  };
}

interface ImportJob {
  id: string;
  filename: string;
  type: 'projects' | 'blog' | 'skills' | 'testimonials' | 'media' | 'full';
  status: 'pending' | 'processing' | 'completed' | 'failed';
  progress: number;
  startedAt: Date;
  completedAt?: Date;
  recordsProcessed: number;
  totalRecords: number;
  errors: string[];
}

export const ImportExport: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'export' | 'import' | 'backup'>('export');
  const [exportOptions, setExportOptions] = useState<ExportOptions>({
    includeProjects: true,
    includeBlogPosts: true,
    includeSkills: true,
    includeTestimonials: true,
    includeMedia: false,
    includeAnalytics: false,
    format: 'json'
  });
  const [importJobs, setImportJobs] = useState<ImportJob[]>([]);
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);

  const handleExport = async () => {
    setIsExporting(true);
    setExportProgress(0);

    try {
      // Simulate export progress
      const progressInterval = setInterval(() => {
        setExportProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + 10;
        });
      }, 200);

      // In a real implementation, you'd call your export service
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Generate and download the export file
      const exportData = await generateExportData();
      downloadFile(exportData, `portfolio-export-${Date.now()}.${exportOptions.format}`);

    } catch (error) {
      console.error('Export failed:', error);
    } finally {
      setIsExporting(false);
      setExportProgress(0);
    }
  };

  const generateExportData = async () => {
    const data: any = {
      exportedAt: new Date().toISOString(),
      version: '1.0',
      options: exportOptions,
      data: {}
    };

    if (exportOptions.includeProjects) {
      data.data.projects = [
        {
          id: '1',
          title: 'E-commerce Platform',
          description: 'Full-stack e-commerce solution',
          technologies: ['React', 'Node.js', 'MongoDB'],
          status: 'completed'
        }
      ];
    }

    if (exportOptions.includeBlogPosts) {
      data.data.blogPosts = [
        {
          id: '1',
          title: 'Building Modern React Applications',
          content: 'Content here...',
          published: true,
          publishedAt: new Date().toISOString()
        }
      ];
    }

    if (exportOptions.includeSkills) {
      data.data.skills = [
        {
          id: '1',
          name: 'React',
          category: 'Frontend',
          proficiency: 5
        }
      ];
    }

    if (exportOptions.includeTestimonials) {
      data.data.testimonials = [
        {
          id: '1',
          name: 'John Doe',
          company: 'Tech Corp',
          testimonial: 'Great work!',
          rating: 5
        }
      ];
    }

    switch (exportOptions.format) {
      case 'json':
        return JSON.stringify(data, null, 2);
      case 'csv':
        return convertToCSV(data);
      case 'xml':
        return convertToXML(data);
      default:
        return JSON.stringify(data, null, 2);
    }
  };

  const convertToCSV = (data: any): string => {
    // Simple CSV conversion - in a real app, you'd use a proper CSV library
    let csv = 'Type,ID,Title,Status,Created\n';
    
    Object.keys(data.data).forEach(type => {
      data.data[type].forEach((item: any) => {
        csv += `${type},${item.id},${item.title || item.name},${item.status || 'active'},${new Date().toISOString()}\n`;
      });
    });
    
    return csv;
  };

  const convertToXML = (data: any): string => {
    // Simple XML conversion - in a real app, you'd use a proper XML library
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<export>\n';
    
    Object.keys(data.data).forEach(type => {
      xml += `  <${type}>\n`;
      data.data[type].forEach((item: any) => {
        xml += `    <item id="${item.id}">\n`;
        Object.keys(item).forEach(key => {
          if (key !== 'id') {
            xml += `      <${key}>${item[key]}</${key}>\n`;
          }
        });
        xml += `    </item>\n`;
      });
      xml += `  </${type}>\n`;
    });
    
    xml += '</export>';
    return xml;
  };

  const downloadFile = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleFileImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const newJob: ImportJob = {
      id: Date.now().toString(),
      filename: file.name,
      type: 'full',
      status: 'pending',
      progress: 0,
      startedAt: new Date(),
      recordsProcessed: 0,
      totalRecords: 100,
      errors: []
    };

    setImportJobs(prev => [newJob, ...prev]);

    // Simulate import process
    setTimeout(() => {
      processImportJob(newJob.id);
    }, 1000);
  };

  const processImportJob = (jobId: string) => {
    setImportJobs(prev => prev.map(job => 
      job.id === jobId 
        ? { ...job, status: 'processing' as const }
        : job
    ));

    // Simulate processing with progress updates
    let progress = 0;
    const progressInterval = setInterval(() => {
      progress += Math.random() * 20;
      
      setImportJobs(prev => prev.map(job => 
        job.id === jobId 
          ? { 
              ...job, 
              progress: Math.min(progress, 100),
              recordsProcessed: Math.floor((progress / 100) * job.totalRecords)
            }
          : job
      ));

      if (progress >= 100) {
        clearInterval(progressInterval);
        setImportJobs(prev => prev.map(job => 
          job.id === jobId 
            ? { 
                ...job, 
                status: 'completed' as const,
                progress: 100,
                completedAt: new Date(),
                recordsProcessed: job.totalRecords
              }
            : job
        ));
      }
    }, 500);
  };

  const getStatusIcon = (status: ImportJob['status']) => {
    switch (status) {
      case 'pending':
        return <ClockIcon className="h-5 w-5 text-yellow-500" />;
      case 'processing':
        return <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600" />;
      case 'completed':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case 'failed':
        return <ExclamationTriangleIcon className="h-5 w-5 text-red-500" />;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'projects':
        return <CogIcon className="h-4 w-4" />;
      case 'blog':
        return <DocumentTextIcon className="h-4 w-4" />;
      case 'media':
        return <PhotoIcon className="h-4 w-4" />;
      default:
        return <FolderIcon className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <ArrowUpTrayIcon className="h-6 w-6" />
          Import & Export
        </h1>
        <p className="text-gray-600 mt-1">Backup, migrate, and manage your content data</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'export', label: 'Export Data', icon: ArrowDownTrayIcon },
            { id: 'import', label: 'Import Data', icon: ArrowUpTrayIcon },
            { id: 'backup', label: 'Backup & Restore', icon: CloudArrowUpIcon }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  'flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm',
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                )}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Export Tab */}
      {activeTab === 'export' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Export Options */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Export Options</h3>
            
            <div className="space-y-4">
              {/* Content Types */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content Types</label>
                <div className="space-y-2">
                  {[
                    { key: 'includeProjects', label: 'Projects' },
                    { key: 'includeBlogPosts', label: 'Blog Posts' },
                    { key: 'includeSkills', label: 'Skills' },
                    { key: 'includeTestimonials', label: 'Testimonials' },
                    { key: 'includeMedia', label: 'Media Files' },
                    { key: 'includeAnalytics', label: 'Analytics Data' }
                  ].map((option) => (
                    <label key={option.key} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={exportOptions[option.key as keyof ExportOptions] as boolean}
                        onChange={(e) => setExportOptions(prev => ({
                          ...prev,
                          [option.key]: e.target.checked
                        }))}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Format */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Export Format</label>
                <select
                  value={exportOptions.format}
                  onChange={(e) => setExportOptions(prev => ({
                    ...prev,
                    format: e.target.value as 'json' | 'csv' | 'xml'
                  }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="json">JSON</option>
                  <option value="csv">CSV</option>
                  <option value="xml">XML</option>
                </select>
              </div>

              {/* Date Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date Range (Optional)</label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="date"
                    placeholder="Start date"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onChange={(e) => setExportOptions(prev => ({
                      ...prev,
                      dateRange: { 
                        start: e.target.value,
                        end: prev.dateRange?.end || ''
                      }
                    }))}
                  />
                  <input
                    type="date"
                    placeholder="End date"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onChange={(e) => setExportOptions(prev => ({
                      ...prev,
                      dateRange: { 
                        start: prev.dateRange?.start || '',
                        end: e.target.value
                      }
                    }))}
                  />
                </div>
              </div>
            </div>

            {/* Export Button */}
            <div className="mt-6">
              <button
                onClick={handleExport}
                disabled={isExporting}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isExporting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                    Exporting... {exportProgress}%
                  </>
                ) : (
                  <>
                    <ArrowDownTrayIcon className="h-4 w-4" />
                    Export Data
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Export Preview */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Export Preview</h3>
            
            <div className="space-y-3">
              <div className="text-sm text-gray-600">
                <strong>Format:</strong> {exportOptions.format.toUpperCase()}
              </div>
              
              <div className="text-sm text-gray-600">
                <strong>Content Types:</strong>
                <ul className="mt-1 ml-4 list-disc">
                  {Object.entries(exportOptions)
                    .filter(([key, value]) => key.startsWith('include') && value)
                    .map(([key]) => (
                      <li key={key}>
                        {key.replace('include', '').replace(/([A-Z])/g, ' $1').trim()}
                      </li>
                    ))}
                </ul>
              </div>

              <div className="text-sm text-gray-600">
                <strong>Estimated Size:</strong> ~2.5 MB
              </div>

              <div className="text-sm text-gray-600">
                <strong>Estimated Records:</strong> ~150 items
              </div>
            </div>

            {isExporting && (
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${exportProgress}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Import Tab */}
      {activeTab === 'import' && (
        <div className="space-y-6">
          {/* Import Upload */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Import Data</h3>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <DocumentArrowUpIcon className="mx-auto h-12 w-12 text-gray-400" />
              <div className="mt-4">
                <label htmlFor="import-file" className="cursor-pointer">
                  <span className="mt-2 block text-sm font-medium text-gray-900">
                    Drop files here or click to upload
                  </span>
                  <span className="mt-1 block text-sm text-gray-500">
                    Supports JSON, CSV, and XML files
                  </span>
                </label>
                <input
                  id="import-file"
                  type="file"
                  accept=".json,.csv,.xml"
                  onChange={handleFileImport}
                  className="hidden"
                />
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-500">
              <p><strong>Supported formats:</strong></p>
              <ul className="mt-1 ml-4 list-disc">
                <li>JSON - Full data structure with relationships</li>
                <li>CSV - Tabular data for individual content types</li>
                <li>XML - Structured data with metadata</li>
              </ul>
            </div>
          </div>

          {/* Import Jobs */}
          {importJobs.length > 0 && (
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Import History</h3>
              
              <div className="space-y-4">
                {importJobs.map((job) => (
                  <div key={job.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(job.status)}
                        <div>
                          <div className="font-medium text-gray-900">{job.filename}</div>
                          <div className="text-sm text-gray-500">
                            {getTypeIcon(job.type)}
                            <span className="ml-1 capitalize">{job.type}</span>
                            {job.status === 'processing' && (
                              <span className="ml-2">
                                {job.recordsProcessed}/{job.totalRecords} records
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900 capitalize">
                          {job.status}
                        </div>
                        <div className="text-xs text-gray-500">
                          {formatDate(job.startedAt)}
                        </div>
                      </div>
                    </div>

                    {job.status === 'processing' && (
                      <div className="mt-3">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${job.progress}%` }}
                          />
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {Math.round(job.progress)}% complete
                        </div>
                      </div>
                    )}

                    {job.errors.length > 0 && (
                      <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded">
                        <div className="text-sm text-red-800">
                          <strong>Errors:</strong>
                          <ul className="mt-1 ml-4 list-disc">
                            {job.errors.map((error, index) => (
                              <li key={index}>{error}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Backup Tab */}
      {activeTab === 'backup' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Automated Backups */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Automated Backups</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  <div>
                    <div className="font-medium text-green-900">Daily Backup</div>
                    <div className="text-sm text-green-700">Last: Today at 2:00 AM</div>
                  </div>
                </div>
                <button className="text-sm text-green-700 hover:text-green-900">
                  Configure
                </button>
              </div>

              <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <CloudArrowUpIcon className="h-5 w-5 text-blue-500" />
                  <div>
                    <div className="font-medium text-blue-900">Cloud Sync</div>
                    <div className="text-sm text-blue-700">Synced 5 minutes ago</div>
                  </div>
                </div>
                <button className="text-sm text-blue-700 hover:text-blue-900">
                  Settings
                </button>
              </div>
            </div>

            <div className="mt-6">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <CloudArrowUpIcon className="h-4 w-4" />
                Create Backup Now
              </button>
            </div>
          </div>

          {/* Recent Backups */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Backups</h3>
            
            <div className="space-y-3">
              {[
                { date: new Date(), size: '2.4 MB', type: 'Full' },
                { date: new Date(Date.now() - 86400000), size: '2.3 MB', type: 'Full' },
                { date: new Date(Date.now() - 172800000), size: '2.2 MB', type: 'Full' },
                { date: new Date(Date.now() - 259200000), size: '2.1 MB', type: 'Incremental' }
              ].map((backup, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <FolderIcon className="h-5 w-5 text-gray-400" />
                    <div>
                      <div className="font-medium text-gray-900">
                        {backup.type} Backup
                      </div>
                      <div className="text-sm text-gray-500">
                        {formatDate(backup.date)} • {backup.size}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-sm text-blue-600 hover:text-blue-900">
                      Download
                    </button>
                    <button className="text-sm text-green-600 hover:text-green-900">
                      Restore
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};