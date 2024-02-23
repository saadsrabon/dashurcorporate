
// Import Swiper React components

import Slider from "react-slick";

import db from  '../utils/technologies.json'
// import required modules

import TechnologiesCard from './technologiesCard';
import { CustomPrevArrow } from "./CustomPrevArrow";
import { CustomNextArrow } from "./CustomNextArrow";



export default function App() {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: <CustomPrevArrow  />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false


        }
      }
    ]
  };
  return (
    <div className=''>
        
      <Slider 
       {...settings}
        
      >
        {
            db.map((item, index) => (
                
                    <TechnologiesCard key={index} item={item} />
                
            ))
        }
      </Slider>  

     
    </div>
  );
}
