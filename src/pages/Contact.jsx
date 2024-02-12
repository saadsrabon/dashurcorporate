import { useState } from "react";
import CardWrapper from "../components/CardWrapper"
import InquiryForm from "../components/InquiryForm"
import Chips from "../components/chips"
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ReactGA } from 'react-ga4';


const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  // Handle Email To Handle Google Analytics email Button
  const handleEmailGa = () => {
    ReactGA.event({
      category: "email",
      action: "Click on Email Button",
      label: "your label", // optional
      value: 99, // optional, must be a number
      nonInteraction: true, // optional, true/false
      transport: "xhr", // optional, beacon/xhr/image
    });
  }
  // handle scroll to section
  const handleScroll = () => {
    setShowForm(true);
    const contactForm=setTimeout(() => {
      const element = document.getElementById("contact-form");

      element.scrollIntoView({ behavior: "smooth" });
    }, 400);


    clearTimeout(contactForm);
  };
  return (

    <HelmetProvider>
      <Helmet>
        <title>Contact Us | Dashur AI</title>
      </Helmet>

      <div className="flex flex-col items-center w-[95%] mx-auto my-24 mt-48">
        <div className="flex flex-col  space-y-4 justify-center items-center">
          <div className="flex ">
            <Chips title="Contact Us" />
          </div>
          <div className="flex  flex-col items-center w-3/4 md:w-2/4 lg:w-[60%]">
            <h2 className="text-light-text text-center leading-snug md:leading-normal py-4 text-[24px] md:text-5xl uppercase font-sans font-bold  dark:text-dark-text">Let’s make something awesome together</h2>

          </div>

        </div>

        {/* item section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12" >
          <CardWrapper>
            <div className="flex flex-col items-center justify-center">
              <div className="flex justify-center space-x-4 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 46 38" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 12.4857C0 5.59004 5.50794 0 12.3023 0H33.6977C40.4921 0 46 5.59004 46 12.4857V25.5143C46 32.41 40.4921 38 33.6977 38H12.3023C5.50794 38 0 32.41 0 25.5143V12.4857ZM11.1256 11.1829C10.4166 10.6432 9.4108 10.789 8.87907 11.5086C8.34734 12.2281 8.49102 13.2489 9.2 13.7886L19.4698 21.6057C21.5618 23.1981 24.4382 23.1981 26.5302 21.6057L36.8 13.7886C37.509 13.2489 37.6527 12.2281 37.1209 11.5086C36.5892 10.789 35.5834 10.6432 34.8744 11.1829L24.6047 19C23.6537 19.7238 22.3463 19.7238 21.3953 19L11.1256 11.1829Z" fill="#02A9F7" />
                </svg> <span className="text-2xl text-light-text dark:text-dark-text font-bold">Email</span>
              </div>

              <div className="my-4">
                <p className="text-light-text dark:text-dark-text text-center">Thank you for contacting us. One of our representatives  will be in touch shortly.</p>
              </div>
              <div className="text-center mt-8">
                <a onClick={handleEmailGa} href="mailto:contact@dashurai.com" className=" block  shrink-0 px-3 py-2 text-[#0C0C0C] text-base font-medium rounded-lg bg-light-primary ">
                  Email Now
                </a>
              </div>
            </div>
          </CardWrapper>
          <CardWrapper>
            <div className="flex flex-col items-center justify-center">
              <div className="flex justify-center space-x-4 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 38 38" fill="none">
                  <path d="M33.1241 35.4366C29.2155 39.3452 19.2056 35.6726 10.7665 27.2335C2.32745 18.7944 -1.34522 8.78455 2.56341 4.8759L5.13694 2.30237C6.91359 0.525712 9.84109 0.572675 11.6757 2.40726L15.6618 6.39344C17.4964 8.22803 17.5434 11.1555 15.7667 12.9322L15.214 13.4849C14.2547 14.4442 14.1609 15.9916 15.0522 17.0717C15.9119 18.1136 16.8388 19.1513 17.8438 20.1562C18.8487 21.1612 19.8864 22.0881 20.9283 22.9478C22.0084 23.8391 23.5558 23.7453 24.5151 22.786L25.0678 22.2333C26.8445 20.4566 29.772 20.5036 31.6066 22.3381L35.5927 26.3243C37.4273 28.1589 37.4743 31.0864 35.6976 32.8631L33.1241 35.4366Z" fill="#02A9F7" stroke="#02A9F7" stroke-width="1.5" />
                </svg><span className="text-2xl text-light-text dark:text-dark-text font-bold">Call </span>
              </div>

              <div className="my-4">
                <p className="text-light-text dark:text-dark-text text-center">Make a phone call to let us know your requirements to provide the best service.</p>
              </div>
              <div className="text-center mt-8">
                <a href="tel:(702) 960-4800" className=" block  shrink-0 px-3 py-2 text-[#0C0C0C] text-base font-medium rounded-lg bg-light-primary ">
                  Call Now
                </a>
              </div>
            </div>
          </CardWrapper>
          <CardWrapper>

            <div className="flex flex-col items-center justify-center">
              <div className="flex justify-center space-x-4  ">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 36 36" fill="none">
                  <path d="M4 36C2.9 36 1.95833 35.6083 1.175 34.825C0.391667 34.0417 0 33.1 0 32V4C0 2.9 0.391667 1.95833 1.175 1.175C1.95833 0.391667 2.9 0 4 0H24.35C24.8833 0 25.3917 0.1 25.875 0.3C26.3583 0.5 26.7833 0.783333 27.15 1.15L34.85 8.85C35.2167 9.21667 35.5 9.64167 35.7 10.125C35.9 10.6083 36 11.1167 36 11.65V32C36 33.1 35.6083 34.0417 34.825 34.825C34.0417 35.6083 33.1 36 32 36H4ZM24 4V10C24 10.5667 24.1917 11.0417 24.575 11.425C24.9583 11.8083 25.4333 12 26 12H32L24 4ZM26 28C26.5667 28 27.0417 27.8083 27.425 27.425C27.8083 27.0417 28 26.5667 28 26C28 25.4333 27.8083 24.9583 27.425 24.575C27.0417 24.1917 26.5667 24 26 24H10C9.43333 24 8.95833 24.1917 8.575 24.575C8.19167 24.9583 8 25.4333 8 26C8 26.5667 8.19167 27.0417 8.575 27.425C8.95833 27.8083 9.43333 28 10 28H26ZM16 12C16.5667 12 17.0417 11.8083 17.425 11.425C17.8083 11.0417 18 10.5667 18 10C18 9.43333 17.8083 8.95833 17.425 8.575C17.0417 8.19167 16.5667 8 16 8H10C9.43333 8 8.95833 8.19167 8.575 8.575C8.19167 8.95833 8 9.43333 8 10C8 10.5667 8.19167 11.0417 8.575 11.425C8.95833 11.8083 9.43333 12 10 12H16ZM26 20C26.5667 20 27.0417 19.8083 27.425 19.425C27.8083 19.0417 28 18.5667 28 18C28 17.4333 27.8083 16.9583 27.425 16.575C27.0417 16.1917 26.5667 16 26 16H10C9.43333 16 8.95833 16.1917 8.575 16.575C8.19167 16.9583 8 17.4333 8 18C8 18.5667 8.19167 19.0417 8.575 19.425C8.95833 19.8083 9.43333 20 10 20H26Z" fill="#02A9F7" />
                </svg> <span className="text-2xl text-light-text dark:text-dark-text font-bold">
                  Inquiries
                </span>
              </div>

              <div className="my-4">
                <p className="text-light-text dark:text-dark-text text-center">Provide your information to connect with you. We respect your privacy. We will not share your personal information</p>
              </div>
              <div className="text-center mt-4">
                <a onClick={handleScroll} className="shrink-0 px-3 py-2 text-[#0C0C0C] block text-base font-medium rounded-lg bg-light-primary mt-4">
                  Inquiry Now
                </a>
              </div>
            </div>


          </CardWrapper>

        </div>

        {/* contact Us Form */}

        {showForm && <InquiryForm setShowForm={setShowForm} />}

      </div>
    </HelmetProvider>
  )
}

export default Contact