import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InquiryForm from "../components/InquiryForm"
import Chips from "../components/chips"
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ReactGA } from 'react-ga4';

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Handle Email To Handle Google Analytics email Button
  const handleEmailGa = () => {
    ReactGA.event({
      category: "email",
      action: "Click on Email Button",
      label: "your label", // optional
      value: 99, // optional, must be a number
      nonInteraction: true, // optional, true/false
      transport: "xhr", // optional, beacon/xhr/image
    });
  }

  // handle scroll to section
  const handleScroll = () => {
    setShowForm(true);
    setTimeout(() => {
      const element = document.getElementById("contact-form");
      element.scrollIntoView({ behavior: "smooth" });
    }, 400);
    clearTimeout();
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const contactCards = [
    {
      id: 1,
      title: "Email",
      description: "Thank you for contacting us. One of our representatives will be in touch shortly.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 46 38" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 12.4857C0 5.59004 5.50794 0 12.3023 0H33.6977C40.4921 0 46 5.59004 46 12.4857V25.5143C46 32.41 40.4921 38 33.6977 38H12.3023C5.50794 38 0 32.41 0 25.5143V12.4857ZM11.1256 11.1829C10.4166 10.6432 9.4108 10.789 8.87907 11.5086C8.34734 12.2281 8.49102 13.2489 9.2 13.7886L19.4698 21.6057C21.5618 23.1981 24.4382 23.1981 26.5302 21.6057L36.8 13.7886C37.509 13.2489 37.6527 12.2281 37.1209 11.5086C36.5892 10.789 35.5834 10.6432 34.8744 11.1829L24.6047 19C23.6537 19.7238 22.3463 19.7238 21.3953 19L11.1256 11.1829Z" fill="currentColor" />
        </svg>
      ),
      action: "Email Now",
      href: "mailto:contact@dashurai.com",
      onClick: handleEmailGa,
      gradient: "from-blue-500 to-cyan-500",
      hoverGradient: "from-blue-600 to-cyan-600"
    },
    {
      id: 2,
      title: "Call",
      description: "Make a phone call to let us know your requirements to provide the best service.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 38 38" fill="none">
          <path d="M33.1241 35.4366C29.2155 39.3452 19.2056 35.6726 10.7665 27.2335C2.32745 18.7944 -1.34522 8.78455 2.56341 4.8759L5.13694 2.30237C6.91359 0.525712 9.84109 0.572675 11.6757 2.40726L15.6618 6.39344C17.4964 8.22803 17.5434 11.1555 15.7667 12.9322L15.214 13.4849C14.2547 14.4442 14.1609 15.9916 15.0522 17.0717C15.9119 18.1136 16.8388 19.1513 17.8438 20.1562C18.8487 21.1612 19.8864 22.0881 20.9283 22.9478C22.0084 23.8391 23.5558 23.7453 24.5151 22.786L25.0678 22.2333C26.8445 20.4566 29.772 20.5036 31.6066 22.3381L35.5927 26.3243C37.4273 28.1589 37.4743 31.0864 35.6976 32.8631L33.1241 35.4366Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
      action: "Call Now",
      href: "tel:(702) 960-4800",
      gradient: "from-green-500 to-emerald-500",
      hoverGradient: "from-green-600 to-emerald-600"
    },
    {
      id: 3,
      title: "Inquiries",
      description: "Provide your information to connect with you. We respect your privacy. We will not share your personal information",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 36 36" fill="none">
          <path d="M4 36C2.9 36 1.95833 35.6083 1.175 34.825C0.391667 34.0417 0 33.1 0 32V4C0 2.9 0.391667 1.95833 1.175 1.175C1.95833 0.391667 2.9 0 4 0H24.35C24.8833 0 25.3917 0.1 25.875 0.3C26.3583 0.5 26.7833 0.783333 27.15 1.15L34.85 8.85C35.2167 9.21667 35.5 9.64167 35.7 10.125C35.9 10.6083 36 11.1167 36 11.65V32C36 33.1 35.6083 34.0417 34.825 34.825C34.0417 35.6083 33.1 36 32 36H4ZM24 4V10C24 10.5667 24.1917 11.0417 24.575 11.425C24.9583 11.8083 25.4333 12 26 12H32L24 4ZM26 28C26.5667 28 27.0417 27.8083 27.425 27.425C27.8083 27.0417 28 26.5667 28 26C28 25.4333 27.8083 24.9583 27.425 24.575C27.0417 24.1917 26.5667 24 26 24H10C9.43333 24 8.95833 24.1917 8.575 24.575C8.19167 24.9583 8 25.4333 8 26C8 26.5667 8.19167 27.0417 8.575 27.425C8.95833 27.8083 9.43333 28 10 28H26ZM16 12C16.5667 12 17.0417 11.8083 17.425 11.425C17.8083 11.0417 18 10.5667 18 10C18 9.43333 17.8083 8.95833 17.425 8.575C17.0417 8.19167 16.5667 8 16 8H10C9.43333 8 8.95833 8.19167 8.575 8.575C8.19167 8.95833 8 9.43333 8 10C8 10.5667 8.19167 11.0417 8.575 11.425C8.95833 11.8083 9.43333 12 10 12H16ZM26 20C26.5667 20 27.0417 19.8083 27.425 19.425C27.8083 19.0417 28 18.5667 28 18C28 17.4333 27.8083 16.9583 27.425 16.575C27.0417 16.1917 26.5667 16 26 16H10C9.43333 16 8.95833 16.1917 8.575 16.575C8.19167 16.9583 8 17.4333 8 18C8 18.5667 8.19167 19.0417 8.575 19.425C8.95833 19.8083 9.43333 20 10 20H26Z" fill="currentColor" />
        </svg>
      ),
      action: "Inquiry Now",
      onClick: handleScroll,
      gradient: "from-purple-500 to-pink-500",
      hoverGradient: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>Contact Us | Dashur AI</title>
      </Helmet>

      <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-blue-900 dark:to-cyan-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-30"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-20 animate-pulse delay-2000"></div>

        <div className="relative z-10 flex flex-col items-center w-[95%] mx-auto py-24 lg:py-32">
          {/* Header Section */}
          <motion.div 
            className="flex flex-col space-y-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex">
              <Chips title="Contact Us" />
            </div>
            
            <div className="text-center max-w-4xl">
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-blue-800 to-cyan-800 dark:from-slate-200 dark:via-blue-200 dark:to-cyan-200 leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                                 Let&apos;s make something
                 <span className="block bg-gradient-to-r from-light-primary to-cyan-500 bg-clip-text text-transparent">
                   awesome together
                 </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                                 Ready to transform your business? Get in touch with our team of experts and let&apos;s discuss how we can help you achieve your goals.
              </motion.p>
            </div>
          </motion.div>

          {/* Contact Cards Section */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 w-full max-w-7xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
                         {contactCards.map((card) => (
              <motion.div
                key={card.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredCard(card.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 p-8 h-full">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <motion.div 
                    className={`flex justify-center mb-6 text-${card.gradient.split('-')[1]}-500 group-hover:text-${card.hoverGradient.split('-')[1]}-600 transition-colors duration-300`}
                    animate={hoveredCard === card.id ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {card.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                      {card.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                      {card.description}
                    </p>
                    
                    {/* Action Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {card.href ? (
                        <a 
                          href={card.href}
                          onClick={card.onClick}
                          className={`inline-block px-6 py-3 bg-gradient-to-r ${card.gradient} hover:${card.hoverGradient} text-white font-semibold rounded-xl transition-all duration-300 transform hover:shadow-lg hover:shadow-${card.gradient.split('-')[1]}-500/25`}
                        >
                          {card.action}
                        </a>
                      ) : (
                        <button 
                          onClick={card.onClick}
                          className={`inline-block px-6 py-3 bg-gradient-to-r ${card.gradient} hover:${card.hoverGradient} text-white font-semibold rounded-xl transition-all duration-300 transform hover:shadow-lg hover:shadow-${card.gradient.split('-')[1]}-500/25`}
                        >
                          {card.action}
                        </button>
                      )}
                    </motion.div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info Section */}
          <motion.div 
            className="mt-20 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-slate-700/50">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                Why Choose Dashur AI?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Fast Response</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Get back to you within 24 hours</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Expert Team</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Experienced professionals at your service</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Secure & Private</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Your data is safe with us</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className="w-full mt-16"
              >
                <InquiryForm setShowForm={setShowForm} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </HelmetProvider>
  )
}

export default Contact