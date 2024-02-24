/* eslint-disable react/prop-types */



const IconText = ({item}) => {


  return (
    <div className="" >
                    <div  className='flex  mx-  space-x-2 items-center   px-3.5 py-2  '>
                   <div className="w- ">
                   <img className="w-[80%] grow-0" src={item?.imageLink} alt="" />
                   </div>
                    <h2  className="  dark:text-dark-text text-2xl">{item?.name}</h2>
                </div>
                </div>
  )
}

export default IconText