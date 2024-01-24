/* eslint-disable react/prop-types */

import { useState } from "react";


const TechnologiesCard = ({item}) => {
    const {title, description, technology} = item;
    const [tooltipOpen, setTooltipOpen] = useState(false);
  return (
    <div className='techCard py-8 px-4 rounded-lg border border-solid border-white border-opacity-20 dark:bg-gray-800 dark:bg-opacity-20 bg-white bg-opacity-20 shadow-xl my-16 ">
    '>
            <div className='flex justify-center items-center'>
                <h2 className='uppercase  '>{title}</h2>
                </div>
                <div className='flex justify-center items-center'>
                <p className='text-light-text w-[80%] my-4 text-left text-base leading-6  dark:text-[#D2D2D2]'>
               {description}
                </p>
                </div>

              <div className='grid grid-cols-6  py-8 place-items-center'>
              {
                technology?.map((item,index) => (
                  <div onMouseLeave={()=>setTooltipOpen(null)} onMouseEnter={()=>setTooltipOpen(index)} className="relative" key={index}>
                    <div  className='flex  mb-2    space-x-2 items-center border border-white border-opacity-20 px-3.5 py-2 rounded-lg' data-tip="hello world fgkhskfghksfhg">
                   <div className="w-8 ">
                   <img className="w-[100%]" src={item?.imageLink} alt="" />
                   </div>
                    <h2  className="text-light-text  dark:text-dark-text">{item?.name}</h2>
                </div>
                {
                  tooltipOpen == index &&(<div className="absolute bottom-100 -left-36   w-[300px] ">
                  <div className="relative border-[556D78] border space-x-2 bg-[#556D78]">
                  <span className={`w-0 h-0 border-[#556D78] border-r-[20px] border-b-[20px] border-r-transparent absolute rotate-[136deg] left-40 -top-2`}></span>
                  <p>{item?.details}</p>
                  </div>
                  </div>)
                }
               
                </div>
                ))
              }
                
                </div>  
    

    </div>
    
  )
}

export default TechnologiesCard;