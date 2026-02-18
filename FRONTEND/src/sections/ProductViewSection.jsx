import React, { useContext, useState } from 'react'
import { IoStarSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import CheckBox from '../components/CheckBox';
import SlidingImgPanel from '../components/SlidingImgPanel';
import { ItemSizeContext } from '../Context/ShoeSizeContext';
import { toast } from 'react-toastify';
import { UserContext } from '../Context/UserContext';
import { useCart } from '../Services/GuestUserCart';


function ProductViewSection({ item }) {
    const { addItem } = useCart();
    const { shoeSize } = useContext(ItemSizeContext)
    const { user } = useContext(UserContext);
    const processShoe = (product) => {
        if (shoeSize.length === 0) {
            toast.error("Please Select Shoe Size")
            return;
        }
        if (user === null) {
            addItem(product)
        }
        if (user !== null) {
            
        }

    }
    let date = new Date();
    date.setDate(date.getDate() + 7);
    let currentDate = date.toLocaleDateString("de-DE");
    return (
        <div className='h-screen py-20 flex flex-col md:flex-row'>
            <div className=' w-full p-4 flex flex-col justify-around items-center rounded-3xl md:w-1/2'>
                <SlidingImgPanel imgList={item.image} />
            </div>
            <div className=' text-black w-full p-8 md:w-1/2 md:p-15 md:text'>
                <h5 className='text-2xl p-4 font-bold md:w-full md:p-0 md:text-3xl'>{item.name}</h5>
                <div className='flex'><span className='md:text-xl'>(</span><h1 className='text-gray-400 inline font-semibold uppercase'>{item.brand}</h1><span className='md:text-xl'>)</span></div>
                <h2 className='font-bold text-xl'>₹{item.price.toLocaleString('en-IN')}</h2>
                <p className='flex gap-1 items-center text-amber-400 text-sm'><IoStarSharp /><span className='font-bold'>{item.rating}</span></p>
                <p className='first-letter:uppercase text-sm'>{item.description}</p>
                <p className='first-letter:uppercase text-bold mb-4'>{item.category} Shoes</p>
                <p className=''>Size Available</p>
                <CheckBox size={item.sizes} />
                <p className='mt-5'>Free shipping availale for new users</p>
                <b>Estimate date of delivery: {currentDate}</b>
                <div className='flex gap-2 mt-10'>
                    <button onClick={() => processShoe(item)} className="px-10 py-2 border border-black text-black bg-white cursor-pointer rounded hover:bg-black hover:text-white transition">
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
