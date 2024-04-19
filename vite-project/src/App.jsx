import React, { useState, useEffect } from "react";
import { FaHome, FaTree, FaRoad } from "react-icons/fa";
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
//driveway imports
import driveway1 from "./assets/images/driveway-cleaning(5)/1-driveway-before.jpg";
import driveway2 from "./assets/images/driveway-cleaning(5)/2-driveway-after.jpg";
import driveway3 from "./assets/images/driveway-cleaning(5)/3-driveway.jpg";
import driveway4 from "./assets/images/driveway-cleaning(5)/4-driveway-before.jpg";
import driveway5 from "./assets/images/driveway-cleaning(5)/5-driveway-after.jpg";
//exterior imports
import exterior1 from "./assets/images/house-washing(5)/1-exterior-before.jpg";
import exterior2 from "./assets/images/house-washing(5)/2-exterior-after.jpg";
import exterior3 from "./assets/images/house-washing(5)/3-house.jpg";
import exterior4 from "./assets/images/house-washing(5)/4-exterior-before.jpg";
import exterior5 from "./assets/images/house-washing(5)/5-exterior-after.jpg";
//roof and fencing imports
import roofAndFence1 from "./assets/images/roof-and-fencing(5)/1-fence-before.jpg";
import roofAndFence2 from "./assets/images/roof-and-fencing(5)/2-fence-after.jpg";
import roofAndFence3 from "./assets/images/roof-and-fencing(5)/3-fence.jpg";
import roofAndFence4 from "./assets/images/roof-and-fencing(5)/4-fence-before.jpg";
import roofAndFence5 from "./assets/images/roof-and-fencing(5)/5-fence-after.jpg";

import backgroundImage from "./assets/background-images/house-1.jpeg";
import BackgroundImageComponent from "./components/BackgroundImageComponent.jsx";

Modal.setAppElement("#root");

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
      images: [
        { image: driveway1, hashSrc: "LYEMUy%Mo]kCF*t7s;oe$-t7oMR%" },
        { image: driveway2, hashSrc: "LUFY+Jj[SwRlT#a#s;M|-rfiogM|" },
        { image: driveway3, hashSrc: "LmCQx;IVt7ay%%RlaekBXBRkj=fk" },
        { image: driveway4, hashSrc: "LTF?IRMwR$tR.TROenNd_Ns9aKS4" },
        { image: driveway5, hashSrc: "LCC?y4%1ISx_04NIMwkZ.A-o%0tT" },
      ],
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
      images: [
        { image: exterior1, hashSrc: "LXCtU^x_o$WFJbNiWEoes;s:n#Ri" },
        { image: exterior2, hashSrc: "LcCQ+Ax_azo$XYXCRkkDoLofjYWB" },
        { image: exterior3, hashSrc: "LOEfmLIVM_j=tpNIt7j@%OkDogof" },
        { image: exterior4, hashSrc: "LQFF]S?wD*WASm%ixwj]bdtSxut7" },
        { image: exterior5, hashSrc: "LGG+%W.T00o#p1%itTxwWHt9xvxv" },
      ],
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
      title: "Roof and Fence Cleaning",
      description:
        "Renew the appearance of your deck or patio, preparing them for outdoor gatherings.",
      icon: <FaTree />,
      images: [
        { image: roofAndFence1, hashSrc: "LAH2o??wE3%N034,Mxoy00s=%fj[" },
        { image: roofAndFence2, hashSrc: "LJF={n?d9bfi4=RixBRk00V=kEf*" },
        { image: roofAndFence3, hashSrc: "L4G]Q:wUR4IW0I9pI9D*0001-pI;" },
        { image: roofAndFence4, hashSrc: "LADc,CV;N7bU-@xuoeoM00%Oi@%N" },
        { image: roofAndFence5, hashSrc: "LTEf$i-?RmaIT5S8t5V=E3bdj?V=" },
      ],
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
    }, 3000);
    setTimeout(() => {
      setFadeIn(true);
    }, 3250);
  }, []);

  return (
    <Router>
      <ScrollToTopPageChange />
      <main className={`initial-fade-in ${initialFade ? "active" : ""}`}>
        <BackgroundImageComponent
          src={backgroundImage}
          hashSrc="LDHfVZ?c_4?Z04AJEOxTBY=XxBW="
          alt="Background Image"
          className="background-style"
        />
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
              path="/jetstream"
              element={
                <Home
                  services={services}
                  selectedService={selectedService}
                  setSelectedService={setSelectedService}
                  openModal={openModal}
                  phoneNumber={phoneNumber}
                  modifiedEmail={modifiedEmail}
                />
              }
            ></Route>
            <Route
              path="/jetstream/services"
              element={<Services services={services} />}
            ></Route>
            <Route
              path="/jetstream/services/:id"
              element={<Services services={services} />}
            ></Route>
            <Route path="/jetstream/about" element={<About />}></Route>
            <Route
              path="/jetstream/contact"
              element={
                <Contact
                  services={services}
                  selectedService={selectedService}
                  setSelectedService={setSelectedService}
                  openModal={openModal}
                  phoneNumber={phoneNumber}
                  contactLocation={contactLocation}
                  openMaps={openMaps}
                  modifiedEmail={modifiedEmail}
                />
              }
            ></Route>
            <Route
              path="/jetstream/contact/:id"
              element={
                <Contact
                  services={services}
                  selectedService={selectedService}
                  setSelectedService={setSelectedService}
                  openModal={openModal}
                  phoneNumber={phoneNumber}
                  contactLocation={contactLocation}
                  openMaps={openMaps}
                  modifiedEmail={modifiedEmail}
                />
              }
            ></Route>
          </Routes>
          <Footer
            openModal={openModal}
            phoneNumber={phoneNumber}
            modifiedEmail={modifiedEmail}
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
      </main>
    </Router>
  );
};

export default App;
