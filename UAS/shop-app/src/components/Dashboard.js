import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../config.js";
import HeroBanner from "./hero-banner/Hero-banner";
import Navigation from "./navigation/Navigation";
import HomeContainer from "./home-container/Home-container"
import { AuthProvider } from "./Auth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Dashboard = () => {
    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        return <Redirect to="/login" />;
    }
    return (
        <Router>
            <Switch>
                <HeroBanner />
                {/* <HomeContainer /> */}
            </Switch>
        </Router>
    );
};

export default Dashboard;