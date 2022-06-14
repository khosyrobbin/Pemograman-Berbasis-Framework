import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import './Navigation.css';

class Navigation extends Component {

    state = {
        count: 0,
        openCartWindow: false
    }
    render() {
        return (
            <div className="navigation row">
                <div className="col-8 items">
                <ul>
                        <li><Link to={`/`}>HOME</Link></li>
                        <li><Link to={`/ShopList`}>SHOP</Link></li>
                        <li><Link to={`/Profiles`}>PROFILE</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStoreToProps = (store) => {
    return {
        products: store.ItemListReducer,
        cartItems: store.CartItemReducer
    }
};

export default withRouter(connect(mapStoreToProps)(Navigation));
