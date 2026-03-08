import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { UserContext } from './UserContext';

export const CartContext = createContext(null);

export function CartContainer({ children }) {
    const { user, getUser } = useContext(UserContext);
    const [cartItem, setCartItem] = useState([]);
    const loadUserCart = async () => {
        if (!user) {
            const localCart = localStorage.getItem('cart');
            const guestCart = JSON.parse(localCart) || [];
            setCartItem(guestCart);
            return guestCart;
        }
        try {
            const res = await axios.get('http://localhost:3000/cart/cartInfo', { withCredentials: true });
            setCartItem(res.data);
            return res.data
        } catch (error) {
            console.error("Failed to fetch user cart:", error);
            setCartItem([]);
            return []
        }
    }
    useEffect(() => {
        getUser()
    }, [])
    useEffect(() => {
        loadUserCart()
    }, [user])

    return (
        <CartContext.Provider value={{ setCartItem, cartItem }}>
            {children}
        </CartContext.Provider>
    );
}
