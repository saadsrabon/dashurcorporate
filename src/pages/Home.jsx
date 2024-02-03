
import { Helmet } from 'react-helmet-async';
import banner from '../assets/hero.png';
import CardWrapper from '../components/CardWrapper';
import BasicSlider from '../components/basicSlider';
import BasicTitle from '../components/basicTitle';
import Chips from '../components/chips';
// import { CookiesFile } from '../components/cookies';
import SearchBar from '../components/searchBar';
import services from '../utils/services.json';


const Home = () => {
  // const [showCookies, setShowCookies] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
      
  //     localStorage.setItem('showCookies', true);
  //     setShowCookies(true);
      
  //   }, 5000);
  // }, []);

  
  return (
    <>
    {/* All Necessary Steps for Seo */}
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content="Dashur AI" />
      <meta name="keywords" content="Dashur AI" />
      <meta name="author" content="Dashur AI" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="title" content="Dashur AI" />
      <meta name="description" content="Dashur AI" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://dashur.ai/" />
      <meta property="og:title" content="Dashur AI" />
      <meta property="og:description" content="Dashur AI" />
      <meta property="og:image" content="https://dashur.ai/" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://dashur.ai/" />
      <meta property="twitter:title" content="Dashur AI" />
      <meta property="twitter:description" content="Dashur AI" />
      <meta property="twitter:image" content="https://dashur.ai/" />
      <link rel="canonical" href="https://dashur.ai/" />
      
      
      <title>Dashur AI</title>
    </Helmet>
    <div className='relative mt-36'>
      {/* Hero Section */}
      <div className="mx-auto py-8 md:py-16 lg:py-24">
        <h2 className="text-light-text text-4xl mb-8 lg:mb-0 md:text-4xl lg:text-6xl font-bold uppercase dark:text-dark-text text-center lg:leading-[78px]">
          Empowering Innovation, Connecting <br /> the Future With Dashur ai
        </h2>
      </div>

      {/* Banner Section */}
      <div className=" w-full md:w-[95%] mx-auto -z-[999]">

        <div className='relative'>
        <img src={banner} alt="Your Image" className="  w-full h-auto px-4 lg:px-0" />
        <div className="absolute  top-[-10%] md:top-[-5%] left-1/2 transform -translate-x-1/2">
          <SearchBar />
        </div>
        </div>
       <div className='relative'>
       <div className="absolute -bottom-6 lg:-bottom-10  left-0 right-0 click-btn flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-8 h-8 lg:w-16 lg:h-16 rounded-full shadow-lg flex justify-center items-center">
            <svg className='w-4 h-4'  xmlns="http://www.w3.org/2000/svg" width="20" height="26" viewBox="0 0 20 26" fill="none">
              <path d="M10 1V25M10 25L19 16M10 25L1 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
       </div>
        

        {/* SearchBar */}
       
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
              <p className="-z-10 text-light-text text-base leading-6 text-center dark:text-[#D2D2D2]">
                An innovative tech company dedicated to shaping the future through cutting-edge solutions and exceptional service.
              </p>
            </div>
          </div>

          {/* Slider Part */}
          <div className="grid grid-cols-1 px-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full md:w-[90%] gap-4 content-center place-content-center mt-8 md:mt-12">
            {services?.map((item, index) => (
              <CardWrapper key={index}>
                <div>
                  <div className={`${item?.bgColor} pb-4 flex justify-center`}>
                    <img src={item?.image} alt="" />
                  </div>
                </div>
                <div>
                  <h2 className="text-light-text dark:text-dark-text text-lg md:text-2xl font-bold mb-4 text-center uppercase">{item?.title}</h2>
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
          <p className="text-light-text text-center text-base leading-6 dark:text-[#D2D2D2]">
            An innovative tech company dedicated to shaping the future through cutting-edge solutions and exceptional service.
          </p>
        </div>

        {/* Slider Section */}
        <div className="w-full md:w-[90%] mx-auto">
          <BasicSlider />
        </div>
      </div>
     {/* {showCookies&& 
      <CookiesFile  setShowCookies={setShowCookies}/>
     } 
     */}
    </div>
    </>
  );
};

export default Home;
