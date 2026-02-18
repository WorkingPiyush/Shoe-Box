import React, { createContext, useContext, useEffect, useState } from 'react'

export const CartContext = createContext();

export function CartContainer({ children }) {
    const [cartItem, setCartItem] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : []
    })
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItem))
    }, [cartItem])
    return (
        <CartContext.Provider value={{ setCartItem, cartItem }}>
            {children}
        </CartContext.Provider>
    );
}
