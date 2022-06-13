import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";
import { AwesomeButton } from "react-awesome-button";

import Sepatu from "../img/shoes.png";

const Home = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <>
            {/* <div className="container">
                <div className="row align-items-right">
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
                                src={Sepatu}
                                alt="Sepatu"
                                className="img-fluid position-absolute"
                                align="right"
                                style={{ margin: "-30px 0 0 -30px" }}
                            />
                        </div>
                    </div>
                </div>
            </div> */}

            <h1>Home</h1>
            {currentUser ? (
                <p>
                    You are logged - <Link to="/dashboard">View Dashboard</Link>
                </p>
            ) : (
                <p>
                    <Link to="/login">Log In</Link> or <Link to="/signup">Sign Up</Link>
                </p>
            )}
        </>
    );
};

export default Home;