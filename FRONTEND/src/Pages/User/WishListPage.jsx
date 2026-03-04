import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const initialWishlist = [
    {
        id: 1,
        name: "Samsung Galaxy F14 5G (B.A.E. Purple, 128 GB)",
        price: 17490,
        image: "https://via.placeholder.com/80",
        status: "Available",
    },
    {
        id: 2,
        name: "TEG ZERO 5.2 Bluetooth",
        price: null,
        image: "https://via.placeholder.com/80",
        status: "Currently unavailable",
    },
    {
        id: 3,
        name: "Redmi Note 5 Pro (Lake Blue, 64 GB)",
        price: 14999,
        image: "https://via.placeholder.com/80",
        status: "Coming Soon",
    },
];
const WishListPage = () => {
    const [wishlist, setWishlist] = useState(initialWishlist);
    const navigate = useNavigate();

    const removeItem = (id) => {
        setWishlist((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <div className="min-h-screen mt-20 bg-white p-4">
            <button onClick={() => navigate(-1)} className="mb-4 cursor-pointer text-black">← Back to Profile</button>
            <h1 className="text-2xl font-bold mb-4">My Wishlist ({wishlist.length})</h1>
            <div className="space-y-4">
                {wishlist.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white p-4 rounded-2xl shadow flex items-center justify-between hover:shadow-md transition"
                    >
                        {/* Product Info */}
                        <div className="flex items-center gap-4">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-20 h-20 object-cover rounded-lg"
                            />
                            <div>
                                <p className="font-medium">{item.name}</p>
                                {item.status !== "Available" && (
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
                            onClick={() => removeItem(item.id)}
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
