import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-router-dom";

import Kipas from "../img/fan.png";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row align-items-center">
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="line-height-1 mt-5 mb-3">
              Selamat Datang di <br />
              Toko Dewa Kipas⚡️<br />
            </h1>
            <p
              className="mb-4 font-weight-light w-75"
              style={{ lineHeight: "170%" }}
            >
              Kipas kita <br /> Produk para Dewa
            </p>
            <Link to="/produk">
              <AwesomeButton type="primary">Cek Produk</AwesomeButton>
            </Link>
          </div>

          <div className="col-6 pl-5">
            <div style={{ width: 520, height: 250 }}>
              <img
                src={Kipas}
                alt="Kipas"
                className="img-fluid position-absolute"
                style={{ margin: "-30px 0 0 -30px" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;