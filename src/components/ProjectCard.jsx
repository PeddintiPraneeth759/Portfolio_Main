import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

const ProjectCard = ({ title, description, tags, githubLink, backendGithubLink, demoLink, image }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative bg-glass-white backdrop-blur-md border border-glass-border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] hover:border-neon-blue/30 flex flex-col h-full"
    >
      {/* Image Section with Overlay */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent z-10 opacity-60" />
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" 
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <FiFolder className="text-6xl text-gray-700 group-hover:text-neon-blue transition-colors duration-300" />
          </div>
        )}
        
        {/* Links Overlay (Visible on Hover) */}
        <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
            title="View Code"
          >
            <FiGithub size={20} />
          </a>
          {demoLink && demoLink !== '#' && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-neon-blue text-black rounded-full hover:scale-110 transition-transform"
              title="Live Demo"
            >
              <FiExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex-grow flex flex-col relative z-10">
        <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 text-gray-300 rounded-full group-hover:border-neon-blue/30 group-hover:text-neon-blue transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer Links (Mobile/Fallback) */}
        <div className="flex gap-4 mt-auto pt-4 border-t border-white/5">
           <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors"
          >
            <FiGithub /> {backendGithubLink ? 'Frontend' : 'Source'}
          </a>
          {backendGithubLink && (
            <a
              href={backendGithubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors"
            >
              <FiGithub /> Backend
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
