import React, { useState } from "react";

const Usestat03 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>{isLoggedIn ? <button>Logout</button> : <button>Login</button>}</div>
  );
};

export default Usestat03;
