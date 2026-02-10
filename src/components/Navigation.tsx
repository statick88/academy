// src/components/Navigation.tsx
import { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

interface NavigationProps {
  items: NavItem[];
  className?: string;
}

export default function Navigation({ items, className = '' }: NavigationProps) {
  return (
    <nav className={className}>
      <ul className="flex space-x-8">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`
                text-sm font-medium transition-colors hover:text-primary-600
                ${item.active
                  ? 'text-primary-600 border-b-2 border-primary-600 pb-1'
                  : 'text-slate-600'
                }
              `.trim()}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Mobile navigation component
export function MobileNavigation({ items }: { items: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-slate-600 hover:text-slate-900 p-2"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-lg">
          <ul className="px-4 py-2 space-y-2">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`
                    block px-3 py-2 text-sm font-medium rounded-md transition-colors
                    ${item.active
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }
                  `.trim()}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}