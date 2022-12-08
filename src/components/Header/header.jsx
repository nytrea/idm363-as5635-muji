import React from 'react';
import whiteLogo from './muji-logo-white.svg'
import { Link } from 'react-router-dom'; 
import './header.css';

const Header = () => (
    <div className = 'nav-container'>

        <div className = 'logo-container'>
         <img src={whiteLogo} alt="Logo" className='white-logo'/>  
        </div>
        
        <div className='navbar'>
            <Link to="/" className = 'nav-element'>Home</Link>
            <Link to="/admin" className = 'nav-element'>Admin</Link> 
            <Link to="/cart" className = 'nav-element'>Cart</Link> 
        </div>
    </div>
    

);
export default(Header)