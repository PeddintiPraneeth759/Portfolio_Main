import React from 'react';
import { motion } from 'framer-motion';
import CertificationCard from '../components/CertificationCard';
import linguaskillPdf from '../imageas/Peddinti Praneeth.pdf';
import jenkinsPdf from '../imageas/Coursera_Jenkins.pdf';
import eduskillsPdf from '../imageas/PRANEETH PEDDINTI_Eduskills.pdf';

const Certifications = () => {
  const certifications = [
    {
      title: 'Linguaskill General',
      issuer: 'Cambridge Assessment English',
      date: '2024',
      link: linguaskillPdf,
      description: 'Demonstrated proficiency in English language skills including listening, reading, speaking, and writing. Achieved CEFR Level B2/C1.',
    },
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified DevOps Professional',
      issuer: 'Oracle',
      date: '2025',
      link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=93E3001A04D3F57A937682FC294C071A4AAD48E1D8258090A341E6B85656A607#',
      description: "Designed for DevOps engineers and developers, this course covers core DevOps principles and Oracle Cloud Infrastructure (OCI) capabilities. It includes application development, testing, security, and deployment, preparing you for the OCI DevOps Professional Certification.",
    },
    {
      title: 'Jenkins Technologies',
      issuer: 'Coursera',
      date: '2024',
      link: jenkinsPdf,
      description: 'Comprehensive training on Jenkins for Continuous Integration and Continuous Delivery (CI/CD). Covers installation, configuration, pipelines, and automated testing integration.',
    },
    {
      title: 'Web Full Stack Developer Virtual Internship',
      issuer: 'EduSkills',
      date: 'April - June 2025',
      link: eduskillsPdf,
      description: 'Successfully completed 10 weeks Web Full Stack Developer Virtual Internship. Supported by AICTE.',
    },

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-neon-purple/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">Certifications</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Milestones in my continuous learning journey and professional development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <CertificationCard {...cert} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;
