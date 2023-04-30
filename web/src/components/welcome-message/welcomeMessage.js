import React from "react";
import "./welcomeMessage.css";

const WelcomeMessage = (props) => {
  return (
    <div className={`welcomeMessage ${props.theme}`}>
      <p>Welcome back!</p>
    </div>
  );
};

export default WelcomeMessage;
