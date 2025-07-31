import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCount from './ItemCount';
import '../styles.css';

const ItemDetail = ({ product }) => {
    const { addItem } = useContext(CartContext);

    const handleOnAdd = quantity => {
        addItem(product, quantity);
    };

    return (
        <div className="product-card">
        <img src={product.image} alt={product.title} className="product-img" />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Stock disponible: {product.stock}</p>
        <p>Precio: ${product.price.toLocaleString()}</p>
        <ItemCount stock={product.stock} initial={1} onAdd={handleOnAdd} />
        </div>
    );
};

export default ItemDetail;
