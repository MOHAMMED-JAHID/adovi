import React from "react";
import Second from "./Second";

const First = (message) => {
  return (
    <div>
      <h3>First</h3>
      <Second message={message} />
    </div>
  );
};

export default First;
