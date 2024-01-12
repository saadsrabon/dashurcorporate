
import Chips from "../components/chips"
import aboutBanner from "../assets/about.png"
import CardWrapper from './../components/CardWrapper';

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
    {/* Mission and vison Part */}

    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 my-24">
        <CardWrapper >
        <div >
        <h2 className="'text-light-text dark:text-dark-text text-2xl font-bold mb-4 ">Our Mission</h2>
          <p className="text-light-text dark:text-dark-text">Provide outstanding service, high-end applications and products, which allow our clients to grow and enhance their brand(s).</p>
        </div>
        </CardWrapper>
        <CardWrapper >
        <div >
        <h2 className="'text-light-text dark:text-dark-text text-2xl font-bold mb-4 ">Our Vision</h2>
          <p className="text-light-text dark:text-dark-text">Provide outstanding service, high-end applications and products, which allow our clients to grow and enhance their brand(s).</p>
        </div>
        </CardWrapper>
        
      </div>
    </div>
    </div>
  )
}

export default About