import React, { Component } from "react";

import dp from "../img/zeus.png";

class About extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src={dp}
          width="15%"
          alt="fotoprofil"
          className="my-5 rounded-circle"
        ></img>
        <h1>Khosy Robbin Hood</h1>
        <h3>TI-3D / 1941720067</h3>
        <h3>Teknik Informatika</h3>
      </div>
    );
  }
}

export default About;