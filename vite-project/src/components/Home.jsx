import React, { useState } from "react";
import { FaHouseUser, FaArrowDown } from "react-icons/fa";

const Home = () => {
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
    </div>
  );
};

export default Home;
