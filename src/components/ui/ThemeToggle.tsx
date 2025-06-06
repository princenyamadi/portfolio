import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Monitor, Check } from 'lucide-react';
import { useTheme, Theme } from '../../contexts/ThemeContext';

interface ThemeOption {
  value: Theme;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const themeOptions: ThemeOption[] = [
  {
    value: 'light',
    label: 'Light',
    icon: Sun,
    description: 'Light theme'
  },
  {
    value: 'dark',
    label: 'Dark',
    icon: Moon,
    description: 'Dark theme'
  },
  {
    value: 'system',
    label: 'System',
    icon: Monitor,
    description: 'Follow system preference'
  }
];

interface ThemeToggleProps {
  variant?: 'icon' | 'dropdown';
  showLabel?: boolean;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  variant = 'icon',
  showLabel = false,
  className = ''
}) => {
  const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  if (variant === 'icon') {
    const currentIcon = resolvedTheme === 'dark' ? Moon : Sun;
    const IconComponent = currentIcon;

    return (
      <motion.button
        onClick={toggleTheme}
        className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 group ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} theme`}
      >
        <motion.div
          key={resolvedTheme}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <IconComponent className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
          
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: resolvedTheme === 'dark' 
                ? '0 0 20px rgba(59, 130, 246, 0.3)' 
                : '0 0 20px rgba(251, 191, 36, 0.3)'
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {showLabel && (
          <span className="ml-2 text-sm text-slate-300 group-hover:text-white transition-colors">
            {resolvedTheme === 'dark' ? 'Dark' : 'Light'}
          </span>
        )}
      </motion.button>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 text-slate-300 hover:text-white"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {themeOptions.map((option) => {
          if (option.value === theme) {
            const IconComponent = option.icon;
            return (
              <React.Fragment key={option.value}>
                <IconComponent className="w-4 h-4" />
                {showLabel && <span className="text-sm">{option.label}</span>}
              </React.Fragment>
            );
          }
          return null;
        })}
        
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-4 h-4 border-r-2 border-b-2 border-current transform rotate-45"
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-2 right-0 z-50 min-w-[200px] bg-slate-800/95 backdrop-blur-sm border border-white/20 rounded-xl shadow-2xl overflow-hidden"
            >
              <div className="p-2">
                {themeOptions.map((option) => {
                  const IconComponent = option.icon;
                  const isSelected = theme === option.value;

                  return (
                    <motion.button
                      key={option.value}
                      onClick={() => {
                        setTheme(option.value);
                        setIsOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-200 text-left ${
                        isSelected
                          ? 'bg-blue-500/20 text-blue-300'
                          : 'text-slate-300 hover:bg-white/10 hover:text-white'
                      }`}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent className="w-4 h-4" />
                        <div>
                          <div className="text-sm font-medium">{option.label}</div>
                          <div className="text-xs opacity-70">{option.description}</div>
                        </div>
                      </div>
                      
                      <AnimatePresence>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Check className="w-4 h-4 text-blue-400" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  );
                })}
              </div>

              {/* Current resolved theme indicator */}
              <div className="px-3 py-2 border-t border-white/10 bg-white/5">
                <div className="text-xs text-slate-400">
                  Currently using: <span className="text-slate-300 capitalize">{resolvedTheme}</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}; 