import React, { useState } from "react";

import "./styles/styles.css";
import AboutPage from "./components/AboutPage";
import ChatBot from "./components/ChatBot";
import ContactPage from "./components/ContactPage";

import Home from "./components/Home";
import FragrancesJSON from "./data/fragrances.json";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentOverallClass, setCurrentOverallClass] = useState("home_all");
  

  
  const navBar = (
    <div className="nav-bar">
      <button className="home-btn" onClick={() => {
        setCurrentPage("home");
        setCurrentOverallClass("home_all");
        console.log(currentOverallClass)
      }}>
        Home
      </button>

      <button className="chat-bot" onClick={() => {
        setCurrentPage("chat-bot");
        setCurrentOverallClass("chatbot_all")
        console.log(currentOverallClass)
      }}>
        ChatBot
      </button>

      <button className="about-btn" onClick={() => {
        setCurrentPage("about");
        setCurrentOverallClass("about_all");
        console.log(currentOverallClass)
      }}>
        About
      </button>

      <button
        className="contact-btn me-auto"
        onClick={() => {
          setCurrentPage("contact");
          setCurrentOverallClass("contact_all");
          console.log(currentOverallClass)
        }}>
        Contact
      </button>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "chatbot":
        return <ChatBot />;
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <div>404 Error</div>;
    }
  };

  return (

    <div className={currentOverallClass}>
      {navBar}
      {currentPage === "home" && (
        <>
          <div className="splash"></div>
          <div id="belownav" className="below-nav-bar">
            <div className="overlay">{renderPage()}</div>
          </div>
        </>
      )}
      {currentPage !== "home" && <div id="belownav">{renderPage()}</div>}
    </div>
  );
};



export default App;
