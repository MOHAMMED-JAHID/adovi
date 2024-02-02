import React from "react";

function Welcome() {
  function getData(event) {
    console.warn(event.target.value);
  }
  const text = document.querySelector(".userinput");
  //   const head = document.querySelector(".heading1");
  function getData1(val) {
    window.alert(
      "hey" +
        " " +
        val.target.previousSibling.value +
        " " +
        "Welcome to your site"
    );
    text.innerHTML = "Hey am " + " " + val.target.previousSibling.value;
    // head.append(val.target.previousSibling.value);
  }

  return (
    <div>
      {/* <h1 className="heading1">HEY WELCOME</h1> */}
      <h2 className="userinput"></h2>
      <label>Name:</label>
      <br></br>
      <input type="text" onChange={getData} />
      <button onClick={getData1}>Click Me</button>
    </div>
  );
}

export default Welcome;
