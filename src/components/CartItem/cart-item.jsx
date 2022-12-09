import './cart-item.css'
import { format_price } from '../utilities/currency'

const CartItem = ({item}) =>{
    return(
        <div>
            <div className="cart-item-container">
                <h3 className="productTitle">{item.title}</h3>
                <h3 className="productPrice">{format_price(item.price)}</h3>
            </div>
            <span className="fs-3 cartTotal">Total: {item.quantity}</span>
        </div>
    );
    }
export default CartItem;