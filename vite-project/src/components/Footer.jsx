import React from "react";
import {
  FaInstagram,
  FaFacebookSquare,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCopyright,
  FaTiktok
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-component">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Contact Information</h3>
          <ul className="contact-list">
            <li>
              <FaMapMarkerAlt />
              Brisbane, QLD, Australia
            </li>
            <li>
              <FaPhone />
              0491 016 876
            </li>
            <li>
              <FaEnvelope />
              jetstreampressurewashingau@gmail.com
            </li>
          </ul>
        </div>
        <div className="footer-socials">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" target="" rel="">
              <FaFacebookSquare className="fa-icon" />
            </a>
            <a href="#" target="" rel="">
              <FaInstagram className="fa-icon" />
            </a>
            <a href="#" target="" rel="">
              <FaTiktok className="fa-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <FaCopyright />
        {new Date().getFullYear()} JETSTREAM PRESSURE WASHING. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
