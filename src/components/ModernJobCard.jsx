import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ModernJobCard = ({ job }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showResumeForm, setShowResumeForm] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleApply = () => {
    setShowResumeForm(true);
  };

  const handleCloseResumeForm = () => {
    setShowResumeForm(false);
  };

  const getJobTypeColor = (type) => {
    switch (type?.toLowerCase()) {
      case 'remote':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'hybrid':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'onsite':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getAvailabilityColor = (availability) => {
    return availability === 'open' 
      ? 'bg-green-500/20 text-green-400 border-green-500/30' 
      : 'bg-red-500/20 text-red-400 border-red-500/30';
  };

  return (
    <>
      <motion.div
        layout
        className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-300 overflow-hidden"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-cyan-300 to-blue-300 transition-all duration-300">
                  {job.jobtitle}
                </h3>
                {job.availability === 'closed' && (
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
                    Position Closed
                  </span>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getJobTypeColor(job.jobType)}`}>
                  {job.jobType}
                </span>
                <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getAvailabilityColor(job.availability)}`}>
                  {job.availability === 'open' ? 'Open' : 'Closed'}
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleExpanded}
                className="px-4 py-2 border border-cyan-600 text-cyan-300 font-medium rounded-lg hover:bg-slate-800 hover:border-cyan-500 transition-all duration-300"
              >
                {isExpanded ? 'Show Less' : 'View Details'}
              </motion.button>
              
              {job.availability === 'open' && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleApply}
                  className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-medium rounded-lg hover:from-cyan-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Apply Now
                </motion.button>
              )}
            </div>
          </div>

          {/* Overview */}
          <p className="text-gray-300 mb-6 leading-relaxed">
            {job.overview}
          </p>

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="border-t border-slate-700/50 pt-6 space-y-6">
                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <svg className="w-5 h-5 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {job.responsibilities?.map((responsibility, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Qualifications */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Qualifications
                    </h4>
                    <ul className="space-y-2">
                      {job.qualification?.map((qualification, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {qualification}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Hover Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-8 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          </div>

          {/* Corner Accent */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </motion.div>

      {/* Resume Upload Modal */}
      <AnimatePresence>
        {showResumeForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleCloseResumeForm}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Apply for {job.jobtitle}</h3>
                <p className="text-gray-400">Upload your resume and we'll get back to you soon.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Resume/CV</label>
                  <div className="border-2 border-dashed border-slate-600/50 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-all duration-300 cursor-pointer">
                    <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-gray-400">Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-500 mt-1">PDF, DOC, DOCX (max 5MB)</p>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleCloseResumeForm}
                    className="flex-1 px-4 py-3 border border-slate-600/50 text-gray-300 font-medium rounded-lg hover:bg-slate-700/50 transition-all duration-300"
                  >
                    Cancel
                  </button>
                  <button className="flex-1 px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-medium rounded-lg hover:from-cyan-700 hover:to-blue-800 transition-all duration-300">
                    Submit Application
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModernJobCard;
