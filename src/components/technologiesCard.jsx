/* eslint-disable react/prop-types */


const TechnologiesCard = ({item}) => {
    const {title, description, technology} = item;
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
                  <div className="relative" key={index}>
                    <div  className='flex  mb-2    space-x-2 items-center border border-white border-opacity-20 px-3.5 py-2 rounded-lg' data-tip="hello world fgkhskfghksfhg">
                   <div className="w-8 ">
                   <img className="w-[100%]" src={item?.imageLink} alt="" />
                   </div>
                    <h2  className="text-light-text  dark:text-dark-text">{item?.name}</h2>
                </div>
                <div className="absolute bottom-100   w-[300px] ">
                <div className="relative border space-x-2">
                <span className={`w-0 h-0 border-[#02A9F7] border-r-[20px] border-b-[20px] border-r-transparent absolute rotate-[136deg] left-10 top-4`}></span>
                <p>{item?.details}</p>
                </div>
                </div>
               
                </div>
                ))
              }
                
                </div>  
    

    </div>
    
  )
}

export default TechnologiesCard;