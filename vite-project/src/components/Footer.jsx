import React from "react";
import {
  FaInstagram,
  FaFacebookSquare,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCopyright,
  FaTiktok,
} from "react-icons/fa";
import logo from "../assets/jetstream-logo.png";

const Footer = ({ phoneNumber, openModal }) => {
  return (
    <footer className="footer-component">
      <div className="footer-content">
        <div class="footer-logo">
          <img src={logo} alt="Your Logo" />
        </div>
        <div className="contact-list">
          <li onClick={openModal}>
            <FaPhone className="fa-icon" />
            {phoneNumber}
          </li>
          <li>
            <FaEnvelope className="fa-icon" />
            jetstreampressurewashingau@gmail.com
          </li>
          <li>
            <FaMapMarkerAlt className="fa-icon" />
            Brisbane, QLD, Australia
          </li>
        </div>
        <div className="footer-socials">
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
