import CardWrapper from "../components/CardWrapper"
import Chips from "../components/chips"


const Contact = () => {
  return (
    <div className="flex flex-col items-center w-[95%] mx-auto my-24">
          <div className="flex flex-col  space-y-4 justify-center items-center">
              <div className="flex ">
              <Chips title="Contact Us"/>
              </div>
              <div className="flex  flex-col items-center w-3/4 md:w-2/4 lg:w-[60%]">
        <h2 className="text-light-text text-center leading-snug md:leading-normal py-4 text-[24px] md:text-5xl uppercase font-sans font-bold  dark:text-dark-text">Connecting Dreams, Crafting Realities</h2>
             
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
              <a href="mailto:contact@dashurai.com" className="text-light-text dark:text-dark-text">contact@dashurai.com</a>
              </div>
            </div>
            <div>
              <a href="mailto:contact@dashurai.com" className=" px-3 py-2 text-[#0C0C0C] text-base font-medium rounded-lg bg-light-primary">
                Email Now
              </a>
            </div>
          </div>
        </CardWrapper>
        <CardWrapper>
          <div className="flex justify-between md:space-x-8">
            <div className="flex-grow-0">
              <img src="" alt="" />
              <div>
              <h2 className="text-light-text dark:text-dark-text font-bold ">Let us contact </h2>
              <p className="text-light-text dark:text-dark-text">Provide your information to connect</p>
              </div>
            </div>
            <div className="shrink-0">
              <a href="tel:(702) 960-4800" className="px-3 py-2 text-[#0C0C0C] text-base font-medium rounded-lg bg-light-primary">
              Get In Touch
              </a>
            </div>
          </div>
        </CardWrapper>
      </div>
    </div>
  )
}

export default Contact