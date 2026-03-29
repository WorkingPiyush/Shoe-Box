import React from 'react'

function AddtoCartBtn({ handleAddToCart, item }) {
    return (
        <button onClick={() => handleAddToCart(item)} className="px-10 py-2 border border-black text-black bg-white cursor-pointer rounded hover:bg-black hover:text-white transition">
            ADD TO CART
        </button>
    )
}

export default AddtoCartBtn
