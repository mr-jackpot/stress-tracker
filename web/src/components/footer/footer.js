import React from "react";
import "./footer.css";

const Footer = (props) => {

  return (
    <div className={`footer ${props.theme}`}>
      <p>
        Stress Management Tracker application by Adam Heeps. Contact
        https://github.com/mr-jackpot
      </p>
    </div>
  );
};

export default Footer;
