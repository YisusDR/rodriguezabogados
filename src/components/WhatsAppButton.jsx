import React from "react";

const WhatsAppButton = ({ phoneNumber, message }) => {
  const handleButtonClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const buttonStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#25D366",
    border: "none",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    transition: "transform 0.3s ease",
  };

  const iconStyle = {
    width: "35px",
    height: "35px",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "scale(1.1)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <button
      style={buttonStyle}
      onClick={handleButtonClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={iconStyle}
      />
    </button>
  );
};

export default WhatsAppButton;
