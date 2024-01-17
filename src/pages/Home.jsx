import banner from '../assets/hero.png';
import CardWrapper from '../components/CardWrapper';
import BasicSlider from '../components/basicSlider';
import BasicTitle from '../components/basicTitle';
import Chips from '../components/chips';
import SearchBar from '../components/searchBar';
import services from '../utils/services.json';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="mx-auto py-8 md:py-16 lg:py-24">
        <h2 className="text-light-text text-xl md:text-4xl lg:text-6xl font-bold uppercase dark:text-dark-text text-center lg:leading-[78px]">
          Empowering Innovation, Connecting <br /> the Future With Dashur ai
        </h2>
      </div>

      {/* Banner Section */}
      <div className="relative w-full md:w-[95%] mx-auto -z-[999]">
        <img src={banner} alt="Your Image" className="w-full h-auto" />

        <div className="absolute bottom-[-7%] left-0 right-0 flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-16 h-16 rounded-full shadow-lg flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="26" viewBox="0 0 20 26" fill="none">
              <path d="M10 1V25M10 25L19 16M10 25L1 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* SearchBar */}
        <div className="absolute top-[-7%] md:top-[15%] left-1/2 transform -translate-x-1/2">
          <SearchBar />
        </div>
      </div>

      {/* Service Section */}
      <div id="service" className="mt-8 md:mt-16 lg:mt-24">
        <div className="flex justify-center items-center flex-col">
          <div>
            <div className="flex flex-col items-center">
              <Chips title="Our Services" />
              <BasicTitle title="Celebrating Excellence, Delivering Quality" />
            </div>
            <div className="w-full md:w-[57%] mx-auto">
              <p className="text-light-text text-base leading-6 text-center dark:text-[#D2D2D2]">
                An innovative tech company dedicated to shaping the future through cutting-edge solutions and exceptional service.
              </p>
            </div>
          </div>

          {/* Slider Part */}
          <div className="grid grid-cols-1 px-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full md:w-[90%] gap-4 content-center place-content-center mt-8 md:mt-12">
            {services?.map((item, index) => (
              <CardWrapper key={index}>
                <div>
                  <div className={`${item?.bgColor} pb-4`}>
                    <img src={item?.image} alt="" />
                  </div>
                </div>
                <div>
                  <h2 className="text-light-text dark:text-dark-text text-lg md:text-2xl font-bold mb-4">{item?.title}</h2>
                  <p className="text-light-text dark:text-dark-text">{item?.description}</p>
                </div>
              </CardWrapper>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 mt-8 md:mt-16 lg:mt-24">
        {/* Title-Part */}
        <div className="flex flex-col items-center">
          <Chips title="Technologies" />
          <BasicTitle width="w-full md:w-[70%]" title="Embrace Innovation, Master Tomorrow" />
        </div>
        <div className="w-full md:w-[57%] mx-auto">
          <p className="text-light-text text-base leading-6 dark:text-[#D2D2D2]">
            An innovative tech company dedicated to shaping the future through cutting-edge solutions and exceptional service.
          </p>
        </div>

        {/* Slider Section */}
        <div className="w-full md:w-[90%] mx-auto">
          <BasicSlider />
        </div>
      </div>
    </>
  );
};

export default Home;
