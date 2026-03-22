import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import axios from 'axios';
import { useUser } from '../hooks/useUser';
export const CartContext = createContext(null);

export function CartContainer({ children }) {
    const { data: user } = useUser();
    const [cartItem, setCartItem] = useState([]);

    const loadUserCart = useCallback(async (currentUser) => {
        if (!currentUser) {
            const guestCart = JSON.parse(localStorage.getItem('cart')) || [];
            setCartItem(guestCart);
            return
        }
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/cart/cartInfo`, { withCredentials: true });
            setCartItem(res.data);
        } catch (error) {
            console.error("Failed to fetch user cart:", error);
            setCartItem([]);
            return;
        }
    }, [])
    useEffect(() => {
        loadUserCart(user)
    }, [user])

    const value = useMemo(() => ({
        cartItem,
        setCartItem,
        loadUserCart,
    }), [cartItem]);
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
