import React, { useState } from "react";

//state
const [activeIndex, setActiveIndex] = useState(null);

//obj
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

//toggle faq answers
const toggleAnswer = (index) => {
  setActiveIndex(index === activeIndex ? null : index);
};

const FAQ = () => {
  return (
    <div className="FAQ-page">
      <section className="faq-section">
        <div className="faq-header">
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <div
              className="faq-item"
              key={index}
              onClick={() => toggleAnswer(index)}
            >
              <div className="faq-question">
                <h1>{item.question}</h1>
                <div
                  className={`faq-icon ${
                    activeIndex === index ? "minus" : "plus"
                  }`}
                >
                  {activeIndex === index ? "-" : "+"}
                </div>
              </div>

              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      ;
    </div>
  );
};

export default FAQ;
