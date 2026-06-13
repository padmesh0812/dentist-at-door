import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 Dentist at Door. All Rights Reserved.</p>
      <p>123 Smile Street, Tooth City, India</p>
      <p>Made with ❤️ by Dentist at Door Team</p>
      <br />
      <div className="footer-icons">
        <a href="https://instagram.com">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://youtube.com">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="mailto:info@dentistatdoor.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
