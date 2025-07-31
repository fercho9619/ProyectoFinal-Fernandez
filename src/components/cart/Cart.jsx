import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';
import '../styles.css';

const Cart = () => {
    const { cart, totalPrice, clearCart } = useContext(CartContext);

    if (cart.length === 0) {
        return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <p>Tu carrito está vacío.</p>
            <Link to="/">Volver al inicio</Link>
        </div>
        );
    }

    return (
        <div style={{ padding: '2rem' }}>
        <h2>Tu carrito</h2>
        {cart.map(item => (
            <CartItem key={item.product.id} item={item} />
        ))}
        <h3>Total: ${totalPrice().toLocaleString()}</h3>
        <button className="btn" onClick={clearCart}>Vaciar carrito</button>
        <Link to="/checkout">
            <button className="btn" style={{ marginLeft: '1rem' }}>
            Finalizar compra
            </button>
        </Link>
        </div>
    );
};

export default Cart;
