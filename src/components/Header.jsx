import React from 'react';
import logo from '../assets/investment-calculator-logo.png'
const Header = () => {
    return (
        <div id='header' className='center'>
            <img src={logo}/>
            <h1 >Investment Calculator</h1>
        </div>
    );
};

export default Header;