import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Product', path: '/product' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Demo', path: '/demo' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-accent p-1.5 rounded-lg text-white group-hover:scale-110 transition-transform">
              <MapPin size={20} fill="currentColor" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">TrackItNow</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-accent'
                    : 'text-slate-600 hover:text-accent'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* Pricing is a placeholder link as per wireframe request implies it exists but no page detail provided */}
            <span className="text-sm font-medium text-slate-400 cursor-not-allowed" title="Coming Soon">Pricing</span>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="px-4 py-2 text-sm font-semibold text-white bg-accent hover:bg-blue-600 rounded-full transition-colors shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-accent bg-blue-50'
                    : 'text-slate-600 hover:text-accent hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
             <span className="block px-3 py-2 text-base font-medium text-slate-400">Pricing (Soon)</span>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 px-4 py-2 text-base font-semibold text-white bg-accent rounded-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;