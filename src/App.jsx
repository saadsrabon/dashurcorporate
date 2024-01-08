import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "./Layout/MainLayout"
import { useEffect, useState } from "react";


function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleTheme = () => {
  //   setIsDarkMode(!isDarkMode);
  // };
  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  useEffect(() => {
    const currentTime = new Date().getHours();

    // Assuming night is from 8 PM to 6 AM, adjust the timings as needed
    const isNightTime = currentTime >= 20 || currentTime < 6;

    setIsDarkMode(isNightTime);
   
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      // document.body.style.backgroundColor = "#121212"; 
       document.body.style.backgroundColor = "#000";
     
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = "#FFFF";
    }
  }, [isDarkMode]);


  return (
    <BrowserRouter>
    <MainLayout 
    isDarkMode={isDarkMode}
    setIsDarkMode={setIsDarkMode}

    >
      <Routes>
        {/* <Route path="/" element={<Jobs/>} />
        <Route path="/addjobs" element={<AddJob/>} />
         */}
      </Routes>
    </MainLayout>
    </BrowserRouter>
  )
}

export default App
