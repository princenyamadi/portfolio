import React from 'react';

interface SkipLink {
  href: string;
  label: string;
}

interface SkipLinksProps {
  links?: SkipLink[];
}

const defaultLinks: SkipLink[] = [
  { href: '#main-content', label: 'Skip to main content' },
  { href: '#primary-navigation', label: 'Skip to navigation' },
  { href: '#footer', label: 'Skip to footer' }
];

export const SkipLinks: React.FC<SkipLinksProps> = ({ links = defaultLinks }) => {
  return (
    <div className="skip-links">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="skip-link"
          onFocus={() => {
            // Smooth scroll to target
            const target = document.querySelector(link.href);
            if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

// Custom skip link styles that need to be added to globals.css
export const skipLinkStyles = /* css */ `
.skip-links {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
}

.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--primary);
  color: var(--primary-foreground);
  padding: 8px 16px;
  text-decoration: none;
  font-weight: 600;
  border-radius: 0 0 6px 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.skip-link:focus {
  top: 0;
  opacity: 1;
  pointer-events: auto;
  outline: 2px solid var(--focus-color, #0066cc);
  outline-offset: 2px;
}

.skip-link:hover:focus {
  transform: translateY(1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .skip-link {
    border: 2px solid currentColor;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .skip-link {
    transition: none;
  }
}
`; 