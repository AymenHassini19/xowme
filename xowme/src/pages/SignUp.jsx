import React from "react";
import "../styles/SignUp.css";

export default function SignUp() {
  return (
    <div className="signup-container">
      {/* Floating accents */}
      <div className="floating-circle circle1"></div>
      <div className="floating-circle circle2"></div>

      <div className="signup-card">
        <h1>
          Join <span className="highlight">XowME</span>
        </h1>
        <p className="subtitle">
          Create your account and start solving real-world tasks faster.
        </p>

        <form className="signup-form">
          <div className="input-row">
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Last name" required />
          </div>

          <input type="date" required />

          <input type="email" placeholder="Email address" required />

          <input type="password" placeholder="Password" required />

          <button type="submit" className="signup-btn">
            Create Account
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
          Sign up with Google
        </button>
      </div>
    </div>
  );
}
