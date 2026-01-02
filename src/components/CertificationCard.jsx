import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

const CertificationCard = ({ title, issuer, date, link, description }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-card p-6 h-full flex flex-col group hover:border-neon-purple/30 hover:shadow-[0_0_20px_rgba(180,0,255,0.15)]"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-white/5 rounded-xl text-neon-purple group-hover:bg-neon-purple group-hover:text-black transition-all duration-300">
          <FaAward size={24} />
        </div>
        <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">
          {date}
        </span>
      </div>
      
      <div className="flex-grow">
        <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-neon-purple transition-colors">
          {title}
        </h3>
        <p className="text-neon-blue text-sm mb-4 font-medium">{issuer}</p>
        
        {description && (
          <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-4">
            {description}
          </p>
        )}
      </div>

      <div className="mt-auto pt-4 border-t border-white/5">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group/link"
        >
          View Certificate
          <FaExternalLinkAlt size={12} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};

export default CertificationCard;
