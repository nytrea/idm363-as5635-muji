import './cart-item.css'
import { format_price } from '../utilities/currency'

const CartItem = ({item}) =>{
    return(
        <div className="cart-container">
            <div className="cart-item-container-main">
                <div className="cart-item-container">
                    <h3 className="productTitle">{(item.name)}</h3>
                    <h3 className="productPrice">{format_price(item.price)}</h3>
                </div>
                <div className = "item-quantity-container">
                    <span className="fs-3 itemQuantity">Quantity: {item.quantity}</span>
                </div>
            </div>
        </div>
    );}
    
export default CartItem;
