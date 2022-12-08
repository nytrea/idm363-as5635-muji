import React from 'react';
import './hero.css'
import background from './homepage-banner-02.jpg';

const Hero = () => (
    <div className='hero-container'>
        <img src={background} alt="Logo" className="hero-image"/>
        {/* create parallax scrolling background */}
        {/* <h1>For Simple and Affordable Living</h1> */}
    </div>

);

export default(Hero)