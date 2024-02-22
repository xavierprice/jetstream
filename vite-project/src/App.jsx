import React, { useState, useEffect } from "react";
import "./styles/app.scss";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const background = {
  backgroundImage: `url(/src/assets/clean-house.jpg`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  height: "100%",
  backgroundPosition: "center",
};

const App = () => {
  const [initialFade, setinitialFade] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setinitialFade(true);
    });
    setTimeout(() => {
      setShowWelcomeMessage(false);
      setFadeIn(true);
    }, 3000);
  }, []);

  return (
    <Router>
      <main className={`initial-fade-in ${initialFade ? "active" : ""}`}>
        <div style={background}>
          <section className={`fade-in ${fadeIn ? "active" : ""}`}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/services" element={<Services />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
            </Routes>
            <Footer />
          </section>
          <section
            className={`welcome-message ${showWelcomeMessage ? "active" : ""}`}
          >
            <h1>Welcome to Jetstream Pressure Washing!</h1>
            <p>We're glad you're here.</p>
          </section>
        </div>
      </main>
    </Router>
  );
};

export default App;
