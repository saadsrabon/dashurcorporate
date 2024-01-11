import CardWrapper from "../components/CardWrapper"

import jobData from '../utils/job.json'
const Career = () => {
  return (
    <div className="w-[80%] mx-auto ">
        {
          jobData.map((job, index) => (
            <CardWrapper key={index}>
            <div className="mb-8">
              <h2 className="font-sans text-2xl font-bold ">{job?.jobtitle} ({job?.jobType})</h2>
              <p>{job?.description}</p>
            </div>
            <div className="flex justify-center space-x-6 my-4">
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