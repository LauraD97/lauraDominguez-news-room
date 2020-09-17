import React from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar'
import Logo from '../utils/logo.png'

import '../styles/header.css'

const Header = () => {
    return(
        <div className="header-container">
            <img src={Logo} className="logo" alt="logo"/>
            
            <div className="main-container np f col-md-12">
                <NavBar/>
                <SearchBar/>
            </div>
        </div>
    );
}

export default Header;