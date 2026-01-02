import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import chatAppImg from '../imageas/chatbotimage.png';

const Projects = () => {
  const projects = [
    {
      title: 'Chat Application',
      description: 'A real-time chat application enabling users to send messages and share images instantly. Built with Socket.io and Node.js for seamless communication.',
      tags: ['React', 'Tailwind', 'Node.js', 'Socket.io'],
      githubLink: 'https://github.com/PeddintiPraneeth759/chatApplication.git',
      demoLink: 'https://chatapplication-3m3r4.sevalla.app/',
      image: chatAppImg,
    },
    {
      title: 'Hospital Management System',
      description: 'A comprehensive system for managing hospital operations. Features include patient registration, appointment scheduling, and doctor management. Built with a React frontend and Spring Boot backend.',
      tags: ['React', 'Spring Boot', 'MySQL', 'Tailwind'],
      githubLink: 'https://github.com/PeddintiPraneeth759/FinalProject_Frontend.git',
      backendGithubLink: 'https://github.com/PeddintiPraneeth759/FinalProject_Backend.git',
      demoLink: '#',
    },
    {
      title: 'Spring Boot Microservices Project',
      description: 'A comprehensive Spring Boot microservices architecture project featuring Patient, Billing, Analytics, Auth, and API Gateway services. Built with gRPC, Kafka, PostgreSQL, JWT authentication, and containerized with Docker. Demonstrates event-driven architecture, service-to-service communication, and API security.',
      tags: ['Spring Boot', 'Microservices', 'gRPC', 'Kafka', 'PostgreSQL', 'JWT', 'Docker'],
      githubLink: 'https://github.com/PeddintiPraneeth759/SpringbootMicroServicesProject',
      demoLink: '#',
    },
    {
      title: 'Web Automation Project',
      description: 'A versatile web automation tool utilizing Playwright and AI agents. Leverages LangGraph for multi-agent tasks and LLMs to streamline repetitive processes and increase efficiency.',
      tags: ['Playwright', 'LangGraph', 'LLM', 'AI Agents'],
      githubLink: 'https://github.com/PeddintiPraneeth759/webautomation',
      demoLink: '#',
    },
    {
      title: 'Fake News Assistant Chatbot',
      description: "An AI-powered chatbot designed to verify news authenticity using LLMs, LangChain, and LangGraph. It analyzes content to determine if it's real or fake, helping to combat misinformation.",
      tags: ['LLM', 'LangChain', 'LangGraph', 'NLP'],
      githubLink: 'https://github.com/PeddintiPraneeth759/fake-news-detector-ai-chatbot',
      demoLink: '#',
    },
    {
      title: 'Ecommerce Website',
      description: 'A full-featured e-commerce platform with product browsing, shopping cart functionality, user authentication, and order management. Designed to deliver a seamless online shopping experience.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      githubLink: 'https://github.com/PeddintiPraneeth759/Ecommerce-web',
      demoLink: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
      }
    },
  };

  return (
    <div className="min-h-screen pt-20 pb-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Projects</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical journey, from full-stack applications to AI-powered tools.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
