import React from "react";
import workImage2 from "../assets/work-image2.jpg";
import workImage1 from "../assets/work-Image1.jpg";
import workImage1Cropped from "../assets/work-Image1-heightCropped.png";
import workImage4 from "../assets/workImage4.jpeg";

const About = () => {
  const workImages = [workImage1, workImage2, workImage2, workImage1Cropped];

  return (
    <main className="about-page">
      <section className="header-section">
        <div className="main-container">
          <h1>About Us</h1>
          <p>
            Welcome to Jetstream Pressure Washing, where we specialize in
            restoring the beauty of your property with top-quality pressure
            washing services. Our experienced team uses advanced equipment and
            eco-friendly solutions to deliver remarkable results, leaving your
            surfaces looking pristine and renewed. Choose Jetstream for
            reliable, efficient, and affordable cleaning solutions that enhance
            your property's curb appeal and longevity.
          </p>
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
    </main>
  );
};

export default About;
