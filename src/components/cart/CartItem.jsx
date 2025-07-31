import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import '../styles.css';

const CartItem = ({ item }) => {
    const { removeItem } = useContext(CartContext);
    const { product, quantity } = item;
    const subtotal = product.price * quantity;

    return (
        <div
        style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1rem',
            borderBottom: '1px solid #f8bbd0',
            paddingBottom: '1rem'
        }}
        >
        <img
            src={product.image}
            alt={product.title}
            style={{ width: '80px', height: '80px', objectFit: 'cover' }}
        />
        <div style={{ flexGrow: 1 }}>
            <h4>{product.title}</h4>
            <p>Cantidad: {quantity}</p>
            <p>Subtotal: ${subtotal.toLocaleString()}</p>
        </div>
        <button className="btn" onClick={() => removeItem(product.id)}>
            Eliminar
        </button>
        </div>
    );
};

export default CartItem;
