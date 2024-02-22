import React, { useState, useEffect } from "react";
import Logo from "../assets/JPW.png";
import { FaBars, FaTimes, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  //menu handlers
  const closeMenu = () => {
    setNav(false);
  };
  const handleClick = (event) => {
    event.stopPropagation();
    setNav(!nav);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (nav && !event.target.closest(".mobile-menu.show")) {
        setNav(false);
      } else {
        setNav(false);
      }
    };

    const handleScroll = () => {
      if (nav) {
        setNav(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [nav]);

  return (
    <div className="navbar-component">
      <li className="navbar-left">
        <Link to="/" onClick={closeMenu}>
          <h1 className={!nav ? "" : "navbar-left alt"}>JPW</h1>
        </Link>
      </li>
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
      </ul>
      <ul className="navbar-contact">
        {/* <li className={!nav ? "hidden" : "contact-bubble"}>
          <FaEnvelope style={{ fontSize: "20px", paddingRight: "0.4rem" }} />
          Free quote
        </li> */}
        <li className="contact-bubble phone-bubble">
          <FaPhoneAlt style={{ fontSize: "20px", paddingRight: "0.4rem" }} />
          0491 016 876
        </li>
      </ul>
      <li onClick={handleClick} className="hamburger-menu">
        {!nav ? <FaBars /> : <FaTimes className="faTimes" />}
      </li>
      <ul className={!nav ? "mobile-menu" : "mobile-menu show"}>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className={location.pathname === "/services" ? "active" : ""}>
          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>
        </li>
        <li className={location.pathname === "/about" ? "active" : ""}>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
