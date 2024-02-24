/* eslint-disable react/prop-types */
import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const initalAction = () => {
    const message = createChatBotMessage(
      "Hello, I'm here to help. What do you want to know?",
      {
        widget: "startBtnn",
        delay: 500,
      }
    );
    updateStateChatbot(message);
  };
  const handleAbout = () => {
    const message = createChatBotMessage("Thanks for your query");
    updateStateChatbot(message);
    const messages = createChatBotMessage(
      "Dashur is a platform that helps you to find the best deals in the market. We are a team of experts who are here to help you."
    );
    updateStateChatbot(messages);
  };
  const handleMarkets = () => {
    const message = createChatBotMessage("Thanks for your query");
    updateStateChatbot(message);
    const messages = createChatBotMessage(
      "We are currently working on this Markets",
      {
        widget: "chips",
        delay: 500,
      }
    );
    updateStateChatbot(messages);
  };
  const handleServices = () => {
    const messages = createChatBotMessage(
      "We are proud to work in these services",
      {
        widget: "services",
        delay: 500,
      }
    );
    updateStateChatbot(messages);
  };
  const handleContacts = () => {
    const messages = createChatBotMessage(
      "We are proud to work in these services",
      {
        widget: "contact",
        delay: 500,
      }
    );
    updateStateChatbot(messages);
  };
  const updateStateChatbot = (message) => {
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            initalAction,
            handleAbout,
            handleMarkets,
            handleServices,
            handleContacts,
            updateStateChatbot,
            createChatBotMessage,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
