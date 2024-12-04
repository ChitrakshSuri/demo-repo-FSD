import React, { useState } from "react";

const Day3State = () => {
  const [total, setTotal] = useState(0);
  const [color, setColor] = useState("None");

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {/* Total Counter */}
      <button
        onClick={() => {
          setTotal(total + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setTotal(total - 1);
        }}
      >
        Decrease
      </button>
      <h2>Total: {total}</h2>

      <br />
      <hr />
      <br />

      {/* Favorite Color Selector */}
      <h1>
        My favorite colour is: <span style={{ color: color }}>{color}</span>
      </h1>
      <button
        onClick={() => {
          setColor("Blue");
        }}
      >
        Blue
      </button>
      <button
        onClick={() => {
          setColor("Red");
        }}
      >
        Red
      </button>
      <button
        onClick={() => {
          setColor("Pink");
        }}
      >
        Pink
      </button>
      <button
        onClick={() => {
          setColor("Green");
        }}
      >
        Green
      </button>
    </div>
  );
};

export default Day3State;
