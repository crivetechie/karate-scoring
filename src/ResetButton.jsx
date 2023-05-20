import React from "react";
import "./ResetButton.css"; // Importing CSS for ResetButton

const ResetButton = ({ onClick }) => {
  return (
    <button className="reset-button" onClick={onClick}>
      Reset All
    </button>
  );
};

export default ResetButton;
