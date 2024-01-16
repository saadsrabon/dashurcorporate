
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import db from  '../utils/technologies.json'
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import TechnologiesCard from './technologiesCard';


export default function App() {
   
  return (
    <div className=''>
        
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        pagination={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={
            {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            }
        }
      >
        {
            db.map((item, index) => (
                <SwiperSlide key={index}>
                    <TechnologiesCard item={item} />
                </SwiperSlide>
            ))
        }
      </Swiper>  
    </div>
  );
}
