/* eslint-disable react/prop-types */

export const MainLayout = ({children ,isDarkMode, setIsDarkMode}) => {
console.log(isDarkMode)

  return (
 <>
<Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
{children}
<Footer setIsDarkMode={setIsDarkMode}/>
 </>
  )
}
