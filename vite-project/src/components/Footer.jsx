import React from "react";
import { FaCopyright, FaInstagram, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-copyright">
        <FaCopyright />
        2023 JETSTREAM PRESSURE WASHING
      </div>
      <div className="footer-socials">
        <FaInstagram className="fa-icon" />
        <FaFacebookSquare className="fa-icon" />
      </div>
    </footer>
  );
};

export default Footer;