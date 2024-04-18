import React from "react";
import {
  FaRegClock,
  FaHandSparkles,
  FaTrophy,
  FaUmbrella,
} from "react-icons/fa";
import whiteAndBlueLogo from "../assets/logos/white-and-blue-logo.png";

import aboutImage1 from "../assets/images/about-page(4)/1-driveway.jpg";
import aboutImage2 from "../assets/images/about-page(4)/2-driveway.jpg";
import aboutImage3 from "../assets/images/about-page(4)/3-driveway.jpg";
import aboutImage4Cropped from "../assets/images/about-page(4)/4-house.jpg";
import BackToTop from "../components/BackToTop";
import ImageComponent from "./ImageComponent";

const About = () => {
  const workImages = [
    aboutImage1,
    aboutImage2,
    aboutImage3,
    aboutImage4Cropped,
  ];
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
        "Quality performance and reliability with our high-quality products.",
    },
    {
      icon: <FaUmbrella />,
      title: "Insurance",
      description: "Stay protected and secure with our insurance coverage.",
    },
  ];
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      text: '"I was amazed by the quality of service provided by Jetstream Pressure Washing. My house looks brand new!"',
    },
    {
      id: 2,
      name: "Jane Smith",
      text: '"The team at Jetstream Pressure Washing did a fantastic job on my driveway. I highly recommend their services!"',
    },
    {
      id: 3,
      name: "Bob Johnson",
      text: '"Professional and efficient! Jetstream Pressure Washing exceeded my expectations. Will hire them again."',
    },
  ];

  return (
    <main className="about-page">
      <section className="header-section">
        <div className="main-container">
          <div className="image">
            <img src={whiteAndBlueLogo} alt="Jetstream logo" />
          </div>
          <section className="benefit-container">
            {benefits.map((benefit) => (
              <div className="benefit" key={benefit.title}>
                <div className="benefit-icon">{benefit.icon}</div>
                <span>
                  <h1>{benefit.title}</h1>
                  <hr className="benefit-divider" />
                </span>
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
            <span>
              <h1>About Us</h1>
              <p>
                Welcome to Jetstream Pressure Washing, where we specialize in
                restoring the beauty of your property with top-quality pressure
                washing services. Our experienced team uses advanced equipment
                and eco-friendly solutions to deliver remarkable results,
                leaving your surfaces looking pristine and renewed.
              </p>
            </span>
            <span>
              <h1>Our Vision</h1>
              <p>
                At Jetstream Pressure Washing, we aim to lead the pressure
                washing industry with exceptional service and customer
                satisfaction. We deliver unparalleled results while focusing on
                environmental responsibility.
              </p>
            </span>
          </div>
        </div>
      </section>
      <section className="testimonial-section">
        <div className="main-container">
          <h1>Great things our clients have to say</h1>
          <hr className="benefits-divider" />
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
      <BackToTop />
    </main>
  );
};

export default About;
