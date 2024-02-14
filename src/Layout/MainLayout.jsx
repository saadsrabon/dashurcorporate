/* eslint-disable react/prop-types */

import { ToastContainer } from "react-toastify"
import Footer from "../shared/Footer"
import NavBar from "../shared/NavBar"

export const MainLayout = ({children ,isDarkMode, setIsDarkMode}) => {
console.log(isDarkMode)

  return (
 <>
<NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
{children}

<Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
<ToastContainer/>
 </>
  )
}
