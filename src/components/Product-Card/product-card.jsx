import React from 'react';
import './product-card.css';
import { format_price } from '../utilities/currency'
import { collection, onSnapshot, query, getDocs } from 'firebase/firestore';
import { db } from '../../firestore';
import { Link } from 'react-router-dom'; 

const Product = ({item}) => {
    const handleAddToCart = (product) => {
        addItemToCart(product)
      }

      const addItemToCart = (product) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || {}
        cart.cartItems = cart.cartItems || []
        const itemInCart = cart.cartItems.find((cartItem) => cartItem.id === product.id)
        if (itemInCart) {
            //quantity is a built-in feature
          itemInCart.quantity += 1
        } else {
          
          cart.cartItems.push({ id:product.id, name:product.title, price : product.price, image:product.image, quantity: 1 })
        }
        cart["totalSum"] = cart.cartItems.reduce((acc, product) => acc + product.price * product.quantity, 0)
        localStorage.setItem('cart', JSON.stringify(cart))
        console.log("updatedCart", cart, format_price(cart.totalSum))
      }

    return(
        
        <div className = 'product-card-container'>
            <div>
            <Link to="/details"></Link>
            </div>
                <div className = 'image-container'>
                    <img src={item.image} className="product-image"></img>
                </div>
                <div className='product-card-info'>
                    <h3 className="product-title">{item.title}</h3>
                    <h3 className="product-price">{format_price(item.price)}</h3>
                </div>

                <div className='add-to-cart-btn'>
                    <button className="add-to-cart-btn-container" onClick={() => handleAddToCart(item)} variant="primary">
                        <h1 className="add-to-cart-btn-text">Add to Cart</h1>
                    </button>
                </div>
        </div>
       
    )
}
export default(Product);
