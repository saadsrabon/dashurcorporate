import React, { useState } from "react";
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import ModernSectionHeader from '../components/ModernSectionHeader';
import ModernJobCard from '../components/ModernJobCard';
import ModernCareerHero from '../components/ModernCareerHero';
import jobData from '../utils/job.json';

const Career = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter jobs based on category and search query
  const filteredJobs = jobData.filter(job => {
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'open' && job.availability === 'open') ||
      (selectedCategory === 'closed' && job.availability === 'closed');
    
    const matchesSearch = job.jobtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.overview.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', label: 'All Positions', count: jobData.length },
    { id: 'open', label: 'Open Positions', count: jobData.filter(job => job.availability === 'open').length },
    { id: 'closed', label: 'Closed Positions', count: jobData.filter(job => job.availability === 'closed').length }
  ];

  return (
    <>
      <SEO
        title="Careers at Dashur AI - Join Our Innovative Team"
        description="Join Dashur AI's dynamic team of innovators. Explore exciting career opportunities in AI, software development, and technology. Build the future with us."
        keywords="careers, jobs, employment, AI jobs, software developer, tech careers, Dashur AI careers, remote work, innovation"
        image="https://dashur.ai/careers-og.jpg"
        url="https://dashur.ai/career"
        type="website"
      />

      {/* Hero Section */}
      <ModernCareerHero />

      {/* Job Listings Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ModernSectionHeader
            badge="Career Opportunities"
            title="Join Our Innovative Team"
            subtitle="Be part of a team that's shaping the future of AI and technology. We're looking for passionate individuals who want to make a difference."
            className="mb-16"
          />

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search Bar */}
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search positions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 transition-all duration-300"
                  />
                  <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-700 text-white shadow-lg'
                        : 'bg-slate-800/50 border border-slate-700/50 text-gray-300 hover:border-cyan-500/50 hover:text-white'
                    }`}
                  >
                    {category.label}
                    <span className="ml-2 px-2 py-1 text-xs bg-slate-700/50 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Job Cards Grid */}
          <div className="max-w-6xl mx-auto">
            {filteredJobs.length > 0 ? (
              <div className="grid gap-6">
                {filteredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <ModernJobCard job={job} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-24 h-24 mx-auto mb-6 bg-slate-800/50 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No positions found</h3>
                <p className="text-gray-400">Try adjusting your search criteria or check back later for new opportunities.</p>
              </motion.div>
            )}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Don't see the right fit?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Submit General Application
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Career;
