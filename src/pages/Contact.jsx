import CardWrapper from "../components/CardWrapper"
import Chips from "../components/chips"


const Contact = () => {
  return (
    <div className="flex flex-col items-center w-[80%] mx-auto my-24">
          <div className="flex flex-col  space-y-4 justify-center items-center">
              <div className="flex ">
              <Chips title="Contact Us"/>
              </div>
              <div className="flex  flex-col items-center w-2/4 ">
        <h2 className="text-light-text text-center leading-snug py-4 text-5xl uppercase font-sans font-bold  dark:text-dark-text">Connecting Dreams, Crafting Realities</h2>
        <p className="text-light-text dark:text-dark-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat ipsum odit cupiditate nostrum delectus a, asperiores sequi nesciunt ullam eius, quis molestiae eos labore voluptatem officiis. Tenetur, eos, maiores odit optio, fuga provident delectus nam est laudantium assumenda saepe consequatur.</p>     
    </div>
             
      </div>

      {/* item section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12" >
        <CardWrapper>
          <div className="flex justify-between space-x-8">
            <div>
              <img src="" alt="" />
              <div>
              <h2 className="text-light-text dark:text-dark-text font-bold">Email Us</h2>
              <p className="text-light-text dark:text-dark-text">contact@dashurai.com</p>
              </div>
            </div>
            <div>
              <button className="px-3 py-2 text-[#0C0C0C] text-base font-medium rounded-lg bg-light-primary">
                Email Now
              </button>
            </div>
          </div>
        </CardWrapper>
        <CardWrapper>
          <div className="flex justify-between space-x-8">
            <div>
              <img src="" alt="" />
              <div>
              <h2 className="text-light-text dark:text-dark-text font-bold ">Let us contact </h2>
              <p className="text-light-text dark:text-dark-text">Provide your information to connect</p>
              </div>
            </div>
            <div>
              <button className="px-3 py-2 text-[#0C0C0C] text-base font-medium rounded-lg bg-light-primary">
              Get In Touch
              </button>
            </div>
          </div>
        </CardWrapper>
      </div>
    </div>
  )
}

export default Contact