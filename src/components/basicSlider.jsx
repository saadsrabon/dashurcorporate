
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
