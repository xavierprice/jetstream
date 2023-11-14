import React, { useState, useEffect } from "react";
import Logo from "../assets/JPW.png";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";

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
        {<img className="header-logo" src={Logo} alt="Jetstream Initials" />}
      </div>
      {/* menu */}

      <ul className="navbar-contact">
        <li className="contact-bubble">
          <FaPhoneAlt />
          0491 016 876
        </li>
      </ul>

      <ul className="navbar-headings">
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      {/* hamburger menu */}
      <div onClick={handleClick} className="hamburger-menu">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? "hidden" : "mobile-menu"}>
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
