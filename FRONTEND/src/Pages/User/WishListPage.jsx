import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { WishListContext } from '../../Context/WishListContext';
import { WishListToBackend } from '../../Services/WishListServices';
import { useQuery } from '@tanstack/react-query';

const WishListPage = () => {
    ;
    const { wishList } = useContext(WishListContext)
    const navigate = useNavigate();
    const { data: wishproduct = [], isLoading } = useQuery({
        queryKey: ['wishlist-page', wishList],
        queryFn: async () => {
            const res = await axios.post('http://localhost:3000/wishlist/page', wishList, { withCredentials: true })
            return res.data;
        },
        enabled: wishList.length > 0,
        staleTime: 10 * 60 * 1000,
        keepPreviousData: true,
    })

    const removeItem = async (productId) => {
        const exists = wishList.some(item => item.productId === productId);
        let updatedList;
        if (exists) {
            updatedList = wishList.filter((item) => item.productId !== productId)
        } else {
            updatedList = [
                ...wishList,
                { productId: productId }
            ]
        }
        setWishList(updatedList)
        try {
            WishListToBackend({ productId });
        } catch (error) {
            toast.error("Backend Error")
            setWishList([])
        }
    };
    return (
        <div className="min-h-screen mt-20 bg-white p-4">
            <button onClick={() => navigate(-1)} className="mb-4 cursor-pointer text-black">← Back to Profile</button>
            <h1 className="text-2xl font-bold mb-4">My Wishlist ({wishproduct.length})</h1>
            <div className="space-y-4">
                {wishproduct.map((item) => (
                    <div
                        key={item.productId}
                        className="bg-white p-4 rounded-2xl shadow flex items-center justify-between hover:shadow-md transition"
                    >
                        {/* Product Info */}
                        <div className="flex items-center gap-4">
                            <img
                                src={item.image[0]}
                                alt={item.name}
                                onClick={() => navigate(`/${item.gender}/${item._id || item.productId}`)}
                                className="w-20 h-20 object-contain rounded-lg cursor-pointer"
                            />
                            <div>
                                <p className="font-medium">{item.name}</p>
                                {item.availablity !== "Available" && (
                                    <p
                                        className={`text-sm ${item.status === "Currently unavailable"
                                            ? "text-red-600"
                                            : "text-green-600"
                                            }`}
                                    >
                                        {item.status}
                                    </p>
                                )}
                                {item.price && (
                                    <p className="mt-1 font-semibold text-lg">₹{item.price}</p>
                                )}
                            </div>
                        </div>

                        {/* Remove Button */}
                        <button
                            onClick={() => removeItem(item.productId)}
                            className="text-gray-400 hover:text-red-600 transition"
                        >
                            🗑
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WishListPage
