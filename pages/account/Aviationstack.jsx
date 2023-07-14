/** @format */

import React, { Component } from "react";

class Aviationstack extends Component {
  componentDidMount() {
    fetch(
      "http://api.aviationstack.com/v1/flights?access_key=0a0451f50137ea4308680131d8f44f88&callback"
    )
      .then((res) => res.json())

      .then((data) => {
        console.log(data);
      });
  }
  render() {
    return <h2>Hello, world!</h2>;
  }
}

export default Aviationstack;
