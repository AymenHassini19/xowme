import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="home-container">
      {/* Animated Background Elements */}
      <div className="floating-circle circle1"></div>
      <div className="floating-circle circle2"></div>

      {/* Hero Section */}
      <section className="hero-section">
        <header className="home-header">
          <h1>
            Welcome to <span className="highlight">XowME</span>
          </h1>
          <p>
            We help users complete real-world tasks faster using an AI camera
            assistant. Highlight objects on the live camera and get step-by-step guidance.
          </p>
        </header>

      
      </section>

      {/* Phone Showcase Section */}
      <section className="image-reveal-section">
        <div className="phone-wrapper">
          <img 
            src="/assets/phone.png" 
            alt="XowME AI Phone Interface" 
            className="phone-image"
          />
          <div className="glow-effect"></div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="features-section">
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
      </section>
      
      <footer className="home-footer">
        <p>© 2026 XowME AI Assistant</p>
      </footer>
    </div>
  );
}