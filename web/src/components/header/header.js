import React from "react";
import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <span className="header-title">Stress Management Tracker</span>
        <span className="header-menu contact"><a href="http://www.google.com">Contact Us</a></span>
      </div>
    );
  }
}

export default Header;
