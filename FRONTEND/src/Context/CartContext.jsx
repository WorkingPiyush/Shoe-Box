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

    const addItem = (product) => {
        setCartItem((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id && item.size === product.size)
            if (existingItem) {
                return prevCart.map((item) => item.id === product.id && item.size === product.size ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prevCart, { ...product, quantity: 1 }]
        })
    };
    return (
        <CartContext.Provider value={{ addItem, setCartItem, cartItem }}>
            {children}
        </CartContext.Provider>
    );
}
