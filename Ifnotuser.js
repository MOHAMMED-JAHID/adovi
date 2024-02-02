import React from "react";

const Ifnotuser = () => {
  function namedeclare(user) {
    return user.fname + " " + user.lname;
  }
  function getGreet(user) {
    if (user) {
      return <h1>Hello,{namedeclare(user)}</h1>;
    }
    return <h1>Hello ,Someone</h1>;
  }
  const user = {
    fname: "Mohammed",
    lname: "Jahid",
  };
  return <div>hello,{getGreet(user)} </div>;
};

export default Ifnotuser;
