import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Optional: persist dark mode in localStorage
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="home-container">
      {/* Floating Background Shapes */}
      <div className="floating-circle circle1"></div>
      <div className="floating-circle circle2"></div>

      {/* Header */}
      <header className="home-header">
        <h1>
          Welcome to <span className="highlight">XowME</span>
        </h1>
        <p>
          We help users complete real-world tasks faster using an AI camera
          assistant. Highlight objects on the live camera and get step-by-step guidance.
        </p>
      </header>

      {/* Dark/Light Mode Toggle */}
      <button
        className="mode-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
        <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
      </button>

      {/* Feature Cards */}
      <div className="cards-container">
        <div className="card">
          <h2>AI Camera Guidance</h2>
          <p>See objects highlighted in real-time and follow step-by-step instructions.</p>
        </div>
        <div className="card">
          <h2>Task Completion</h2>
          <p>Complete tasks faster with visual guidance and AI-powered suggestions.</p>
        </div>
        <div className="card">
          <h2>Interactive Feedback</h2>
          <p>Get real-time feedback and tips directly from the camera assistant.</p>
        </div>
      </div>
    </div>
  );
}
