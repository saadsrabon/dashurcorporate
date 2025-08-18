import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ModernSearchBar = ({ 
  placeholder = "Search our solutions...",
  onSearch,
  className = '' 
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch && query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`relative ${className}`}
    >
      <form onSubmit={handleSubmit}>
        <div className="relative group">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Search Container */}
          <div className="relative bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-2 group-hover:border-slate-600/50 transition-all duration-300">
            <div className="flex items-center space-x-3">
              {/* Search Icon */}
              <div className="flex-shrink-0">
                <svg 
                  className={`w-5 h-5 transition-colors duration-300 ${
                    isFocused ? 'text-cyan-400' : 'text-gray-400'
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                  />
                </svg>
              </div>

              {/* Input Field */}
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder={placeholder}
                className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-lg"
              />

              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-medium rounded-xl hover:from-cyan-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Search
              </motion.button>
            </div>
          </div>

          {/* Animated Border */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-indigo-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </div>
      </form>

      {/* Floating Suggestions */}
      {isFocused && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute top-full left-0 right-0 mt-2 bg-slate-800/90 backdrop-blur-md border border-slate-700/50 rounded-xl p-4 z-50"
        >
          <div className="text-sm text-gray-400 mb-2">Popular searches:</div>
          <div className="flex flex-wrap gap-2">
            {['AI Solutions', 'Web Development', 'Mobile Apps', 'Digital Marketing'].map((suggestion, index) => (
              <button
                key={index}
                onClick={() => setQuery(suggestion)}
                className="px-3 py-1 bg-slate-700/50 hover:bg-slate-600/50 text-gray-300 text-sm rounded-lg transition-colors duration-200"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ModernSearchBar;
