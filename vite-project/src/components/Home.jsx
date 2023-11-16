import React, { useState } from "react";
import { FaHouseUser, FaArrowDown } from "react-icons/fa";

const Home = () => {

  return (
    <div className="home-page">
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
