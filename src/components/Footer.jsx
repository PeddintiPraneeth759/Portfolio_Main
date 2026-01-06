import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/PeddintiPraneeth759', label: 'GitHub' },
    { icon: <FiLinkedin />, href: '/contact', label: 'Contact', isInternal: true },
    { icon: <FiMail />, href: 'mailto:2300031788cseh1@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative z-10 mt-12">
      <div className="glass-panel rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-display font-bold text-white">Praneeth Peddinti</h3>
          <p className="text-gray-400 text-sm mt-1">Building digital experiences that matter.</p>
        </div>

        <div className="flex gap-4">
          {socialLinks.map((social) => 
            social.isInternal ? (
              <Link
                key={social.label}
                to={social.href}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-neon-blue transition-all duration-300 hover:-translate-y-1"
                aria-label={social.label}
              >
                {social.icon}
              </Link>
            ) : (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-neon-blue transition-all duration-300 hover:-translate-y-1"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            )
          )}
        </div>

        <div className="text-gray-500 text-sm">
          &copy; {currentYear} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
