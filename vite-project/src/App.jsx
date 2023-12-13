import React from "react";
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
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
    </Router>
  );
};

export default App;
