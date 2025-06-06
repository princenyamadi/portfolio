import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, Code, FileText } from 'lucide-react';

// Basic Spinner Component
interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className={`${sizeClasses[size]} ${className}`}
    >
      <Loader2 className="w-full h-full text-blue-400" />
    </motion.div>
  );
};

// Progress Bar Component
interface ProgressBarProps {
  progress: number; // 0-100
  showPercentage?: boolean;
  label?: string;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  showPercentage = true,
  label,
  className = ''
}) => {
  return (
    <div className={`w-full ${className}`}>
      {(label || showPercentage) && (
        <div className="flex justify-between items-center mb-2">
          {label && <span className="text-sm text-slate-300">{label}</span>}
          {showPercentage && (
            <span className="text-sm text-slate-400">{Math.round(progress)}%</span>
          )}
        </div>
      )}
      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

// Skeleton Components
export const SkeletonBox: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.div
    className={`bg-slate-700/50 rounded ${className}`}
    animate={{ opacity: [0.5, 1, 0.5] }}
    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
  />
);

export const SkeletonText: React.FC<{ lines?: number; className?: string }> = ({ 
  lines = 3, 
  className = '' 
}) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, index) => (
      <SkeletonBox
        key={index}
        className={`h-4 ${
          index === lines - 1 ? 'w-3/4' : 'w-full'
        }`}
      />
    ))}
  </div>
);

// Card Skeleton
export const SkeletonCard: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 ${className}`}>
    <div className="flex items-start space-x-4">
      <SkeletonBox className="w-12 h-12 rounded-lg" />
      <div className="flex-1">
        <SkeletonBox className="h-6 w-3/4 mb-2" />
        <SkeletonText lines={2} />
      </div>
    </div>
    <div className="mt-4 flex items-center space-x-2">
      <SkeletonBox className="h-8 w-20" />
      <SkeletonBox className="h-8 w-16" />
      <SkeletonBox className="h-8 w-24" />
    </div>
  </div>
);

// Project Card Skeleton
export const ProjectCardSkeleton: React.FC = () => (
  <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
    <div className="flex items-start justify-between mb-4">
      <div>
        <SkeletonBox className="h-6 w-48 mb-2" />
        <SkeletonBox className="h-4 w-24" />
      </div>
      <SkeletonBox className="h-6 w-16" />
    </div>
    
    <SkeletonText lines={3} className="mb-6" />
    
    <div className="flex flex-wrap gap-2 mb-6">
      {Array.from({ length: 4 }).map((_, index) => (
        <SkeletonBox key={index} className="h-6 w-16" />
      ))}
    </div>
    
    <div className="flex items-center justify-between">
      <div className="flex space-x-2">
        <SkeletonBox className="h-9 w-24" />
        <SkeletonBox className="h-9 w-20" />
      </div>
      <SkeletonBox className="h-9 w-9" />
    </div>
  </div>
);

// Blog Card Skeleton
export const BlogCardSkeleton: React.FC = () => (
  <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
    <div className="flex items-center space-x-2 mb-4">
      <SkeletonBox className="h-6 w-6 rounded-full" />
      <SkeletonBox className="h-4 w-20" />
      <SkeletonBox className="h-4 w-16" />
    </div>
    
    <SkeletonBox className="h-8 w-full mb-3" />
    <SkeletonText lines={3} className="mb-4" />
    
    <div className="flex items-center justify-between">
      <div className="flex space-x-4 text-sm text-slate-400">
        <SkeletonBox className="h-4 w-16" />
        <SkeletonBox className="h-4 w-20" />
        <SkeletonBox className="h-4 w-12" />
      </div>
      <SkeletonBox className="h-8 w-20" />
    </div>
  </div>
);

// Loading Screen Component
interface LoadingScreenProps {
  message?: string;
  progress?: number;
  steps?: string[];
  currentStep?: number;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  message = "Loading...",
  progress,
  steps,
  currentStep = 0
}) => {
  return (
    <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
      <div className="text-center max-w-md w-full px-6">
        {/* Animated Logo/Icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Code className="w-10 h-10 text-white" />
            </motion.div>
          </div>
        </motion.div>

        {/* Loading Message */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-white mb-4"
        >
          {message}
        </motion.h1>

        {/* Progress Bar */}
        {typeof progress === 'number' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <ProgressBar progress={progress} showPercentage />
          </motion.div>
        )}

        {/* Loading Steps */}
        {steps && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-2"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex items-center space-x-3 text-sm ${
                  index < currentStep
                    ? 'text-green-400'
                    : index === currentStep
                    ? 'text-blue-400'
                    : 'text-slate-500'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className={`w-2 h-2 rounded-full ${
                  index < currentStep
                    ? 'bg-green-400'
                    : index === currentStep
                    ? 'bg-blue-400'
                    : 'bg-slate-600'
                }`} />
                <span>{step}</span>
                {index === currentStep && (
                  <Spinner size="sm" className="ml-2" />
                )}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Simple spinner if no progress */}
        {typeof progress !== 'number' && !steps && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Spinner size="lg" />
          </motion.div>
        )}
      </div>
    </div>
  );
};

// Section Loading Component
interface SectionLoadingProps {
  title?: string;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
}

export const SectionLoading: React.FC<SectionLoadingProps> = ({
  title = "Loading content...",
  icon: Icon = FileText,
  className = ''
}) => (
  <div className={`text-center py-12 ${className}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-flex flex-col items-center"
    >
      <div className="bg-slate-800/50 p-4 rounded-full mb-4">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon className="w-8 h-8 text-slate-400" />
        </motion.div>
      </div>
      <h3 className="text-lg font-medium text-slate-300 mb-2">{title}</h3>
      <div className="flex space-x-1">
        {Array.from({ length: 3 }).map((_, index) => (
          <motion.div
            key={index}
            className="w-2 h-2 bg-blue-400 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: index * 0.2
            }}
          />
        ))}
      </div>
    </motion.div>
  </div>
);

// Grid Loading (for multiple cards)
interface GridLoadingProps {
  cardComponent?: React.ComponentType;
  count?: number;
  columns?: number;
  className?: string;
}

export const GridLoading: React.FC<GridLoadingProps> = ({
  cardComponent: CardComponent = SkeletonCard,
  count = 6,
  columns = 3,
  className = ''
}) => (
  <div className={`grid gap-6 ${
    columns === 1 ? 'grid-cols-1' :
    columns === 2 ? 'grid-cols-1 md:grid-cols-2' :
    columns === 4 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' :
    'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  } ${className}`}>
    {Array.from({ length: count }).map((_, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <CardComponent />
      </motion.div>
    ))}
  </div>
);

// Inline Loading (for buttons, etc.)
interface InlineLoadingProps {
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const InlineLoading: React.FC<InlineLoadingProps> = ({
  text = "Loading...",
  size = 'sm',
  className = ''
}) => (
  <div className={`flex items-center space-x-2 ${className}`}>
    <Spinner size={size} />
    <span className={`text-slate-300 ${
      size === 'sm' ? 'text-sm' :
      size === 'lg' ? 'text-lg' :
      'text-base'
    }`}>
      {text}
    </span>
  </div>
);

export default {
  Spinner,
  ProgressBar,
  SkeletonBox,
  SkeletonText,
  SkeletonCard,
  ProjectCardSkeleton,
  BlogCardSkeleton,
  LoadingScreen,
  SectionLoading,
  GridLoading,
  InlineLoading
}; 