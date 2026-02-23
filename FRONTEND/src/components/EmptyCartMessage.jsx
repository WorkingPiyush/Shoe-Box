import React from 'react'
import { useNavigate } from 'react-router-dom'

function EmptyCartMessage() {
    const navigate = useNavigate();
    return (
        <div className="flex justify-center items-center min-h-[60vh]">
            <div className="bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl p-10 text-center max-w-md">
                <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                    Your Cart is Empty
                </h2>
                <p className="text-gray-500 mb-6">
                    Add some items to get started.
                </p>
                <button onClick={() => navigate("/male")} className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                    Continue Shopping
                </button>
            </div>
        </div>
    )
}

export default EmptyCartMessage
