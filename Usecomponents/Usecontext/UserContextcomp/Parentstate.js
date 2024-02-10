import React, { createContext, useState } from "react";

const Context = createContext();

const Parentstate = () => {
  Const[message] = useState("Hello from Parent");
  return (
    <Context.Provider value={message}>
      <h1>Parent Component saying this,{message}</h1>
      <First />
    </Context.Provider>
  );
};

export default Parentstate;

//Dont forget to call this parent component in app.js
