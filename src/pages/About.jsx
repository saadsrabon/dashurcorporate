
import Chips from "../components/chips"
import aboutBanner from "../assets/about.png"

const About = () => {
  return (
    <div className="w-[80%] mx-auto my-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div>
            <img src={aboutBanner}alt="" />
           </div>

            <div className="flex flex-col  space-y-4 justify-center">
              <div className="flex ">
              <Chips title="About Us"/>
              </div>
              <div className="flex  items-center ">
        <h2 className="text-light-text text-left py-4 text-5xl uppercase font-sans font-bold  dark:text-dark-text">Connecting Dreams, Crafting Realities</h2>
    </div>
              <p className="text-light-text dark:text-dark-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat ipsum odit cupiditate nostrum delectus a, asperiores sequi nesciunt ullam eius, quis molestiae eos labore voluptatem officiis. Tenetur, eos, maiores odit optio, fuga provident delectus nam est laudantium assumenda saepe consequatur.</p>     
      </div>
    </div>
    </div>
  )
}

export default About