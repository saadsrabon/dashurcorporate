
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import db from  '../utils/technologies.json'
// import required modules
import { Pagination, Navigation ,Autoplay ,Mousewheel } from 'swiper/modules';
import TechnologiesCard from './technologiesCard';


export default function App() {
   
  return (
    <div className=''>
        
      <Swiper
       style={{'--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff', 'height':'550px', margin:"20px 0",  overflow:'hidden'}}
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
        // breakpoints={
        //     {
        //         320: {
        //             slidesPerView: 1,
        //             spaceBetween: 10
        //         },
        //         768: {
        //             slidesPerView: 1,
        //             spaceBetween: 20
        //         },
        //         1024: {
        //             slidesPerView: 1,
        //             spaceBetween: 30
        //         }
        //     }
        // }
      >
        {
            db.map((item, index) => (
                <SwiperSlide data  key={index}>
                    <TechnologiesCard item={item} />
                </SwiperSlide>
            ))
        }
      </Swiper>  
    </div>
  );
}
