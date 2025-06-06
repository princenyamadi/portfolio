import React from 'react';
import { cn } from '@/utils/cn';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  as?: keyof JSX.IntrinsicElements;
}

const sizeClasses = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-none'
};

const paddingClasses = {
  none: '',
  sm: 'px-4 sm:px-6',
  md: 'px-4 sm:px-6 lg:px-8',
  lg: 'px-6 sm:px-8 lg:px-12'
};

export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  className = '',
  size = 'xl',
  padding = 'md',
  as: Component = 'div'
}) => {
  return (
    <Component
      className={cn(
        'w-full mx-auto mobile-safe-area',
        sizeClasses[size],
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </Component>
  );
};

interface ResponsiveGridProps {
  children: React.ReactNode;
  className?: string;
  cols?: {
    default: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: 'sm' | 'md' | 'lg';
}

const gapClasses = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8'
};

export const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  className = '',
  cols = { default: 1 },
  gap = 'md'
}) => {
  const gridClasses = [
    'grid',
    `grid-cols-${cols.default}`,
    cols.sm && `sm:grid-cols-${cols.sm}`,
    cols.md && `md:grid-cols-${cols.md}`,
    cols.lg && `lg:grid-cols-${cols.lg}`,
    cols.xl && `xl:grid-cols-${cols.xl}`,
    gapClasses[gap]
  ].filter(Boolean).join(' ');

  return (
    <div className={cn(gridClasses, className)}>
      {children}
    </div>
  );
};

interface ResponsiveStackProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'vertical' | 'horizontal' | 'responsive';
  spacing?: 'sm' | 'md' | 'lg';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
}

const spacingClasses = {
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6'
};

const alignClasses = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch'
};

const justifyClasses = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly'
};

export const ResponsiveStack: React.FC<ResponsiveStackProps> = ({
  children,
  className = '',
  direction = 'vertical',
  spacing = 'md',
  align = 'stretch',
  justify = 'start'
}) => {
  const directionClasses = {
    vertical: 'flex flex-col',
    horizontal: 'flex flex-row',
    responsive: 'flex flex-col sm:flex-row'
  };

  return (
    <div
      className={cn(
        directionClasses[direction],
        spacingClasses[spacing],
        alignClasses[align],
        justifyClasses[justify],
        className
      )}
    >
      {children}
    </div>
  );
}; 