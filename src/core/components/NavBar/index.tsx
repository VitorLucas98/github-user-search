import React from 'react';
import './styles.scss'
import {Link } from 'react-router-dom';

const NavBar = () =>{
    return(
        <nav className='nav-container'>
            <Link to="/" >
            <h1 className='nav-title'>Bootcamp DevSuperior</h1>
            </Link>
        </nav>
    );
}
export default NavBar;