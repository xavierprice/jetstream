import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "./ContactForm";
import BackToTop from "./BackToTop";

const Contact = ({
  services,
  selectedService,
  setSelectedService,
  phoneNumber,
  openModal,
  contactLocation,
  openMaps,
  modifiedEmail,
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
            <ul className="contact-list">
              <li className="open-hours">
                <h3>Open hours:</h3>
                <div className="time">
                  <h3>Monday - Sunday</h3>
                  <h3>9am - 7pm</h3>
                </div>
              </li>
              <li className="phone-location">
                <li onClick={openModal} data-type="phone">
                  <FaPhone className="fa-icon" />
                  <h3>{phoneNumber}</h3>
                </li>
                <li onClick={openMaps}>
                  <FaMapMarkerAlt className="fa-icon" />
                  <h3>{contactLocation}</h3>
                </li>
              </li>
              <li onClick={openModal} data-type="email" className="email">
                <FaEnvelope className="fa-icon" />
                <h3>{modifiedEmail}</h3>
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
