import { HashRouter, Route,  Routes } from "react-router-dom"
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
import MarketsPage from "./pages/MarketsPage";
import { HelmetProvider } from "react-helmet-async";
import { JobApplications } from "./pages/JobApplications";

import Login from './pages/Login';
import PrivateRoute from "./PrivateRoutes/PrivateRoutes";
import Contextfile from "./context/Contextfile";


export const ChatbotContext = createContext();
function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const [chatbotOpen, setChatbotOpen] = useState(false)

  console.log(chatbotOpen)
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
    <>
    <HashRouter>
      <MainLayout className="dark"
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}

      >

        <div onClick={() => setChatbotOpen(prev => !prev)} className="fixed top-72 right-5 botMainAvatar">
          <img src={chatBotGlow} alt="" />
        </div>

        <ChatbotContext.Provider value={{ setChatbotOpen }}>
          {
            chatbotOpen && <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            // Other chatbot kit props and configurations
            />
          }
        </ChatbotContext.Provider>
        <HelmetProvider>
          <Contextfile>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
            <Route path="/markets" element={<MarketsPage isDarkMode={isDarkMode} />} />
            <Route path="/jobs" element={<PrivateRoute><JobApplications /></PrivateRoute>} />
            <Route path="/login" element={<Login />} />
          </Routes>
          </Contextfile>
        </HelmetProvider>


      </MainLayout>
  
    
      
  
      
    </HashRouter>
    
    
  </>
  )
}

export default App
