import { createChatBotMessage } from 'react-chatbot-kit';
import { ChatBotHeader } from '../components/chatBotHeader';

const config = {
  initialMessages: [createChatBotMessage(`Welcome to Dashur Ai Chatbot`)],
  botName: "Dashur Ai Chatbot",
  customComponents: {
    // Replaces the default header
    header: () => <ChatBotHeader/>
    // Replaces the default bot avatar
   
  },
  }
 


export default config;