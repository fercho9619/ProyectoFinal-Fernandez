import React, { useState } from 'react';
import '../styles.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);
    const [added, setAdded] = useState(false);

    const increment = () => {
        if (count < stock) setCount(prev => prev + 1);
    };
    const decrement = () => {
        if (count > 1) setCount(prev => prev - 1);
    };
    const handleAdd = () => {
        onAdd(count);
        setAdded(true);
    };

    if (added) {
        return <p>¡Agregaste {count} unidad{count > 1 ? 'es' : ''} al carrito!</p>;
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <button className="btn" onClick={decrement} disabled={count <= 1}>–</button>
        <span>{count}</span>
        <button className="btn" onClick={increment} disabled={count >= stock}>+</button>
        <button className="btn" onClick={handleAdd} disabled={stock === 0}>
            Añadir al carrito
        </button>
        </div>
    );
};

export default ItemCount;
