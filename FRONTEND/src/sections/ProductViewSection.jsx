import React from 'react'
import { IoStarSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
function ProductViewSection({ item }) {
    let currentDate = new Date().toLocaleDateString("de-DE");
    let shoeSiz = item.sizes;
    return (
        <div className='h-screen py-20 flex flex-col md:flex-row'>
            <div className=' w-full p-4 flex flex-col justify-around items-center rounded-3xl md:w-1/2'>
                <img src={`http://localhost:5173/${item.image[0]}`} alt="ProductImg" className='h-75 w-3/4 object-contain rounded-3xl shadow-xl bg-white p-4 md:w-full' />
            </div>
            <div className=' text-black w-full p-8 md:w-1/2 md:p-15 md:text'>
                <h5 className='text-2xl p-4 font-bold md:w-full md:p-0 md:text-3xl'>{item.name}</h5>
                <div className='flex'><span className='md:text-xl'>(</span><h1 className='text-gray-400 inline font-semibold uppercase'>{item.brand}</h1><span className='md:text-xl'>)</span></div>
                <h2 className='font-bold text-xl py-2 '>₹{item.price.toLocaleString('en-IN')}</h2>
                <p className='flex gap-1 items-center text-amber-400 text-2xl '><IoStarSharp /><span className='font-bold'>{item.rating}</span></p>
                <p className='first-letter:uppercase text-sm'>{item.description}</p>
                <p className='first-letter:uppercase text-bold mb-4'>{item.category} Shoes</p>
                <p className=''>Size Available</p>
                <div>{shoeSiz}</div>
                <p className='mt-5'>Free shipping availale for new users</p>
                <b>Estimate date of delivery: {currentDate}</b>
                <div className='flex gap-2 mt-10'>
                    <button className="px-10 py-2 border border-black text-black bg-white cursor-pointer rounded hover:bg-black hover:text-white transition">
                        ADD TO CART
                    </button>
                    <div className='h-12 w-14 bg-black rounded flex justify-center items-center cursor-pointer'>
                        <FaHeart className='h-10 w-10 text-white' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductViewSection
