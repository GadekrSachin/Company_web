import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <a href="/">ST</a>
      </div>
      <nav className="nav-links">
        <a href="/about">AboutUs</a>
        <a href="/service">Services</a>
        <a href="#contact">Contact Us</a>
      </nav>
      <div className="nav-buttons">
        <button className="btn learn-more">Learn More</button>
        <button className="btn contact-us">Contact Us</button>
      </div>
    </header>
  );
}

export default Navbar;
