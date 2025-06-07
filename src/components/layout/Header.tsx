import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Code, Download, Search } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { GlobalSearch } from '../ui/GlobalSearch';
import { MobileMenu } from '../ui/MobileMenu';

const NAVIGATION_ITEMS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Code', href: '#code-showcase' },
  { name: 'Testimonials', href: '#testimonials' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const isCurrentPage = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    if (href.startsWith('#')) {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      // Smooth scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className="absolute top-0 left-0 right-0 z-50 mobile-safe-area"
      role="banner"
      aria-label="Site header"
    >
      <div className="mobile-container">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Code Icon */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-white hover:opacity-80 transition-all duration-300"
          >
            <Code className="w-6 h-6" />
            <span className="font-semibold">Prince Nyamadi</span>
          </Link>

          {/* Desktop Navigation */}
          <nav 
            className="hidden md:flex items-center space-x-8"
            role="navigation"
            aria-label="Primary navigation"
            id="primary-navigation"
          >
            {NAVIGATION_ITEMS.map((item) => (
              item.href.startsWith('#') ? (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={`text-sm font-medium text-white/90 hover:text-white transition-all duration-300 ${
                    isCurrentPage(item.href)
                      ? 'text-white font-semibold'
                      : ''
                  }`}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium text-white/90 hover:text-white transition-all duration-300 ${
                    isCurrentPage(item.href)
                      ? 'text-white font-semibold'
                      : ''
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-white/90 hover:text-white transition-all duration-300"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            
            <ThemeToggle variant="icon" />
            
            <a
              href="/PRINCE_NYAMADI-CV.pdf"
              download="Prince_Nyamadi_Resume.pdf"
              className="inline-flex items-center text-white/90 hover:text-white px-4 py-2 text-sm font-medium transition-all duration-300"
            >
              <Download className="w-4 h-4 mr-1" />
              Resume
            </a>
            <button 
              onClick={() => handleNavigation('#contact')}
              className="text-white/90 hover:text-white border border-white/30 hover:border-white/50 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden mobile-touch-target mobile-interactive p-2 text-white/90 hover:text-white"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-controls="mobile-navigation"
            aria-haspopup="true"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          navigationItems={NAVIGATION_ITEMS}
          onNavigation={handleNavigation}
          onSearchOpen={() => setIsSearchOpen(true)}
        />
      </div>
      
      {/* Global Search Modal */}
      <GlobalSearch
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={(url) => {
          handleNavigation(url);
          setIsSearchOpen(false);
        }}
      />
    </header>
  );
}; 