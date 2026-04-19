// OrderDetailsPage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useOrders } from "../../../hooks/useOrders";
import { ThreeDot } from "react-loading-indicators";
import { toast } from "react-toastify";

const OrderDetailsPage = () => {
    const { data: order = [], isLoading } = useOrders();
    const { orderId } = useParams();
    const navigate = useNavigate();
    const ordersDetails = order.find(i => i.id === orderId)
    if (isLoading) {
        return (
            <div className="min-h-screen flex justify-center items-center text-6xl">
                <ThreeDot color={["#205788", "#2a72b1", "#3d8cd1", "#66a4db"]} />
            </div>
        );
    }
    return (
        <div className="min-h-screen mt-20 bg-white p-4">
            <button onClick={() => navigate(-1)} className="mb-4 cursor-pointer text-blue-600">← Back to Order</button>
            <div className="grid lg:grid-cols-3 gap-6">
                {/* Left - Order Products */}
                <div className="lg:col-span-2 space-y-4 bg-white p-6 rounded-2xl shadow">
                    <h2 className="text-xl font-semibold mb-4">{orderId}</h2>
                    {ordersDetails.products.map((product, idx) => (
                        <div key={idx} className="flex items-center gap-4 border-b pb-4">
                            <img src={product.thumbnail} alt={product.name} className="w-24 h-24 object-contain rounded-lg" />
                            <div className="flex-1">
                                <p className="font-medium">{product.name}</p>
                                <p className="text-sm text-gray-500">Qty: {product.quantity}</p>
                            </div>
                            <p className="font-semibold">₹{product.price.toLocaleString('en-IN')}</p>
                        </div>
                    ))}
                    {/* Delivery Details */}
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-semibold mb-2">Delivery Details</h3>
                        <div className="flex-1">
                            <p className="font-semibold">{ordersDetails.delivery.label}</p>
                            <p className="text-sm">{ordersDetails.delivery.name} | {ordersDetails.delivery.phone}</p>
                            <div className='flex gap-1'>
                                <p className="text-sm text-gray-500 mt-1">{ordersDetails.delivery.house}</p>
                                <p className="text-sm text-gray-500 mt-1">{ordersDetails.delivery.locality}</p>
                                <p className="text-sm text-gray-500 mt-1">{ordersDetails.delivery.city}</p>
                                <p className="text-sm text-gray-500 mt-1">{ordersDetails.delivery.pincode}</p>
                                <p className="text-sm text-gray-500 mt-1">{ordersDetails.delivery.country}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right - Price & Payment */}
                <div className="bg-white p-6 rounded-2xl shadow h-fit space-y-4">
                    <h3 className="font-semibold mb-2">Price Details</h3>
                    <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                            <span>Total Amount</span>
                            <span>₹ {ordersDetails.totalAmount.toLocaleString('en-IN')}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Delivery Fee</span>
                            <span>₹ {ordersDetails?.fee || 0}</span>
                        </div>
                        <div className="flex justify-between font-semibold border-t pt-2">
                            <span>Total Amount</span>
                            <span>₹{ordersDetails.totalAmount.toLocaleString('en-IN')}</span>
                        </div>
                    </div>
                    <div className="mt-2 text-sm flex justify-between items-center">
                        <span>Payment Method</span>
                        <span className="text-green-500 font-bold">{ordersDetails.payment === "cod" ? "Cash" : (ordersDetails.payment === "online" ? "Paid thorugh Online (UPI/CARD/NETBANKING)" : "Payment with other method")}</span>
                    </div>
                    <span className="text-sm text-gray-80">Booked on {ordersDetails.date}</span>
                    <button onClick={() => toast.info('We will soon enable this feature')} className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold mt-4">
                        Download Invoice
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderDetailsPage;