
import { Helmet } from 'react-helmet-async';
import BasicSlider from '../components/basicSlider';
import services from '../utils/services.json';
import SEO from '../components/SEO';
import ModernHero from '../components/ModernHero';
import ModernServiceCard from '../components/ModernServiceCard';
import ModernSectionHeader from '../components/ModernSectionHeader';
import ModernSearchBar from '../components/ModernSearchBar';

const Home = () => {
  const handleNextSection = () => {
    document.getElementById('service').scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearch = (query) => {
    console.log('Searching for:', query);
    // Implement search functionality
  };

  return (
    <>
      <SEO 
        title="Dashur AI - Empowering Innovation, Connecting the Future"
        description="Dashur AI is an innovative tech company dedicated to shaping the future through cutting-edge AI solutions, digital transformation, and exceptional service delivery. Discover our comprehensive range of services."
        keywords="AI, artificial intelligence, machine learning, digital transformation, tech solutions, innovation, automation, data analytics, cloud computing, software development, web development, mobile apps"
        image="https://dashurai.com/og-image.jpg"
        url="https://dashurai.com"
        type="website"
      />
      
      {/* Modern Hero Section */}
      <ModernHero
        title="Empowering Innovation, Connecting the Future"
        subtitle="Transforming businesses through cutting-edge AI solutions and digital excellence"
        onScrollClick={handleNextSection}
      />



      {/* Services Section */}
      <section id="service" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ModernSectionHeader
            badge="Our Services"
            title="Celebrating Excellence, Delivering Quality"
            subtitle="An innovative tech company dedicated to shaping the future through cutting-edge solutions and exceptional service."
            className="mb-16"
          />

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services?.map((service, index) => (
              <ModernServiceCard
                key={index}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ModernSectionHeader
            badge="Technologies"
            title="Embrace Innovation, Master Tomorrow"
            subtitle="An innovative tech company dedicated to shaping the future through cutting-edge solutions and exceptional service."
            className="mb-16"
          />

          {/* Slider Section */}
          <div className="max-w-6xl mx-auto">
            <BasicSlider />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
