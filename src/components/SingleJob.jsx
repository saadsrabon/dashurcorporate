/* eslint-disable react/prop-types */

import { useState } from 'react';
import CardWrapper from './CardWrapper'
import JobDescription from './JobDescription'
import UploadResume from './UploadResume'


const SingleJob = ({job, handleOpen, handleClose, isActive, index }) => {
  const [openResume, setOpenResume] = useState(false);

  const handleResumeClick = () => {
    setOpenResume(!openResume);
    if (!openResume) {
      handleOpen(index);
    } else {
      handleClose();
    }
  };
  return (
  
    <CardWrapper>
      <div className='relative'>
      {job?.availability ==="closed" &&  <span className='border ml-auto text-[#F28B82] border-[#F28B82] font-bold px-2 py-2 rounded-2xl mb-4 block w-40 text-center'>Position Closed</span>}
    <div className="mb-8 ">
      <h2 className="font-sans text-2xl font-bold mb-4 text-light-text dark:text-dark-text ">{job?.jobtitle} </h2>
      {isActive  ?<JobDescription job={job}/>:""}
        
    </div>
    <div className="flex flex-col md:flex-row justify-center md:space-x-6 mt-4">
      <button onClick={handleResumeClick} className={`${isActive?"block":"hidden"}mb-2 md:mb-0 px-3 py-2 text-[#0C0C0C] text-base font-medium rounded-lg bg-light-primary`}>Submit CV/Resume</button>
      <button onClick={handleOpen} className="px-2 py-3 text-light-primary text-base font-medium rounded-lg bg-transparent border-light-primary border-2" >View Job Description</button>
      
    </div>
    {job?.availability==="closed" && <div className='flex space-x-3 justify-center mt-8 items-center'><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="1" width="26" height="26" rx="13" stroke="#F28B82" strokeWidth="2"/>
<path d="M14.6499 20.5002L14.6499 12.7002" stroke="#F28B82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.0499 12.7002L14.6499 12.7002" stroke="#F28B82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.6499 8.8L14.6499 7.5" stroke="#F28B82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
 <span className='text-sm '>Submit resume for consideration when new positions are available</span></div>}
    {openResume && isActive && (
      <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
        <UploadResume handleClose={handleClose} />
      </div>
    )}
    
    </div>
  </CardWrapper>

  )
}

export default SingleJob