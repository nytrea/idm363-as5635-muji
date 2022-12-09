import Header from '../../components/Header/header'
import './cart-item.css'
import { useState, useEffect } from 'react';

const CartItem = ({item}) =>{
    const [user_cart, set_user_cart] = useState([]);
    //user_cart: array storing a series of objects based on what the user adds to cart
    //set_user_cart: called when updating user_cart array, called everytime add to cart is hit

    // useEffect(() => {
    //     const shopping_cart = [...item].map((item) => ({
    //       ...item,
    //       in_cart: 0,
    //     }));
    //     set_user_cart(shopping_cart);
    //   }, []);

    // return(
    //     <div>
    //         <Header/>
    //         <div className="cart-container">
    //             <div className="cart-details-container">
    //                 <h1 className="cart-header"> Items In Your Cart </h1>
    //             </div>
    //         </div>
    //     </div>
        
    // );
    return(
        <h1>cart container</h1>
    );
}

export default(CartItem);