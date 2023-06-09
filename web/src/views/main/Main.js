import "./Main.css";
import Summary from "../../components/summary/summary";
import Footer from "../../components/footer/footer";
import WelcomeMessage from "../../components/welcome-message/welcomeMessage";
import React, { useEffect } from "react";
import DataInput from "../../components/data-input/dataInput";

const Main = () => {
  const [theme, setTheme] = React.useState([]);

  useEffect(() => {
    const sessionTheme = localStorage.getItem("theme");
    if (sessionTheme) {
      setTheme(sessionTheme);
    }
  }, []);

  const handleThemeChange = (e) => {
    const sessionTheme = localStorage.getItem("theme");
    var updatedTheme = "dark";
    if (sessionTheme) {
      updatedTheme = sessionTheme === "light" ? "dark" : "light";
    }
    localStorage.setItem("theme", updatedTheme);
    setTheme(updatedTheme);
  }

  return (
    <div className={`Main ${theme}`} id="navToMain">
      <div className={`header ${theme}`}>
        <span className={`header-title ${theme}`}>Stress Management</span>
        <span className={`header-menu contact ${theme}`}><a href="http://www.google.com">Contact Us</a></span>
        <span onClick={handleThemeChange} className={`header-menu theme-switch ${theme}`}><a>Change Theme</a></span>
      </div>
      <WelcomeMessage theme={theme}/>
      <Summary theme={theme}/>
      <DataInput theme={theme}/>
      <Footer theme={theme}/>
    </div>
  );
};

export default Main;
