import React, { createContext, useState } from 'react';
import { db } from '../firebase';
import {
    collection,
    addDoc,
    serverTimestamp
} from 'firebase/firestore';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (product, quantity) => {
        setCart(prev => {
        const exists = prev.find(item => item.product.id === product.id);
        if (exists) {
            return prev.map(item =>
            item.product.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            );
        }
        return [...prev, { product, quantity }];
        });
    };

    const removeItem = id => {
        setCart(prev => prev.filter(item => item.product.id !== id));
    };

    const clearCart = () => setCart([]);

    const totalItems = () =>
        cart.reduce((sum, item) => sum + item.quantity, 0);

    const totalPrice = () =>
        cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    const createOrder = async order => {
        const ordersCol = collection(db, 'orders');
        const docRef = await addDoc(ordersCol, {
        ...order,
        date: serverTimestamp()
        });
        return docRef.id;
    };

    return (
        <CartContext.Provider
        value={{
            cart,
            addItem,
            removeItem,
            clearCart,
            totalItems,
            totalPrice,
            createOrder
        }}
        >
        {children}
        </CartContext.Provider>
    );
};
