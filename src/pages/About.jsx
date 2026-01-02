import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaUniversity, FaCode, FaLaptopCode } from 'react-icons/fa';
import profileImg from '../imageas/praneeth.png';

const About = () => {
  const education = [
    {
      id: 1,
      institution: 'KL University',
      degree: 'B.Tech CSE',
      year: 'Expected 2027',
      description: 'Pursuing Bachelor of Technology in Computer Science and Engineering. Focusing on Full Stack Development and AI.',
      icon: <FaUniversity />,
    },
    {
      id: 2,
      institution: 'Sasi Junior College',
      degree: 'Intermediate MPC',
      year: '2022',
      description: 'Completed Intermediate education with a focus on Mathematics, Physics, and Chemistry.',
      icon: <FaSchool />,
    },
    {
      id: 3,
      institution: 'Sri Siddhartha High School',
      degree: 'Secondary School',
      year: '2020',
      description: 'Completed secondary education with distinction.',
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <div className="min-h-screen text-white">
      {/* Header Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
           <div className="absolute top-10 left-10 w-64 h-64 bg-neon-purple/20 rounded-full blur-[100px]" />
           <div className="absolute bottom-10 right-10 w-64 h-64 bg-neon-blue/20 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Me</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              A journey fueled by curiosity, code, and coffee. Here's a glimpse into my world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 glass-panel p-2 rounded-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={profileImg} 
                  alt="Praneeth Peddinti" 
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple blur-2xl opacity-20 -z-10 transform rotate-6 scale-105" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div className="glass-card p-8 hover:bg-white/5 transition-colors">
                <FaLaptopCode className="text-4xl text-neon-blue mb-4" />
                <h3 className="text-2xl font-display font-bold mb-3">Who I Am</h3>
                <p className="text-gray-400 leading-relaxed">
                  I'm Praneeth, a passionate <strong>Full Stack Web Developer</strong> based in India. 
                  I don't just write code; I craft digital experiences. My passion lies in building 
                  scalable web applications that solve real-world problems and leave a lasting impact.
                </p>
              </div>

              <div className="glass-card p-8 hover:bg-white/5 transition-colors">
                <FaCode className="text-4xl text-neon-purple mb-4" />
                <h3 className="text-2xl font-display font-bold mb-3">What I Do</h3>
                <p className="text-gray-400 leading-relaxed">
                  Currently pursuing my B.Tech in Computer Science at KL University, I specialize in 
                  the MERN stack and modern frontend technologies. I'm constantly exploring new 
                  horizons in AI agents and cloud computing.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
              Education <span className="text-neon-blue">&</span> Journey
            </h2>

            <div className="relative max-w-4xl mx-auto">
              {/* Vertical Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon-blue to-transparent md:-translate-x-1/2 ml-8 md:ml-0" />

              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center justify-between md:justify-normal mb-12 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-16 h-16 flex items-center justify-center md:-translate-x-1/2 z-10">
                    <div className="w-4 h-4 bg-neon-blue rounded-full shadow-[0_0_20px_rgba(0,243,255,0.5)] ring-4 ring-dark-bg" />
                  </div>

                  {/* Content Card */}
                  <div className={`w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] ml-20 md:ml-0 glass-card p-6 hover:border-neon-blue/50 transition-colors group ${
                    index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                  }`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-neon-purple text-xl group-hover:scale-110 transition-transform duration-300">
                        {edu.icon}
                      </span>
                      <span className="text-sm font-mono text-neon-blue">{edu.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{edu.institution}</h3>
                    <h4 className="text-gray-400 font-medium mb-3">{edu.degree}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
