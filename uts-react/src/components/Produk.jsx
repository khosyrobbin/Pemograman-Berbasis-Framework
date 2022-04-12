import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";

class Produk extends Component {
  state = {
    listProduk: [],
  };

  ambilDataProduk = () => {
    fetch("http://localhost:3001/kipasAngin")
      .then((response) => response.json())
      .then((jsonHasilAmbilDariAPI) => {
        this.setState({
          listProduk: jsonHasilAmbilDariAPI,
        });
      });
  };

  componentDidMount() {
    this.ambilDataProduk();
  }

  handleGetkipasAngin = (data) => {
    fetch(`http://localhost:3001/kipasAngin/${data}`, { method: "GET" })
      .then((response) => response.json())
      .then((res) => {
        var datakipasAngin = { ...this.state.insertKeranjang };
        datakipasAngin["id"] = res["id"];
        datakipasAngin["nama"] = res["nama"];
        datakipasAngin["harga"] = res["harga"];
        datakipasAngin["stok"] = res["stok"];
        datakipasAngin["qty"] = 1;
        this.setState({
          insertKeranjang: datakipasAngin,
        });
      })
      .then(() => {
        this.handleCekKeranjang(data);
      })
      .then(() => {
        this.handleTombolSimpan();
        alert("Data berhasil ditambahkan ke keranjang!");
      });
  };

  handleCekKeranjang = (data) => {
    fetch(`http://localhost:3002/keranjang/${data}`, { method: "GET" }).then(
      (response) => {
        if (response.ok) {
          response.json().then((res) => {
            this.handleUpdateKeranjang(data, res);
            this.ambilDataProduk();
          });
        } else {
          this.handleTombolSimpan();
        }
      }
    );
  };

  handleUpdateKeranjang = (data, res) => {
    fetch(`http://localhost:3002/keranjang/${data}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: res["id"],
        nama: res["nama"],
        harga: res["harga"],
        stok: res["stok"],
        qty: res["qty"] + 1,
      }),
    });
  };

  handleTombolSimpan = () => {
    fetch("http://localhost:3002/keranjang", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(this.state.insertKeranjang),
    }).then((Response) => {
      this.ambilDataProduk();
    });
  };

  listProduk() {
    return this.state.listProduk.map((produk) => {
      return (
        <div className="col-sm-4 my-3" key={produk.id}>
          <div className="card">
            <img
              className="mx-auto d-block img-fluid my-3"
              width="50%"
              src={produk.gambar}
              alt="kipasAngin"
            />
            <div className="card-block p-3">
              <h5 className="card-title">{produk.nama}</h5>
              <h4 className="card-text text-info font-weight-bold">
                Rp{produk.harga},00
              </h4>
              <p className="card-text">
                <small className="text-muted">Stok: {produk.stok}</small>
              </p>
              <AwesomeButton
                type="secondary"
                onPress={() => this.handleGetkipasAngin(produk.id)}
              >
                🛒 Beli Produk
              </AwesomeButton>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="col-lg-12">
        <div className="container text-center">
          <h1> List Produk</h1>
          <div className="row">{this.listProduk()}</div>
        </div>
      </div>
    );
  }
}

export default Produk;