// OrdersListPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const orders = [
    {
        id: "OD123456",
        items: 2,
        status: "Delivered",
        price: 947,
        date: "Feb 02, 2026",
        image: "https://imgs.search.brave.com/MN3nntWF2nBsqtvjmHoJEuq9StP3r2bpo854jQeS8DA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92aXNt/ZS5jby9ibG9nL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA0/L01ha2UteW91ci1l/bWFpbHMtc3RhbmQt/b3V0LTIuanBn", // example
    },
    {
        id: "OD654321",
        items: 1,
        status: "Pending",
        price: 499,
        date: "Feb 05, 2026",
        image: "https://imgs.search.brave.com/mmapSh85ew7etZmgW1DKoH49P6RGZyO1Xkly0LB2NJA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92aXNt/ZS5jby9ibG9nL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA0/L0hlYWRlci0yNC5q/cGc",
    },
    {
        id: "OD65421",
        items: 2,
        status: "Delivered",
        price: 503,
        date: "Feb 28, 2026",
        image: "https://imgs.search.brave.com/mmapSh85ew7etZmgW1DKoH49P6RGZyO1Xkly0LB2NJA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92aXNt/ZS5jby9ibG9nL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA0/L0hlYWRlci0yNC5q/cGc",
    },
];

const OrdersListPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen mt-20 bg-white p-10">
            <button onClick={() => navigate(-1)} className="mb-4 cursor-pointer text-black">← Back to Profile</button>
            <h1 className="text-2xl font-bold mb-4">My Orders</h1>
            <div className="space-y-3">
                {orders.map((order) => (
                    <div
                        key={order.id}
                        onClick={() => navigate(`/order/${order.id}`)}
                        className="bg-white rounded-2xl shadow p-4 flex justify-between items-center cursor-pointer hover:shadow-md transition"
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src={order.image}
                                alt="Product"
                                className="w-12 h-12 object-cover rounded-lg"
                            />
                            <div>
                                <p className="font-semibold">Order {order.id}</p>
                                <p className="text-sm text-gray-500">{order.items} items</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-semibold">₹{order.price}</p>
                            <p
                                className={`text-sm font-medium ${order.status === "Delivered"
                                    ? "text-green-600"
                                    : "text-yellow-600"
                                    }`}
                            >
                                {order.status}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrdersListPage;