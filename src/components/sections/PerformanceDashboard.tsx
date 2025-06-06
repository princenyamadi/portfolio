import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Clock, 
  Gauge, 
  AlertTriangle,
  XCircle,
  Maximize2,
  Minimize2
} from 'lucide-react';
import { usePerformanceMonitor } from '../../hooks/usePerformanceMonitor';

interface PerformanceDashboardProps {
  isMinimized?: boolean;
  onToggleMinimize?: () => void;
  className?: string;
}

export const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({
  isMinimized = false,
  onToggleMinimize,
  className = ''
}) => {
  const { metrics, getMetricsSummary, markTime } = usePerformanceMonitor();
  const [isVisible, setIsVisible] = useState(false);
  const summary = getMetricsSummary();

  // Toggle visibility with keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(!isVisible);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isVisible]);

  // Show dashboard only in development or when explicitly enabled
  useEffect(() => {
    if (import.meta.env.DEV) {
      // Auto-show in development after 2 seconds
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const getMetricStatus = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.poor) return 'fair';
    return 'poor';
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return 'text-green-400 bg-green-500/20';
      case 'B': return 'text-blue-400 bg-blue-500/20';
      case 'C': return 'text-yellow-400 bg-yellow-500/20';
      case 'D': return 'text-orange-400 bg-orange-500/20';
      case 'F': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const formatTime = (ms: number) => {
    if (ms > 1000) return `${(ms / 1000).toFixed(2)}s`;
    return `${Math.round(ms)}ms`;
  };

  const formatBytes = (bytes: number) => {
    const sizes = ['B', 'KB', 'MB', 'GB'];
    if (bytes === 0) return '0 B';
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${sizes[i]}`;
  };

  if (!isVisible) {
    return (
             <motion.button
         initial={{ opacity: 0, scale: 0 }}
         animate={{ opacity: 1, scale: 1 }}
         onClick={() => setIsVisible(true)}
         className="fixed bottom-4 right-4 z-50 bg-slate-800/90 backdrop-blur-sm border border-white/20 rounded-full p-3 text-slate-300 hover:text-white transition-colors"
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.95 }}
                  aria-label="Open performance dashboard"
         title="Open performance dashboard"
       >
         <Activity className="w-5 h-5" />
       </motion.button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          scale: 1,
          width: isMinimized ? 'auto' : '400px'
        }}
        exit={{ opacity: 0, y: 100, scale: 0.8 }}
        className={`fixed bottom-4 right-4 z-50 bg-slate-800/95 backdrop-blur-sm border border-white/20 rounded-xl shadow-2xl ${className}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-blue-400" />
            <h3 className="text-sm font-medium text-white">Performance</h3>
            <div className={`px-2 py-1 rounded-full text-xs font-bold ${getGradeColor(summary.grade)}`}>
              {summary.grade}
            </div>
          </div>
          
          <div className="flex items-center space-x-1">
            {onToggleMinimize && (
              <button
                onClick={onToggleMinimize}
                className="p-1 text-slate-400 hover:text-white transition-colors"
              >
                {isMinimized ? (
                  <Maximize2 className="w-4 h-4" />
                ) : (
                  <Minimize2 className="w-4 h-4" />
                )}
              </button>
            )}
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 text-slate-400 hover:text-white transition-colors"
            >
              <XCircle className="w-4 h-4" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
            {/* Performance Score */}
            <div className="text-center">
              <div className="relative inline-flex items-center justify-center w-20 h-20 mb-2">
                <svg className="w-20 h-20 transform -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="30"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    className="text-slate-700"
                  />
                  <motion.circle
                    cx="40"
                    cy="40"
                    r="30"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    className="text-blue-400"
                    initial={{ strokeDasharray: "0 188.5" }}
                    animate={{ 
                      strokeDasharray: `${(summary.score / 100) * 188.5} 188.5` 
                    }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-white">{summary.score}</span>
                </div>
              </div>
              <p className="text-xs text-slate-400">Performance Score</p>
            </div>

            {/* Core Web Vitals */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-slate-300 flex items-center">
                <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                Core Web Vitals
              </h4>
              
              <div className="grid grid-cols-2 gap-3">
                {/* FCP */}
                {metrics.fcp && (
                  <div className="bg-slate-700/30 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-slate-400">FCP</span>
                      <div className={`w-2 h-2 rounded-full ${
                        getMetricStatus(metrics.fcp, { good: 1800, poor: 3000 }) === 'good' 
                          ? 'bg-green-400' 
                          : getMetricStatus(metrics.fcp, { good: 1800, poor: 3000 }) === 'fair'
                          ? 'bg-yellow-400'
                          : 'bg-red-400'
                      }`} />
                    </div>
                    <div className="text-sm font-medium text-white">
                      {formatTime(metrics.fcp)}
                    </div>
                  </div>
                )}

                {/* LCP */}
                {metrics.lcp && (
                  <div className="bg-slate-700/30 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-slate-400">LCP</span>
                      <div className={`w-2 h-2 rounded-full ${
                        getMetricStatus(metrics.lcp, { good: 2500, poor: 4000 }) === 'good' 
                          ? 'bg-green-400' 
                          : getMetricStatus(metrics.lcp, { good: 2500, poor: 4000 }) === 'fair'
                          ? 'bg-yellow-400'
                          : 'bg-red-400'
                      }`} />
                    </div>
                    <div className="text-sm font-medium text-white">
                      {formatTime(metrics.lcp)}
                    </div>
                  </div>
                )}

                {/* FID */}
                {metrics.fid && (
                  <div className="bg-slate-700/30 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-slate-400">FID</span>
                      <div className={`w-2 h-2 rounded-full ${
                        getMetricStatus(metrics.fid, { good: 100, poor: 300 }) === 'good' 
                          ? 'bg-green-400' 
                          : getMetricStatus(metrics.fid, { good: 100, poor: 300 }) === 'fair'
                          ? 'bg-yellow-400'
                          : 'bg-red-400'
                      }`} />
                    </div>
                    <div className="text-sm font-medium text-white">
                      {formatTime(metrics.fid)}
                    </div>
                  </div>
                )}

                {/* CLS */}
                {metrics.cls && (
                  <div className="bg-slate-700/30 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-slate-400">CLS</span>
                      <div className={`w-2 h-2 rounded-full ${
                        getMetricStatus(metrics.cls, { good: 0.1, poor: 0.25 }) === 'good' 
                          ? 'bg-green-400' 
                          : getMetricStatus(metrics.cls, { good: 0.1, poor: 0.25 }) === 'fair'
                          ? 'bg-yellow-400'
                          : 'bg-red-400'
                      }`} />
                    </div>
                    <div className="text-sm font-medium text-white">
                      {metrics.cls.toFixed(3)}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Loading Performance */}
            {(metrics.domContentLoaded || metrics.loadComplete) && (
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-slate-300 flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-blue-400" />
                  Loading Times
                </h4>
                
                <div className="space-y-2">
                  {metrics.domContentLoaded && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">DOM Ready</span>
                      <span className="text-white font-medium">
                        {formatTime(metrics.domContentLoaded)}
                      </span>
                    </div>
                  )}
                  {metrics.loadComplete && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Load Complete</span>
                      <span className="text-white font-medium">
                        {formatTime(metrics.loadComplete)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Memory Usage */}
            {metrics.memory && (
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-slate-300 flex items-center">
                  <Gauge className="w-4 h-4 mr-2 text-purple-400" />
                  Memory Usage
                </h4>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Used</span>
                    <span className="text-white font-medium">
                      {formatBytes(metrics.memory.usedJSHeapSize)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Total</span>
                    <span className="text-white font-medium">
                      {formatBytes(metrics.memory.totalJSHeapSize)}
                    </span>
                  </div>
                  
                  {/* Memory Usage Bar */}
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <motion.div
                      className={`h-full rounded-full ${
                        (metrics.memory.usedJSHeapSize / metrics.memory.jsHeapSizeLimit) > 0.8
                          ? 'bg-red-500'
                          : (metrics.memory.usedJSHeapSize / metrics.memory.jsHeapSizeLimit) > 0.6
                          ? 'bg-yellow-500'
                          : 'bg-green-500'
                      }`}
                      initial={{ width: 0 }}
                      animate={{ 
                        width: `${(metrics.memory.usedJSHeapSize / metrics.memory.jsHeapSizeLimit) * 100}%` 
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Network Info */}
            {metrics.connection && (
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-slate-300 flex items-center">
                  <Activity className="w-4 h-4 mr-2 text-green-400" />
                  Network
                </h4>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Type</span>
                    <span className="text-white font-medium capitalize">
                      {metrics.connection.effectiveType}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Downlink</span>
                    <span className="text-white font-medium">
                      {metrics.connection.downlink} Mbps
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">RTT</span>
                    <span className="text-white font-medium">
                      {metrics.connection.rtt}ms
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Recommendations */}
            {summary.recommendations.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-slate-300 flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-2 text-orange-400" />
                  Recommendations
                </h4>
                
                <div className="space-y-2">
                  {summary.recommendations.slice(0, 3).map((recommendation, index) => (
                    <div key={index} className="text-xs text-slate-400 bg-slate-700/30 rounded-lg p-2">
                      {recommendation}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Debug Actions */}
            <div className="pt-3 border-t border-white/10">
              <div className="flex items-center justify-between text-xs">
                <button
                  onClick={() => markTime('manual-mark')}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Mark Time
                </button>
                <span className="text-slate-500">
                  Ctrl+Shift+P to toggle
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Minimized View */}
        {isMinimized && (
          <div className="p-3 flex items-center space-x-3">
            <div className={`px-2 py-1 rounded-full text-xs font-bold ${getGradeColor(summary.grade)}`}>
              {summary.grade}
            </div>
            <span className="text-sm font-medium text-white">{summary.score}</span>
            {summary.recommendations.length > 0 && (
              <AlertTriangle className="w-4 h-4 text-orange-400" />
            )}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}; 