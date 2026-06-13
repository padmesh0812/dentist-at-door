import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div>
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Dentist at Door</h1>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="about-main">
        <h2>Who We Are</h2>
        <p>
          <strong>Dentist at Door</strong> brings high-quality dental care
          directly to your home, office, or school. Our fully-equipped mobile
          van ensures expert treatment in comfort and safety.
        </p>

        <h2>Our Vision</h2>
        <p>
          To transform dental healthcare in India by providing convenient, safe,
          and reliable services at your doorstep, removing travel barriers and
          long waits.
        </p>

        <h2>Why Choose Dentist at Door?</h2>
        <div className="why-choose">
          <div className="point">
            <i className="fas fa-tooth"></i>
            <span>Modern dental equipment inside a comfortable van</span>
          </div>
          <div className="point">
            <i className="fas fa-user-md"></i>
            <span>Certified and skilled dental professionals</span>
          </div>
          <div className="point">
            <i className="fas fa-home"></i>
            <span>Hassle-free treatment at your preferred location</span>
          </div>
          <div className="point">
            <i className="fas fa-coins"></i>
            <span>Affordable and transparent pricing</span>
          </div>
        </div>

        <h2>Our Promise</h2>
        <p>
          We are committed to compassionate care, high hygiene standards, and
          ensuring every patient experiences comfort, convenience, and trust.
        </p>

        <p style={{ textAlign: "center" }}>
          <Link to="/book" className="about-btn">
            Book Appointment
          </Link>
        </p>
      </main>
    </div>
  );
}

export default About;
