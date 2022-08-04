import React from "react";

import { Link } from 'react-router-dom';

import './Navbar.css';

const NavBar = () => {
    // const  handleClickHome = () => {
    //     console.log('The link was clicked.');
    // }
    return (
        <nav className='nav'>
            {/* <img className='nav--logo' src='logo192.png'></img> */}
            <h1 className='nav--header'> EheFactory</h1>
            <ul className='nav--menu'>
                <li className='nav--item'>
                    <Link style={{ display: 'block', color: 'inherit', textDecoration: 'inherit' }} to="/">  Home</Link>
                </li>
                <li className='nav--item'>
                    <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/smiley">MrSmiley</Link>
                </li>
                <li className='nav--item'>
                    <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/fourier">MsFourier</Link>
                </li>
                <li className='nav--item'>
                    <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/visionlab">VisionLab</Link>
                </li>
            </ul>
        </nav>
    )
};

export default NavBar;
