
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import TechnologiesCard from './technologiesCard';
import { useRef } from 'react';
import SwiperCore from 'swiper/core';

// Install Swiper modules
SwiperCore.use([Navigation]);
// Install Swiper modules

export default function App() {
    const swiperRef = useRef(null);

  // Function to move to the next slide
  const nextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <div className='py-16'>
        
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
      
        
        loop={true}
        pagination={{
          clickable: true,
        }}
     
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            }}
      
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide
    
        >
            <TechnologiesCard/>
        </SwiperSlide>
        <SwiperSlide
        style={{background:"none"}}
        >
            <TechnologiesCard/>
        </SwiperSlide>
        <SwiperSlide
        style={{background:"none"}}
        >
            <TechnologiesCard/>
        </SwiperSlide>
        <SwiperSlide
        style={{background:"none"}}
        >
            <TechnologiesCard/>
        </SwiperSlide>
       
       
      </Swiper>
   
    </div>
  );
}
