import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
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
  const { id } = useParams();

  useEffect(() => {
    if (selectedService) {
      const formContainer = document.getElementById("quote-form-container");
      const offset = 70;
      const offsetPosition = formContainer.offsetTop - offset;
      window.scrollTo({ top: offsetPosition, behavior: "instant" });
    }
  }, [id, selectedService]);

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
                <span onClick={openModal} data-type="phone">
                  <FaPhone className="fa-icon" />
                  <h3>{phoneNumber}</h3>
                </span>
                <span onClick={openMaps}>
                  <FaMapMarkerAlt className="fa-icon" />
                  <h3>{contactLocation}</h3>
                </span>
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
