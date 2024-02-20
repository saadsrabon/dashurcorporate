/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import Chips from "../components/chips"
import aboutBanner from "../assets/about.png"
import { motion } from "framer-motion";
import BasicTitle from "../components/basicTitle";
import { Helmet, HelmetProvider } from "react-helmet-async";

const text = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
   
    fill:"rgba(225, 255, 255, 1)"
  }
};
const About = ({isDarkMode}) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>About Us | Dashur AI</title>
      </Helmet>
    <div className="w-[80%] mx-auto my-12 lg:my-24 lg:mt-48">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div>
            
<img src={aboutBanner} alt="" />
           </div>

            <div className="flex flex-col  space-y-4 justify-center">
              <div className="flex ">
              <Chips title="About Us"/>
              </div>
              <div className="flex  items-center ">
        <h2 className="text-light-text text-left py-4 text-[24px] md:text-5xl uppercase font-sans font-bold  dark:text-dark-text">ABout Dashur AI</h2>
    </div>
              <p className="text-light-text dark:text-dark-text">While dedicated to the development of advanced automated solutions, our goal is to imbue
these systems with a nuanced form of reasoning reminiscent of human cognition, thereby
enhancing individual talents and capabilities. Our specialization lies in addressing intricate
challenges within demanding environments, fostering a reliance on AI for decision-making that
compliments human expertise. Acknowledging the widespread demand across diverse markets,
we aim to provide cutting-edge solutions with real-time situational awareness, predictive
analytics, and human-like acumen.</p>   

<div className="mt-24" >
        <h2 className="text-light-text dark:text-dark-text text-4xl font-bold mt-8 uppercase ">Our Mission</h2>
          <p className="text-light-text text-base mt-4 dark:text-dark-text">Deliver exceptional service and premium applications and , products that empower our clients to  elevate and expand their brands.</p>
        </div>
      </div>

      
    </div>
    {/* Mission and vison Part */}

    <div>
      <div className="mt-48"> 
      <div className="flex flex-col justify-center items-center">
        
        {/* <BasicTitle width="w-full md:w-[94%] lg:w-[60%] " title="Markets" /> */}
        {/* <p className=" text-light-text dark:text-dark-text text-center md:text-left md:ml-[-45px]">Your feedback and inquiries are important to us, and we're here to <br /> provide the support you need.</p> */}
      </div>
      </div>
    
    </div>
    </div>
    </HelmetProvider>
  )
}

export default About