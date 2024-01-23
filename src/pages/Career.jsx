/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

import BasicTitle from "../components/basicTitle";
import Chips from "../components/chips";
import jobData from '../utils/job.json';

import SingleJob from "../components/SingleJob";

const Career = () => {
  const [indexData, setIndexData] = useState(0);
  const [tabIndex , setTabIndex] = useState(0);


const handleOpen = (index) => {
  setIndexData(index)
}
  return (
    <div className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto my-12 flex-col items-center px-4">
      <div className="flex flex-col justify-center items-center">
        <Chips title="Careers" />
        <BasicTitle width="w-full md:w-[94%] lg:w-[60%]" title="Make an Outstanding career with dashur AI" />
        <p className="text-center md:text-left md:ml-[-45px]">Your feedback and inquiries are important to us, and we're here to <br /> provide the support you need.</p>
      </div>
       {/* Tab Version */}
       <div role="tablist" className="tabs tabs-lifted my-12">
  <a onClick={()=>setTabIndex(0)} role="tab" className={`${tabIndex==0?"tab tab-active font-bold":"tab"}`}>Job Positions</a>
  <a onClick={()=>setTabIndex(1)} role="tab" className={`${tabIndex==1?"tab tab-active font-bol":"tab"}`}>Learning Lab</a>
  

</div>
      {
       tabIndex==0?( jobData.map((job, index) => (
          <SingleJob key={index} job={job} handleOpen={()=>handleOpen(index)} isActive={indexData==index}/>
        ))) : ("")
      }
    </div>
  );
}

export default Career;
