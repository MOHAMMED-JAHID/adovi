import React from "react";

// Functional component example
const MyComponent = ({ propObject, propArray }) => {
  return (
    <div>
      <h1>Props Example</h1>
      <p>Value from object: {propObject.value}</p>
      <ul>
        {propArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

// Usage example
const App = () => {
  const myObject = { value: "Hello World" };
  const myArray = ["Item 1", "Item 2", "Item 3"];

  return (
    <div>
      <MyComponent propObject={myObject} propArray={myArray} />
    </div>
  );
};

export default App;
