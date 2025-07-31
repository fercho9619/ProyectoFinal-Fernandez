import React from 'react';
import Item from './Item';
import '../styles.css';

const ItemList = ({ items }) => {
    return (
        <div className="product-list">
        {items.map(product => (
            <Item key={product.id} product={product} />
        ))}
        </div>
    );
};

export default ItemList;
