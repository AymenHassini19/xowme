import React from "react";
import "../styles/SignIn.css";

export default function SignIn() {
  return (
    <div className="signin-container">
      {/* Floating accents */}
      <div className="floating-circle circle1"></div>
      <div className="floating-circle circle2"></div>

      <div className="signin-card">
        <h1>
          Welcome back to <span className="highlight">XowME</span>
        </h1>

        <p className="subtitle">
          Sign in to continue solving real-world tasks.
        </p>

        <form className="signin-form">
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />

          <button type="submit" className="signin-btn">
            Sign In
          </button>
        </form>

        <div className="divider">
          <span>or</span>
        </div>

        <button className="google-btn">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
