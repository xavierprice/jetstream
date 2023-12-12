import React, { useState } from "react";
import workImage2 from "../assets/work-image2.jpg";
import workImage1 from "../assets/work-Image1.jpg";
import workImage4 from "../assets/workImage4.jpeg";
import workImage5 from "../assets/workImage5.jpeg";
import workImage6 from "../assets/workImage6.jpeg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Services = () => {
  const servicesData = [
    {
      title: "Driveway Cleaning",
      description:
        "Say goodbye to unsightly stains and grime with our professional driveway cleaning service. We utilize high-pressure washing techniques to remove oil, dirt, mold, and mildew, restoring your driveway's pristine appearance. Whether it's concrete, asphalt, or pavers, we'll make sure your driveway not only looks great but also maintains its longevity, enhancing the overall curb appeal of your property.",
      info: [
        "Simple, yet effective",
        "Friendly pricing and faces",
        "Exceeding expectations",
      ],
      blurb: [
        "Fresh driveway in less than 2 hours",
        "blah blah blah",
        "blah blah blah",
      ],
      images: [workImage1, workImage2, workImage5],
    },
    {
      title: "House Washing",
      description:
        "Transform the look of your home with our expert house washing service. Our team uses gentle yet effective pressure washing methods to rid your home's exterior of dirt, algae, and other contaminants. The result? A fresh, clean, and vibrant façade that not only boosts your home's curb appeal but also protects it from potential damage caused by built-up grime and mold, all while extending the life of your paint and siding.",
      images: [workImage1, workImage2, workImage5],
    },
    {
      title: "Deck and Patio Cleaning",
      description:
        "Your outdoor living spaces deserve to shine, and our deck and patio cleaning service can make that happen. We specialize in safely removing dirt, moss, algae, and weathered stains from your deck, patio, or outdoor surfaces. With our attention to detail and commitment to quality, you can enjoy a clean and inviting outdoor oasis that's ready for relaxation and entertaining, without the risk of slips and falls due to slippery surfaces.",
      images: [workImage1, workImage2, workImage5],
    },
  ];
  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    new Array(servicesData.length).fill(0)
  );

  const scrollLeft = (serviceIndex) => {
    if (currentImageIndexes[serviceIndex] > 0) {
      const updatedIndexes = [...currentImageIndexes];
      updatedIndexes[serviceIndex] -= 1;
      setCurrentImageIndexes(updatedIndexes);
    }
  };

  const scrollRight = (serviceIndex) => {
    const currentServiceImages = servicesData[serviceIndex].images;
    if (currentImageIndexes[serviceIndex] < currentServiceImages.length - 1) {
      const updatedIndexes = [...currentImageIndexes];
      updatedIndexes[serviceIndex] += 1;
      setCurrentImageIndexes(updatedIndexes);
    }
  };

  return (
    <div className="services-page">
      <section className="services-main">
        <h1>Pressure Washing Services</h1>
        <ul className="service-list">
          {servicesData.map((service, serviceIndex) => (
            <li key={serviceIndex} className="service-item">
              <div className="content-block">
                <div className="service-item-images">
                  <img
                    src={service.images[currentImageIndexes[serviceIndex]]}
                    alt={`Work Image ${serviceIndex + 1}`}
                  />
                  <FaArrowLeft
                    className="arrow-icon left"
                    onClick={() => scrollLeft(serviceIndex)}
                  />
                  <FaArrowRight
                    className="arrow-icon right"
                    onClick={() => scrollRight(serviceIndex)}
                  />
                </div>
                
                <div>
                  {service.info &&
                    service.info.map((infoText, index) => (
                      <section className="strategy-block" key={index}>
                        <h4>{infoText}</h4>
                        {service.blurb && <p>{service.blurb[index]}</p>}
                      </section>
                    ))}
                </div>

                <div className="text">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <button className="button-block">Request a quote</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Services;
