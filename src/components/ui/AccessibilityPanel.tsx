import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Settings, 
  Eye, 
  Volume2, 
  VolumeX, 
  Contrast, 
  Zap,
  ZapOff,
  Keyboard,
  X,
  Check
} from 'lucide-react';
import { useAccessibility } from '../../contexts/AccessibilityContext';
import { useFocusManagement } from '../../hooks/useFocusManagement';

interface AccessibilityPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccessibilityPanel: React.FC<AccessibilityPanelProps> = ({ isOpen, onClose }) => {
  const {
    reducedMotion,
    highContrast,
    focusVisible,
    announcements,
    keyboardNavigation,
    screenReaderActive,
    toggleReducedMotion,
    toggleHighContrast,
    toggleFocusVisible,
    toggleAnnouncements,
    toggleKeyboardNavigation,
    announceMessage,
  } = useAccessibility();

  const { containerRef } = useFocusManagement({ 
    autoFocus: isOpen, 
    trapFocus: isOpen, 
    restoreFocus: true 
  });

  const handleClose = () => {
    announceMessage('Accessibility panel closed');
    onClose();
  };

  const handleToggle = (
    action: () => void, 
    setting: string, 
    newState: boolean
  ) => {
    action();
    announceMessage(`${setting} ${newState ? 'enabled' : 'disabled'}`);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={handleClose}
        />

        {/* Panel */}
        <motion.div
          ref={containerRef as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md bg-background border border-border rounded-lg shadow-xl mx-4"
          role="dialog"
          aria-labelledby="accessibility-panel-title"
          aria-describedby="accessibility-panel-description"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div>
              <h2 id="accessibility-panel-title" className="text-lg font-semibold text-foreground">
                <Settings className="inline-block w-5 h-5 mr-2" aria-hidden="true" />
                Accessibility Settings
              </h2>
              <p id="accessibility-panel-description" className="text-sm text-muted-foreground mt-1">
                Customize your experience for better accessibility
              </p>
            </div>
            <button
              onClick={handleClose}
              className="p-2 rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Close accessibility panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Settings */}
          <div className="p-6 space-y-6">
            {/* Reduced Motion */}
            <SettingToggle
              icon={reducedMotion ? ZapOff : Zap}
              label="Reduce Motion"
              description="Minimize animations and transitions"
              checked={reducedMotion}
              onChange={() => handleToggle(toggleReducedMotion, 'Reduced motion', !reducedMotion)}
              id="reduced-motion"
            />

            {/* High Contrast */}
            <SettingToggle
              icon={Contrast}
              label="High Contrast"
              description="Increase contrast for better visibility"
              checked={highContrast}
              onChange={() => handleToggle(toggleHighContrast, 'High contrast', !highContrast)}
              id="high-contrast"
            />

            {/* Focus Indicators */}
            <SettingToggle
              icon={Eye}
              label="Enhanced Focus Indicators"
              description="Show prominent focus outlines"
              checked={focusVisible}
              onChange={() => handleToggle(toggleFocusVisible, 'Focus indicators', !focusVisible)}
              id="focus-visible"
            />

            {/* Announcements */}
            <SettingToggle
              icon={announcements ? Volume2 : VolumeX}
              label="Screen Reader Announcements"
              description="Announce changes and updates"
              checked={announcements}
              onChange={() => handleToggle(toggleAnnouncements, 'Announcements', !announcements)}
              id="announcements"
            />

            {/* Keyboard Navigation */}
            <SettingToggle
              icon={Keyboard}
              label="Enhanced Keyboard Navigation"
              description="Improved keyboard accessibility"
              checked={keyboardNavigation}
              onChange={() => handleToggle(toggleKeyboardNavigation, 'Keyboard navigation', !keyboardNavigation)}
              id="keyboard-navigation"
            />

            {/* Screen Reader Detection */}
            {screenReaderActive && (
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center">
                  <Volume2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                  <div>
                    <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                      Screen Reader Detected
                    </p>
                    <p className="text-xs text-blue-700 dark:text-blue-200 mt-1">
                      Optimized experience is active
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-muted/50 border-t border-border rounded-b-lg">
            <p className="text-xs text-muted-foreground">
              Settings are automatically saved and will persist across sessions.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

interface SettingToggleProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  description: string;
  checked: boolean;
  onChange: () => void;
  id: string;
}

const SettingToggle: React.FC<SettingToggleProps> = ({
  icon: Icon,
  label,
  description,
  checked,
  onChange,
  id,
}) => {
  return (
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0 mt-1">
        <Icon className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
      </div>
      <div className="flex-1 min-w-0">
        <label htmlFor={id} className="block text-sm font-medium text-foreground cursor-pointer">
          {label}
        </label>
        <p className="text-xs text-muted-foreground mt-1">
          {description}
        </p>
      </div>
      <div className="flex-shrink-0">
        <button
          id={id}
          role="switch"
          aria-checked={checked}
          aria-describedby={`${id}-description`}
          onClick={onChange}
          className={`
            relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent 
            transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
            ${checked ? 'bg-primary' : 'bg-muted-foreground/20'}
          `}
        >
          <span className="sr-only">{label}</span>
          <span
            aria-hidden="true"
            className={`
              pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 
              transition duration-200 ease-in-out
              ${checked ? 'translate-x-5' : 'translate-x-0'}
            `}
          >
            {checked && (
              <Check className="w-3 h-3 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            )}
          </span>
        </button>
      </div>
    </div>
  );
};

// Floating accessibility button to open the panel
export const AccessibilityButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { announceMessage } = useAccessibility();

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    announceMessage(newState ? 'Accessibility panel opened' : 'Accessibility panel closed');
  };

  return (
    <>
      <button
        onClick={handleToggle}
        className="
          fixed bottom-4 right-4 z-40 p-3 bg-primary text-primary-foreground rounded-full 
          shadow-lg hover:shadow-xl transition-all duration-200 
          focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
          hover:scale-105 active:scale-95
        "
        aria-label="Open accessibility settings"
        title="Accessibility Settings"
      >
        <Settings className="w-5 h-5" />
      </button>

      <AccessibilityPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}; 