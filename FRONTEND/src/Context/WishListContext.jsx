import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import axios from 'axios';
import { useUser } from '../hooks/useUser';

export const WishListContext = createContext(undefined);

export function WishListContainer({ children }) {
    const { data: user } = useUser();
    const [wishList, setWishList] = useState([]);

    const loadUserWishlist = useCallback(
        async () => {
            if (!user) {
                const guestWishList = JSON.parse(localStorage.getItem('wishlist')) || [];
                setWishList(guestWishList);
                return
            }
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/wishlist/`,
                    { withCredentials: true })
                setWishList(res.data || []);
            } catch (error) {
                console.error("Failed to fetch user wishlist:", error);
                setWishList([]);
            }
        },
        [user],
    )
    useEffect(() => {
        loadUserWishlist();
    }, [user])
    
    const value = useMemo(() => ({
        wishList,
        setWishList,
        loadUserWishlist
    }), [wishList, loadUserWishlist]);
    return (
        <WishListContext.Provider value={value}>
            {children}
        </WishListContext.Provider>
    )
}