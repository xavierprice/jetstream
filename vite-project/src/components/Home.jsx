import React, { useRef, useState } from "react";
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
  const workImages = [workImage5, workImage2, workImage3, workImage1];

  const [videoTimes, setVideoTimes] = useState({});

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
      <section className="our-mission-home">
        <h3>Our mission:</h3>
        <p>
          Transforming properties and lives by restoring brilliance, one
          pristine surface at a time.
        </p>
      </section>
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
          <div className="who-we-are-images">
            {workImages.map((image, index) => (
              <div className="grid-item" key={index}>
                <img src={image} alt={`Work Image ${index + 1}`} />
              </div>
            ))}
            {/* onMouseEnter={handleMouseEnterSingle}
            onMouseLeave={handleMouseLeaveSingle}
          >
            <video ref={singleVideoRef} muted loop preload="metadata">
              <source src={workVideo3} type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
          </div>
        </div>
      </section>
      <section className="work-preview-section">
        <h2>Our Work</h2>
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
      </section>
    </div>
  );
};

export default Home;
