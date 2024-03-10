import React, { useEffect } from "react";
import Modal from "react-modal";
import { useLocation } from "react-router-dom";

const CallModal = ({
  phoneNumber,
  contactPhoneNumber,
  modalIsOpen,
  setModalIsOpen,
  contactInfo,
  contactEmail,
}) => {
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const simulateCallOrEmail = () => {
    if (contactInfo && contactInfo.startsWith("tel:")) {
      alert(`Simulating a call to ${contactInfo.replace("tel:", "")}`);
    } else if (contactInfo && contactInfo.startsWith("mailto:")) {
      alert(
        `Simulating an email to ${contactInfo.replace(
          "mailto:",
          ""
        )} after opening email client`
      );
    } else {
      console.error("Invalid contactInfo:", contactInfo);
    }
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
      {contactInfo === contactPhoneNumber && (
        <div>
          <h2>Call {contactPhoneNumber.replace("tel:", "")}?</h2>
          <section className="call-cancel">
            <button onClick={simulateCallOrEmail} className="button-block">
              Call
            </button>
            <button onClick={closeModal} className="button-block">
              Cancel
            </button>
          </section>
        </div>
      )}
      {contactInfo === contactEmail && (
        <div>
          <h2>Email {contactEmail.replace("mailto:", "")}?</h2>
          <section className="call-cancel">
            <button
              className="button-block"
              onClick={() => {
                navigator.clipboard.writeText(
                  contactEmail.replace("mailto:", "")
                );
                closeModal();
                alert("Email copied to clipboard!");
              }}
            >
              Copy
            </button>
            <button onClick={simulateCallOrEmail} className="button-block">
              Email
            </button>
            <button onClick={closeModal} className="button-block">
              Cancel
            </button>
          </section>
        </div>
      )}
    </Modal>
  );
};

export default CallModal;
