/* eslint-disable react/prop-types */
import React from 'react'

const JobDescription = ({job}) => {
    console.log(job)
  return (
    <div>
        <p className='my-2 font-semibold'>Job Overview</p>
        <p className='mb-4'>{job?.overview}</p>
        <p className='my-2 font-bold'>Responsibilities for  {job?.jobtitle}</p>
        <ul className='list-disc ml-6'>
            {job?.responsiblities.map((item) => (<li className='' key={item}>{item}</li>))}
        </ul>
        <p className='my-4 font-bold'>Qualifications for {job?.jobtitle}</p>
        <ul className='list-disc ml-6'>
        {job?.qualification.map((item) => (<li key={item}>{item}</li>))}
        </ul>
    </div>

  )
}

export default JobDescription