/* eslint-disable react/prop-types */

import { ToastContainer } from "react-toastify"
import ModernFooter from "../components/ModernFooter"
import ModernNavbar from "../components/ModernNavbar"

export const MainLayout = ({children ,isDarkMode, setIsDarkMode}) => {
  return (
    <>
      <ModernNavbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      {children}
      <ModernFooter isDarkMode={isDarkMode} />
      <ToastContainer/>
    </>
  )
}
