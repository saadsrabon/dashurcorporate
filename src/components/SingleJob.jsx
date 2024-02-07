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
    <div className="mb-8 ">
      <h2 className="font-sans text-2xl font-bold mb-4 text-light-text dark:text-dark-text ">{job?.jobtitle} </h2>
      {isActive  ?<JobDescription job={job}/>:""}
    </div>
    <div className="flex flex-col md:flex-row justify-center md:space-x-6 mt-4">
      <button onClick={handleResumeClick} className="mb-2 md:mb-0 px-3 py-2 text-[#0C0C0C] text-base font-medium rounded-lg bg-light-primary">Submit CV/Resume</button>
      <button onClick={handleOpen} className="px-2 py-3 text-light-primary text-base font-medium rounded-lg bg-transparent border-light-primary border-2" >View Job Description</button>
    </div>
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