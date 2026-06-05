import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const serviceLinks = [
    'React Native Mobile Development',
    'AI Agent Development',
    'Backend Services & Microservices',
  ];

  const socialLinks = [
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, url: 'https://github.com/musaj' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: 'https://linkedin.com/in/musaj' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, url: 'https://twitter.com/musaj' },
    { name: 'Email', icon: <Mail className="w-5 h-5" />, url: 'mailto:contact@musaj.space' },
  ];

  return (
    <footer className="bg-dark border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-3">Musaj<span className="text-brand">.space</span></h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fullstack Engineer building AI-powered platforms across Africa and beyond.
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-gray-300 hover:text-brand transition text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((s, i) => (
                <li key={i} className="text-gray-300 text-sm">{s}</li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-4">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-full text-gray-300 hover:text-brand hover:bg-white/20 transition"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {currentYear} Musaj.space. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
