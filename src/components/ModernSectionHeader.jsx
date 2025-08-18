import React from 'react';
import { motion } from 'framer-motion';

const ModernSectionHeader = ({ 
  badge, 
  title, 
  subtitle, 
  align = 'center',
  className = '' 
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`${alignmentClasses[align]} ${className}`}
    >
      {/* Badge */}
      {badge && (
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm font-medium mb-6"
        >
          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
          {badge}
        </motion.div>
      )}

      {/* Title */}
      {title && (
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
            {title}
          </span>
        </motion.h2>
      )}

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Decorative Line */}
      <motion.div
        variants={itemVariants}
        className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mt-8"
      ></motion.div>
    </motion.div>
  );
};

export default ModernSectionHeader;
