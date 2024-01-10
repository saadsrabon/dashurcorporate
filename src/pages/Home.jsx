
import { RxDotFilled } from 'react-icons/rx'
import banner from '../assets/hero.png'
import NewSlider from '../components/AdvanceSlider'




import BasicSlider from '../components/basicSlider'

import BasicTitle from '../components/basicTitle'
import Chips from '../components/chips'
import SearchBar from '../components/searchBar'
import { useState } from 'react'
import { slides } from '../utils/navdetails'
const Home = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <>
    <div className=" mx-auto py-24">
        <h2 className="text-light-text text-6xl  font-bold uppercase dark:text-dark-text text-center leading-[78px]">Empowering Innovation, Connecting <br></br>the Future With Dashur ai</h2>
    </div>
    <div className="relative w-[95%] mx-auto">
  <img  src={banner} alt="Your Image" className="w-full h-auto " />

  <div className="absolute bottom-[-7%] left-0 right-0 flex justify-center">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-16 h-16 rounded-full shadow-lg flex justify-center items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="26" viewBox="0 0 20 26" fill="none">
<path d="M10 1V25M10 25L19 16M10 25L1 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    </button>
 
  </div>

  {/* SearchBAr */}
  
  <div className='absolute top-[-7%] translate-x-[-50%] left-[50%]'> <SearchBar /></div>
  
</div>
{/* service section */}
<div id='service' className='mt-24'>
  <div className=' grid grid-cols-2'>
     <div>
     <div className='flex flex-col items-center'>
      <Chips title="Technologies"/>
      <BasicTitle title="Embrace Innovation, Master Tomorrow" />
    </div>
    <div className='w-[57%] mx-auto'>
    <p className='text-light-text text-base leading-6    dark:text-[#D2D2D2]'>
    An innovative tech company dedicated to shaping the future through cutting-edge solutions and exceptional service.
    </p>

    <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
     </div>

     {/* slider part */}
     <div>
   <NewSlider currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
     </div>
  </div>
</div>

{/* Technologies Section */}

<div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 py-24">
    {/* title-part */}
    <div className='flex flex-col items-center'>
      <Chips title="Technologies"/>
      <BasicTitle title="Embrace Innovation, Master Tomorrow" />
    </div>
    <div className='w-[57%] mx-auto'>
    <p className='text-light-text text-base leading-6    dark:text-[#D2D2D2]'>
    An innovative tech company dedicated to shaping the future through cutting-edge solutions and exceptional service.
    </p>
    </div>

    {/* Slider Section */}

   <div className='w-[90%] mx-auto'>
   <BasicSlider/>
   </div>
</div>

    </>
    
  )
}

export default Home