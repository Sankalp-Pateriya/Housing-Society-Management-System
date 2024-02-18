import React from "react";
import "./BookFlatPopup.css"; // Import your CSS file for styling

const Popup = ({ title, message, onYes, onCancel }) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="button-container">
          <button className="yes-button" onClick={onYes}>
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
