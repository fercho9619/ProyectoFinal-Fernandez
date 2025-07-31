import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import '../styles.css';

const CheckoutForm = () => {
    const { cart, totalPrice, clearCart, createOrder } = useContext(CartContext);
    const [buyer, setBuyer] = useState({ name: '', email: '', phone: '' });
    const [orderId, setOrderId] = useState(null);

    const handleChange = e => {
        setBuyer(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const id = await createOrder({ buyer, items: cart, total: totalPrice() });
        setOrderId(id);
        clearCart();
    };

    if (orderId) {
        return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h2>¡Compra realizada con éxito!</h2>
            <p>Tu orden es: <strong>{orderId}</strong></p>
            <Link to="/">Volver al inicio</Link>
        </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '2rem auto' }}>
        <h3>Datos de contacto</h3>
        <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            value={buyer.name}
            onChange={handleChange}
            required
            className="btn"
        />
        <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={buyer.email}
            onChange={handleChange}
            required
            className="btn"
            style={{ marginTop: '0.5rem' }}
        />
        <input
            type="tel"
            name="phone"
            placeholder="Teléfono"
            value={buyer.phone}
            onChange={handleChange}
            required
            className="btn"
            style={{ marginTop: '0.5rem' }}
        />
        <button type="submit" className="btn" style={{ marginTop: '1rem' }}>
            Confirmar compra (${totalPrice().toLocaleString()})
        </button>
        </form>
    );
};

export default CheckoutForm;
