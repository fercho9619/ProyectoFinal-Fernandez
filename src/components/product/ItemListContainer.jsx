import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

import productsData from '../../data/products.json';

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        // Simulamos delay de carga
        setTimeout(() => {
        const filtered = categoryId
            ? productsData.filter(p => p.category === categoryId)
            : productsData;
        setItems(filtered);
        setLoading(false);
        }, 500);
    }, [categoryId]);

    if (loading) return <p>Cargando productos…</p>;
    if (!items.length) return <p>No hay productos para mostrar.</p>;

    return (
        <div>
        {greeting && <h2>{greeting}</h2>}
        <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;
