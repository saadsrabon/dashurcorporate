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
        <h2 className="text-light-text text-center leading-snug md:leading-normal py-4 text-[24px] md:text-5xl uppercase font-sans font-bold  dark:text-dark-text">Let’s make something awesome together</h2>
             
    </div>
             
      </div>

      {/* item section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12" >
        <CardWrapper>
          <div className="flex justify-between space-x-8">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="38" viewBox="0 0 46 38" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M0 12.4857C0 5.59004 5.50794 0 12.3023 0H33.6977C40.4921 0 46 5.59004 46 12.4857V25.5143C46 32.41 40.4921 38 33.6977 38H12.3023C5.50794 38 0 32.41 0 25.5143V12.4857ZM11.1256 11.1829C10.4166 10.6432 9.4108 10.789 8.87907 11.5086C8.34734 12.2281 8.49102 13.2489 9.2 13.7886L19.4698 21.6057C21.5618 23.1981 24.4382 23.1981 26.5302 21.6057L36.8 13.7886C37.509 13.2489 37.6527 12.2281 37.1209 11.5086C36.5892 10.789 35.5834 10.6432 34.8744 11.1829L24.6047 19C23.6537 19.7238 22.3463 19.7238 21.3953 19L11.1256 11.1829Z" fill="#02A9F7"/>
</svg>
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