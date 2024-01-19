import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "./Layout/MainLayout"
import { createContext, useEffect, useState } from "react";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Career from "./pages/Career";
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";
import chatBotGlow from './assets/Ellipse 5.svg'
import { CookiesFile } from "./components/cookies";
 export const ChatbotContext = createContext();
function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const[chatbotOpen,setChatbotOpen]=useState(false)


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
    
      <div onClick={()=>setChatbotOpen(prev=>!prev)} className="fixed top-72 right-5">
         <img src={chatBotGlow} alt="" />
      </div>
 
  <ChatbotContext.Provider value={{setChatbotOpen}}>
      {
        chatbotOpen && <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      }
  </ChatbotContext.Provider>
   
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/career" element={<Career/>} />
        
      </Routes>
   
    </MainLayout>
    </BrowserRouter>
  )
}

export default App
