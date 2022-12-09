import { useContext, useState } from "react";
import Header from '../../components/Header/header'
import CartItem from '../../components/CartItem/cart-item'

const Cart = () => {
    return(
        <div>
            <Header/>      
            <CartItem/>
        </div>
    );
}


export default Cart;