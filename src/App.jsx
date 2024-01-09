import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "./Layout/MainLayout"
import { useEffect, useState } from "react";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";



function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);


  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: light)').matches;
   console.log(prefersDarkMode)
  }, []);


  useEffect(() => {
    const currentTime = new Date().getHours();

    // Assuming night is from 8 PM to 6 AM, adjust the timings as needed
    const isNightTime = currentTime >= 20 || currentTime < 6;

    setIsDarkMode(isNightTime);
   
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      console.log(isDarkMode)
      document.documentElement.classList.add('dark');
      // document.body.style.backgroundColor = "#121212"; 
       document.body.style.backgroundColor = "#020E14";
     
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = "#FFFF";
    }
  }, [isDarkMode]);


  return (
    <BrowserRouter>
    <MainLayout  className="dark"
    isDarkMode={isDarkMode}
    setIsDarkMode={setIsDarkMode}

    >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/contact" element={<Contact/>} />
        
      </Routes>
    </MainLayout>
    </BrowserRouter>
  )
}

export default App
