import React from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'Agent', path: '/agent' }
  ];
  
  const socialLinks = [
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, url: 'https://github.com/yourusername' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: 'https://linkedin.com/in/yourusername' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, url: 'https://twitter.com/yourusername' },
    { name: 'Email', icon: <Mail className="w-5 h-5" />, url: 'mailto:contact@musaj.xyz' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4">Musaj<span className="text-blue-600">.xyz</span></h2>
            <p className="text-gray-400 mb-6">
              Specializing in Python development, machine learning, and scalable backend solutions.
            </p>
          </div>
          
          {/* Navigation */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => navigate(link.path)}
                    className="text-gray-400 hover:text-blue-600 transition"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Backend Development</span>
              </li>
              <li>
                <span className="text-gray-400">ML Model Development</span>
              </li>
              <li>
                <span className="text-gray-400">Custom Python Solutions</span>
              </li>
              <li>
                <span className="text-gray-400">AI Integration</span>
              </li>
            </ul>
          </div>
          
          {/* Connect */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-blue-600 hover:bg-gray-700 transition"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <button 
              onClick={() => navigate('/contact')}
              className="text-blue-600 flex items-center hover:text-blue-500 transition"
            >
              Get in touch <ExternalLink className="ml-1 w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Musaj.xyz. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 flex space-x-4 text-sm text-gray-500">
            <button 
              onClick={() => navigate('/privacy')}
              className="hover:text-blue-600 transition"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => navigate('/terms')}
              className="hover:text-blue-600 transition"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;