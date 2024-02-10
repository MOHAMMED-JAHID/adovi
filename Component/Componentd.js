import React from "react";
class Componentd extends React.Component {
  constructor() {
    super();
    this.state = { name: "Jahid" };
  }
  render() {
    return <>MY Name is {this.state.name}</>;
  }
}
export default Componentd;
