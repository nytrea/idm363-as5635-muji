import React from 'react';
import './edit-product.css';
import { format_price } from '../utilities/currency'
import { Link } from 'react-router-dom'; 


const EditProduct = ({item}) => {
    return(
        <div className = 'edit-card-container'>
            <div className='edit-card-info'>
                {/* <label className="edit-title">Item:</label> */}
                <h3 className="edit-title">{item.title}</h3>
                {/* <label className="edit-title">Price:</label> */}
                <h3 className="edit-price">{format_price(item.price)}</h3>
                <h3 className="edit-image-src">{item.image}</h3>
                <h3 className="edit-description">{item.description}</h3>

                <div className="edit-btn-container">
                    <Link to={`/edit/${item.id}`} className="edit-btn">Edit</Link>
                </div>
            </div>

            
        </div>
    )
}
export default(EditProduct);