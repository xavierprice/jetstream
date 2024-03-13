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

const Footer = ({
  phoneNumber,
  email,
  contactLocation,
  openModal,
  openMaps,
}) => {
  return (
    <footer className="footer-component">
      <div className="footer-content">
        <div class="footer-logo">
          <img src={logo} alt="Your Logo" />
        </div>
        <div className="contact-list">
          <li onClick={openModal} data-type="phone">
            <FaPhone className="fa-icon" />
            {phoneNumber}
          </li>
          <li onClick={openModal} data-type="email">
            <FaEnvelope className="fa-icon" />
            {email}
          </li>
          <li onClick={openMaps} data-type="location">
            <FaMapMarkerAlt className="fa-icon" />
            {contactLocation}
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
