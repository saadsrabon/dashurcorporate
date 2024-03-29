/* eslint-disable react/prop-types */
import React from 'react';

const MessageParser = ({ children, actions}) => {
  const parse = (message) => {
    
    const lowerCase = message.toLowerCase();
    if (lowerCase.includes("hello") || lowerCase.includes("hi") || lowerCase.includes("hey") || message.length>2) {
      actions.initalAction();  
    }
    if (message=="") {
     const newMessage= actions.createChatBotMessage("Please enter a valid message")
      actions.updateStateChatbot(newMessage);
    }
    // Response from Chatgpt
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {
            initalAction: actions.initalAction,
            handleAbout: actions.handleAbout,
            handleMarkets: actions.handleMarkets,
            handleServices: actions.handleServices,
            handleContacts: actions.handleContacts,
          },
        });
      })}
    </div>
  );
};

export default MessageParser;