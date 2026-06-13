import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

function Services() {
  const services = [
    {
      img: "/icons/dental-cleaning.png",
      title: "Dental Cleaning",
      desc: "Professional cleaning to remove plaque and tartar buildup.",
    },
    {
      img: "/icons/filling.png",
      title: "Tooth Filling",
      desc: "Painless, long-lasting fillings for cavities.",
    },
    {
      img: "/icons/root-canal.png",
      title: "Root Canal Treatment",
      desc: "Comfortable, advanced RCT procedures to save infected teeth.",
    },
    {
      img: "/icons/tooth-extraction.png",
      title: "Tooth Extraction",
      desc: "Safe and sterile removal of decayed or damaged teeth.",
    },
    {
      img: "/icons/braces.png",
      title: "Braces Consultation",
      desc: "Expert orthodontic evaluation for teeth alignment.",
    },
    {
      img: "/icons/tooth-whitening.png",
      title: "Teeth Whitening",
      desc: "Brighten your smile with safe whitening procedures.",
    },
    {
      img: "/icons/denture.png",
      title: "Dentures & Implants",
      desc: "Custom-fit dentures and detailed implant consultation.",
    },
    {
      img: "/icons/child dentistry.png",
      title: "Child Dentistry",
      desc: "Specialized care for young and sensitive patients.",
    },
    {
      img: "/icons/medical.png",
      title: "Emergency Visits",
      desc: "Immediate dental assistance at your doorstep.",
    },
  ];

  return (
    <main className="services-main">
      <h2>Our Services</h2>
      <p className="intro">
        Explore our wide range of dental services designed to keep your smile
        healthy and bright, all at the comfort of your home.
      </p>

      <div className="service-list">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>

      <p style={{ textAlign: "center" }}>
        <Link to="/book" className="services-btn">
          Book Appointment
        </Link>
      </p>
    </main>
  );
}

export default Services;
