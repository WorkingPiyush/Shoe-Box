import React, { useState } from 'react'
import ProductListArr from '../data/ProductList2.json'
import { useLocation } from 'react-router-dom'

function Filters({ updatefilter, updatePriceSlab, updateSize, updateCategory }) {
    const websiteDir = useLocation()
    const gender = websiteDir.pathname.slice(1)

    const filteredListArr = ProductListArr.filter(p => p.gender === gender)
    const [open, setOpen] = useState(false);
    const [selectedLabel, setSelectedLabel] = useState("Select Brand");
    const [selectBrand, setSelectBrand] = useState("all");
    const capital = str => str.trim()[0].toUpperCase() + str.trim().slice(1).toLowerCase();
    const filterShoe = [
        ...new Set(
            filteredListArr.map(prod => prod.brand)
        )]

    const [active, setActive] = useState(false);
    const [price, setPrice] = useState("Select Price Range");


    const [select, setSelect] = useState(false);
    const [size, setSize] = useState("Select Size");
    const shoeSize = [...new Set(
        filteredListArr.flatMap(prod =>
            Array.isArray(prod.sizes) ? prod.sizes : [prod.sizes]
        )
    )]
    const [alive, setAlive] = useState(false);
    const [category, setCategory] = useState("Select Category");
    const shoeCategory = [...new Set(
        filteredListArr.flatMap(prod =>
            (Array.isArray(prod.category) ? prod.category : [prod.category]).map(capital)
        )
    )]
    const priceSlabsUI = [
        { value: "slab-1", label: "₹0 – ₹1,000" },
        { value: "slab-2", label: "₹1,000 – ₹2,000" },
        { value: "slab-3", label: "₹2,000 – ₹3,000" },
        { value: "slab-4", label: "₹3,000 – ₹4,000" },
        { value: "slab-5", label: "₹4,000 – ₹5,000" },
        { value: "slab-6", label: "₹5,000+" },
    ];
    return (
        <div className='sticky top-26 flex justify-center'>
            <div className='h-15 p-1 rounded bg-gray-500/60 backdrop-blur-lg flex items-center justify-center gap-5'>
                <div className="relative rounded bg-gray-100 text-sm cursor-pointer border">
                    <button onClick={() => setOpen(!open)} className="w-17 cursor-pointer bg-gray-100 border border-gray-300 text-xs rounded py-1 px-1 flex justify-between items-center md:w-42 md:px-3 md:py-2 md:text-xl" >
                        <span>{selectedLabel}</span>
                        <span className="text-sm">▼</span>
                    </button>

                    {open && (
                        <ul className="absolute w-22 bg-white border border-gray-300 rounded mt-1 shadow z-10 md:w-42">
                            <li
                                onClick={() => {
                                    setSelectBrand("all");
                                    updatefilter("all");
                                    setOpen(false);
                                }}
                                className="px-4 text-xl py-2 hover:bg-gray-100 cursor-pointer font-medium sm:text-xs"
                            >
                                All Brands
                            </li>
                            {filterShoe.map((brand) => (
                                <li key={brand} onClick={() => {
                                    setSelectedLabel(capital(brand));
                                    updatefilter(brand.toLowerCase())
                                    setOpen(false);
                                }}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer" >
                                    {capital(brand)}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="relative rounded bg-gray-100 text-sm cursor-pointer border">
                    <button onClick={() => setActive(!active)} className="w-22 cursor-pointer bg-gray-100 border border-gray-300 text-xs rounded py-1 px-1 flex justify-between items-center md:w-60 md:px-3 md:py-2 md:text-xl" >
                        <span>{price}</span>
                        <span className="text-sm">▼</span>
                    </button>

                    {active && (
                        <ul className="absolute bg-white w-22 border border-gray-300 rounded mt-1 shadow z-10 md:w-60">
                            <li
                                onClick={() => {
                                    setPrice("All");
                                    updatePriceSlab("all");
                                    setActive(false);
                                }}
                                className="px-4 py-2 text-xs hover:bg-gray-100 cursor-pointer font-medium"
                            >
                                All
                            </li>
                            {priceSlabsUI.map((slab) => (
                                <li key={slab.value} onClick={() => {
                                    setPrice(slab.label); setActive(false);
                                    updatePriceSlab(slab.value)
                                }}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    {slab.label}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="relative rounded bg-gray-100 text-sm cursor-pointer border">
                    <button onClick={() => setSelect(!select)} className="w-20 cursor-pointer bg-gray-100 border border-gray-300 text-xs rounded py-1 px-1 flex justify-between items-center md:w-35 md:px-3 md:py-2 md:text-xl" >
                        <span>{size}</span>
                        <span className="text-sm">▼</span>
                    </button>

                    {select && (
                        <ul className="absolute bg-white border border-gray-300 rounded mt-1 shadow z-10 md:w-35">
                            <li
                                onClick={() => {
                                    updateSize("all");
                                    setSize("All Sizes");
                                    setSelect(false);
                                }}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-medium"
                            >
                                All Sizes
                            </li>
                            {shoeSize.map((s, id) => (
                                <li key={s.id} onClick={() => {
                                    setSize(s); setSelect(false); updateSize(s);
                                }}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    {s}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="relative rounded bg-gray-100 text-sm cursor-pointer border">
                    <button onClick={() => setAlive(!alive)} className="w-20 cursor-pointer bg-gray-100 border border-gray-300 text-xs rounded py-1 px-1 flex justify-between items-center md:w-45 md:px-3 md:py-2 md:text-xl" >
                        <span>{category}</span>
                        <span className="text-sm">▼</span>
                    </button>

                    {alive && (
                        <ul className="absolute w-20 bg-white border border-gray-300 rounded mt-1 shadow z-10 md:w-45">
                            <li
                                onClick={() => {
                                    updateCategory("all");
                                    setCategory("All Sizes");
                                    setAlive(false);
                                }}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-medium"
                            >
                                All Category
                            </li>
                            {shoeCategory.map((c, id) => (
                                <li key={c.id} onClick={() => {
                                    setCategory(c); setAlive(false); updateCategory(c.toLowerCase())
                                }}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    {c}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Filters
