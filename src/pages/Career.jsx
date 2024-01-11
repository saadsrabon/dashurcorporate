import CardWrapper from "../components/CardWrapper"

import jobData from '../utils/job.json'
const Career = () => {
  return (
    <div>
        {
          jobData.map((job, index) => (
            <CardWrapper key={index}>
            <div>
              <h2>{job?.jobtitle}</h2>
              <p>{job?.description}</p>
            </div>
            <div className="flex justify-center space-x-6">
              <button>Submit CV/Resume</button>
              <button>View Job Description</button>
            </div>
          </CardWrapper>
          ))
        }
       
    </div>
  )
}

export default Career