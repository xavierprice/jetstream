import React, { useRef, useState, useEffect } from "react";
import { FaHome, FaTree, FaRoad, FaArrowDown } from "react-icons/fa";
import workImage1 from "../assets/work-image1.jpg";
import workImage2 from "../assets/work-image2.jpg";
import workImage5 from "../assets/workImage5.jpeg";

import workVideo1 from "../assets/workVideo1.mp4";
import workVideo2 from "../assets/workVideo2.mp4";
import workVideo3 from "../assets/workVideo3.mp4";
import workVideo4 from "../assets/workVideo4.mp4";
import workVideo5 from "../assets/workVideo5.mp4";

import Contact from "./Contact";
import BackToTop from "./BackToTop";

const Home = () => {
  //obj arrays
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
        "Renew the appearance of your deck or patio, preparing them for the outdoors.",
      icon: <FaTree />,
    },
  ];
  const workPreviews = [workVideo1, workVideo5, workVideo2, workVideo4];
  const workImages = [
    workImage5,
    workImage2,
    workImage5,
    workImage1,
    workImage5,
    workImage1,
  ];
  const ctaImages = [workImage5, workImage2, workImage1];

  //states
  const [videoTimes, setVideoTimes] = useState({});
  const [hasWrappedCBlock, setHasWrappedCBlock] = useState(false);
  const [hasWrappedCta, setHasWrappedCta] = useState(false);

  //  video handling
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

  //  handling functions
  //add wrapped class
  useEffect(() => {
    const handleResize = () => {
      const contentBlock = document.querySelector(
        ".introduction-section .content-block"
      );
      const ctaContent = document.querySelector(".cta-section .cta-content");

      if (contentBlock || ctaContent) {
        const contentBlockWidth = contentBlock.clientWidth;
        const contentBlockHeight = contentBlock.clientHeight;

        const ctaContentWidth = ctaContent.clientWidth;
        const ctaContentHeight = ctaContent.clientHeight;

        const minHeightThresholdCBlock = 700;
        const minWidthThresholdCBlock = 1024;

        const minHeightThresholdCta = 600;
        const minWidthThresholdCta = 1400;

        if (
          contentBlockHeight > minHeightThresholdCBlock &&
          contentBlockWidth < minWidthThresholdCBlock
        ) {
          setHasWrappedCBlock(true);
        } else {
          setHasWrappedCBlock(false);
        }

        if (
          ctaContentHeight > minHeightThresholdCta &&
          ctaContentWidth < minWidthThresholdCta
        ) {
          setHasWrappedCta(true);
        } else {
          setHasWrappedCta(false);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="home-page">
      <section className="heading-section">
        <div className="heading-section-left">
          <section className="heading-introduction">
            <h1>
              Revitalize Your Property's Sparkle with{" "}
              <span className="highlight">
                Jetstream's Pressure Washing Services!
              </span>
            </h1>
            <p>
              Enhance your property's curb appeal and cleanliness effortlessly
              with our top-tier pressure washing services. From driveways to
              exteriors, we restore the shine to your surfaces, making your
              property look brand new.
            </p>
          </section>
          {/* <section className="mission-section">
            <h1>Our mission:</h1>
            <p>
              Transforming properties and lives by restoring brilliance, one
              pristine surface at a time.
            </p>
          </section> */}
          {/* <section className="brief-overview">
            <h1>50+ Clients</h1>
            <h1>50+ Properties restored</h1>
            <h1>100% Client satisfaction</h1>
          </section> */}
        </div>
        <div className="heading-section-right">
          <Contact />
        </div>
      </section>
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
            <div
              className={`who-we-are-images ${
                hasWrappedCBlock ? "wrapped" : ""
              }`}
            >
              {workImages.map((image, index) => (
                <div className="grid-item" key={index}>
                  <img src={image} alt={`Work Image ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className={`text ${hasWrappedCBlock ? "wrapped-text" : ""}`}>
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
        <h1>Restore the Beauty of Your Home's Exterior!</h1>
        <section className="cta-content">
          <div className={`cta-images ${hasWrappedCta ? "wrapped" : ""}`}>
            {ctaImages.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index}`} />
            ))}
          </div>
          <div className="cta-form">
            <Contact />
          </div>
        </section>
      </section>
      <BackToTop />
    </div>
  );
};

export default Home;
