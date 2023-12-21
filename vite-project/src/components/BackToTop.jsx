import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

const BackToTop = () => {
  //states
  const [isVisible, setIsVisible] = useState(false);

  //scroll to top
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="back-to-top-component">
      <div
        className={`back-to-top ${isVisible ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        <i>
          <FaChevronUp />
        </i>
      </div>
    </div>
  );
};

export default BackToTop;
