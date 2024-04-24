import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ openModal, phoneNumber }) => {
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
      <h2 className="navbar-left">
        <Link
          to="/jetstream/"
          onClick={closeMenu}
          className={!nav ? "" : "navbar-left alt"}
        >
          JPW
        </Link>
      </h2>
      <ul className="navbar-headings">
        <li className={location.pathname === "/jetstream/" ? "active" : ""}>
          <Link to="/jetstream/">Home</Link>
        </li>
        <li className={location.pathname.includes("/services") ? "active" : ""}>
          <Link to="/jetstream/services">Services</Link>
        </li>

        <li
          className={location.pathname === "/jetstream/about" ? "active" : ""}
        >
          <Link to="/jetstream/about">About</Link>
        </li>
        <li className={location.pathname.includes("/contact") ? "active" : ""}>
          <Link to="/jetstream/contact">Contact</Link>
        </li>
      </ul>
      <ul className="navbar-contact">
        <li
          className="contact-bubble phone-bubble"
          onClick={openModal}
          data-type="phone"
        >
          <FaPhoneAlt />
          {phoneNumber}
        </li>
      </ul>
      <li onClick={handleClick} className="hamburger-menu">
        {!nav ? <FaBars /> : <FaTimes className="faTimes" />}
      </li>
      <ul className={!nav ? "mobile-menu" : "mobile-menu show"}>
        <li className={location.pathname === "/jetstream/" ? "active" : ""}>
          <Link to="/jetstream/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li
          className={
            location.pathname.startsWith("/jetstream/services") ? "active" : ""
          }
        >
          <Link to="/jetstream/services">Services</Link>
        </li>

        <li
          className={location.pathname === "/jetstream/about" ? "active" : ""}
        >
          <Link to="/jetstream/about" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li
          className={location.pathname === "/jetstream/contact" ? "active" : ""}
        >
          <Link to="/jetstream/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
