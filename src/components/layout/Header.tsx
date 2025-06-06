import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code, Download } from 'lucide-react';

const NAVIGATION_ITEMS = [
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Blog', href: '/blog' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Code Icon */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-white hover:opacity-80 transition-all duration-300"
          >
            <Code className="w-6 h-6" />
            <span className="font-semibold">Alex Chen</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
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
            <a
              href="/resume.pdf"
              download="Alex_Chen_Resume.pdf"
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
            className="md:hidden p-2 text-white/90 hover:text-white transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                item.href.startsWith('#') ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className={`px-3 py-2 text-base font-medium rounded-md transition-colors text-white/90 hover:text-white hover:bg-white/10 text-left ${
                      isCurrentPage(item.href)
                        ? 'text-white bg-white/10'
                        : ''
                    }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-3 py-2 text-base font-medium rounded-md transition-colors text-white/90 hover:text-white hover:bg-white/10 ${
                      isCurrentPage(item.href)
                        ? 'text-white bg-white/10'
                        : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="mt-4 mx-3 flex flex-col space-y-2">
                <a
                  href="/resume.pdf"
                  download="Alex_Chen_Resume.pdf"
                  className="inline-flex items-center justify-center text-white/90 hover:text-white border border-white/30 hover:border-white/50 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
                <button 
                  onClick={() => handleNavigation('#contact')}
                  className="text-white/90 hover:text-white border border-white/30 hover:border-white/50 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300"
                >
                  Contact
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}; 