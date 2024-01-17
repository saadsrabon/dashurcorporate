/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import logolight from "../assets/logolight.png";
import footerdark from "../assets/footerdark.png"
import footerlight from "../assets/footerlight.png"
const NavBar = ({ isDarkMode, setIsDarkMode }) => {
      const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="w-[95%] mx-auto py-8">
      <nav className="hidden md:hidden lg:flex justify-between items-center">
        {/* Logo */}
        <div>
          {isDarkMode ? (
            <img src={logo} alt="" />
          ) : (
            <img src={logolight} alt="" />
          )}
        </div>
        {/* Menu */}
        <div className="flex space-x-4">
          <NavLink
            to="/"
            className="text-light-text dark:text-dark-text hover:text-light-gray text-xl"
          >
            Home
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
            to="/about"
            className="text-light-text dark:text-dark-text hover:text-light-gray text-xl"
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className="text-light-text dark:text-dark-text hover:text-light-gray text-xl"
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/career"
            className="text-light-text dark:text-dark-text hover:text-light-gray text-xl"
          >
            Careers
          </NavLink>
        </div>
        {/* toggle button */}
        <div className="">
        <label className="cursor-pointer grid place-items-center">
  <input onClick={toggleTheme} type="checkbox"  className="toggle theme-controller bg-light-primary row-start-1 col-start-1 col-span-2 !imortant border-none"/>
  <svg className="col-start-2 row-start-1  opacity-100 dark:opacity-40 fill-white" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-1 row-start-1 opacity-40 dark:opacity-100  fill-white" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
 
   
        </div>
      </nav>
      {/* Mobile menu */}
     <nav className="flex md:flex lg:hidden justify-between">
        {/* Logo */}
        <div>
          {isDarkMode ? (
            <img className="w-48" src={footerdark} alt="" />
          ) : (
            <img className="w-48" src={footerlight} alt="" />
          )}
        </div>

        {/* toggle Button */}
        <div className="flex space-x-4 items-center">
        <div className="">
        <label className="cursor-pointer grid place-items-center">
  <input onClick={toggleTheme} type="checkbox"  className="toggle theme-controller bg-light-primary row-start-1 col-start-1 col-span-2 !imortant border-none"/>
  <svg className="col-start-2 row-start-1  opacity-100 dark:opacity-40 fill-white" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-1 row-start-1 opacity-40 dark:opacity-100  fill-white" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
 
   
        </div>

        {/* Humburger menu */}
        <div>
 {
  isDarkMode?       <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
  <path d="M1.66667 14C1.33611 14 1.05903 13.8882 0.835417 13.6646C0.611806 13.441 0.5 13.1639 0.5 12.8333C0.5 12.5028 0.611806 12.2257 0.835417 12.0021C1.05903 11.7785 1.33611 11.6667 1.66667 11.6667H20.3333C20.6639 11.6667 20.941 11.7785 21.1646 12.0021C21.3882 12.2257 21.5 12.5028 21.5 12.8333C21.5 13.1639 21.3882 13.441 21.1646 13.6646C20.941 13.8882 20.6639 14 20.3333 14H1.66667ZM1.66667 8.16667C1.33611 8.16667 1.05903 8.05486 0.835417 7.83125C0.611806 7.60764 0.5 7.33056 0.5 7C0.5 6.66944 0.611806 6.39236 0.835417 6.16875C1.05903 5.94514 1.33611 5.83333 1.66667 5.83333H20.3333C20.6639 5.83333 20.941 5.94514 21.1646 6.16875C21.3882 6.39236 21.5 6.66944 21.5 7C21.5 7.33056 21.3882 7.60764 21.1646 7.83125C20.941 8.05486 20.6639 8.16667 20.3333 8.16667H1.66667ZM1.66667 2.33333C1.33611 2.33333 1.05903 2.22153 0.835417 1.99792C0.611806 1.77431 0.5 1.49722 0.5 1.16667C0.5 0.836111 0.611806 0.559028 0.835417 0.335417C1.05903 0.111806 1.33611 0 1.66667 0H20.3333C20.6639 0 20.941 0.111806 21.1646 0.335417C21.3882 0.559028 21.5 0.836111 21.5 1.16667C21.5 1.49722 21.3882 1.77431 21.1646 1.99792C20.941 2.22153 20.6639 2.33333 20.3333 2.33333H1.66667Z" fill="#EBEBEB"/>
  </svg>:       <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
<path d="M1.66667 14C1.33611 14 1.05903 13.8882 0.835417 13.6646C0.611806 13.441 0.5 13.1639 0.5 12.8333C0.5 12.5028 0.611806 12.2257 0.835417 12.0021C1.05903 11.7785 1.33611 11.6667 1.66667 11.6667H20.3333C20.6639 11.6667 20.941 11.7785 21.1646 12.0021C21.3882 12.2257 21.5 12.5028 21.5 12.8333C21.5 13.1639 21.3882 13.441 21.1646 13.6646C20.941 13.8882 20.6639 14 20.3333 14H1.66667ZM1.66667 8.16667C1.33611 8.16667 1.05903 8.05486 0.835417 7.83125C0.611806 7.60764 0.5 7.33056 0.5 7C0.5 6.66944 0.611806 6.39236 0.835417 6.16875C1.05903 5.94514 1.33611 5.83333 1.66667 5.83333H20.3333C20.6639 5.83333 20.941 5.94514 21.1646 6.16875C21.3882 6.39236 21.5 6.66944 21.5 7C21.5 7.33056 21.3882 7.60764 21.1646 7.83125C20.941 8.05486 20.6639 8.16667 20.3333 8.16667H1.66667ZM1.66667 2.33333C1.33611 2.33333 1.05903 2.22153 0.835417 1.99792C0.611806 1.77431 0.5 1.49722 0.5 1.16667C0.5 0.836111 0.611806 0.559028 0.835417 0.335417C1.05903 0.111806 1.33611 0 1.66667 0H20.3333C20.6639 0 20.941 0.111806 21.1646 0.335417C21.3882 0.559028 21.5 0.836111 21.5 1.16667C21.5 1.49722 21.3882 1.77431 21.1646 1.99792C20.941 2.22153 20.6639 2.33333 20.3333 2.33333H1.66667Z" fill="#02A9F7"/>
</svg>
 }
        </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
