import React, { useState } from "react";

const Parentstate = () => {
  Const[(message, setMessage)] = useState("Hello from Parent");
  return (
    <div>
      <h1>Parent Component saying this,{message}</h1>
      <First message={message} />
    </div>
  );
};

export default Parentstate;

//Dont forget to call this parent component in app.js
