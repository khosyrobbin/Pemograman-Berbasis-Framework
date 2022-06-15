import React, { Component } from 'react';
import './ShopList.css';
import ItemList from "../item-list/ItemList";
import { connect } from 'react-redux';
import './ShopList.css';


class ShopList extends Component {
    state = {
        products: []
    };

    render() {
        return (
            <div className="home-container">
                 {this.props.products.products.length > 0 ? <ItemList products={this.props.products.products} /> : null} 
            </div>
        );
    }
}

const mapStoreToProps = (store) => {
    return { products: store.ItemListReducer }
};


export default connect(mapStoreToProps)(ShopList);
