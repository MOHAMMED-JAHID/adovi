import React from "react";

const Name = () => {
  function namedeclare(user) {
    return user.fname + " " + user.lname;
  }
  const user = {
    fname: "Mohammed",
    lname: "Jahid",
  };
  return (
    <div>
      <h1>Hello {namedeclare(user)}</h1>
    </div>
  );
};

export default Name;
