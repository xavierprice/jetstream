import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ContactForm = ({ services, selectedService, setSelectedService }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", message);

    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setMessage("");
  };

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const selectedId = parseInt(id);
    const selectedService = services[selectedId];

    setSelectedService(selectedService ? selectedService.title : "");
  }, [id]);

  return (
    <div className="contact-component">
      <div className={`quote-form-container`}>
        <h1>Claim your free estimate</h1>
        <form onSubmit={handleSubmit} className="quote-form">
          <div className="form-group double-label">
            <span>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                placeholder="John Smith"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </span>
            <span>
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                placeholder="0411 222 333"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="johnsmith@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group double-label">
            <span>
              <label htmlFor="service">Service Needed:</label>
              <select
                id="service"
                value={selectedService || ""}
                onChange={(e) => setSelectedService(e.target.value)}
                required
              >
                <option value="" disabled hidden>
                  Select Service
                </option>
                {services.map((service, index) => (
                  <option key={index} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </span>

            <span>
              <label htmlFor="area">Area Size:</label>
              <select
                id="area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                required
              >
                <option value="" disabled hidden>
                  Select Area Size
                </option>
                <option value="Small">0 - 50sqm </option>
                <option value="Medium">100 - 200sqm</option>
                <option value="Large">200 - 400sqm</option>
              </select>
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              placeholder="Message..."
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Submit request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
