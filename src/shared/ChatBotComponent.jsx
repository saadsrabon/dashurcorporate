import React, { useState } from 'react';
import { Chatbot, Message } from 'react-chatbot-kit';
import axios from 'axios';
import config from '../chatbot/config';
import MessageParser from '../chatbot/MessageParser';
import ActionProvider from '../chatbot/ActionProvider';

const openaiApiKey = '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';
const openaiEndpoint = 'https://api.openai.com/v1/chat/completions';

const ChatbotComponent = () => {
  const [messages, setMessages] = useState([]);

  const sendMessageToOpenAI = async (messageText) => {
    try {
      const response = await axios.post(openaiEndpoint, {
        prompt: messageText,
        max_tokens: 150, // Adjust as needed
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openaiApiKey}`,
        },
      });

      const openaiResponse = response.data.choices[0].text;

      // Add OpenAI response to chat messages
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length + 1, message: openaiResponse, sender: 'bot' },
      ]);
    } catch (error) {
      console.error('Error communicating with OpenAI:', error);
    }
  };

  const handleSendMessage = (message) => {
    // Add user message to chat messages
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: prevMessages.length + 1, message: message, sender: 'user' },
    ]);

    // Send user message to OpenAI
    sendMessageToOpenAI(message);
  };
  console.log(messages)


  return (
    <>
     <Chatbot
      messages={messages}
      onSendMessage={handleSendMessage}
      config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      // Other chatbot kit props and configurations
    />
    <button className='btn text-white' onClick={()=>handleSendMessage("hello whta is your goal?")}>Hello</button>
    </>
   
  );
};

export default ChatbotComponent;