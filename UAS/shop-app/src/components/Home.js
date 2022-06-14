import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import Sepatu from "../img/shoes.png";

const Home = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <>

        <div className="home-page">
            <center>
            <h1>WELCOME!</h1>
            <p>Do you want to Log In or Sign Up?</p>
            {currentUser ? (
=======
            <html>
                <body>
                    <div className="container">
                        <div className="row align-items-right">
                            <div className="col-auto pr-5" >
                                <h1 className="line-height-1 mt-5 mb-3">
                                    Selamat Datang di Neo Ol-Shop⚡️<br />
                                </h1>
                                <h3 className="mb-4 font-weight-light w-75">
                                    Silahkan Login Terlebih Dahulu Untuk Mengakses Neo Ol-Shop
                                </h3>
                                {currentUser ? (
                                    <p>
                                        You are logged - <Link to="/dashboard">View Dashboard</Link>
                                    </p>
                                ) : (
                                    <p>
                                        <Link to="/login"> 
                                        <AwesomeButton type="secondary">Log In</AwesomeButton>
                                        </Link><br/>or<br/>
                                        <Link to="/signup">
                                            <AwesomeButton type="secondary">Register</AwesomeButton>
                                        </Link>
                                    </p>
                                )}
                                <div className="col-6 pl-5">
                                    <div style={{ width: 1100 }}>
                                        <img
                                            src={Sepatu}
                                            alt="Sepatu"
                                            className="img-fluid position-absolute"
                                            align="right"
                                            style={{ margin: "-150px 0 0 -30px" }}
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </body>
            </html>

            {/* {currentUser ? (

                <p>
                    You are logged - <Link to="/dashboard">View Dashboard</Link>
                </p>
            ) : (
                <p>
                    <Link to="/login">Log In</Link> or <Link to="/signup">Sign Up</Link>
                </p>

            )}
            </center>
        </div>
=======
            )} */}

        </>
    );
};

export default Home;