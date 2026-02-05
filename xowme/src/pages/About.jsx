import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <div className="about-container">
      {/* Floating accents */}
      <div className="floating-circle circle1"></div>
      <div className="floating-circle circle2"></div>

      {/* Project description */}
      <section className="about-card">
        <h1>
          About <span className="highlight">XowME</span>
        </h1>
        <p className="about-text">
          XowME is a collaborative platform designed to help users solve
          real-world problems efficiently by connecting ideas, skills, and
          execution in one place. The project focuses on simplicity,
          performance, and modern user experience.
        </p>
      </section>

      {/* Team section */}
      <section className="team-section">
        <h2>Meet the Team</h2>

        <div className="team-row">
          <div className="team-member">
            <img src="/assets/team/member1.jpg" alt="Team member" />
          </div>
          <div className="team-member">
            <img src="/assets/team/member1.jpg" alt="Team member" />
          </div>
          <div className="team-member">
            <img src="/assets/team/member1.jpg" alt="Team member" />
          </div>
          <div className="team-member">
            <img src="/assets/team/member1.jpg" alt="Team member" />
          </div>
          <div className="team-member">
            <img src="/assets/team/member1.jpg" alt="Team member" />
          </div>
        </div>
      </section>

      {/* University context */}
      <section className="university-section">
        <img
          src="/assets/medtech.jpg"
          alt="MedTech University"
          className="university-image"
        />

        <div className="university-overlay">
          <h2>Developed at MedTech</h2>
          <p>
            This project was developed at the Faculty of Medicine of Tunis
            (MedTech), part of SMU. MedTech promotes innovation, technology,
            and entrepreneurship through real-world academic projects.
          </p>
          <a
            href="https://www.smu.tn/medtech"
            target="_blank"
            rel="noreferrer"
          >
            Learn more →
          </a>
        </div>
      </section>
    </div>
  );
}
