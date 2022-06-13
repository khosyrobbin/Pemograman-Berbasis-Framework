import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../config.js";

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import Sepatu from "../img/shoes.png";


const LogIn = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        try {
            firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
        } catch (error) {
            alert(error);
        }
    };
    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <label for="email"><AwesomeButton type="secondary">Email</AwesomeButton></label>
                <input type="email" name="email" placeholder="Email"/>
                <label for="password">Password</label>
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default LogIn;