import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface MobileCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  onClick?: () => void;
  href?: string;
  as?: keyof JSX.IntrinsicElements;
}

const variantClasses = {
  default: 'bg-white/5 border border-white/10',
  elevated: 'bg-white/10 border border-white/20 shadow-lg',
  outlined: 'bg-transparent border-2 border-white/30',
  glass: 'bg-white/10 backdrop-blur-md border border-white/20'
};

const sizeClasses = {
  sm: 'responsive-padding-card p-4',
  md: 'responsive-padding-card',
  lg: 'responsive-padding-card p-6 sm:p-8'
};

export const MobileCard: React.FC<MobileCardProps> = ({
  children,
  className = '',
  variant = 'default',
  size = 'md',
  interactive = false,
  onClick,
  href,
  as: Component = 'div'
}) => {
  const baseClasses = cn(
    'rounded-lg transition-all duration-300',
    variantClasses[variant],
    sizeClasses[size],
    interactive && 'mobile-interactive cursor-pointer hover:bg-white/15 hover:border-white/30',
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        whileHover={interactive ? { y: -2, scale: 1.02 } : undefined}
        whileTap={interactive ? { scale: 0.98 } : undefined}
      >
        {children}
      </motion.a>
    );
  }

  if (onClick) {
    return (
      <motion.button
        onClick={onClick}
        className={cn(baseClasses, 'w-full text-left mobile-touch-target')}
        whileHover={interactive ? { y: -2, scale: 1.02 } : undefined}
        whileTap={interactive ? { scale: 0.98 } : undefined}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <Component className={baseClasses}>
      {children}
    </Component>
  );
};

interface MobileCardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const MobileCardHeader: React.FC<MobileCardHeaderProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  );
};

interface MobileCardTitleProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const titleSizeClasses = {
  sm: 'responsive-heading-sm',
  md: 'responsive-heading-md',
  lg: 'responsive-heading-lg'
};

export const MobileCardTitle: React.FC<MobileCardTitleProps> = ({
  children,
  className = '',
  size = 'md'
}) => {
  return (
    <h3 className={cn(
      'font-bold text-white mb-2',
      titleSizeClasses[size],
      className
    )}>
      {children}
    </h3>
  );
};

interface MobileCardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const MobileCardContent: React.FC<MobileCardContentProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={cn('text-white/80 responsive-text-md leading-relaxed', className)}>
      {children}
    </div>
  );
};

interface MobileCardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const MobileCardFooter: React.FC<MobileCardFooterProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={cn('mt-4 pt-4 border-t border-white/10', className)}>
      {children}
    </div>
  );
}; 