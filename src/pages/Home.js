import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div>
      {/* HERO */}
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,64,128,0.6), rgba(0,64,128,0.6)), url('/icons/DaD Van.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-content">
          <h1>Dental Care At Your Doorstep</h1>
          <p>
            Book certified dentists for safe, hygienic and professional dental
            treatment at your home.
          </p>
          <Link to="/book" className="btn">
            Book Appointment
          </Link>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step-box">
            <img
              src="https://img.icons8.com/color/96/calendar.png"
              alt="calendar"
            />
            <h3>1. Choose Service</h3>
            <p>Select from a wide range of dental treatments.</p>
          </div>
          <div className="step-box">
            <img src="https://img.icons8.com/color/96/clock.png" alt="clock" />
            <h3>2. Pick Date & Time</h3>
            <p>Schedule according to your comfort.</p>
          </div>
          <div className="step-box">
            <img
              src="https://img.icons8.com/color/96/ambulance.png"
              alt="van"
            />
            <h3>3. Dentist Arrives</h3>
            <p>Our mobile dental van comes to your doorstep.</p>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section">
        <h2>Our Services</h2>
        <div className="services-preview">
          <div className="service">
            <img
              src="https://img.icons8.com/color/96/tooth.png"
              alt="cleaning"
            />
            <h3>Dental Cleaning</h3>
          </div>
          <div className="service">
            <img
              src="https://img.icons8.com/color/96/dental-filling.png"
              alt="filling"
            />
            <h3>Tooth Filling</h3>
          </div>
          <div className="service">
            <img
              src="https://img.icons8.com/color/96/toothache.png"
              alt="root canal"
            />
            <h3>Root Canal</h3>
          </div>
        </div>
        <p style={{ marginTop: "1rem", textAlign: "center" }}>
          <Link to="/services" className="btn">
            View All Services
          </Link>
        </p>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-us">
        <h2>Why Choose Us?</h2>
        <div className="why-list">
          <div>✔ Doorstep Dental Treatment</div>
          <div>✔ Professional & Certified Dentists</div>
          <div>✔ Hygienic Mobile Dental Van</div>
          <div>✔ Emergency Home Visits</div>
          <div>✔ Affordable Services</div>
          <div>✔ Comfort of Home</div>
        </div>
      </section>
    </div>
  );
}

export default Home;
