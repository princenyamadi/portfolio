import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AccessibilityState {
  // User preferences
  reducedMotion: boolean;
  highContrast: boolean;
  focusVisible: boolean;
  announcements: boolean;
  keyboardNavigation: boolean;
  
  // Screen reader support
  screenReaderActive: boolean;
  announcePageChanges: boolean;
  
  // Focus management
  focusOutlineVisible: boolean;
  skipLinksEnabled: boolean;
}

interface AccessibilityActions {
  toggleReducedMotion: () => void;
  toggleHighContrast: () => void;
  toggleFocusVisible: () => void;
  toggleAnnouncements: () => void;
  toggleKeyboardNavigation: () => void;
  announceMessage: (message: string, priority?: 'polite' | 'assertive') => void;
  setFocusOutlineVisible: (visible: boolean) => void;
}

type AccessibilityContextType = AccessibilityState & AccessibilityActions;

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

interface AccessibilityProviderProps {
  children: ReactNode;
}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  const [state, setState] = useState<AccessibilityState>({
    reducedMotion: false,
    highContrast: false,
    focusVisible: true,
    announcements: true,
    keyboardNavigation: true,
    screenReaderActive: false,
    announcePageChanges: true,
    focusOutlineVisible: false,
    skipLinksEnabled: true,
  });

  // Detect user preferences on mount
  useEffect(() => {
    const detectPreferences = () => {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      // Check for high contrast preference
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      
      // Detect screen reader (basic detection)
      const hasScreenReader = navigator.maxTouchPoints === 0 && navigator.userAgent.includes('JAWS') || 
                              navigator.userAgent.includes('NVDA') || 
                              navigator.userAgent.includes('VoiceOver');

      setState(prev => ({
        ...prev,
        reducedMotion: prefersReducedMotion,
        highContrast: prefersHighContrast,
        screenReaderActive: hasScreenReader,
      }));

      // Apply CSS custom properties
      document.documentElement.style.setProperty('--motion-reduce', prefersReducedMotion ? '0' : '1');
      document.documentElement.style.setProperty('--contrast-high', prefersHighContrast ? '1' : '0');
    };

    detectPreferences();

    // Listen for preference changes
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setState(prev => ({ ...prev, reducedMotion: e.matches }));
      document.documentElement.style.setProperty('--motion-reduce', e.matches ? '0' : '1');
    };

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setState(prev => ({ ...prev, highContrast: e.matches }));
      document.documentElement.style.setProperty('--contrast-high', e.matches ? '1' : '0');
    };

    motionQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  // Keyboard navigation detection
  useEffect(() => {
    let keyboardUser = false;

    const handleFirstTab = (e: KeyboardEvent) => {
      if (e.key === 'Tab' && !keyboardUser) {
        keyboardUser = true;
        setState(prev => ({ ...prev, focusOutlineVisible: true }));
        document.body.classList.add('keyboard-user');
        window.removeEventListener('keydown', handleFirstTab);
      }
    };

    const handleMouseDown = () => {
      keyboardUser = false;
      setState(prev => ({ ...prev, focusOutlineVisible: false }));
      document.body.classList.remove('keyboard-user');
      window.addEventListener('keydown', handleFirstTab);
    };

    window.addEventListener('keydown', handleFirstTab);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('keydown', handleFirstTab);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  // Actions
  const toggleReducedMotion = () => {
    setState(prev => {
      const newValue = !prev.reducedMotion;
      document.documentElement.style.setProperty('--motion-reduce', newValue ? '0' : '1');
      return { ...prev, reducedMotion: newValue };
    });
  };

  const toggleHighContrast = () => {
    setState(prev => {
      const newValue = !prev.highContrast;
      document.documentElement.style.setProperty('--contrast-high', newValue ? '1' : '0');
      document.body.classList.toggle('high-contrast', newValue);
      return { ...prev, highContrast: newValue };
    });
  };

  const toggleFocusVisible = () => {
    setState(prev => ({ ...prev, focusVisible: !prev.focusVisible }));
  };

  const toggleAnnouncements = () => {
    setState(prev => ({ ...prev, announcements: !prev.announcements }));
  };

  const toggleKeyboardNavigation = () => {
    setState(prev => ({ ...prev, keyboardNavigation: !prev.keyboardNavigation }));
  };

  const setFocusOutlineVisible = (visible: boolean) => {
    setState(prev => ({ ...prev, focusOutlineVisible: visible }));
  };

  // Announce messages to screen readers
  const announceMessage = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    if (!state.announcements) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);

    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  const contextValue: AccessibilityContextType = {
    ...state,
    toggleReducedMotion,
    toggleHighContrast,
    toggleFocusVisible,
    toggleAnnouncements,
    toggleKeyboardNavigation,
    announceMessage,
    setFocusOutlineVisible,
  };

  return (
    <AccessibilityContext.Provider value={contextValue}>
      {children}
      {/* Screen reader announcements container */}
      <div id="sr-announcements" className="sr-only" aria-live="polite" aria-atomic="true" />
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = (): AccessibilityContextType => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}; 