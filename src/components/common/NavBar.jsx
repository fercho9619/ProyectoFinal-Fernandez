import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import '../styles.css';

const NavBar = () => {
    return (
        <nav className="navbar">
        <Link to="/" className="logo">Mi Aremy</Link>
        <div className="nav-links">
            <Link to="/">Inicio</Link>
            <Link to="/category/vestidos">Vestidos</Link>
            <Link to="/category/accesorios">Accesorios</Link>
        </div>
        <Link to="/cart">
            <CartWidget />
        </Link>
        </nav>
    );
};

export default NavBar;
