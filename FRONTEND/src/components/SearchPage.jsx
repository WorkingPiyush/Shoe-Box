import React from 'react'
import ProductList from './ProductList'

function SearchPage() {
    return (
        <>
            <div className='p-10'>
                <div className="mt-11 md:mt-11 flex justify-around flex-row items-center bg-white rounded p-4 md:p-6 gap-4 md:gap-6 text-sm">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold hidden md:inline-block">Sorting</h1>
                    <div className="flex flex-wrap md:justify-around items-center gap-2 md:gap-5 w-full md:w-auto">
                        <button className="bg-gray-100 flex-1 md:flex-none md:w-48 px-1 py-3 md:py-3 text-lg cursor-pointer md:text-xl rounded border">Price - Low to High</button>
                        <button className="bg-gray-100 flex-1 md:flex-none md:w-48 px-1 py-3 md:py-3 text-lg cursor-pointer md:text-xl rounded border">Price - High to Low</button>
                        <button className="bg-blue-500 flex-1 md:flex-none md:w-48 px-1 py-3 md:py-3 text-white cursor-pointer text-lg md:text-xl rounded">Newest First</button>
                        <select id="brand" name="brand" className="flex-1 md:flex-none md:w-46 cursor-pointer rounded text-center border border-black bg-white text-xl md:text-lg text-gray-800 shadow-md focus:outline-none md:px-4 md:py-2 ">
                            <option value="">Select Brands</option>
                            <option value="sparx">SPARX</option>
                            <option value="campus">CAMPUS</option>
                            <option value="redtape">RED TAPE</option>
                            <option value="relaxo">RELAXO</option>
                        </select>
                    </div>
                </div>
                <div className='h-50 w-full bg-white rounded-xl mt-8 left-0 md:w-70 md:h-80'>
                    <h1 className='p-4 w-full bg-white rounded-t-xl text-2xl font-bold text-center border-b border-gray-200 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.2)] hidden md:inline-block'>Filters </h1>
                    <h5 className='text-gray-500 flex justify-center text-xl px-4 py-2 font-bold border-gray-200 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.2)] md:text-2xl'>Price Range</h5>
                    <div className="w-full px-4 flex justify-center">
                        <select id="brand" name="brand" className="cursor-pointer rounded text-center border border-black bg-white text-gray-800 shadow-md transition  focus:ring-2 focus:ring-blue-500 focus:outline-none md:px-4 md:py-2 md:text-xl ">
                            <option value="slab-1">₹0 - ₹1,000</option>
                            <option value="slab-2">₹1,000 - ₹2,000</option>
                            <option value="slab-3">₹2,000 - ₹3,000</option>
                            <option value="slab-4">₹3,000 - ₹4,000</option>
                            <option value="slab-5">₹4,000 - ₹5,000</option>
                            <option value="slab-6">₹5,000+</option>
                        </select>
                    </div>
                    <div>
                        <h5 className='text-2xl px-4 py-1 font-bold text-center'>Select Size</h5>
                        <div className="space-y-3 px-4 flex justify-center items-baseline gap-1 mt-5 font-bold">
                            <label className="flex items-center  gap-3 cursor-pointer">
                                <input type="checkbox" className="peer hidden" />
                                <span className="flex h-5 w-5 items-center justify-center rounded-md border border-gray-300 peer-checked:border-gray-900 peer-checked:bg-gray-900">
                                    <span className="h-2 w-2 opacity-0 peer-checked:opacity-100"></span>
                                </span>
                                <span className="text-lg text-black">5</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" className="peer hidden" />
                                <span className="flex h-5 w-5 items-center justify-center rounded-md border border-gray-300
                 peer-checked:border-gray-900 peer-checked:bg-gray-900">
                                    <span className="h-2 w-2 bg-white opacity-0 peer-checked:opacity-100"></span>
                                </span>
                                <span className="text-lg text-black">10</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" className="peer hidden" />
                                <span className="flex h-5 w-5 items-center justify-center rounded-md border border-gray-300
                 peer-checked:border-gray-900 peer-checked:bg-gray-900">
                                    <span className="h-2 w-2 bg-white opacity-0 peer-checked:opacity-100"></span>
                                </span>
                                <span className="text-lg text-black">15</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" className="peer hidden" />
                                <span className="flex h-5 w-5 items-center justify-center rounded-md border border-gray-300
                 peer-checked:border-gray-900 peer-checked:bg-gray-900">
                                    <span className="h-2 w-2 bg-white opacity-0 peer-checked:opacity-100"></span>
                                </span>
                                <span className="text-lg text-black">20</span>
                            </label>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default SearchPage
