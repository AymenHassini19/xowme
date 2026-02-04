import React, { useState } from "react";
import { Link } from "react-router-dom"; // needed for navigation
import "../styles/Navbar.css";

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
        <li>
          <Link to="/" className="nav-btn">
            Home
          </Link>
        </li>
        <li>
          <button className="nav-btn">About</button>
        </li>
        <li>
          <button className="nav-btn">Sign In</button>
        </li>
        <li>
          {/* FIXED: Sign Up uses React Router Link */}
          <Link to="/signup" className="nav-btn sign-up">
            Sign Up
          </Link>
        </li>
      </ul>

      <button className="mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
