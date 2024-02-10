import React, { useState } from "react";
import "./styles.css";

export const Turnary = () => {
  const [name, setname] = useState("user");

  const btnfunc = () => {
    const val = name;
    val === "user" ? setname("Surya") : setname("user");
  };
  return (
    <>
      <div className="maindiv">
        <div className="innerdiv">
          <h1>Hello {name}</h1>
          <button onClick={btnfunc}>click me</button>
        </div>
      </div>
    </>
  );
};
