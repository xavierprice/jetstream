import React, {useEffect} from "react";
import Modal from "react-modal";
import { useLocation } from "react-router-dom";

const CallModal = ({ phoneNumber, modalIsOpen, setModalIsOpen }) => {
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const simulateCall = () => {
    alert(`Simulating a call to ${phoneNumber}`);
    closeModal();
  };

  const location = useLocation();

  useEffect(() => {
    const closeModalOnRouteChange = () => {
      setModalIsOpen(false);
    };
    const unlisten = () => {};
    closeModalOnRouteChange(); 
    return () => {
      unlisten();
    };
  }, [location, setModalIsOpen]);

  return (
    <Modal
      className={`modal-main ${
        modalIsOpen.toString() === "true" ? "active" : ""
      }`}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
    >
      <div>
        <h2>Call {phoneNumber}?</h2>
        <section className="call-cancel">
          <button onClick={simulateCall} className="button-block">
            Call
          </button>
          <button onClick={closeModal} className="button-block">
            Cancel
          </button>
        </section>
      </div>
    </Modal>
  );
};

export default CallModal;
