/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

import BasicTitle from "../components/basicTitle";
import Chips from "../components/chips";
import jobData from '../utils/job.json';

import SingleJob from "../components/SingleJob";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Career = () => {
  const [openJobIndex, setOpenJobIndex] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);

  const handleOpen = (index) => {
    setOpenJobIndex(index);
  };
  const handleClose = () => {
    setOpenJobIndex(null);
  };

  return (
    <HelmetProvider>

    <Helmet>
      <title>Careers | Dashur AI</title>
    </Helmet>
    <div className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto my-12 mt-48 flex-col items-center px-4">
      <div className="flex flex-col justify-center items-center">
        <Chips title="Careers" />
        <BasicTitle width="w-full md:w-[94%] lg:w-[60%]" title="Make an Outstanding career with dashur AI" />
        {/* <p className="text-center md:text-left md:ml-[-45px]">
          Your feedback and inquiries are important to us, and we're here to
          <br /> provide the support you need.
        </p> */}
      </div>
      {/* Tab Version */}
      <div role="tablist" className="tabs my-12 bg-l">
        <a onClick={() => setTabIndex(0)} role="tab" className={`${tabIndex === 0 ? "tab uppercase tab-active font-bold text-3xl dark:text-dark-text" : "tab text-light-text dark:text-dark-text "}`}>
        Career Opportunities
        </a>
       
      </div>
      {tabIndex === 0 &&
        jobData.map((job, index) => (
          <SingleJob key={index} job={job} handleOpen={() => handleOpen(index)} index={index}  isActive={index === openJobIndex} handleClose={handleClose} />
        ))}
    </div>
    </HelmetProvider>
  );
};

export default Career;
