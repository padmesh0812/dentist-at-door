import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/icons/logo.jpg" alt="Dentist at Door Logo" />
        <h1>Dentist at Door</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/book">Book</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
