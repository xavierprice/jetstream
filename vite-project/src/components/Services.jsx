import React from "react";
import workImage2 from "../assets/work-image2.jpg";
import workImage1 from "../assets/work-Image1.jpg";
import workImage4 from "../assets/workImage4.jpeg";
import workImage5 from "../assets/workImage5.jpeg";
import workImage6 from "../assets/workImage6.jpeg";
import { FaHome, FaTree, FaRoad, FaArrowRight } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Driveway Cleaning",
      description:
        "Restore the look of your driveway with our high-pressure cleaning services,",
      icon: <FaRoad />,
      images: [workImage2, workImage1, workImage4],
      benefits: [
        {
          title: "Removes Tough Stains",
          description:
            "Effectively removes oil, grease, and dirt stains to rejuvenate your driveway's appearance.",
        },
        {
          title: "Increases Curb Appeal",
          description:
            "Enhances your home’s exterior by making your driveway look new and well-maintained.",
        },
        {
          title: "Prevents Weed Growth",
          description:
            "Eliminates weeds and prevents their growth between cracks, prolonging the driveway's life.",
        },
      ],
    },
    {
      title: "House Washing",
      description:
        "Give your home a fresh appearance by removing dirt and grime from its exterior.",
      icon: <FaHome />,
      images: [workImage2, workImage1, workImage4],
      benefits: [
        {
          title: "Protects Exterior Paint",
          description:
            "Gently cleanses the walls, preserving the paint and preventing chipping and fading.",
        },
        {
          title: "Prevents Mold and Mildew",
          description:
            "Eliminates harmful mold and mildew build-up that can damage your home's exterior and affect health.",
        },
        {
          title: "Enhances Overall Appearance",
          description:
            "Improves the look of your home, ensuring it stands out in the neighborhood.",
        },
      ],
    },
    {
      title: "Deck and Patio Cleaning",
      description:
        "Renew the appearance of your deck or patio, preparing them for outdoor gatherings.",
      icon: <FaTree />,
      images: [workImage2, workImage1, workImage4],
      benefits: [
        {
          title: "Restores Original Color",
          description:
            "Brings back the original color and vibrancy of your deck or patio materials.",
        },
        {
          title: "Removes Slippery Algae",
          description:
            "Cleanses algae and moss, reducing slip hazards and maintaining a safe outdoor space.",
        },
        {
          title: "Extends the Life of Wood",
          description:
            "Helps in maintaining the integrity of wooden surfaces, prolonging their lifespan and beauty.",
        },
      ],
    },
  ];

  return (
    <main className="services-page">
      <section className="services-main">
        <h1>Professional Pressure Washing Services Tailored to You</h1>

        <div className="service-grid-container">
          {services.map((service, index) => (
            <div key={index}>
              <div className="service-grid-card">
                <div className="service-icon">{service.icon}</div>
                <div className="service-details">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <hr className="benefits-divider" />
                  <div className="service-benefits">
                    {service.benefits.map((benefit, bIndex) => (
                      <div key={bIndex} className="benefit">
                        <div className="benefit-text">
                          <strong>{benefit.title}</strong>
                          <p>{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="service-buttons">
                    <button className="button-block">Request a quote</button>
                  </div>
                </div>
              </div>
              <div className="service-images">
                {service.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`${service.title} ${imgIndex + 1}`}
                    className="service-image"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
