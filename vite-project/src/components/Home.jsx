import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaClipboardList,
  FaRegComments,
  FaHouseUser,
  FaPhone,
  FaEnvelope,
  FaRegClock,
} from "react-icons/fa";
import ImageComponent from "./ImageComponent";

import drivewayBefore from "../assets/images/home-page(6)/driveway-before.jpg";
import drivewayAfter from "../assets/images/home-page(6)/driveway-After.jpg";
import exteriorBefore from "../assets/images/home-page(6)/exterior-4-before.jpg";
import exteriorAfter from "../assets/images/home-page(6)/exterior-4-after.jpg";
import fenceBefore from "../assets/images/home-page(6)/fence-5-before.jpg";
import fenceAfter from "../assets/images/home-page(6)/fence-5-after.jpg";

import workVideo1 from "../assets//videos/exterior.mp4";
import workVideo2 from "../assets//videos/intro-1.mp4";
import workVideo3 from "../assets//videos/intro-2.mp4";
import workVideo4 from "../assets//videos/intro-3.mp4";

import poster1 from "../assets//videos/exterior.jpg";
import poster2 from "../assets//videos/intro-1.jpg";
import poster3 from "../assets//videos/intro-2.jpg";
import poster4 from "../assets//videos/intro-3.jpg";

import whiteAndBlueLogo from "../assets/logos/white-and-blue-logo.png";

import ContactForm from "./ContactForm";
import BackToTop from "./BackToTop";

