import React from "react";
import Third from "./Third";

const Second = (message) => {
  return (
    <>
      <h3>Second</h3>
      <Third message={message} />
    </>
  );
};

export default Second;
