import React from 'react'
import { useParams } from 'react-router-dom'
import ProductListArr from '../../data/ProductList2.json'
import img from '../../../src/assets/Images/product-list/adidas_running 1.jpg'
import { IoStarSharp } from "react-icons/io5";

function ProductViewPage() {
    const { id } = useParams()
    const selectedProduct = ProductListArr.find((prod) => prod.id === Number(id))
    // console.log(selectedProduct)
    return (
        <div className='h-screen py-20 bg-green-500 flex'>
            <div className='bg-white w-1/2 p-4 flex flex-col justify-around'>
                <img src={img} alt="ProductImg" className='h-90 ' />
                <div className='flex gap-5 justify-center items-center'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer'>Add to Cart</button>
                    <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer'>Buy Now</button>
                </div>
            </div>
            <div className='bg-black w-1/2 p-4 text-white'>
                <h1 className='text-gray-400 font-bold'>Company Name</h1>
                <h5 className=''>Shoe Name</h5>
                <p className='flex'><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></p>
                <h2>Price</h2>
                <p>Size Availale</p>
                <p>Estimate date of delivery</p>
            </div>

        </div>
    )
}

export default ProductViewPage