const Home = ({
  services,
  selectedService,
  setSelectedService,
  phoneNumber,
  openModal,
  modifiedEmail,
}) => {
  //obj arrays
  const stepsData = [
    {
      title: "Free Consultation",
      description:
        "Contact us to get a free estimate for your pressure washing needs.",
      icon: <FaRegComments />,
      button: "Claim a free estimate",
    },
    {
      title: "Pick a Date and Time",
      description:
        "After Speaking With One Of Our Experts We Will Arrange To Come Past At A Time Convenient For You.",
      icon: <FaClipboardList />,
      button: `Call us ${phoneNumber}`,
    },
    {
      title: "Enjoy Your New Home",
      description: "Relax and enjoy your newly cleaned and revitalized home!",
      icon: <FaHouseUser />,
      button: "Contact us now!",
    },
  ];
  const workVideos = [
    { video: workVideo1, poster: poster1 },
    { video: workVideo2, poster: poster2 },
    { video: workVideo3, poster: poster3 },
    { video: workVideo4, poster: poster4 },
  ];
  const workImages = [
    { image: drivewayBefore, hashSrc: "LKHed:s,E2xvKnM{xut8yFs-t7of" },
    { image: exteriorBefore, hashSrc: "LXFs0;I^M~ax%jtTbcayNLtSohj[" },
    { image: fenceBefore, hashSrc: "L8FPvPDiM|oN0IISoMR%00D+kXRP" },
    { image: drivewayAfter, hashSrc: "LLFiV]~U%JRk-?-nxWoetURjxGxZ" },
    { image: exteriorAfter, hashSrc: "LbD,TNR@xTW9gltTRPs*EBf.s:j[" },
    { image: fenceAfter, hashSrc: "L4G+,Lr*R4IW0I5MI9D*0001-pI;" },
  ];

  const togglePlayPause = (index, event, eventType) => {
    if (eventType === "click" && event) {
      event.preventDefault();
    }
    const video = document.getElementById(`video-${index}`);
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handleVideoInteraction = (index) => {
    return {
      onClick: (event) => togglePlayPause(index, event, "click"),
      onTouchStart: (event) => togglePlayPause(index, event, "touch"),
    };
  };

  return (
    <main className="home-page">
      <section className="heading-section">
        <div className="main-container">
          <div className="heading-section-left">
            <section className="heading-introduction">
              <div className="image">
                <img src={whiteAndBlueLogo} alt="Jetstream logo" />
              </div>
              <p>
                Enhance your property's curb appeal and cleanliness effortlessly
                with our top-tier pressure washing services. From driveways to
                exteriors, we restore the shine to your surfaces, making your
                property look brand new.
              </p>
            </section>
          </div>
          <div className="heading-section-right">
            <ContactForm
              services={services}
              selectedService={selectedService}
              setSelectedService={setSelectedService}
            />
          </div>
        </div>
      </section>
      <span className="blank-banner"></span>
      <section className="services-section">
        <div className="service-container">
          <h1>Services we offer</h1>
          <p>
            Revitalize your space with our top-notch pressure washing services,
            specializing in removing stains and restoring the beauty of your
            property. Elevate your curb appeal with Jetstream – your go-to for
            professional pressure washing solutions!
          </p>
          <div className="service-grid-container">
            {services.map((service, index) => (
              <div className="service-grid-card" key={index}>
                <div className="service-icon">
                  <div className="service-icon">{service.icon}</div>
                </div>
                <div className="service-details">
                  <div className="service-title-description">
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                  </div>
                  <div className="service-buttons">
                    <NavLink
                      to={`/services/${index}/`}
                      key={`services${index}`}
                    >
                      <button className="button-block">Learn more</button>
                    </NavLink>
                    <NavLink
                      to={`/contact/${index}/`}
                      key={`contact${index}`}
                    >
                      <button className="button-block">Request a quote</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <span className="blank-banner"></span>
      <section className="introduction-section">
        <div className="content-container">
          <div className="content-block">
            <div className="who-we-are-images">
              {workImages.map((item, index) => (
                <div className="grid-item" key={index}>
                  <ImageComponent
                    src={item.image}
                    hashSrc={item.hashSrc}
                    width={300}
                    height={400}
                    alt="Jetstream Image"
                    className="grid-item"
                  />
                </div>
              ))}
            </div>
            <div className="text">
              <div className="introduction">
                <h2>Who We Are</h2>
                <p>
                  We are a dedicated team committed to providing top-quality
                  pressure washing services. From revitalizing driveways to
                  refreshing home exteriors, we take pride in bringing back the
                  shine to your spaces. Our goal is simple: to exceed your
                  expectations and leave a lasting impression with our quality
                  workmanship and personalized service.
                </p>
              </div>
              <div className="highlights">
                <h2>Why Choose Us?</h2>
                <div className="text-button">
                  <ul>
                    <li>
                      Experienced professionals with over 3 years in the
                      industry.
                    </li>
                    <li>
                      Environmentally friendly cleaning solutions for a greener
                      tomorrow.
                    </li>
                    <li>100% customer satisfaction guaranteed.</li>
                  </ul>
                  <div className="button-container">
                    <NavLink to="/about/">
                      <button className="button-block">Learn More</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="stats-section">
        <div className="main-container">
          <div className="stats-text">
            <h1>Whether it's Commercial or Residential, We Handle it All.</h1>
            <p>
              Connect with our specialists today to secure your complimentary
              fixed-price estimate. Book any of our services this January, and
              enjoy a 15% discount.
            </p>
          </div>
          <div className="stats-container">
            <div>
              <ul>
                <li className="stats-card">
                  <h2>50+</h2>
                  <p>Happy customers</p>
                </li>
                <li className="stats-card">
                  <h2>500+</h2>
                  <p>Projects complete</p>
                </li>
                <li className="stats-card">
                  <h2>100%</h2>
                  <p>Satisfaction rate</p>
                </li>
                <li className="stats-card">
                  <h2>3+</h2>
                  <p>Years experience</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="steps-section">
        <div className="main-container">
          <h1>How we work</h1>
          <p>
            Take a look at how we run things here at Jetstream pressure washing.
          </p>
          <div className="steps-container">
            {stepsData.map((step, index) => (
              <div className="step" key={index}>
                <div className="step-number">Step {index + 1}</div>
                <span className="icon">{step.icon}</span>
                <h2>{step.title}</h2>
                <div className="step-spacer">
                  <p>{step.description}</p>

                  {index === 1 ? (
                    <button
                      className="button-block"
                      onClick={openModal}
                      data-type="phone"
                    >
                      {step.button}
                    </button>
                  ) : (
                    <NavLink to="/contact/">
                      <button className="button-block">{step.button}</button>
                    </NavLink>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <span className="blank-banner"></span>
      <section className="work-preview-section">
        {" "}
        <div className="main-container">
          <h1>See Jetstream in action!</h1>
          <p>
            Click on any one of the videos to see us restoring properties all
          </p>
          <div className="work-preview-container">
            {workVideos.map((videoData, index) => {
              const { video, poster } = videoData;
              if (typeof video === "string" && video.endsWith(".mp4")) {
                const videoId = `video-${index}`;
                return (
                  <div key={index} className="video-wrapper">
                    <video
                      muted
                      controls
                      playsInline
                      id={videoId}
                      className="video"
                      preload="auto"
                      poster={poster}
                      {...handleVideoInteraction(index)}
                    >
                      <source src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                );
              } else {
                return (
                  <img key={index} src={video} alt={`Image ${index + 1}`} />
                );
              }
            })}
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="main-container">
          <div className="cta-form">
            <ContactForm
              className="contact-form"
              services={services}
              selectedService={selectedService}
              setSelectedService={setSelectedService}
            />
          </div>
          <div className="cta-text">
            <div className="cta-header">
              <h1>Restore the Beauty of Your Home's Exterior!</h1>
              <p>
                Our services will have your neighbours wish they had us booked
                in sooner!
              </p>
            </div>
            <ul className="cta-contact">
              <span className="phone-hours">
                <li onClick={openModal} data-type="phone">
                  <div>
                    <span className="list-header">
                      <p>Call us</p>
                      <FaPhone className="fa-icon" />
                    </span>
                    <h3>{phoneNumber}</h3>
                  </div>
                </li>
                <li>
                  <div>
                    <span className="list-header">
                      <p>Open hours</p>
                      <FaRegClock className="fa-icon" />
                    </span>
                    <span className="open-hours">
                      <h3>Monday - Sunday:</h3>
                      <h3>07:00 - 18:00</h3>
                    </span>
                  </div>
                </li>
              </span>
              <li onClick={openModal} data-type="email">
                <div>
                  <span className="list-header">
                    <p>Email us</p>
                    <FaEnvelope className="fa-icon" />
                  </span>
                  <h3 className="email-address">{modifiedEmail}</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <BackToTop />
    </main>
  );
};

export default Home;
