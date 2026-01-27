import React from 'react'
import ProductList from './ProductList'

function SearchPage() {
    return (
        <>
            <div className='bg-gray-600 h-screen p-10 relative'>
                <div className='mt-11 px-13 h-15 flex justify-evenly items-center bg-gray-50 rounded w-full m-auto'>
                    <h1 className='text-2xl font-bold'>Filters</h1>
                    <div className='flex justify-center items-center gap-5  w-full'>
                        <button className='bg-gray-100 px-4 py-2 cursor-pointer text-xl rounded border'>Price - Low to High</button>
                        <button className='bg-gray-100 px-4 py-2 cursor-pointer text-xl rounded border'>Price - High to Low</button>
                        <button className='bg-blue-500 px-4 py-2 cursor-pointer text-white text-xl rounded' >Newest First</button>
                        <div className="w-64">
                            <select id="brand" name="brand" className="cursor-pointer rounded text-center border border-black bg-white px-4 py-2 text-xl text-gray-800 shadow-md transition  focus:ring-2 focus:ring-blue-500 focus:outline-none">
                                <option value="">Select Brands</option>
                                <option value="sparx">SPARX</option>
                                <option value="campus">CAMPUS</option>
                                <option value="redtape">RED TAPE</option>
                                <option value="relaxo">RELAXO</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='h-100 w-1/6 bg-white rounded-xl mt-8 left-0'>
                    <h1 className='p-4 w-full bg-white rounded-t-xl text-2xl font-bold  border-b border-gray-200 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.2)]'>Sorting</h1>
                    <h5 className='text-gray-500 text-2xl px-4 py-1 font-bold'>Price Range</h5>
                    <div className="w-64 px-4">
                        <select id="brand" name="brand" className="cursor-pointer rounded text-center border border-black bg-white px-4 py-2 text-xl text-gray-800 shadow-md transition  focus:ring-2 focus:ring-blue-500 focus:outline-none">
                            <option value="slab-1">₹0 - ₹1,000</option>
                            <option value="slab-2">₹1,000 - ₹2,000</option>
                            <option value="slab-3">₹2,000 - ₹3,000</option>
                            <option value="slab-4">₹3,000 - ₹4,000</option>
                            <option value="slab-5">₹4,000 - ₹5,000</option>
                            <option value="slab-6">₹5,000+</option>
                        </select>
                    </div>
                    <div>
                        <h5 className='text-2xl px-4 py-1 font-bold'>Select Size</h5>
                        <div class="space-y-3 px-4 font-bold">
                            <label class="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" class="peer hidden" />
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
                <div className='h-130 w-[163vh] rounded absolute top-42 left-75 bg-amber-400'>
                    search Results will appear here
                    <ProductList/>
                </div>
            </div>

        </>
    )
}

export default SearchPage
