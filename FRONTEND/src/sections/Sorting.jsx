import React, { useState } from 'react'

function Sorting({ sortHtLOrder, sortHtLOrderVal, sortIsNew, sortIsNewVal }) {
    return (
        <div className='fixed bottom-10 h-15 z-999 w-full p-1 flex items-center justify-center md:bg-transparent'>
            <div className='h-15 font-bold flex justify-center items-center gap-4 md:gap-5 bg-blue-400 p-4 rounded-xl'>
                <button style={sortHtLOrderVal === "low-high" ? { backgroundColor: "#157db4" } : {}} onClick={() => { sortHtLOrder(prev => prev === "none" ? "low-high" : "none") }} className='bg-gray-100 py-1 px-1 cursor-pointer text-sm rounded border md:px-3 md:py-2 md:text-xl'>Price - Low to High</button>
                <button style={sortHtLOrderVal === "high-low" ? { backgroundColor: "#157db4" } : {}} onClick={() => { sortHtLOrder(prev => prev === "none" ? "high-low" : "none") }} className='bg-gray-100 py-1 px-1 cursor-pointer text-sm rounded border md:px-3 md:py-2 md:text-xl'>Price - High to Low</button>
                <button style={sortIsNewVal ? { backgroundColor: "#157db4" } : {}} onClick={() => { sortIsNew(prev => !prev) }} className='bg-gray-100 py-1 px-1 cursor-pointer text-sm rounded border md:px-3 md:py-2 md:text-xl'>Newest First</button>
            </div>
        </div >
    )
}

export default Sorting
