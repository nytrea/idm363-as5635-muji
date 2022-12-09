import { useContext, useState, React } from 'react';
import { format_price } from '../utilities/currency'
import './edit-form.css';
import { useSelector } from 'react-redux';
import uuid from 'react-uuid';

const EditForm = () => {
    const products = useSelector((state) => state.product.value);

    return(
        <div className="edit-form-container" id="form-container">
            <form className="form">
                <label className='edit-form-label'> Title:</label>
                {/* <input type="text" value={stateValue} onChange={handleChange} /> */}
                <input type="text" value ="" className="input-field"/>
                <label className='edit-form-label'> Price:</label>
                <input type="text" value ="" className="input-field"/>
                <label className='edit-form-label'> Image Source:</label>
                <input type="text" value ="" className="input-field"/>
                <div classNam="save-btn-container">
                    <button className='save-btn'> Save </button>
                </div>
                
            </form>
        </div>
        
    );

}

export default(EditForm);