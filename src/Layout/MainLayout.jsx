/* eslint-disable react/prop-types */

import Footer from "../shared/Footer"
import NavBar from "../shared/NavBar"

export const MainLayout = ({children ,isDarkMode, setIsDarkMode}) => {
console.log(isDarkMode)

  return (
 <>
<NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
{children}
<Footer setIsDarkMode={setIsDarkMode}/>
 </>
  )
}
