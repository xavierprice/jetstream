import React from "react";
import Logo from "../assets/JPW.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        {<img className="header-logo" src={Logo} alt="Jetstream Initials" />}
      </div>
      {/* menu */}
      <ul className="navbar-headings">
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
