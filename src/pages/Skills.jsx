import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaReact, FaNodeJs, FaDatabase, FaTools, FaBrain, FaRobot } from 'react-icons/fa';
import { SiSpringboot, SiExpress, SiMysql, SiMongodb, SiTailwindcss, SiPostman, SiGit } from 'react-icons/si';
import SkillCard from '../components/SkillCard';

const Skills = () => {
  const skillsData = [
    {
      category: 'Languages',
      skills: [
        { name: 'Java', icon: <FaJava />, color: 'text-red-500' },
        { name: 'Python', icon: <FaPython />, color: 'text-blue-500' },
      ],
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'React.js', icon: <FaReact />, color: 'text-cyan-400' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-teal-400' },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
        { name: 'Express.js', icon: <SiExpress />, color: 'text-gray-500' },
        { name: 'Spring Boot', icon: <SiSpringboot />, color: 'text-green-600' },
      ],
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-600' },
        { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500' },
      ],
    },
    {
      category: 'AI & Automation',
      skills: [
        { name: 'Artificial Intelligence', icon: <FaBrain />, color: 'text-pink-500' },
        { name: 'AI Agents', icon: <FaRobot />, color: 'text-indigo-500' },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <SiGit />, color: 'text-orange-500' },
        { name: 'Postman', icon: <SiPostman />, color: 'text-orange-400' },
        { name: 'REST APIs', icon: <FaTools />, color: 'text-purple-500' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen py-20 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-[-10%] w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Skills</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My technical proficiency and toolset for building digital solutions.
          </p>
        </motion.div>

        <div className="space-y-20">
          {skillsData.map((category, index) => (
            <div key={index}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="h-px flex-grow bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <h3 className="text-2xl font-display font-bold text-white whitespace-nowrap">
                  {category.category}
                </h3>
                <div className="h-px flex-grow bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </motion.div>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
              >
                {category.skills.map((skill, idx) => (
                  <motion.div key={idx} variants={itemVariants}>
                    <SkillCard {...skill} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
