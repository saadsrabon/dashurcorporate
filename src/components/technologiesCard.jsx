/* eslint-disable react/prop-types */


const TechnologiesCard = ({item}) => {
    const {title, description, technology} = item;
  return (
    <div className='techCard py-8 px-4 rounded-lg border border-solid border-white border-opacity-20 dark:bg-gray-800 dark:bg-opacity-20 bg-white bg-opacity-20 shadow-xl my-16 ">
    '>
            <div className='flex justify-center items-center'>
                <h2 className='uppercase'>{title}</h2>
                </div>
                <div className='flex justify-center items-center'>
                <p className='text-light-text text-base leading-6  dark:text-[#D2D2D2]'>
               {description}
                </p>
                </div>

              <div className='grid grid-cols-2 gap-4 py-8'>
              {
                technology?.map((item,index) => (
                    <div key={index} className='flex  space-x-2 items-center'>
                   <div className="w-8">
                   <img className="w-[100%]" src={item?.imageLink} alt="" />
                   </div>
                    <h2 className="text-light-text dark:text-dark-text">{item?.name}</h2>
                </div>
                ))
              }
                
                </div>  
    

    </div>
    
  )
}

export default TechnologiesCard;