import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { UserContext } from './UserContext';

export const CartContext = createContext();

export function CartContainer({ children }) {
    const { user, getUser } = useContext(UserContext);
    const [cartItem, setCartItem] = useState([]);
    const [cartProduct, setCartProduct] = useState([])
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
    const loadCartDetails = async (cart) => {
        try {
            const res = await axios.post('http://localhost:3000/cart/your-cart', { Usercart: cart }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setCartProduct(res.data);
        } catch (error) {
            console.error("Failed to fetch user cart:", error);
            setCartProduct([]);
        }
    }
    const loadData = async () => {
        const cart = await loadUserCart()
        loadCartDetails(cart)
    }
    useEffect(() => {
        loadData()
    }, [user])
    
    useEffect(() => {
        loadCartDetails(cartItem)
    }, [cartItem])
    return (
        <CartContext.Provider value={{ setCartItem, cartItem, cartProduct, loadUserCart, setCartProduct }}>
            {children}
        </CartContext.Provider>
    );
}
