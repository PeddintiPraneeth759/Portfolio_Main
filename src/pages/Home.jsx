import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import profileImg from '../imageas/praneeth.png';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 h-full"
    >
      {/* Hero Card - Spans 2 cols, 2 rows */}
      <motion.div 
        variants={itemVariants}
        className="md:col-span-2 md:row-span-2 glass-card p-8 flex flex-col justify-between relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-neon-blue/20 transition-colors duration-500" />
        
        <div className="relative z-10">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-20 h-20 mb-6 rounded-2xl overflow-hidden border-2 border-white/20"
          >
            <img src={profileImg} alt="Praneeth" className="w-full h-full object-cover" />
          </motion.div>
          
          <h2 className="text-neon-blue font-medium tracking-wider text-sm mb-2">FULL STACK DEVELOPER</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4">
            Hi, I'm <br />
            <span className="text-white">Praneeth.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-md leading-relaxed">
            I build accessible, pixel-perfect, performant, and responsible web applications.
          </p>
        </div>

        <div className="flex gap-4 mt-8 relative z-10">
          <Link to="/contact">
            <button className="px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-neon-blue transition-colors duration-300 flex items-center gap-2">
              Let's Talk <FiArrowRight />
            </button>
          </Link>
          <div className="flex gap-2">
            <a href="https://github.com/PeddintiPraneeth759" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/20 hover:text-white transition-all text-gray-400">
              <FiGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/20 hover:text-white transition-all text-gray-400">
              <FiLinkedin size={20} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Projects Preview Card */}
      <motion.div 
        variants={itemVariants}
        className="md:col-span-2 glass-card p-8 flex flex-col justify-center relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-display font-bold">Selected Work</h3>
            <Link to="/projects" className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition-colors">
              View All <FiArrowRight />
            </Link>
          </div>
          <div className="space-y-4">
            <Link to="/projects">
              <div className="group/item flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer mb-4">
                <div>
                  <h4 className="font-bold text-lg group-hover/item:text-neon-purple transition-colors">Chat Application</h4>
                  <p className="text-sm text-gray-400">React, Node.js, Socket.io, Tailwind</p>
                </div>
                <FiArrowRight className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />
              </div>
            </Link>
            <Link to="/projects">
              <div className="group/item flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                <div>
                  <h4 className="font-bold text-lg group-hover/item:text-neon-purple transition-colors">Spring Boot Microservices Project</h4>
                  <p className="text-sm text-gray-400">Spring Boot, gRPC, Kafka, Docker</p>
                </div>
                <FiArrowRight className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />
              </div>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Skills Ticker Card - Expanded to fill gap */}
      <motion.div 
        variants={itemVariants}
        className="md:col-span-2 glass-card p-6 flex flex-col justify-center relative overflow-hidden"
      >
        <h3 className="text-xl font-display font-bold mb-4 text-gray-200">Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {['React', 'Node.js', 'TypeScript', 'Tailwind', 'MongoDB', 'AWS', 'Docker', 'Next.js', 'Python', 'Java', 'Spring Boot'].map((skill) => (
            <span key={skill} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-300">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

       {/* Contact CTA Card */}
       <motion.div 
        variants={itemVariants}
        className="md:col-span-2 glass-card p-8 flex items-center justify-between relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10 max-w-md">
          <h3 className="text-2xl font-display font-bold mb-2">Have a project in mind?</h3>
          <p className="text-gray-400 text-sm">I'm currently available for freelance work and full-time opportunities.</p>
        </div>
        <Link to="/contact" className="relative z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform duration-300">
          <FiMail size={20} />
        </Link>
      </motion.div>

    </motion.div>
  );
};

export default Home;
