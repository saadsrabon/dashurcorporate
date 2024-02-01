/* eslint-disable react/prop-types */
import { NavLink, useNavigate } from "react-router-dom";
import footerdark from "../assets/footerdark.png"
import footerlight from "../assets/footerlight.png"
import term from "../assets/website_tc_dashur.pdf"
import privacy from "../assets/legal_dashur.pdf"
import cookies from "../assets/cookies_dashur.pdf"
import thraeds from "../assets/threads-app-icon.svg"

const Footer = ({ isDarkMode }) => {
    // const toggleTheme = () => {
    //     setIsDarkMode(!isDarkMode);
    // };

    const navigate = useNavigate();
  return (
    <div className="w-[95%] mx-auto pt-4  md:divide-y-[0.5px] space-y-4 divide-[#454545]">
      <nav className="hidden md:hidden lg:flex justify-between items-center">
        {/* Logo */}
        <div className="order-3">
          {isDarkMode ? (
            <img onClick={()=>navigate('/')} src={footerdark} alt="" />
          ) : (
            <img onClick={()=>navigate('/')} src={footerlight} alt="" />
          )}
        </div>
        {/* Menu */}
        <div className="order-2 flex space-x-4">
          <NavLink
            to="/"
            className="text-light-text dark:text-dark-text hover:text-light-gray text-xl"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-light-text dark:text-dark-text hover:text-light-gray text-xl"
          >
            About
          </NavLink>
          <NavLink
            to="/capabilities"
            className="text-light-text dark:text-dark-text hover:text-light-gray text-xl"
          >
            Capabilities
          </NavLink>
          <NavLink
            to="/markets"
            className="text-light-text dark:text-dark-text hover:text-light-gray text-xl"
          >
            Markets
          </NavLink>
          <NavLink
            to="/carrer"
            className="text-light-text dark:text-dark-text hover:text-light-gray text-xl"
          >
            Careers
          </NavLink>
          
          <NavLink
            to="/contact"
            className="text-light-text dark:text-dark-text hover:text-light-gray text-xl"
          >
            Contact  
          </NavLink>
          
        </div>
        {/* toggle button */}
        <div  className="order-1 flex justify-center items-center space-x-3">
<a href="https://www.threads.net/@dashur_ai"><svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision"  width="24" height="24" viewBox="0 0 24 24" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 512"><path d="M105 0h302c57.75 0 105 47.25 105 105v302c0 57.75-47.25 105-105 105H105C47.25 512 0 464.75 0 407V105C0 47.25 47.25 0 105 0z"/><path fill="#fff" fillRule="nonzero" d="M337.36 243.58c-1.46-.7-2.95-1.38-4.46-2.02-2.62-48.36-29.04-76.05-73.41-76.33-25.6-.17-48.52 10.27-62.8 31.94l24.4 16.74c10.15-15.4 26.08-18.68 37.81-18.68h.4c14.61.09 25.64 4.34 32.77 12.62 5.19 6.04 8.67 14.37 10.39 24.89-12.96-2.2-26.96-2.88-41.94-2.02-42.18 2.43-69.3 27.03-67.48 61.21.92 17.35 9.56 32.26 24.32 42.01 12.48 8.24 28.56 12.27 45.26 11.35 22.07-1.2 39.37-9.62 51.45-25.01 9.17-11.69 14.97-26.84 17.53-45.92 10.51 6.34 18.3 14.69 22.61 24.73 7.31 17.06 7.74 45.1-15.14 67.96-20.04 20.03-44.14 28.69-80.55 28.96-40.4-.3-70.95-13.26-90.81-38.51-18.6-23.64-28.21-57.79-28.57-101.5.36-43.71 9.97-77.86 28.57-101.5 19.86-25.25 50.41-38.21 90.81-38.51 40.68.3 71.76 13.32 92.39 38.69 10.11 12.44 17.73 28.09 22.76 46.33l28.59-7.63c-6.09-22.45-15.67-41.8-28.72-57.85-26.44-32.53-65.1-49.19-114.92-49.54h-.2c-49.72.35-87.96 17.08-113.64 49.73-22.86 29.05-34.65 69.48-35.04 120.16v.24c.39 50.68 12.18 91.11 35.04 120.16 25.68 32.65 63.92 49.39 113.64 49.73h.2c44.2-.31 75.36-11.88 101.03-37.53 33.58-33.55 32.57-75.6 21.5-101.42-7.94-18.51-23.08-33.55-43.79-43.48zm-76.32 71.76c-18.48 1.04-37.69-7.26-38.64-25.03-.7-13.18 9.38-27.89 39.78-29.64 3.48-.2 6.9-.3 10.25-.3 11.04 0 21.37 1.07 30.76 3.13-3.5 43.74-24.04 50.84-42.15 51.84z"/></svg></a>
<a href="https://www.instagram.com/dashur_ai/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path className="fill-black dark:fill-white" d="M18.3952 7.02212C17.6005 7.02368 16.9543 6.3802 16.9528 5.58548C16.9512 4.79076 17.5947 4.14457 18.3898 4.14302C19.1848 4.14146 19.831 4.78531 19.8326 5.58004C19.8338 6.37476 19.1903 7.02057 18.3952 7.02212Z" fill="#D2D2D2"/>
  <path className="fill-black dark:fill-white" fillRule="evenodd" clipRule="evenodd" d="M12.0115 18.161C8.60909 18.1676 5.8451 15.4149 5.8385 12.0117C5.83188 8.60923 8.58536 5.84481 11.9878 5.8382C15.3909 5.83159 18.1553 8.5859 18.1619 11.9879C18.1685 15.3912 15.4143 18.1544 12.0115 18.161ZM11.992 8.00035C9.78365 8.00424 7.99594 9.79858 7.99983 12.0074C8.0041 14.2166 9.79882 16.0039 12.0072 15.9996C14.2164 15.9954 16.0041 14.2014 15.9998 11.9922C15.9955 9.78302 14.2008 7.99608 11.992 8.00035Z" fill="#D2D2D2"/>
  <path className="fill-black dark:fill-white" fillRule="evenodd" clipRule="evenodd" d="M4.1192 0.646479C4.88126 0.347876 5.75333 0.143362 7.03015 0.0830982C8.31011 0.0216726 8.71872 0.00767102 11.9769 0.00145262C15.2358 -0.00476578 15.6444 0.00766862 16.9244 0.0644334C18.2016 0.119643 19.0741 0.321049 19.8377 0.616544C20.6277 0.920974 21.298 1.33078 21.966 1.99603C22.6339 2.66205 23.0453 3.33002 23.3536 4.1189C23.6518 4.88174 23.8563 5.75306 23.917 7.03068C23.9776 8.31023 23.9924 8.71847 23.9986 11.9771C24.0048 15.2353 23.9916 15.6443 23.9356 16.925C23.88 18.2014 23.679 19.0743 23.3835 19.8375C23.0783 20.6276 22.6693 21.2979 22.004 21.9659C21.3388 22.6342 20.6701 23.0452 19.8812 23.3539C19.1184 23.6517 18.2471 23.8562 16.9702 23.9173C15.6903 23.9779 15.2817 23.9923 12.0224 23.9985C8.76459 24.0048 8.35598 23.9923 7.07605 23.9359C5.79882 23.88 4.92597 23.6789 4.16275 23.3838C3.37271 23.0782 2.70242 22.6696 2.03446 22.004C1.36611 21.3383 0.954386 20.67 0.646458 19.8811C0.347858 19.1186 0.144107 18.2469 0.0830727 16.9705C0.0220359 15.6901 0.00765506 15.2811 0.00143906 12.0229C-0.00480094 8.76435 0.00803667 8.35611 0.0640167 7.07616C0.1204 5.79855 0.320637 4.92606 0.61613 4.16206C0.921328 3.37239 1.33035 2.70248 1.99637 2.03413C2.6616 1.36616 3.33033 0.954017 4.1192 0.646479ZM4.94154 21.3679C5.36494 21.5308 6.00023 21.7252 7.17014 21.7761C8.43607 21.8309 8.81514 21.843 12.0185 21.8368C15.223 21.8309 15.6021 21.8173 16.8676 21.7579C18.0363 21.7022 18.6716 21.5055 19.0939 21.3407C19.6541 21.1218 20.0531 20.8601 20.4722 20.4406C20.8913 20.0195 21.1506 19.6194 21.3676 19.0591C21.5309 18.6354 21.7249 17.9996 21.7758 16.8297C21.8314 15.5646 21.8431 15.1851 21.8368 11.9809C21.831 8.77757 21.8174 8.3981 21.7572 7.13254C21.7019 5.96339 21.5056 5.32808 21.3404 4.90623C21.1215 4.34519 20.8606 3.94705 20.4399 3.52753C20.0192 3.10801 19.6191 2.84945 19.0581 2.6325C18.6355 2.46881 17.9994 2.27518 16.8303 2.22426C15.5643 2.16865 15.1849 2.15737 11.9808 2.1636C8.77743 2.16982 8.39836 2.18264 7.13281 2.24253C5.9633 2.29812 5.32877 2.49447 4.90575 2.65972C4.34587 2.87861 3.94696 3.13872 3.52746 3.5598C3.10871 3.98087 2.84938 4.38018 2.63244 4.94161C2.46993 5.36464 2.27434 6.00072 2.2242 7.16987C2.16898 8.43581 2.15733 8.81529 2.16355 12.0187C2.16939 15.2228 2.18298 15.6023 2.24248 16.8671C2.29729 18.037 2.49518 18.6715 2.65966 19.0949C2.87855 19.6544 3.13944 20.0533 3.55973 20.4729C3.98081 20.8908 4.38088 21.1509 4.94154 21.3679Z" fill="#D2D2D2"/>
</svg> </a>
 {/*  */}
<a href="https://twitter.com/dashur_ai"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path className="fill-black dark:fill-white" d="M18.3263 1.9043H21.6998L14.3297 10.3278L23 21.7903H16.2112L10.894 14.8383L4.80995 21.7903H1.43443L9.31743 12.7804L1 1.9043H7.96111L12.7674 8.25863L18.3263 1.9043ZM17.1423 19.7711H19.0116L6.94539 3.81743H4.93946L17.1423 19.7711Z" fill="#D2D2D2"/>
</svg></a>
{/*  */}
<a href="https://www.linkedin.com/company/dashur-ai/about/">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="">
  <g clipPath="url(#clip0_177_474)">
    <path className="fill-black dark:fill-white" d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" fill="#D2D2D2"/>
  </g>
  <defs>
    <clipPath id="clip0_177_474">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>
</a>
   
        </div>
      </nav>
      <div className="hidden text-light-text dark:text-dark-text md:hidden lg:flex  justify-between items-center py-2">
        <div className=" space-x-4">
            <a href={privacy}>Privacy </a>
            <a href={term}>Terms</a>
            <a href={cookies}>Cookies</a>
            <a href="">Sitemap</a>
        </div>
        <div>
            <p className="text-light-text dark:text-dark-text">Copyright ©2024 Dashur AI, LLC. All Rights Reserved.</p>
        </div>
      </div>

      {/* Mobile Part */}
      <div className="md:hidden lg:hidden py-2 px-4">
        {/* logo Part */}
        <div className="flex justify-center">
          {isDarkMode ? (
            <img onClick={()=>navigate('/')} src={footerdark} alt="" />
          ) : (    <img onClick={()=>navigate('/')} src={footerlight} alt="" />)}
        </div>
        {/* Menu Part */}
        <div className="flex justify-between  py-2 my-6">
         <div className="flex flex-col space-y-2">
         <NavLink
            to="/"
            className="text-light-text dark:text-dark-text hover:text-light-gray text-xl"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-light-text dark:text-dark-text hover:text-light-gray text-xl"
          >
            About  
          </NavLink>
          <NavLink
            to="/capabilities"
            className="text-light-text dark:text-dark-text hover:text-light-gray text-xl"
          >
            Capabilities
          </NavLink>
          <NavLink
            to="/markets"
            className="text-light-text dark:text-dark-text hover:text-light-gray text-xl"
          >
            Markets
          </NavLink>
          <NavLink
            to="/carrer"
            className="text-light-text dark:text-dark-text hover:text-light-gray text-xl"
          >
            Careers
          </NavLink>
          
          <NavLink
            to="/contact"
            className="text-light-text dark:text-dark-text hover:text-light-gray text-xl"
          >
            Contact 
          </NavLink>
          
         </div>

            
         <div className="flex flex-col space-y-2">
         <NavLink
            to="/"
            className="text-light-text dark:text-dark-text hover:text-light-gray text-xl"
          >
            Privacy Policy
          </NavLink>
         <NavLink
            to="/"
            className="text-light-text dark:text-dark-text hover:text-light-gray text-xl"
          >
            Terms & Conditions
          </NavLink>
         <NavLink
            to="/"
            className="text-light-text dark:text-dark-text hover:text-light-gray text-xl"
          >
            Cookies Policy
          </NavLink>

          {/* socail Icons */}
          <div style={{marginTop:"auto"}} className=" flex  items-center space-x-3  ">
<a href="https://www.threads.net/@dashur_ai"> 
{/*  */}
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M18.3952 7.02212C17.6005 7.02368 16.9543 6.3802 16.9528 5.58548C16.9512 4.79076 17.5947 4.14457 18.3898 4.14302C19.1848 4.14146 19.831 4.78531 19.8326 5.58004C19.8338 6.37476 19.1903 7.02057 18.3952 7.02212Z" fill="#D2D2D2"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M12.0115 18.161C8.60909 18.1676 5.8451 15.4149 5.8385 12.0117C5.83188 8.60923 8.58536 5.84481 11.9878 5.8382C15.3909 5.83159 18.1553 8.5859 18.1619 11.9879C18.1685 15.3912 15.4143 18.1544 12.0115 18.161ZM11.992 8.00035C9.78365 8.00424 7.99594 9.79858 7.99983 12.0074C8.0041 14.2166 9.79882 16.0039 12.0072 15.9996C14.2164 15.9954 16.0041 14.2014 15.9998 11.9922C15.9955 9.78302 14.2008 7.99608 11.992 8.00035Z" fill="#D2D2D2"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M4.1192 0.646479C4.88126 0.347876 5.75333 0.143362 7.03015 0.0830982C8.31011 0.0216726 8.71872 0.00767102 11.9769 0.00145262C15.2358 -0.00476578 15.6444 0.00766862 16.9244 0.0644334C18.2016 0.119643 19.0741 0.321049 19.8377 0.616544C20.6277 0.920974 21.298 1.33078 21.966 1.99603C22.6339 2.66205 23.0453 3.33002 23.3536 4.1189C23.6518 4.88174 23.8563 5.75306 23.917 7.03068C23.9776 8.31023 23.9924 8.71847 23.9986 11.9771C24.0048 15.2353 23.9916 15.6443 23.9356 16.925C23.88 18.2014 23.679 19.0743 23.3835 19.8375C23.0783 20.6276 22.6693 21.2979 22.004 21.9659C21.3388 22.6342 20.6701 23.0452 19.8812 23.3539C19.1184 23.6517 18.2471 23.8562 16.9702 23.9173C15.6903 23.9779 15.2817 23.9923 12.0224 23.9985C8.76459 24.0048 8.35598 23.9923 7.07605 23.9359C5.79882 23.88 4.92597 23.6789 4.16275 23.3838C3.37271 23.0782 2.70242 22.6696 2.03446 22.004C1.36611 21.3383 0.954386 20.67 0.646458 19.8811C0.347858 19.1186 0.144107 18.2469 0.0830727 16.9705C0.0220359 15.6901 0.00765506 15.2811 0.00143906 12.0229C-0.00480094 8.76435 0.00803667 8.35611 0.0640167 7.07616C0.1204 5.79855 0.320637 4.92606 0.61613 4.16206C0.921328 3.37239 1.33035 2.70248 1.99637 2.03413C2.6616 1.36616 3.33033 0.954017 4.1192 0.646479ZM4.94154 21.3679C5.36494 21.5308 6.00023 21.7252 7.17014 21.7761C8.43607 21.8309 8.81514 21.843 12.0185 21.8368C15.223 21.8309 15.6021 21.8173 16.8676 21.7579C18.0363 21.7022 18.6716 21.5055 19.0939 21.3407C19.6541 21.1218 20.0531 20.8601 20.4722 20.4406C20.8913 20.0195 21.1506 19.6194 21.3676 19.0591C21.5309 18.6354 21.7249 17.9996 21.7758 16.8297C21.8314 15.5646 21.8431 15.1851 21.8368 11.9809C21.831 8.77757 21.8174 8.3981 21.7572 7.13254C21.7019 5.96339 21.5056 5.32808 21.3404 4.90623C21.1215 4.34519 20.8606 3.94705 20.4399 3.52753C20.0192 3.10801 19.6191 2.84945 19.0581 2.6325C18.6355 2.46881 17.9994 2.27518 16.8303 2.22426C15.5643 2.16865 15.1849 2.15737 11.9808 2.1636C8.77743 2.16982 8.39836 2.18264 7.13281 2.24253C5.9633 2.29812 5.32877 2.49447 4.90575 2.65972C4.34587 2.87861 3.94696 3.13872 3.52746 3.5598C3.10871 3.98087 2.84938 4.38018 2.63244 4.94161C2.46993 5.36464 2.27434 6.00072 2.2242 7.16987C2.16898 8.43581 2.15733 8.81529 2.16355 12.0187C2.16939 15.2228 2.18298 15.6023 2.24248 16.8671C2.29729 18.037 2.49518 18.6715 2.65966 19.0949C2.87855 19.6544 3.13944 20.0533 3.55973 20.4729C3.98081 20.8908 4.38088 21.1509 4.94154 21.3679Z" fill="#D2D2D2"/>
</svg> </a>
 {/*  */}
 <a href="https://www.instagram.com/dashur_ai/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M18.3263 1.9043H21.6998L14.3297 10.3278L23 21.7903H16.2112L10.894 14.8383L4.80995 21.7903H1.43443L9.31743 12.7804L1 1.9043H7.96111L12.7674 8.25863L18.3263 1.9043ZM17.1423 19.7711H19.0116L6.94539 3.81743H4.93946L17.1423 19.7711Z" fill="#D2D2D2"/>
</svg></a>
{/*  */}
<a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clipPath="url(#clip0_177_474)">
    <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" fill="#D2D2D2"/>
  </g>
  <defs>
    <clipPath id="clip0_177_474">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg></a>
   
        </div>
         </div>
        </div>
      <div className=" border-t-[#454545] outline-none border-x-0 border-b-0 border-[0.5px] py-4 ">
            <p className="text-center text-light-text dark:text-dark-text">©2024 Dashur AI. All Rights Reserved.</p>
        </div>
    </div>
    </div>
  )
}

export default Footer