import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/product/ItemDetailContainer';

const ProductDetail = () => {
    const { id } = useParams();

    return (
        <div>
        <ItemDetailContainer id={id} />
        </div>
    );
};

export default ProductDetail;
