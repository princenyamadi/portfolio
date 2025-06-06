import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, Code } from 'lucide-react';
import { APP_CONFIG, SOCIAL_LINKS } from '@/constants';

const FOOTER_NAVIGATION_ITEMS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Code', href: '#code-showcase' },
  { name: 'Testimonials', href: '#testimonials' },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      // Smooth scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer 
      className="relative bg-black/20 border-t border-white/20 backdrop-blur-sm"
      role="contentinfo"
      aria-label="Site footer"
      id="footer"
    >
      <div className="mobile-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 text-white hover:opacity-80 transition-all duration-300 mb-4">
              <Code className="w-6 h-6" />
              <span className="font-semibold">Prince Nyamadi</span>
            </Link>
            <p className="text-white/80 max-w-md leading-relaxed">
              Fullstack Developer crafting exceptional digital experiences. 
              Passionate about building scalable applications with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {FOOTER_NAVIGATION_ITEMS.map((item) => (
                  <li key={item.name}>
                    <button 
                      onClick={() => handleNavigation(item.href)}
                      className="text-white/80 hover:text-white transition-all duration-300 hover:translate-x-1 text-left"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-3" aria-label="Social media links">
              <a
                href="https://github.com/princenyamadi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-all duration-300 hover:transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/princenyamadi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-all duration-300 hover:transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/princenyamadi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-all duration-300 hover:transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:prince@princenyamadi.dev"
                className="text-white/80 hover:text-white transition-all duration-300 hover:transform hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            
            {/* Resume Download */}
            <div className="mt-6">
              <a
                href="/PRINCE_NYAMADI-CV.pdf"
                download="Prince_Nyamadi_Resume.pdf"
                className="inline-flex items-center text-white/80 hover:text-white border border-white/30 hover:border-white/50 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
              >
                Resume
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm">
              © {currentYear} Prince Nyamadi. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-white/70 text-sm mt-2 md:mt-0">
              <span>Built with React, TypeScript & lots of ☕</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 