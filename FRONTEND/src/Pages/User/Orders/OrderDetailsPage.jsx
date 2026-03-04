// OrderDetailsPage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ordersDetails = {
    OD123456: {
        products: [
            { name: "Minutes Basket", qty: 1, price: 947, image: "https://via.placeholder.com/150" },
        ],
        delivery: { address: "Work - A-60/2 GT KARNAL ROAD", name: "Piyush", phone: "8595594378" },
        pricing: { listing: 3490, selling: 899, fees: 48, total: 947 },
        payment: "Credit Card",
    },
};

const OrderDetailsPage = () => {
    const { orderId } = useParams();
    const navigate = useNavigate();
    const order = ordersDetails[orderId];

    if (!order) return <p>Order not found</p>;

    return (
        <div className="min-h-screen mt-20 bg-white p-4">
            <button onClick={() => navigate(-1)} className="mb-4 cursor-pointer text-blue-600">← Back to Orders</button>
            <div className="grid lg:grid-cols-3 gap-6">
                {/* Left - Order Products */}
                <div className="lg:col-span-2 space-y-4 bg-white p-6 rounded-2xl shadow">
                    <h2 className="text-xl font-semibold mb-4">Order {orderId}</h2>
                    {order.products.map((product, idx) => (
                        <div key={idx} className="flex items-center gap-4 border-b pb-4">
                            <img src={product.image} alt={product.name} className="w-24 h-24 rounded-lg object-cover" />
                            <div className="flex-1">
                                <p className="font-medium">{product.name}</p>
                                <p className="text-sm text-gray-500">Qty: {product.qty}</p>
                            </div>
                            <p className="font-semibold">₹{product.price}</p>
                        </div>
                    ))}

                    {/* Delivery Details */}
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-semibold mb-2">Delivery Details</h3>
                        <p>{order.delivery.address}</p>
                        <p>{order.delivery.name} | {order.delivery.phone}</p>
                    </div>
                </div>

                {/* Right - Price & Payment */}
                <div className="bg-white p-6 rounded-2xl shadow h-fit space-y-4">
                    <h3 className="font-semibold mb-2">Price Details</h3>
                    <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                            <span>Listing Price</span>
                            <span>₹{order.pricing.listing}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Selling Price</span>
                            <span>₹{order.pricing.selling}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Total Fees</span>
                            <span>₹{order.pricing.fees}</span>
                        </div>
                        <div className="flex justify-between font-semibold border-t pt-2">
                            <span>Total Amount</span>
                            <span>₹{order.pricing.total}</span>
                        </div>
                    </div>
                    <div className="mt-2 text-sm flex justify-between items-center">
                        <span>Payment Method</span>
                        <span>{order.payment}</span>
                    </div>
                    <button className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold mt-4">
                        Download Invoice
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderDetailsPage;