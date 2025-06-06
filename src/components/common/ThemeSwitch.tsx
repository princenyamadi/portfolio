import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Monitor, Moon, Sun, Zap, Trees } from 'lucide-react';
import { THEME_CONFIG } from '@/constants';

interface Theme {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  preview: string;
}

const themes: Theme[] = [
  {
    id: THEME_CONFIG.THEMES.GRADIENT,
    name: 'Gradient',
    icon: <Monitor className="w-4 h-4" />,
    description: 'Vibrant gradients with subtle textures',
    preview: 'bg-gradient-to-br from-purple-500 to-blue-500'
  },
  {
    id: THEME_CONFIG.THEMES.DARK_TEXTURED,
    name: 'Dark Tech',
    icon: <Moon className="w-4 h-4" />,
    description: 'Dark theme with tech patterns',
    preview: 'bg-gradient-to-br from-gray-800 to-blue-900'
  },
  {
    id: THEME_CONFIG.THEMES.CYBERPUNK,
    name: 'Cyberpunk',
    icon: <Zap className="w-4 h-4" />,
    description: 'Neon cyber aesthetic',
    preview: 'bg-gradient-to-br from-purple-900 to-pink-900'
  },
  {
    id: THEME_CONFIG.THEMES.MINIMAL,
    name: 'Minimal',
    icon: <Sun className="w-4 h-4" />,
    description: 'Clean and minimal design',
    preview: 'bg-gradient-to-br from-gray-100 to-gray-200'
  },
  {
    id: THEME_CONFIG.THEMES.FOREST,
    name: 'Forest',
    icon: <Trees className="w-4 h-4" />,
    description: 'Nature-inspired gradients',
    preview: 'bg-gradient-to-br from-green-600 to-teal-600'
  }
];

export const ThemeSwitch: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<string>(THEME_CONFIG.DEFAULT_THEME);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_CONFIG.STORAGE_KEY) || THEME_CONFIG.DEFAULT_THEME;
    setCurrentTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.body.setAttribute('data-theme', savedTheme);
  }, []);

  const handleThemeChange = (themeId: string) => {
    setCurrentTheme(themeId);
    localStorage.setItem(THEME_CONFIG.STORAGE_KEY, themeId);
    document.documentElement.setAttribute('data-theme', themeId);
    document.body.setAttribute('data-theme', themeId);
    setIsOpen(false);
  };

  const currentThemeData = themes.find(theme => theme.id === currentTheme) || themes[0];

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
      >
        <Palette className="w-4 h-4" />
        <span className="hidden sm:inline text-sm font-medium">{currentThemeData.name}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-80 bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-200/50 p-4 z-50 overflow-hidden"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Choose Theme</h3>
            <div className="grid grid-cols-1 gap-3">
              {themes.map((theme) => (
                <motion.button
                  key={theme.id}
                  onClick={() => handleThemeChange(theme.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center space-x-3 p-3 rounded-lg border-2 transition-all duration-300 ${
                    currentTheme === theme.id
                      ? 'border-purple-500 bg-purple-50 shadow-lg transform scale-105'
                      : 'border-gray-200 hover:border-purple-300 hover:bg-purple-25 hover:shadow-md hover:transform hover:scale-102'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-md ${theme.preview}`} />
                  <div className="flex-1 text-left">
                    <div className="flex items-center space-x-2">
                      {theme.icon}
                      <span className="font-medium text-gray-900">{theme.name}</span>
                    </div>
                    <p className="text-sm text-gray-600">{theme.description}</p>
                  </div>
                  {currentTheme === theme.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 bg-purple-500 rounded-full"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}; 