import React, { useState } from "react";
import Button from "./Button";
import "./Matrix.css";
import ResetButton from "./ResetButton";
import TotalDisplay from "./TotalDisplay";

const Matrix = () => {
  const [total, setTotal] = useState(0.0);
  const [operations, setOperations] = useState([]); // Array to keep track of pressed buttons

  const handlePress = (value) => {
    setTotal(total + value);
    setOperations([...operations, value.toFixed(1)]); // Append pressed value to operations array
  };

  const handleReset = () => {
    setTotal(0.0);
    setOperations([]); // Reset operations array
  };

  return (
    <div>
      <div className="matrix">
        {[...Array(20)].map((_, i) => {
          const buttonValue = 7.0 + i * 0.1;
          return (
            <Button key={i} value={buttonValue} handlePress={handlePress} />
          );
        })}
      </div>
      <ResetButton onClick={handleReset} />
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <div style={{ width: '80%' }}>
          <TotalDisplay total={`${operations.join(" , ")}`} />
        </div>
        <div style={{ width: '20%' }}>
          <TotalDisplay total={`${total.toFixed(1)}`} />
        </div>
      </div>
    </div>
  );
};

export default Matrix;
