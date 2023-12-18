import React, { useRef, useState, useEffect } from "react";
import { FaHome, FaTree, FaRoad, FaArrowDown } from "react-icons/fa";
import workImage1 from "../assets/work-image1.jpg";
import workImage2 from "../assets/work-image2.jpg";
import workImage3 from "../assets/workImage3.jpeg";
import workImage5 from "../assets/workImage5.jpeg";

import workVideo1 from "../assets/workVideo1.mp4";
import workVideo2 from "../assets/workVideo2.mp4";
import workVideo3 from "../assets/workVideo3.mp4";
import workVideo4 from "../assets/workVideo4.mp4";
import workVideo5 from "../assets/workVideo5.mp4";

import Contact from "./Contact";

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
  const workPreviews = [workVideo1, workVideo5, workVideo2, workVideo4];
  const workImages = [
    workImage5,
    workImage2,
    workImage3,
    workImage1,
    workImage3,
    workImage1,
  ];
  const faqItems = [
    {
      question: "1. What is pressure washing?",
      answer:
        "Pressure washing, also known as power washing, is a cleaning method that uses a high-pressure stream of water to remove dirt, grime, mold, mildew, and other contaminants from surfaces such as driveways, sidewalks, decks, and siding. It is an effective way to restore the appearance of various outdoor surfaces.",
    },
    {
      question: "2. Why should I hire a professional pressure washing service?",
      answer:
        "Hiring a professional pressure washing service ensures that the job is done safely and effectively. Professionals have the right equipment and expertise to clean surfaces without causing damage. DIY pressure washing can lead to accidents and surface damage if not done correctly.",
    },
    {
      question: "3. What surfaces can be pressure washed?",
      answer:
        "Pressure washing is suitable for a wide range of surfaces, including concrete, brick, wood, vinyl siding, stucco, and more. It can be used to clean driveways, sidewalks, decks, fences, and the exterior of buildings.",
    },
    {
      question: "4. Is pressure washing environmentally friendly?",
      answer:
        "Pressure washing is an eco-friendly cleaning method when done responsibly. Professionals use biodegradable detergents and take precautions to prevent water runoff into storm drains. It helps remove contaminants and pollutants from surfaces, improving the overall environment.",
    },
    {
      question:
        "5. How often should I schedule pressure washing for my home or business?",
      answer:
        "The frequency of pressure washing depends on factors such as the climate, location, and the type of surfaces you want to clean. Generally, it's a good idea to schedule pressure washing annually to prevent the buildup of dirt and grime. However, high-traffic areas may require more frequent cleaning.",
    },
  ];

  const [videoTimes, setVideoTimes] = useState({});
  const [hasWrapped, setHasWrapped] = useState(false);
  const [showAnswers, setShowAnswers] = useState({});

  //single video handling
  const singleVideoRef = useRef(null);
  const handleMouseEnterSingle = () => {
    const video = singleVideoRef.current;
    if (video) {
      const currentTime = videoTimes[video.src] || 0;
      video.currentTime = currentTime;
      video.play();
    }
  };
  const handleMouseLeaveSingle = () => {
    const video = singleVideoRef.current;
    if (video) {
      const currentTime = video.currentTime;
      setVideoTimes((prevTimes) => ({
        ...prevTimes,
        [video.src]: currentTime,
      }));
      video.pause();
    }
  };

  //map video handling
  const videoRefs = workPreviews.map(() => useRef(null));
  const handleMouseEnter = (index) => {
    videoRefs[index].current.play();
    if (videoTimes[index] !== undefined) {
      video.currentTime = videoTimes[index];
    }
  };
  const handleMouseLeave = (index) => {
    const video = videoRefs[index].current;
    setVideoTimes((prevTimes) => ({
      ...prevTimes,
      [index]: video.currentTime,
    }));
    video.pause();
  };

  //add wrapped class
  useEffect(() => {
    const handleResize = () => {
      const contentBlock = document.querySelector(
        ".introduction-section .content-block"
      );

      if (contentBlock) {
        const contentBlockWidth = contentBlock.clientWidth;
        const contentBlockHeight = contentBlock.clientHeight;

        const minHeightThreshold = 600;
        const minWidthThreshold = 1024;

        if (
          contentBlockHeight > minHeightThreshold &&
          contentBlockWidth < minWidthThreshold
        ) {
          setHasWrapped(true);
        } else {
          setHasWrapped(false);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //toggle faq answers
  const toggleAnswer = (index) => {
    setShowAnswers((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="home-page">
      <section className="heading-section">
        <section className="heading-introduction">
          <h1>
            Revitalize Your Property's Sparkle with Professional Pressure
            Washing Services!
          </h1>
          <p>
            Enhance your property's curb appeal and cleanliness effortlessly
            with our top-tier pressure washing services. From driveways to
            exteriors, we restore the shine to your surfaces, making your
            property look brand new.
          </p>
        </section>
        <section className="mission-section">
          <h1>Our mission:</h1>
          <p>
            Transforming properties and lives by restoring brilliance, one
            pristine surface at a time.
          </p>
        </section>
        <section className="brief-overview">
          <h1>50+ Clients</h1>
          <h1>50+ Properties restored</h1>
          <h1>100% Client satisfaction</h1>
        </section>
      </section>
      <section className="services-section">
        <div className="service-container">
          <h1>
            Services we offer <FaArrowDown style={{ marginLeft: "10px" }} />
          </h1>
          <div className="service-grid-container">
            {services.map((service, index) => (
              <div className="service-grid-card" key={index}>
                <div className="service-icon">
                  <div className="service-icon">{service.icon}</div>
                </div>
                <div className="service-details">
                  <h1>{service.title}</h1>
                  <p>{service.description}</p>
                  <div className="service-buttons">
                    <button className="button-block">Learn more</button>
                    <button className="button-block">Request a quote</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="introduction-section">
        <div className="content-container">
          <div className="content-block">
            <div className={`who-we-are-images ${hasWrapped ? "wrapped" : ""}`}>
              {workImages.map((image, index) => (
                <div className="grid-item" key={index}>
                  <img src={image} alt={`Work Image ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className={`text ${hasWrapped ? "wrapped-text" : ""}`}>
              <div className="introduction">
                <h1>Who We Are</h1>
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
                <h1>Why Choose Us?</h1>
                <ul>
                  <li>
                    Experienced professionals with over 10 years in the
                    industry.
                  </li>
                  <li>
                    Environmentally friendly cleaning solutions for a greener
                    tomorrow.
                  </li>
                  <li>100% customer satisfaction guaranteed.</li>
                </ul>
                <button className="button-block">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="work-preview-section">
        <div className="main-container">
          <h1>Our Work</h1>
          <div className="work-preview-container">
            {workPreviews.map((preview, index) => {
              if (typeof preview === "string" && preview.endsWith(".mp4")) {
                return (
                  <div
                    key={index}
                    className="video-wrapper"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                  >
                    <video ref={videoRefs[index]} muted loop preload="metadata">
                      <source src={preview} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                );
              } else {
                return (
                  <img key={index} src={preview} alt={`Image ${index + 1}`} />
                );
              }
            })}
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="cta-text">
          <h1>Restore the Beauty of Your Home's Exterior!</h1>
        </div>

        <section className="cta-content">
          <div className="cta-media">
            <img src={workImage3} alt="JPW team" />
          </div>
          <div className="cta-form">
            <Contact />
          </div>
        </section>
        <section className="faq-section">
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <div
                className="faq-item"
                key={index}
                onClick={() => toggleAnswer(index)}
              >
                <h3>{item.question}</h3>
                {showAnswers[index] && <p>{item.answer}</p>}
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
