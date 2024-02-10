import React, { useState } from "react";
function Usestate1() {
  const [color, setColor] = useState("yellow");
  function bluecolor() {
    setColor("Blue");
  }
  return (
    <>
      <h1 style={{ backgroundColor: "burlywood" }}>
        My favorite color is {color}!
      </h1>
      <button type="button" style={{ color: "blue" }} onClick={bluecolor}>
        Blue
      </button>
      <button
        type="button"
        style={{ color: "red" }}
        onClick={() => setColor("red")}
      >
        Red
      </button>
      <button
        type="button"
        style={{ color: "pink" }}
        onClick={() => setColor("pink")}
      >
        Pink
      </button>
      <button
        type="button"
        style={{ color: "green" }}
        onClick={() => setColor("green")}
      >
        Green
      </button>
    </>
  );
}

export default Usestate1;
