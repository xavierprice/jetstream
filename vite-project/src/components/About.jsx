import React from "react";
import aboutImage from "../assets/work-image1.jpg";

const About = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${aboutImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <main className="about-page">
      <div className="about-main">
        <section className="hero">
          <h1>About Our Pressure Washing Services</h1>
          <p>Providing top-notch pressure washing since 2023.</p>
        </section>
        <section className="our-story">
          <h2>Our Story</h2>
          <p>
            Learn how we started and grew to become leaders in pressure washing.
          </p>
        </section>
        <section className="our-mission">
          <h2>Our Mission</h2>
          <p>
            Committed to delivering the best cleaning solutions with
            professionalism and attention to detail.
          </p>
        </section>
        <section className="team">
          <h2>Meet Our Team</h2>
          <div className="team-members"></div>
        </section>
        <section className="contact">
          <h2>Contact Us</h2>
          <p>Have questions? Reach out to us anytime.</p>
        </section>
      </div>
    </main>
  );
};

export default About;
