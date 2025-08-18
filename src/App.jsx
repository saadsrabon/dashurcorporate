import { HashRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "./Layout/MainLayout"
import React, { createContext, useEffect, useState, Suspense } from "react";
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
import { Capablities } from "./pages/Capablities";
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingSpinner from "./components/LoadingSpinner";
import PerformanceMonitor from "./components/PerformanceMonitor";

// Lazy load components for better performance
const LazyContact = React.lazy(() => import("./pages/Contact"));
const LazyAbout = React.lazy(() => import("./pages/About"));
const LazyCareer = React.lazy(() => import("./pages/Career"));
const LazyMarketsPage = React.lazy(() => import("./pages/MarketsPage"));
const LazyJobApplications = React.lazy(() => import("./pages/JobApplications"));
const LazyLogin = React.lazy(() => import("./pages/Login"));
const LazyCapablities = React.lazy(() => import("./pages/Capablities"));

export const ChatbotContext = createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: light)').matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  useEffect(() => {
    const currentTime = new Date().getHours();
    const isNightTime = currentTime >= 20 || currentTime < 6;
    setIsDarkMode(isNightTime);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = "#020E14";
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = "#FFFF";
    }
  }, [isDarkMode]);

  return (
    <ErrorBoundary>
      <PerformanceMonitor />
      <HashRouter>
        <MainLayout 
          className="dark"
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        >
          <div 
            onClick={() => setChatbotOpen(prev => !prev)} 
            className="fixed realtive bottom-0 right-0 botMainAvatar"
            role="button"
            tabIndex={0}
            aria-label="Toggle chatbot"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setChatbotOpen(prev => !prev);
              }
            }}
          >
            <img src={chatBotGlow} alt="Chatbot toggle button" />
            <span className="h-4 w-4 bg-green-500 absolute rounded-full bottom-7 right-6 border-[3px] border-white"></span>
            <span className="h-4 w-4 bg-green-500 absolute rounded-full bottom-7 right-6 animate-ping"></span>
          </div>

          <ChatbotContext.Provider value={{ setChatbotOpen }}>
            {chatbotOpen && (
              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            )}
          </ChatbotContext.Provider>

          <HelmetProvider>
            <Contextfile>
              <Suspense fallback={<LoadingSpinner fullScreen text="Loading page..." />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/contact" element={<LazyContact />} />
                  <Route path="/about" element={<LazyAbout isDarkMode={isDarkMode} />} />
                  <Route path="/career" element={<LazyCareer />} />
                  <Route path="/markets" element={<LazyMarketsPage isDarkMode={isDarkMode} />} />
                  <Route path="/jobs" element={
                    <PrivateRoute>
                      <LazyJobApplications />
                    </PrivateRoute>
                  } />
                  <Route path="/login" element={<LazyLogin />} />
                  <Route path="/capabilties" element={<LazyCapablities />} />
                </Routes>
              </Suspense>
            </Contextfile>
          </HelmetProvider>
        </MainLayout>
      </HashRouter>
    </ErrorBoundary>
  );
}

export default App;
