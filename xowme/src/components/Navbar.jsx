import React, { useState } from "react";
import "../styles/Navbar.css"; // We'll use the CSS you provided

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">XowME</div>
      <ul className="navbar-links">
        <li><button className="nav-btn">Home</button></li>
        <li><button className="nav-btn">About</button></li>
        <li><button className="nav-btn">Sign In</button></li>
        <li><button className="nav-btn sign-up">Sign Up</button></li>
      </ul>
      <button className="mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
