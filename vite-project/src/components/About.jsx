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
          <h1>Our Story</h1>
          <p>
            Learn how we started and grew to become leaders in pressure washing.
          </p>
        </section>
        <section className="our-mission">
          <h1>Our Mission</h1>
          <p>
            Committed to delivering the best cleaning solutions with
            professionalism and attention to detail.
          </p>
        </section>
        <section className="team">
          <h1>Meet Our Team</h1>
          <div className="team-members"></div>
        </section>
        <section className="contact">
          <h1>Contact Us</h1>
          <p>Have questions? Reach out to us anytime.</p>
        </section>
      </div>
    </main>
  );
};

export default About;
