import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const FirstEmptyComponent = () => {
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>First Empty Component</h2>
      {userData && <p>Username: {userData.username}</p>}
    </div>
  );
};

export default FirstEmptyComponent;
