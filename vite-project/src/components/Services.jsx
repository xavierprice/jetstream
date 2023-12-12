import React from "react";
import workImage2 from "../assets/work-image2.jpg";
import workImage3 from "../assets/workImage3.jpeg";
import workImage5 from "../assets/workImage6.jpeg";

const Services = () => {
  const workImages = [workImage2, workImage2, workImage2, workImage2];

  const servicesData = [
    {
      title: "Driveway Cleaning",
      description:
        "Say goodbye to unsightly stains and grime with our professional driveway cleaning service. We utilize high-pressure washing techniques to remove oil, dirt, mold, and mildew, restoring your driveway's pristine appearance. Whether it's concrete, asphalt, or pavers, we'll make sure your driveway not only looks great but also maintains its longevity, enhancing the overall curb appeal of your property.",
    },
    {
      title: "House Washing",
      description:
        "Transform the look of your home with our expert house washing service. Our team uses gentle yet effective pressure washing methods to rid your home's exterior of dirt, algae, and other contaminants. The result? A fresh, clean, and vibrant façade that not only boosts your home's curb appeal but also protects it from potential damage caused by built-up grime and mold, all while extending the life of your paint and siding.",
    },
    {
      title: "Deck and Patio Cleaning",
      description:
        "Your outdoor living spaces deserve to shine, and our deck and patio cleaning service can make that happen. We specialize in safely removing dirt, moss, algae, and weathered stains from your deck, patio, or outdoor surfaces. With our attention to detail and commitment to quality, you can enjoy a clean and inviting outdoor oasis that's ready for relaxation and entertaining, without the risk of slips and falls due to slippery surfaces.",
    },
  ];

  return (
    <div className="services-page">
      <section className="services-main">
        <h1>Pressure Washing Services</h1>
        <ul className="service-list">
          {servicesData.map((service, index) => (
            <li key={index} className="service-item">
              <div className="content-block">
                <div className="service-item-images">
                  {workImages.map((image, imgIndex) => (
                    <div className="service-image" key={imgIndex}>
                      <img
                        src={image}
                        alt={`Work Image ${index + 1}-${imgIndex + 1}`}
                      />
                    </div>
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
