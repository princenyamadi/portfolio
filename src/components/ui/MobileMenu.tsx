import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Search } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigationItems: Array<{
    name: string;
    href: string;
  }>;
  onNavigation: (href: string) => void;
  onSearchOpen: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navigationItems,
  onNavigation,
  onSearchOpen
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={onClose}
          />

          {/* Mobile Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-slate-900/95 backdrop-blur-lg border-l border-white/10 z-50 md:hidden mobile-safe-area"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-lg font-semibold text-white">Menu</h2>
              <button
                onClick={onClose}
                className="mobile-touch-target mobile-interactive p-2 rounded-lg bg-white/10 text-white hover:bg-white/20"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 px-6 py-4">
              <div className="space-y-2">
                {navigationItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => {
                      onNavigation(item.href);
                      onClose();
                    }}
                    className="mobile-touch-target mobile-interactive w-full text-left px-4 py-3 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => {
                    onSearchOpen();
                    onClose();
                  }}
                  className="mobile-btn w-full flex items-center justify-center bg-white/10 text-white hover:bg-white/20 rounded-lg"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </motion.button>

                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  href="/PRINCE_NYAMADI-CV.pdf"
                  download="Prince_Nyamadi_Resume.pdf"
                  className="mobile-btn w-full flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 rounded-lg"
                  onClick={onClose}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </motion.a>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => {
                    onNavigation('#contact');
                    onClose();
                  }}
                  className="mobile-btn w-full border border-white/30 text-white hover:bg-white/10 rounded-lg"
                >
                  Contact Me
                </motion.button>
              </div>

              {/* Theme Toggle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 pt-6 border-t border-white/10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-white/80 text-sm">Theme</span>
                  <ThemeToggle variant="icon" />
                </div>
              </motion.div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}; 