import React, { useState, useEffect } from 'react';
import {
  ChartBarIcon,
  EyeIcon,
  ClockIcon,
  ArrowTrendingUpIcon as TrendingUpIcon,
  ArrowTrendingDownIcon as TrendingDownIcon,
  UserGroupIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline';
import { formatNumber, formatDate } from '../../utils/format';
import { cn } from '../../utils/cn';

interface AnalyticsData {
  overview: {
    totalViews: number;
    uniqueVisitors: number;
    avgSessionDuration: number;
    bounceRate: number;
    conversionRate: number;
  };
  content: {
    topProjects: Array<{
      id: string;
      title: string;
      views: number;
      engagement: number;
      trend: 'up' | 'down' | 'stable';
    }>;
    topBlogPosts: Array<{
      id: string;
      title: string;
      views: number;
      readTime: number;
      shares: number;
      trend: 'up' | 'down' | 'stable';
    }>;
    skillsInteraction: Array<{
      category: string;
      views: number;
      interactions: number;
    }>;
  };
  traffic: {
    sources: Array<{
      source: string;
      visitors: number;
      percentage: number;
    }>;
    devices: Array<{
      device: string;
      visitors: number;
      percentage: number;
    }>;
    locations: Array<{
      country: string;
      visitors: number;
      percentage: number;
    }>;
  };
  timeline: Array<{
    date: string;
    views: number;
    visitors: number;
    engagement: number;
  }>;
}

type TimeRange = '7d' | '30d' | '90d' | '1y';

export const ContentAnalytics: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [timeRange, setTimeRange] = useState<TimeRange>('30d');
  const [selectedMetric, setSelectedMetric] = useState<'views' | 'visitors' | 'engagement'>('views');

  useEffect(() => {
    loadAnalyticsData();
  }, [timeRange]);

  const loadAnalyticsData = async () => {
    try {
      setIsLoading(true);
      // In a real implementation, you'd fetch from your analytics service
      // For demo purposes, generate mock data
      const data = generateMockAnalyticsData(timeRange);
      setAnalyticsData(data);
    } catch (error) {
      console.error('Error loading analytics data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const generateMockAnalyticsData = (range: TimeRange): AnalyticsData => {
    const multiplier = range === '7d' ? 1 : range === '30d' ? 4 : range === '90d' ? 12 : 48;
    
    return {
      overview: {
        totalViews: 15420 * multiplier,
        uniqueVisitors: 8930 * multiplier,
        avgSessionDuration: 245,
        bounceRate: 32.5,
        conversionRate: 4.2
      },
      content: {
        topProjects: [
          {
            id: '1',
            title: 'E-commerce Platform',
            views: 2340 * multiplier,
            engagement: 78.5,
            trend: 'up'
          },
          {
            id: '2',
            title: 'Task Management App',
            views: 1890 * multiplier,
            engagement: 65.2,
            trend: 'up'
          },
          {
            id: '3',
            title: 'Portfolio Website',
            views: 1560 * multiplier,
            engagement: 72.1,
            trend: 'stable'
          },
          {
            id: '4',
            title: 'Mobile Banking App',
            views: 1230 * multiplier,
            engagement: 58.9,
            trend: 'down'
          }
        ],
        topBlogPosts: [
          {
            id: '1',
            title: 'Building Modern React Applications',
            views: 3420 * multiplier,
            readTime: 8,
            shares: 156 * multiplier,
            trend: 'up'
          },
          {
            id: '2',
            title: 'TypeScript Best Practices',
            views: 2890 * multiplier,
            readTime: 12,
            shares: 134 * multiplier,
            trend: 'up'
          },
          {
            id: '3',
            title: 'Firebase vs Supabase Comparison',
            views: 2340 * multiplier,
            readTime: 15,
            shares: 98 * multiplier,
            trend: 'stable'
          }
        ],
        skillsInteraction: [
          { category: 'Frontend', views: 4560 * multiplier, interactions: 890 * multiplier },
          { category: 'Backend', views: 3240 * multiplier, interactions: 670 * multiplier },
          { category: 'Mobile', views: 2890 * multiplier, interactions: 540 * multiplier },
          { category: 'DevOps', views: 2340 * multiplier, interactions: 450 * multiplier }
        ]
      },
      traffic: {
        sources: [
          { source: 'Direct', visitors: 3420 * multiplier, percentage: 38.3 },
          { source: 'Google', visitors: 2890 * multiplier, percentage: 32.4 },
          { source: 'LinkedIn', visitors: 1560 * multiplier, percentage: 17.5 },
          { source: 'GitHub', visitors: 780 * multiplier, percentage: 8.7 },
          { source: 'Other', visitors: 280 * multiplier, percentage: 3.1 }
        ],
        devices: [
          { device: 'Desktop', visitors: 5420 * multiplier, percentage: 60.7 },
          { device: 'Mobile', visitors: 2890 * multiplier, percentage: 32.4 },
          { device: 'Tablet', visitors: 620 * multiplier, percentage: 6.9 }
        ],
        locations: [
          { country: 'United States', visitors: 3420 * multiplier, percentage: 38.3 },
          { country: 'United Kingdom', visitors: 1890 * multiplier, percentage: 21.2 },
          { country: 'Canada', visitors: 1230 * multiplier, percentage: 13.8 },
          { country: 'Germany', visitors: 890 * multiplier, percentage: 10.0 },
          { country: 'Australia', visitors: 670 * multiplier, percentage: 7.5 },
          { country: 'Other', visitors: 830 * multiplier, percentage: 9.2 }
        ]
      },
      timeline: generateTimelineData(range, multiplier)
    };
  };

  const generateTimelineData = (range: TimeRange, multiplier: number) => {
    const days = range === '7d' ? 7 : range === '30d' ? 30 : range === '90d' ? 90 : 365;
    const data = [];
    
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      
      data.push({
        date: date.toISOString().split('T')[0],
        views: Math.floor(Math.random() * 500 + 200) * (multiplier / 10),
        visitors: Math.floor(Math.random() * 300 + 100) * (multiplier / 10),
        engagement: Math.floor(Math.random() * 30 + 60)
      });
    }
    
    return data;
  };

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return <TrendingUpIcon className="h-4 w-4 text-green-500" />;
      case 'down':
        return <TrendingDownIcon className="h-4 w-4 text-red-500" />;
      default:
        return <div className="h-4 w-4 bg-gray-400 rounded-full" />;
    }
  };

  const getDeviceIcon = (device: string) => {
    switch (device.toLowerCase()) {
      case 'mobile':
        return <DevicePhoneMobileIcon className="h-5 w-5 text-blue-500" />;
      case 'desktop':
        return <ComputerDesktopIcon className="h-5 w-5 text-green-500" />;
      default:
        return <ComputerDesktopIcon className="h-5 w-5 text-gray-500" />;
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!analyticsData) {
    return (
      <div className="text-center py-12">
        <ChartBarIcon className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-sm font-medium text-gray-900">No analytics data available</h3>
        <p className="mt-1 text-sm text-gray-500">Analytics data will appear here once you have traffic.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <ChartBarIcon className="h-6 w-6" />
            Content Analytics
          </h1>
          <p className="text-gray-600 mt-1">Track your portfolio performance and engagement</p>
        </div>
        
        {/* Time Range Selector */}
        <div className="mt-4 sm:mt-0 flex rounded-lg border border-gray-300 overflow-hidden">
          {(['7d', '30d', '90d', '1y'] as TimeRange[]).map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={cn(
                'px-3 py-2 text-sm transition-colors',
                timeRange === range 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              )}
            >
              {range === '7d' ? '7 Days' : range === '30d' ? '30 Days' : range === '90d' ? '90 Days' : '1 Year'}
            </button>
          ))}
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Views</p>
              <p className="text-2xl font-bold text-gray-900">{formatNumber(analyticsData.overview.totalViews)}</p>
            </div>
            <EyeIcon className="h-8 w-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Unique Visitors</p>
              <p className="text-2xl font-bold text-gray-900">{formatNumber(analyticsData.overview.uniqueVisitors)}</p>
            </div>
            <UserGroupIcon className="h-8 w-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg. Session</p>
              <p className="text-2xl font-bold text-gray-900">{analyticsData.overview.avgSessionDuration}s</p>
            </div>
            <ClockIcon className="h-8 w-8 text-purple-500" />
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Bounce Rate</p>
              <p className="text-2xl font-bold text-gray-900">{analyticsData.overview.bounceRate}%</p>
            </div>
            <TrendingDownIcon className="h-8 w-8 text-red-500" />
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
              <p className="text-2xl font-bold text-gray-900">{analyticsData.overview.conversionRate}%</p>
            </div>
            <TrendingUpIcon className="h-8 w-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Timeline Chart */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Traffic Timeline</h3>
            <select
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value as any)}
              className="text-sm border border-gray-300 rounded px-2 py-1"
            >
              <option value="views">Views</option>
              <option value="visitors">Visitors</option>
              <option value="engagement">Engagement</option>
            </select>
          </div>
          
          {/* Simple Chart Visualization */}
          <div className="h-64 flex items-end justify-between space-x-1">
            {analyticsData.timeline.slice(-14).map((point, index) => {
              const value = point[selectedMetric];
              const maxValue = Math.max(...analyticsData.timeline.map(p => p[selectedMetric]));
              const height = (value / maxValue) * 100;
              
              return (
                <div
                  key={index}
                  className="flex-1 bg-blue-500 rounded-t opacity-75 hover:opacity-100 transition-opacity"
                  style={{ height: `${height}%` }}
                  title={`${formatDate(new Date(point.date))}: ${formatNumber(value)}`}
                />
              );
            })}
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Sources</h3>
          <div className="space-y-3">
            {analyticsData.traffic.sources.map((source, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-blue-500" style={{ backgroundColor: `hsl(${index * 60}, 70%, 50%)` }} />
                  <span className="text-sm font-medium text-gray-900">{source.source}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{formatNumber(source.visitors)}</div>
                  <div className="text-xs text-gray-500">{source.percentage}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Projects */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Projects</h3>
          <div className="space-y-4">
            {analyticsData.content.topProjects.map((project, index) => (
              <div key={project.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-900">{project.title}</span>
                    {getTrendIcon(project.trend)}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {formatNumber(project.views)} views • {project.engagement}% engagement
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-gray-900">#{index + 1}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Blog Posts */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Blog Posts</h3>
          <div className="space-y-4">
            {analyticsData.content.topBlogPosts.map((post, index) => (
              <div key={post.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-900">{post.title}</span>
                    {getTrendIcon(post.trend)}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {formatNumber(post.views)} views • {post.readTime} min read • {formatNumber(post.shares)} shares
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-gray-900">#{index + 1}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Device Breakdown */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Types</h3>
          <div className="space-y-3">
            {analyticsData.traffic.devices.map((device, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getDeviceIcon(device.device)}
                  <span className="text-sm font-medium text-gray-900">{device.device}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{device.percentage}%</div>
                  <div className="text-xs text-gray-500">{formatNumber(device.visitors)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Interaction */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills Engagement</h3>
          <div className="space-y-3">
            {analyticsData.content.skillsInteraction.map((skill, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">{skill.category}</span>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{formatNumber(skill.interactions)}</div>
                  <div className="text-xs text-gray-500">{formatNumber(skill.views)} views</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Locations */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Locations</h3>
          <div className="space-y-3">
            {analyticsData.traffic.locations.slice(0, 5).map((location, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <GlobeAltIcon className="h-4 w-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-900">{location.country}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{location.percentage}%</div>
                  <div className="text-xs text-gray-500">{formatNumber(location.visitors)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};