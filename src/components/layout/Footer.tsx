import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, Code } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent border-t border-white/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-white mb-4">
              <Code className="w-6 h-6" />
              <span>Alex Chen</span>
            </Link>
            <p className="text-white/70 max-w-md">
              Fullstack Developer crafting exceptional digital experiences. 
              Passionate about building scalable applications with modern technologies 
              and clean, maintainable code.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Portfolio</h3>
            <ul className="space-y-2">
              <li><Link to="/projects" className="text-white/70 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/about" className="text-white/70 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/skills" className="text-white/70 hover:text-white transition-colors">Skills</Link></li>
              <li><Link to="/blog" className="text-white/70 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/alexchen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/alexchen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/alexchen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:alex@alexchen.dev"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm">
              © {currentYear} Alex Chen. All rights reserved.
            </p>
            <p className="text-white/70 text-sm mt-2 md:mt-0">
              Built with React, TypeScript & lots of ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}; 