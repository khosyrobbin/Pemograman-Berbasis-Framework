import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import firebaseConfig from "../config";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";


const SignUp = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        try {
            firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
            setCurrentUser(true);
        } catch (error) {
            alert(error);
        }
    };
    if (currentUser) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <>
            <div>
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <div className="input-container">
                            <label><h1>Register!</h1></label>
                        </div>
                        <div className="input-container">
                            <label>Email </label>
                            <input type="text" name="email" placeholder="Email" />
                        </div>
                        <div className="input-container">
                            <label>Password </label>
                            <input type="password" name="password" placeholder="Password" />
                        </div>
                        <div className="button-container">
                            <AwesomeButton type="link">
                                {/* <input type="submit" value="Log In!" /> */}
                                Register
                            </AwesomeButton>
                            {/* <input type="submit" value="Register" /> */}
                        </div>
                    </form>
                </div>

            </div>
            {/* <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label for="email">Email</label>
                <input type="email" name="email" placeholder="Email" />
                <label for="password">Password</label>
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Submit</button>
            </form> */}
        </>
    );
};

export default SignUp;