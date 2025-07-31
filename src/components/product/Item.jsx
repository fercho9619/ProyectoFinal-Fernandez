import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Item = ({ product }) => {
    return (
        <div className="product-card">
        <img src={product.image} alt={product.title} className="product-img" />
        <h3>{product.title}</h3>
        <p>${product.price.toLocaleString()}</p>
        <Link to={`/item/${product.id}`}>
            <button className="btn">Ver detalle</button>
        </Link>
        </div>
    );
};

export default Item;
