import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { useAccessibility } from '../../contexts/AccessibilityContext';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const { announceMessage, announcePageChanges, reducedMotion, highContrast } = useAccessibility();

  // Announce page changes to screen readers
  useEffect(() => {
    if (announcePageChanges) {
      const pageTitle = document.title;
      announceMessage(`Navigated to ${pageTitle}`, 'polite');
    }
  }, [location.pathname, announceMessage, announcePageChanges]);

  return (
    <div 
      className={`
        min-h-screen flex flex-col bg-gradient-to-b from-indigo-900 via-purple-900 to-gray-900
        ${reducedMotion ? 'reduce-motion' : ''}
        ${highContrast ? 'high-contrast' : ''}
      `}
    >
      {/* Primary Navigation */}
      <Header />
      
      {/* Main Content */}
      <main 
        id="main-content"
        className="flex-1"
        role="main"
        aria-label="Main content"
        tabIndex={-1}
      >
        {children}
      </main>
      
      {/* Site Footer */}
      <Footer />
      
      {/* Live Region for Dynamic Announcements */}
      <div 
        id="live-region" 
        className="sr-only" 
        aria-live="polite" 
        aria-atomic="true"
        role="status"
      />
      
      {/* Assertive Live Region for Urgent Messages */}
      <div 
        id="alert-region" 
        className="sr-only" 
        aria-live="assertive" 
        aria-atomic="true"
        role="alert"
      />
    </div>
  );
}; 