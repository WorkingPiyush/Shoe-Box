import React, { createContext, useContext, useState } from 'react'

export const CartContext = createContext();

export function CartContainer({ children }) {
    const [cartItem, setCartItem] = useState([])
    const addItem = (product) => {
        setCartItem((prev) => [...prev, product]);
    };
    return (
        <CartContext.Provider value={{ addItem, setCartItem, cartItem }}>
            {children}
        </CartContext.Provider>
    );
}
