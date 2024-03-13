import React, { useState, useEffect } from "react";
import { FaHome, FaTree, FaRoad } from "react-icons/fa";
import "./styles/app.scss";
import workImage2 from "./assets/work-image2.jpg";
import workImage1 from "./assets/work-Image1.jpg";
import workImage4 from "./assets/workImage4.jpeg";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import ScrollToTopPageChange from "./components/ScrollToTopPageChange";
import Modal from "react-modal";
import CallModal from "./components/CallModal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

Modal.setAppElement("#root");

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
  const [selectedService, setSelectedService] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [contactInfo, setContactInfo] = useState("");

  const phoneNumber = "0491016876";
  const email = "jetstreampressurewashingau@gmail.com";
  const atIndex = email.indexOf("@");
  const modifiedEmail =
    email.slice(0, atIndex) + "\u200B" + email.slice(atIndex);
  const contactPhoneNumber = "tel:0491016876";
  const contactEmail = "mailto:jetstreampressurewashingau@gmail.com";
  const contactLocation = "Brisbane, QLD, Australia";

  const openModal = (event) => {
    const dataType = event.currentTarget.getAttribute("data-type");
    console.log("dataType:", dataType);
    if (dataType === "phone") {
      setContactInfo(contactPhoneNumber);
    } else if (dataType === "email") {
      setContactInfo(contactEmail);
    }
    setModalIsOpen(true);
  };

  const openMaps = () => {
    const mapsUrl = `https://www.google.com/maps/place/${encodeURIComponent(
      contactLocation
    )}`;
    window.open(mapsUrl, "_blank");
  };

  const services = [
    {
      title: "Driveway Cleaning",
      description:
        "Restore the look of your driveway with our high-pressure cleaning services,",
      icon: <FaRoad />,
      images: [workImage2, workImage1, workImage4, workImage2, workImage1],
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
      images: [workImage2, workImage1, workImage4, workImage2, workImage1],
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
      images: [workImage2, workImage1, workImage4, workImage2, workImage1],
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
      <ScrollToTopPageChange />
      <main className={`initial-fade-in ${initialFade ? "active" : ""}`}>
        <div style={background}>
          <section className={`fade-in ${fadeIn ? "active" : ""}`}>
            <Navbar openModal={openModal} phoneNumber={phoneNumber} />
            <CallModal
              contactPhoneNumber={contactPhoneNumber}
              contactEmail={contactEmail}
              modalIsOpen={modalIsOpen}
              setModalIsOpen={setModalIsOpen}
              contactInfo={contactInfo}
              modifiedEmail={modifiedEmail}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    services={services}
                    selectedService={selectedService}
                    setSelectedService={setSelectedService}
                    openModal={openModal}
                    phoneNumber={phoneNumber}
                  />
                }
              ></Route>
              <Route
                path="/services"
                element={<Services services={services} />}
              ></Route>
              <Route
                path="/services/:id"
                element={<Services services={services} />}
              ></Route>
              <Route path="/about" element={<About />}></Route>
              <Route
                path="/contact"
                element={
                  <Contact
                    services={services}
                    selectedService={selectedService}
                    setSelectedService={setSelectedService}
                    openModal={openModal}
                    phoneNumber={phoneNumber}
                    contactLocation={contactLocation}
                    openMaps={openMaps}
                  />
                }
              ></Route>
              <Route
                path="/contact/:id"
                element={
                  <Contact
                    services={services}
                    selectedService={selectedService}
                    setSelectedService={setSelectedService}
                    openModal={openModal}
                    phoneNumber={phoneNumber}
                    contactLocation={contactLocation}
                    openMaps={openMaps}
                  />
                }
              ></Route>
            </Routes>
            <Footer
              openModal={openModal}
              phoneNumber={phoneNumber}
              email={email}
              contactLocation={contactLocation}
              openMaps={openMaps}
            />
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
