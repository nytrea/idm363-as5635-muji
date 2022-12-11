import { useContext, useState } from "react";
import CartItem from '../../components/CartItem/cart-item'
import { format_price } from '../../components/utilities/currency'
import './cart.css'


const Cart = () => {
    const getCart = () => {
        const cart = localStorage.getItem('cart')
        const defaultCart = {cartItems: [], totalValue: 0}
        return cart ? JSON.parse(cart) : defaultCart
      }
    
    const cart = getCart()
    const cartItems = cart.cartItems
    const totalValue = cart.totalSum

    return(
        <>
        <div>
            <h4 className='cart-title'> Items In Your Cart</h4>
            <div>
                {cartItems.length === 0 && <h4>Your cart is empty</h4>}
            </div>

            <div>
                {cartItems.map((product) => {
                    return <CartItem key={product.id} item={product} />                
                })}
            </div>
            
            <div className='mt-5 mb-5'>
            <h4 className='total-value'>Total Value: {format_price(totalValue)}</h4>
            </div>
        </div>
        </>
    );
}

export default Cart;