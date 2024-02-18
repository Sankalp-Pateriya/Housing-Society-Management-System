import React from "react";
import "./BookFlatPopup.css"; // Import your CSS file for styling

const BookFlatPopup = ({ title, message, onYes, onCancel, flatId }) => {
  const handleYesClick = () => {
    // Invoke the onYes callback with the flatId
    onYes(flatId);
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="button-container">
          <button className="yes-button" onClick={handleYesClick}>
            Yes
          </button>
          <button className="cancel-button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookFlatPopup;
