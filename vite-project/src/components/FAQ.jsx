import React, { useState } from "react";

const [activeIndex, setActiveIndex] = useState(null);

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
