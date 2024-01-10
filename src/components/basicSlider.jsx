
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import TechnologiesCard from './technologiesCard';

export default function App() {
  return (
    <div className='py-16'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
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
        <SwiperSlide
        style={{background:"none"}}
        >
            <TechnologiesCard/>
        </SwiperSlide>
       
       
      </Swiper>
    </div>
  );
}
