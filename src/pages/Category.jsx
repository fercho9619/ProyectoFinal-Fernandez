import React from 'react';
import { useParams } from 'react-router-dom';
import ItemListContainer from '../components/product/ItemListContainer';

const Category = () => {
    const { categoryId } = useParams();

    return (
        <div>
        <h2>Categoría: {categoryId}</h2>
        <ItemListContainer category={categoryId} />
        </div>
    );
};

export default Category;
