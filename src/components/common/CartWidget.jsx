import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import '../styles.css';

const CartWidget = () => {
    const { totalItems } = useContext(CartContext);

    return (
        <div className="cart-widget">
        🛒
        {totalItems() > 0 && <span className="cart-count">{totalItems()}</span>}
        </div>
    );
};

export default CartWidget;
