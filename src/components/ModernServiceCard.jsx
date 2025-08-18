import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';

const ModernServiceCard = ({ service, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: index * 0.1 
      }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-300 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

      <div className="relative z-10">
        {/* Icon Container */}
        <motion.div 
          variants={iconVariants}
          className="relative mb-6"
        >
          <div className="w-16 h-16 mx-auto mb-4 relative">
            {/* Background Circle */}
            <div 
              className="absolute inset-0 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"
              style={{ backgroundColor: service.bgColor }}
            ></div>
            
            {/* Icon */}
            <div className="relative w-full h-full flex items-center justify-center">
              <OptimizedImage
                src={service.image}
                alt={`${service.title} icon`}
                className="w-10 h-10 object-contain"
                loading="lazy"
              />
            </div>

            {/* Glow Effect */}
            <div 
              className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
              style={{ backgroundColor: service.bgColor }}
            ></div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-cyan-300 to-blue-300 transition-all duration-300">
            {service.title}
          </h3>
          
          <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
            {service.description}
          </p>
        </div>

        {/* Hover Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
        </div>

        {/* Corner Accent */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </motion.div>
  );
};

export default ModernServiceCard;
