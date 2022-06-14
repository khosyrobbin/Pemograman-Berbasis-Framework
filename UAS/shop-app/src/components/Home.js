import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";
import { AwesomeButton } from "react-awesome-button";

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
        </>
    );
};

export default Home;