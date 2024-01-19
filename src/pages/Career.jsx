import { useState } from "react";
import CardWrapper from "../components/CardWrapper";
import BasicTitle from "../components/basicTitle";
import Chips from "../components/chips";
import jobData from '../utils/job.json';

const Career = () => {
  const [showJob, setShowJob] = useState(false);
  const [id , setId] = useState(null)

const handleOpen = (id) => {

  setId(id)
  setShowJob(prev=>!prev)
}
  return (
    <div className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto my-12 flex-col items-center px-4">
      <div className="flex flex-col justify-center items-center">
        <Chips title="Careers" />
        <BasicTitle width="w-full md:w-94%" title="available  positions" />
        <p className="text-center md:text-left md:ml-[-45px]">Your feedback and inquiries are important to us, and we're here to <br /> provide the support you need.</p>
      </div>
      {
        jobData.map((job, index) => (
          <CardWrapper key={index}>
            <div className="mb-8 ">
              <h2 className="font-sans text-2xl font-bold text-light-text dark:text-dark-text ">{job?.jobtitle} ({job?.jobType})</h2>
              {showJob & id ==job.id ?<p className="my-2  text-light-text dark:text-dark-text">{job?.description}</p>:""}
            </div>
            <div className="flex flex-col md:flex-row justify-center md:space-x-6 mt-4">
              <button className="mb-2 md:mb-0 px-3 py-2 text-[#0C0C0C] text-base font-medium rounded-lg bg-light-primary">Submit CV/Resume</button>
              <button onClick={()=>handleOpen(job?.id)} className="px-2 py-3 text-light-primary text-base font-medium rounded-lg bg-transparent border-light-primary border-2" >View Job Description</button>
            </div>
          </CardWrapper>
        ))
      }
    </div>
  );
}

export default Career;
