
import Chips from "../components/chips"
import aboutBanner from "../assets/about.png"
import CardWrapper from './../components/CardWrapper';
import markets from '../assets/markets.png'
const About = () => {
  return (
    <div className="w-[80%] mx-auto my-12 lg:my-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div>
            <img src={aboutBanner}alt="" />
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
      </div>
    </div>
    {/* Mission and vison Part */}

    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 lg:gap-20 my-24">
        <CardWrapper >
        <div >
        <h2 className="text-light-text dark:text-dark-text text-4xl font-bold mb-4 ">Our Mission</h2>
          <p className="text-light-text text-base mt-6 dark:text-dark-text">Deliver exceptional service and premium applications and ,<br/> products that empower our clients to <br/> elevate and expand their brands.</p>
        </div>
        </CardWrapper>
        <CardWrapper >
        <div className="flex justify-center">
          <img src={markets} alt="s" />
        </div>
        </CardWrapper>
        
      </div>
    </div>
    </div>
  )
}

export default About