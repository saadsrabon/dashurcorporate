import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import logolight from "../assets/logolight.png";
const NavBar = ({ isDarkMode, setIsDarkMode }) => {
      const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="w-[95%] mx-auto py-8">
      <nav className="flex justify-between items-center">
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
            About US
          </NavLink>
          <NavLink
            to="/contact"
            className="text-light-text dark:text-dark-text hover:text-light-gray text-xl"
          >
            Contact US
          </NavLink>
          <NavLink
            to="/carrer"
            className="text-light-text dark:text-dark-text hover:text-light-gray text-xl"
          >
            Careers
          </NavLink>
        </div>
        {/* toggle button */}
        <div className="">
        <label className="cursor-pointer grid place-items-center">
  <input onClick={toggleTheme} type="checkbox"  className="toggle theme-controller bg-light-primary row-start-1 col-start-1 col-span-2 !imortant border-none"/>
  <svg className="col-start-2 row-start-1  fill-white" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-1 row-start-1  fill-white" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
 
   
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
