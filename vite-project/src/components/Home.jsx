import React, { useState } from "react";
import { FaHome, FaTree, FaRoad, FaArrowDown } from "react-icons/fa";

const Home = () => {
  const services = [
    {
      title: "Driveway Cleaning",
      description:
        "Restore the look of your driveway with our high-pressure cleaning services.",
      icon: <FaRoad />,
    },
    {
      title: "House Washing",
      description:
        "Give your home a fresh appearance by removing dirt and grime from its exterior.",
      icon: <FaHome />,
    },
    {
      title: "Deck and Patio Cleaning",
      description:
        "Renew the appearance of your deck or patio, preparing them for outdoor gatherings.",
      icon: <FaTree />,
    },
  ];

  return (
    <div className="home-page">
      <section className="main-heading">
        <h2>
          Revitalize Your Property's Sparkle with Professional Pressure Washing
          Services!
        </h2>
        <p>
          Enhance your property's curb appeal and cleanliness effortlessly with
          our top-tier pressure washing services. From driveways to exteriors,
          we restore the shine to your surfaces, making your property look brand
          new.
        </p>
      </section>
      <div className="our-mission-home">
        <h3>Our mission:</h3>
        <p>
          Transforming properties and lives by restoring brilliance, one
          pristine surface at a time.
        </p>
      </div>
      <section className="home-services">
        <h2>
          Services we offer <FaArrowDown style={{ marginLeft: "10px" }} />
        </h2>
        <div className="service-grid-container">
          {services.map((service, index) => (
            <div className="service-grid-card" key={index}>
              <div className="service-icon">
                <div className="service-icon">{service.icon}</div>
              </div>
              <div className="service-details">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="who-we-are">
        <div className="content">
          <div className="text">
            <h2>Who We Are</h2>
            <p>
              We are a dedicated team committed to providing top-quality
              pressure washing services. From revitalizing driveways to
              refreshing home exteriors, we take pride in bringing back the
              shine to your spaces. Our goal is simple: to exceed your
              expectations and leave a lasting impression with our quality
              workmanship and personalized service.
            </p>
            <button className="learn-more-btn">Learn More</button>
          </div>
          <div className="video">
            <video controls>
              <source src="path_to_your_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
