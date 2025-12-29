import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <MapPin size={24} className="text-accent" />
              <span className="font-bold text-xl">TrackItNow</span>
            </div>
            <p className="text-sm text-slate-400">
              Advanced GPS tracking solutions for personal and fleet security. 
              Monitor your assets in real-time with precision and ease.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/product" className="hover:text-accent transition-colors">Features</Link></li>
              <li><Link to="/how-it-works" className="hover:text-accent transition-colors">How It Works</Link></li>
              <li><Link to="/demo" className="hover:text-accent transition-colors">Live Demo</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Use Cases</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="hover:text-accent cursor-pointer">Fleet Management</span></li>
              <li><span className="hover:text-accent cursor-pointer">Personal Car Security</span></li>
              <li><span className="hover:text-accent cursor-pointer">Logistics & Delivery</span></li>
              <li><span className="hover:text-accent cursor-pointer">Heavy Machinery</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <span>support@trackitnow.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-accent" />
                <span>123 Tech Park, Innovation City</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <Github size={20} className="hover:text-white cursor-pointer transition-colors" />
              <Twitter size={20} className="hover:text-white cursor-pointer transition-colors" />
              <Linkedin size={20} className="hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} TrackItNow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;