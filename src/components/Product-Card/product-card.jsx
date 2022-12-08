import React from 'react';
import './product-card.css';
import { format_price } from '../utilities/currency'
import { collection, onSnapshot, query, getDocs } from 'firebase/firestore';
import { db } from '../../firestore';
import { Link } from 'react-router-dom'; 

const Product = ({item}) => {
    return(
        <Link to="/details">
        <div className = 'product-card-container'>
            
                <div className = 'image-container'>
                    <img src={item.image} className="product-image"></img>
                </div>
                
                <div className='product-card-info'>
                    <h3 className="product-title">{item.title}</h3>
                    <h3 className="product-price">{format_price(item.price)}</h3>
                </div>

                <div className='add-to-cart-btn'>
                    <button className="add-to-cart-btn-container">
                        <h1 className="add-to-cart-btn-text">Add to Cart</h1>
                    </button>
                </div>
            
            
        </div>
        </Link>
    )
}
export default(Product);
