import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

import productsData from '../../data/products.json';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
        const found = productsData.find(p => p.id === id);
        setItem(found || null);
        setLoading(false);
        }, 500);
    }, [id]);

    if (loading) return <p>Cargando detalle…</p>;
    if (!item) return <p>Producto no encontrado.</p>;

    return <ItemDetail product={item} />;
};

export default ItemDetailContainer;
