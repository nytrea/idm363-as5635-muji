import React from 'react';
import './edit-product.css';
import { format_price } from '../utilities/currency'
import { Link } from 'react-router-dom'; 



const EditProduct = ({item}) => {
    return(
        <div className = 'edit-card-container'>
            <div className='edit-card-info'>
                {/* <label className="edit-title">Item:</label> */}
                <label className="edit-title">{item.title}</label>
                {/* <label className="edit-title">Price:</label> */}
                <label className="edit-price">{format_price(item.price)}</label>
            </div>

            <div className="edit-btn-container">
                <Link to="/edit">
                    <button className='edit-btn'>
                        <h1 className="edit-btn-text">Edit</h1>
                    </button>
                </Link>
                
            </div>

        </div>
    )
}
export default(EditProduct);