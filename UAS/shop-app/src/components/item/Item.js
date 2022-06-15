import React  from 'react';
import CurrencyFormat from 'react-currency-format';
import AddToCartBtn from '../add-to-cart-btn/Add-to-cart-btn';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = (props) => {
    return (
        <div className="col-4 item">
            <div className="img-wrap">
                <img src={props.product.image} alt={props.product.title}/>
                <button type="button" class="view-btn btn" to="`/product/${props.product.title}`"><Link to={`/product/${props.index}`}>VIEW DETAILS</Link></button>
                <AddToCartBtn count={props.count} product={props.product}/>
                
            </div>
            <p className="category">{props.product.category}</p>
            <p className="title">{props.product.title}</p>
            <p className="stok">Stok : {props.product.stok}</p>
            <CurrencyFormat value={props.product.price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} renderText={value => <p className="price">{value}</p>} />

        </div>
    )
};

export default Item;
