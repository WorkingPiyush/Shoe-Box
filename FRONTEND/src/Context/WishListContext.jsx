import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { UserContext } from './UserContext';

export const WishListContext = createContext(undefined);

export function WishListContainer({ children }) {
    const { user, getUser } = useContext(UserContext);
    const [wishList, setWishList] = useState([]);

    const loadUserWishlist = async () => {
        if (!user) {
            const storedWishList = localStorage.getItem('wishlist');
            const guestWishList = JSON.parse(storedWishList) || [];
            setWishList(guestWishList);
            return guestWishList;
        }
        try {
            const res = await axios.get('http://localhost:3000/wishlist/',
                { withCredentials: true })
            setWishList(res.data);
            return res.data;
        } catch (error) {
            console.error("Failed to fetch user wishlist:", error);
            setWishList([]);
            return []
        }
    }
    useEffect(() => {
        getUser()
    }, [])
    useEffect(() => {
        loadUserWishlist()
    }, [user])
    return (
        <WishListContext.Provider value={{ setWishList, wishList, loadUserWishlist }}>
            {children}
        </WishListContext.Provider>
    )
}