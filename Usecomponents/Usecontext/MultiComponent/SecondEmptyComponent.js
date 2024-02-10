import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const SecondEmptyComponent = () => {
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>Second Empty Component</h2>
      {userData && <p>Email: {userData.email}</p>}
    </div>
  );
};

export default SecondEmptyComponent;
