import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { UserContext } from './UserContext';

export const CartContext = createContext();

export function CartContainer({ children }) {
    const { user, getUser } = useContext(UserContext);
    const [cartItem, setCartItem] = useState([]);
    localStorage.setItem('cart', JSON.stringify(cartItem));
    const loadLocalCart = () => {
        const localCart = localStorage.getItem('cart');
        const guestCart = JSON.parse(localCart) || [];
        setCartItem(guestCart);
    }
    const loadAuthCart = async () => {
        try {
            const res = await axios.get('http://localhost:3000/cart/yourCart', { withCredentials: true });
            setCartItem(res.data);
        } catch (error) {
            console.log(error)
        }

    };
    useEffect(() => {
        getUser()
        user === null ? loadLocalCart() : loadAuthCart()
    }, [])
    return (
        <CartContext.Provider value={{ setCartItem, cartItem, loadAuthCart }}>
            {children}
        </CartContext.Provider>
    );
}
