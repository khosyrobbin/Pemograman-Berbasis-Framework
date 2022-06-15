import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import Sepatu from "../img/shoes.png";
import "./Home.css";

const Home = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <>
            <html>
                <body>
                    <div className="container">
                        <div className="row align-items-right">
                            <div className="col-auto pr-5" >
                                <h1 className="line-height-1 mt-5 mb-3" style={{ fontFamily:"monospace", fontSize:40, fontWeight:"900", marginLeft:"30px"}}>
                                    Selamat Datang di Neo Ol-Shop⚡️<br />
                                </h1>
                                <h3 className="mb-4 font-weight-light w-75" style={{ fontFamily:"monospace", fontSize:20, fontWeight:"900", marginLeft:"30px"}}>
                                    Silahkan Login Terlebih Dahulu Untuk Mengakses Neo Ol-Shop
                                </h3>
                                {currentUser ? (
                                    <p>
                                        You are logged - <Link to="/dashboard">View Dashboard</Link>
                                    </p>
                                ) : (
                                    <p style={{margin: "20px 170px", marginTop:"50px"}}>
                                        <Link to="/login"> 
                                        <AwesomeButton size="large" type="secondary"><h3>Log In</h3></AwesomeButton>
                                        </Link><h3></h3><br/>
                                        <Link to="/signup" style={{marginTop:"25px"}}>
                                            <AwesomeButton size="large" type="secondary" ><h3>Register</h3></AwesomeButton>
                                        </Link>
                                    </p>
                                )}
                                <div className="col-6 pl-5">
                                    <div style={{ width: 1100 }}>
                                        {/* <img
                                            src={Sepatu}
                                            alt="Sepatu"
                                            className="img-fluid position-absolute"
                                            align="right"
                                            style={{  marginTop:"-290px"}}
                                        /> */}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </body>
            </html>
        </>
    );
};

export default Home;