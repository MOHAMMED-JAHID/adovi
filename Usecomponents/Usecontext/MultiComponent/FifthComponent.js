import React from "react";
import FirstEmptyComponent from "./FirstEmptyComponent";
import SecondEmptyComponent from "./SecondEmptyComponent";
import ThirdEmptyComponent from "./ThirdEmptyComponent";

const FifthComponent = () => {
  return (
    <div>
      <h1>Fifth Component</h1>
      <FirstEmptyComponent />
      <SecondEmptyComponent />
      <ThirdEmptyComponent />
    </div>
  );
};

export default FifthComponent;
