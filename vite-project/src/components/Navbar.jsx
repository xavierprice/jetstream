import React, { useState, useEffect } from "react";
import Logo from "../assets/JPW.png";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

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
      <li className="navbar-left">
        <Link to="/">
          <h1>JPW</h1>
        </Link>
      </li>
      {/* menu */}

      <ul className="navbar-headings">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/services" ? "active" : ""}>
          <Link to="/services">Services</Link>
        </li>
        <li className={location.pathname === "/about" ? "active" : ""}>
          <Link to="/about">About</Link>
        </li>
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
        <li className={location.pathname === "/quote" ? "active" : ""}>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>

      <ul className="navbar-contact">
        <li className="contact-bubble phone-bubble">
          <FaPhoneAlt style={{ fontSize: "20px", paddingRight: "0.4rem" }} />
          0491 016 876
        </li>

        {/* hamburger menu */}
        <li onClick={handleClick} className="hamburger-menu">
          {!nav ? <FaBars /> : <FaTimes />}
        </li>
      </ul>

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
