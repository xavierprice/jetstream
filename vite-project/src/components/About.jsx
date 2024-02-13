import React from "react";
import {
  FaRegClock,
  FaHandSparkles,
  FaTrophy,
  FaUmbrella,
} from "react-icons/fa";
import whiteLogo from "../assets/jetstream-logo-white.png";
import whiteAndBlueLogo from "../assets/jetstream-logo-white&blue.png";
import blackLogo from "../assets/jetstream-logo-black.png";

import workImage2 from "../assets/work-image2.jpg";
import workImage1 from "../assets/work-Image1.jpg";
import workImage1Cropped from "../assets/work-Image1-heightCropped.png";
import workImage4 from "../assets/workImage4.jpeg";

const About = () => {
  const workImages = [workImage1, workImage2, workImage2, workImage1Cropped];
  const benefits = [
    {
      icon: <FaRegClock />,
      title: "Fast",
      description: "Get quick results and save time with our speedy service.",
    },
    {
      icon: <FaHandSparkles />,
      title: "Clean",
      description:
        "Enjoy a clutter-free experience with our sleek and organized interface.",
    },
    {
      icon: <FaTrophy />,
      title: "Quality",
      description:
        "Experience top-notch performance and reliability with our high-quality products.",
    },
    {
      icon: <FaUmbrella />,
      title: "Insurance",
      description:
        "Stay protected and secure with our comprehensive insurance coverage.",
    },
  ];
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      text: '"I was amazed by the quality of service provided by ABC Pressure Washing. My house looks brand new!"',
    },
    {
      id: 2,
      name: "Jane Smith",
      text: '"The team at ABC Pressure Washing did a fantastic job on my driveway. I highly recommend their services!"',
    },
    {
      id: 3,
      name: "Bob Johnson",
      text: '"Professional and efficient! ABC Pressure Washing exceeded my expectations. Will hire them again."',
    },
  ];

  return (
    <main className="about-page">
      <section className="header-section">
        <div className="main-container">
          {/* <img src={whiteLogo} alt="Jetstream Logo" /> */}
          <img src={whiteAndBlueLogo} alt="Jetstream Logo" />
          {/* <img src={blackLogo} alt="Jetstream Logo" /> */}
          <section className="benefit-container">
            {benefits.map((benefit) => (
              <div className="benefit" key={benefit.title}>
                <div className="benefit-icon">{benefit.icon}</div>
                <h2>{benefit.title}</h2>
                <p>{benefit.description}</p>
              </div>
            ))}
          </section>
        </div>
      </section>
      <section className="vision-section">
        <div className="main-container">
          <div className="workImagesContainer">
            <div className="wrapper-1">
              <div className="group-0">
                {workImages.slice(0, 1).map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`Image ${imgIndex + 2}`}
                    className="vision-item"
                  />
                ))}
              </div>
            </div>
            <div className="wrapper-2">
              <div className="group-1">
                {workImages.slice(1, 3).map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`Image ${imgIndex + 2}`}
                    className="vision-item"
                  />
                ))}
              </div>

              <div className="group-2">
                {workImages.slice(3).map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`Image ${imgIndex + 3}`}
                    className="vision-item"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="vision-text">
            <h1>About Us</h1>
            <p>
              Welcome to Jetstream Pressure Washing, where we specialize in
              restoring the beauty of your property with top-quality pressure
              washing services. Our experienced team uses advanced equipment and
              eco-friendly solutions to deliver remarkable results, leaving your
              surfaces looking pristine and renewed.
            </p>
            <h1>Our Vision</h1>
            <p>
              At Jetstream Pressure Washing, we aim to lead the pressure washing
              industry with exceptional service and customer satisfaction. We
              deliver unparalleled results while focusing on environmental
              responsibility. Through innovation and continuous improvement, we
              enhance properties and positively impact communities. Join us in
              elevating standards in pressure washing.
            </p>
          </div>
        </div>
      </section>
      <section className="testimonial-section">
        <div className="main-container">
          <h1>Great things our client say</h1>
          <div className="testimonial-list">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-item">
                <p className="testimonial-text">{testimonial.text}</p>
                <p className="testimonial-author">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
