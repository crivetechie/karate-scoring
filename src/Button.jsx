import React from "react";
import "./Button.css";

const Button = ({ value, handlePress }) => {
  return <button onClick={() => handlePress(value)}>{value.toFixed(1)}</button>;
};

export default Button;
