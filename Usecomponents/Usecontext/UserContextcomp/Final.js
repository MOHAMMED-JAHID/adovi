import React, { useContext } from "react";

const Final = () => {
  const message = useContext(Context);
  return (
    <div>
      <h3>First</h3>
      <h2>This is Fifth Component,${message}</h2>
    </div>
  );
};

export default Final;
