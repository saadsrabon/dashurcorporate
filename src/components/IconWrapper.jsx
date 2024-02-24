/* eslint-disable react/prop-types */

import lefticon from '../assets/Rectangle 173.svg'
import righticon from '../assets/Rectangle 174.svg'
const IconWrapper = ({children}) => {
  return (
    <div className='bg-black flex justify-between items-center my-2 rounded-xl'>
       <img src={lefticon}alt="" className='' />
           <div>{children}</div>
       <img src={righticon} alt="" />
    </div>
  )
}

export default IconWrapper