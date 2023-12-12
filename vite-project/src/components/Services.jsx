import React from "react";
import workImage2 from "../assets/work-image2.jpg";
import workImage1 from "../assets/work-Image1.jpg";
import workImage4 from "../assets/workImage4.jpeg";
import workImage5 from "../assets/workImage5.jpeg";
import workImage6 from "../assets/workImage6.jpeg";
import { FaHome, FaTree, FaRoad } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Driveway Cleaning",
      description:
        "Restore the look of your driveway with our high-pressure cleaning services.",
      icon: <FaRoad />,
      images: [workImage2, workImage1, workImage4],
    },
    {
      title: "House Washing",
      description:
        "Give your home a fresh appearance by removing dirt and grime from its exterior.",
      icon: <FaHome />,
      images: [workImage2, workImage1, workImage4],
    },
    {
      title: "Deck and Patio Cleaning",
      description:
        "Renew the appearance of your deck or patio, preparing them for outdoor gatherings.",
      icon: <FaTree />,
      images: [workImage2, workImage1, workImage4],
    },
  ];

  return (
    <div className="services-page">
      <section className="services-main">
        <h1>Pressure Washing Services</h1>
        <div className="service-grid-container">
          {services.map((service, index) => (
            <div key={index}>
              <div className="service-grid-card">
                <div className="service-icon">{service.icon}</div>
                <div className="service-details">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-buttons">
                    <button className="button-block">Request a quote</button>
                  </div>
                </div>
              </div>
              <div className="service-images">
                {service.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`${service.title} ${imgIndex + 1}`}
                    className="service-image"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
