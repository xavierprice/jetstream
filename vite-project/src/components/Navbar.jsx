import React, { useState, useEffect } from "react";
import Logo from "../assets/JPW.png";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        // Reset nav to false if the screen width is greater than 768px
        setNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      <div>
        <Link to="/">
          {<img className="header-logo" src={Logo} alt="Jetstream Initials" />}
        </Link>
      </div>
      {/* menu */}

      <ul className="navbar-contact">
        <li className="contact-bubble phone-bubble">
          <FaPhoneAlt />
          0491 016 876
        </li>
        <li className="contact-bubble quote-bubble">
          <FaPhoneAlt />
          Get a free quote!
        </li>
      </ul>

      <ul className="navbar-headings">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* hamburger menu */}
      <div onClick={handleClick} className="hamburger-menu">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? "hidden" : "mobile-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
