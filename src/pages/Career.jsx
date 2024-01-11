import CardWrapper from "../components/CardWrapper"
import BasicTitle from "../components/basicTitle"
import Chips from "../components/chips"

import jobData from '../utils/job.json'
const Career = () => {
  return (
    <div className="w-[60%] mx-auto my-12 flex-col items-center ">
        <div className="flex flex-col justify-center items-center">
            <Chips title="Careers" />
            <BasicTitle width="w-[94%]" title="Currently available ON-SITE/remote/HYBRID positions"/>
            <p className="text-center">Your feedback and inquiries are important to us, and we're here to <br/> provide the support you need.</p>
        </div>
        {
          jobData.map((job, index) => (
            <CardWrapper key={index}>
            <div className="mb-8">
              <h2 className="font-sans text-2xl font-bold text-light-text dark:text-dark-text ">{job?.jobtitle} ({job?.jobType})</h2>
              <p className="my-2  text-light-text dark:text-dark-text">{job?.description}</p>
            </div>
            <div className="flex justify-center space-x-6 mt-4">
              <button className="px-3 py-2 text-[#0C0C0C] text-base font-medium rounded-lg bg-light-primary">Submit CV/Resume</button>
              <button className="px-2 py-3 text-light-primary text-base font-medium rounded-lg bg-transparent border-light-primary border-2" >View Job Description</button>
            </div>
          </CardWrapper>
          ))
        }
       
    </div>
  )
}

export default Career