/* eslint-disable react/prop-types */
import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const lowerCase = message.toLowerCase();
    if (lowerCase.includes("hello")) {
      actions.initalAction();
    }
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
          },
        });
      })}
    </div>
  );
};

export default MessageParser;