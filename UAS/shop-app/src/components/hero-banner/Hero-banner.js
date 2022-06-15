import React, { Component } from 'react';
import './Hero-banner.css';
import firebaseConfig from '../../config';
import { connect, BrowserRouter as Router, Route, Switch } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import CartWindow from '../cart-window/Cart-window';
import Navigation from '../navigation/Navigation';
import { Redirect } from "react-router-dom";
import { AuthContext } from "../Auth"

const HeroBanner = () => {
    return (
        <div>
            <div className="navigation row">
                <div className="col-8 items">
                    <ul>
                        <li><Link to={`/`}>HOME</Link></li>
                        <li><Link to={`/ShopList`}>SHOP</Link></li>
                        <li><Link to={`/Profiles`}>PROFILE</Link></li>
                        <li><Link to={`/Cart`}>CART</Link></li>
                        <li><Link onClick={() => firebaseConfig.auth().signOut()}>SIGN OUT</Link></li>
                    </ul>
                </div>
                <div className="text col-6 ">
                    <h1>Neo OL Shop</h1>
                    <p>Find what you need easely in our shop!</p>
                    {/* <button onClick={() => firebaseConfig.auth().signOut()}>Sign out</button> */}
                </div>
            </div>
        </div>

    );

}

export default HeroBanner;
