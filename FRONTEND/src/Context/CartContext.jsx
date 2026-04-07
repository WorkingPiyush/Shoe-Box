import React, { createContext, useCallback, useMemo } from 'react'
import axios from 'axios';
import { useUser } from '../hooks/useUser';
import { useQuery } from '@tanstack/react-query';
export const CartContext = createContext(null);

export function CartContainer({ children }) {
    const { data: user } = useUser();
    const loadCart = useCallback(async () => {
        if (user) {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/cart/`, { withCredentials: true });
            return res.data;
        }
        const guestCart = JSON.parse(localStorage.getItem('cart')) || [];
        if (!guestCart.length) return [];
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/cart/preview`, guestCart);
        return res.data;
    }, [user])

    const { data = [], isLoading, refetch } = useQuery({
        queryKey: ['cart', user?._id || 'guest'],
        queryFn: loadCart,
        staleTime: 5 * 60 * 1000,
    })
    const value = useMemo(() => ({
        cart: data,
        isLoading,
        refetch,
    }), [data, isLoading]);
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
