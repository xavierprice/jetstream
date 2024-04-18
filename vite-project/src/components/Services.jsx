import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import whiteAndBlueLogo from "../assets/logos/white-and-blue-logo.png";
import BackToTop from "../components/BackToTop";
import ImageComponent from "./ImageComponent";

const Services = ({ services }) => {
  const { id } = useParams();

  useEffect(() => {
    const serviceElement = document.getElementById(`service-${id}`);
    if (serviceElement) {
      const offset = 80;
      const offsetPosition = serviceElement.offsetTop - offset;
      window.scrollTo({ top: offsetPosition, behavior: "instant" });
    }
  }, [id]);

  return (
    <main className="services-page">
      <section className="heading-section">
        <div className="main-container">
          <div className="image">
            <img src={whiteAndBlueLogo} alt="Jetstream logo" />
          </div>
          <h1>Professional Pressure Washing Services Tailored to You</h1>
          <p>
            Elevate Your Property's Appearance with Our Comprehensive Pressure
            Washing Services. Discover the Difference in Cleanliness and
            Brilliance!
          </p>
        </div>
      </section>
      <section className="service-section">
        <div className="main-container">
          {services.map((service, index) => (
            <div
              key={index}
              id={`service-${index}`}
              className="service-card-container"
            >
              <div className="service-card">
                <div className="header-main">
                  <div className="service-icon">{service.icon}</div>
                  <div className="text-and-button">
                    <div className="header-text">
                      <h1>{service.title}</h1>
                      <p>{service.description}</p>
                    </div>
                    <div className="service-buttons">
                      <NavLink to={`/contact/${index}`} key={`contact${index}`}>
                        <button className="button-block">
                          Request a quote
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>

                <hr className="benefits-divider" />
                <div className="service-benefits">
                  {service.benefits.map((benefit, bIndex) => (
                    <div key={bIndex} className="benefit">
                      <div className="benefit-text">
                        <h2>{benefit.title}</h2>
                        <p>{benefit.description}</p>
                      </div>
                    </div>
                  ))}
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
            </div>
          ))}
        </div>
      </section>
      {/* <section className="testimonial-section">
        <div className="main-container">
          <div className="sub-heading-wrapper">
            <div className="sub-heading">
              <h2>
                Over time, driveways and house exteriors accumulate layers of
                dirt, grime, and mold, diminishing their appearance and curb
                appeal.
              </h2>
              <FaArrowRight className="arrow-right" />
              <h2>
                Our pressure washing service effectively restores surfaces,
                eliminating unwanted buildup and revitalizing the appearance of
                driveways and house exteriors.
              </h2>
            </div>
          </div>
        </div>
      </section> */}
      <BackToTop />
    </main>
  );
};

export default Services;
