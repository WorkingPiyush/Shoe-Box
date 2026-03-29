import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import axios from 'axios';
import { useUser } from '../hooks/useUser';
export const CartContext = createContext(null);

export function CartContainer({ children }) {
    const { data: user } = useUser();
    const [cart, setCart] = useState([]);

    const loadCart = useCallback(async (currentUser) => {
        try {
            if (currentUser) {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/cart/`, { withCredentials: true });
                setCart(res.data)
                return res.data;
            } else {
                const guestCart = JSON.parse(localStorage.getItem('cart')) || [];
                if (!guestCart.length) {
                    return []
                }
                const res = await axios.post(`${import.meta.env.VITE_API_URL}/cart/preview`, {
                    items: guestCart
                });
                setCart(res.data)
                return res.data;
            }
        }
        catch (error) {
            console.error("Failed to fetch user cart:", error);
            return []
        }
    },
        [],
    )
    useEffect(() => {
        let active = true;
        loadCart(user).then(data => {
            if (active) setCart(data);
        });
        return () => { active = false }
    }, [user])

    const value = useMemo(() => ({
        cart,
        setCart,
        loadCart,
    }), [cart, loadCart]);
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
