import React, { useState } from 'react'
import { IoStarSharp } from "react-icons/io5";
import { Link, useNavigate, useParams } from 'react-router-dom';

function ImgCard({ shoe }) {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/${shoe.gender}/${shoe._id}`)} className='flex p-1'>
            <div className='bg-white p-1 m-1 w-38 h-78 border border-dashed rounded-4xl cursor-pointer hover:shadow-lg hover:scale-101 md:h-68 md:w-70 md:p-4'>
                <img className='p-1 h-[40%] w-50 md:h-[50%] md:w-full md:p-3' style={{
                    objectFit: 'contain',
                }} src={shoe?.ImageUrl?.[0]} alt="shoeImg" />
                <p className='font-bold text-gray-400 text-center uppercase'>{shoe.brand}</p>
                <h1 className='text-center font-bold text-xl text-wrap md:text-sm'>{shoe.name}</h1>
                <div className='flex justify-around items-center mt-5'>
                    <div className='bg-blue-500 flex justify-center items-center gap-2 px-2 rounded'>
                        <IoStarSharp />
                        <p className='text-white'>{shoe.rating}</p>
                    </div>
                    <p className='text-center'>₹{shoe.price.toLocaleString('en-IN')}</p>
                </div>
            </div>
        </div>

    )
}

export default ImgCard
