import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeroBanner from "../hero-banner/Hero-banner";
import ItemList from "../item-list/ItemList";
import './Home-container.css';
import Bootstrap from "bootstrap/dist/css/bootstrap.css";
//import './App.css';
// import Category from "../category/Category"
// import Cart from "../cart/Cart";
// import Product from "../product/Product";


class HomeContainer extends Component {
    state = {
        products: []
    };

    render() {
        return (
            <div className="home-container">
                <HeroBanner />
            </div>
        );
    }
}

const mapStoreToProps = (store) => {
    return { products: store.ItemListReducer }
};


export default connect(mapStoreToProps)(HomeContainer);