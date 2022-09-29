import React from 'react';
import logo from '../../image/logo.png'
import './Header.css'

const Header = () => {
    return (
        <nav className='navbar navbar-expand-lg'>
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <span className='logo_title'>BadmintonPro</span>
                </div> 
                
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
};

export default Header;