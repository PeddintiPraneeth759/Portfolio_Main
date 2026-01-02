import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ name, icon, color }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.05 }}
      className="glass-card p-6 flex flex-col items-center justify-center gap-4 group hover:border-neon-blue/30 hover:shadow-[0_0_20px_rgba(0,243,255,0.15)]"
    >
      <div className={`text-5xl ${color} group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 drop-shadow-lg`}>
        {icon}
      </div>
      <h3 className="font-display font-medium text-gray-300 group-hover:text-white transition-colors">{name}</h3>
    </motion.div>
  );
};

export default SkillCard;
