import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../config.js";
import HeroBanner from "./hero-banner/Hero-banner";
import Navigation from "./navigation/Navigation";

const Dashboard = () => {
    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        return <Redirect to="/login" />;
    }
    return (
        <div>
            <HeroBanner />
        </div>
    );
};

export default Dashboard;