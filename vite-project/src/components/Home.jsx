import React, { useState } from "react";
import {
  FaHouseUser,
  FaCopyright,
  FaInstagram,
  FaFacebookSquare,
  FaArrowDown,
} from "react-icons/fa";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Address:", address);
    console.log("Message:", message);

    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setMessage("");
  };

  return (
    <div className="home-page">
      <div className="content-form">
        <section className="left-half-home">
          <div className="home-images"></div>
        </section>
        <section className="right-half-home">
          <div className="quote-form-container">
            <h2>Request a Free Quote!</h2>
            <form onSubmit={handleSubmit} className="quote-form">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Street Address</label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  required
                />
              </div>
              <button type="submit" className="submit-button">
                Request Quote
              </button>
            </form>
          </div>
        </section>
      </div>
      <section className="home-services">
        <h2>
          Services we offer <FaArrowDown style={{ marginLeft: "10px" }} />
        </h2>
        <div className="service-grid-container">
          <div className="service-grid-card">
            <FaHouseUser style={{ fontSize: "50px" }} />
            <h3>Driveways</h3>
          </div>
          <div className="service-grid-card">
            <FaHouseUser style={{ fontSize: "50px" }} />
            <h3>Brick structures</h3>
          </div>
          <div className="service-grid-card">
            <FaHouseUser style={{ fontSize: "50px" }} />
            <h3>Walkways</h3>
          </div>
        </div>
      </section>
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
    </div>
  );
};

export default Home;
