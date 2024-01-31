/* eslint-disable react/prop-types */


const JobDescription = ({job}) => {
    console.log(job)
  return (
    <div>
        <p className='my-2 font-semibold text-light-text dark:text-dark-text'>Job Overview</p>
        <p className='mb-4 text-light-text dark:text-dark-text'>{job?.overview}</p>
        <p className='my-2 font-bold text-light-text dark:text-dark-text'>Responsibilities for  {job?.jobtitle}</p>
        <ul className='list-disc ml-6 text-light-text dark:text-dark-text'>
            {job?.responsibilities.map((item) => (<li className='' key={item}>{item}</li>))}
        </ul>
        <p className='my-4 font-bold text-light-text dark:text-dark-text'>Qualifications for {job?.jobtitle}</p>
        <ul className='list-disc ml-6 text-light-text dark:text-dark-text'>
        {job?.qualification.map((item) => (<li key={item}>{item}</li>))}
        </ul>
    </div>

  )
}

export default JobDescription