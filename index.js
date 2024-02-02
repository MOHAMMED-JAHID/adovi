import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import Ifnotuser from "./Ifnotuser";
// import Welcome from "./Welcome";
// import Name from "./Name";

const root = ReactDOM.createRoot(document.getElementById("root"));

// function clock() {
//   const element = (
//     <div>
//       <h1>Hello, Time is {new Date().toLocaleTimeString()}</h1>
//       <h1>Hello, Today The Date {new Date().toLocaleDateString()}</h1>{" "}
//     </div>
//   );
root.render(
  // <React.StrictMode>
  //   {/* {element} */}
  //   <App />
  //   {/* <Name /> */}
  //   {/* {<Welcome />} */}
  //   {/* <Ifnotuser /> */}
  // </React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
// }
// setInterval(clock, 1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
