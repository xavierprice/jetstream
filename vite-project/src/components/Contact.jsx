import React from "react";
import logo from "../assets/jetstream-logo.png";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "./ContactForm";
import BackToTop from "./BackToTop";

const Contact = ({
  services,
  selectedService,
  setSelectedService,
  phoneNumber,
  openModal,
}) => {
  return (
    <main className="contact-page">
      <section className="form-section">
        <div className="main-container">
          <div className="form-left">
            <ContactForm
              services={services}
              selectedService={selectedService}
              setSelectedService={setSelectedService}
            />
          </div>
          <div className="form-right">
            <h1>Fill in your details and we'll get right back to you</h1>
            <div className="open-hours">
              <h2>Open hours:</h2>
              <div className="time">
                <p>Monday - Sunday</p>
                <p>9am - 7pm</p>
              </div>
            </div>
            <ul className="contact-list">
              <li onClick={openModal}>
                <FaPhone className="fa-icon" />
                <p>{phoneNumber}</p>
              </li>
              <li>
                <FaMapMarkerAlt className="fa-icon" />
                <p>Brisbane, QLD, Australia</p>
              </li>
              <li>
                <FaEnvelope className="fa-icon" />
                <p>jetstreampressurewashingau@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <BackToTop />
    </main>
  );
};

export default Contact;
