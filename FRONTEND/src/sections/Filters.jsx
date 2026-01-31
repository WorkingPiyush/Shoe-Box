import React, { useState } from 'react'
import ProductListArr from '../data/ProductList2.json'
function Filters() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("Select Brand");
    const filterShoe = [...new Set(
        ProductListArr.flatMap(prod =>
            Array.isArray(prod.brand) ? prod.brand : [prod.brand]
        )
    )]

    const [active, setActive] = useState(false);
    const [price, setPrice] = useState("Select Price Range");


    const [select, setSelect] = useState(false);
    const [size, setSize] = useState("Select Size");
    const shoeSize = [...new Set(
        ProductListArr.flatMap(prod =>
            Array.isArray(prod.sizes) ? prod.sizes : [prod.sizes]
        )
    )]
    const [alive, setAlive] = useState(false);
    const [category, setCategory] = useState("Select Category");
    const shoeCategory = [...new Set(
        ProductListArr.flatMap(prod =>
            Array.isArray(prod.category) ? prod.category : [prod.category]
        )
    )]



    const priceSlabs = [
        { value: "slab-1", label: "₹0 – ₹1,000" },
        { value: "slab-2", label: "₹1,000 – ₹2,000" },
        { value: "slab-3", label: "₹2,000 – ₹3,000" },
        { value: "slab-4", label: "₹3,000 – ₹4,000" },
        { value: "slab-5", label: "₹4,000 – ₹5,000" },
        { value: "slab-6", label: "₹5,000+" },
    ];

    return (
        <div className='sticky top-20 h-15 z-999 w-full rounded bg-white backdrop-blur-lg flex items-center justify-center gap-5'>
            <div className="relative rounded bg-gray-100 text-sm cursor-pointer border">
                <button onClick={() => setOpen(!open)} className="w-18 cursor-pointer bg-gray-100 border border-gray-300 text-xs rounded py-1 px-1 flex justify-between items-center md:w-42 md:px-3 md:py-2 md:text-xl" >
                    <span>{selected}</span>
                    <span className="text-sm">▼</span>
                </button>

                {open && (
                    <ul className="absolute w-full bg-white border border-gray-300 rounded mt-1 shadow z-10">
                        {filterShoe.map((brand) => (
                            <li key={brand} onClick={() => {
                                setSelected(brand);
                                setOpen(false);
                            }}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer" >
                                {brand}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="relative rounded bg-gray-100 text-sm cursor-pointer border">
                <button onClick={() => setActive(!active)} className="w-22 cursor-pointer bg-gray-100 border border-gray-300 text-xs rounded py-1 px-1 flex justify-between items-center md:w-52 md:px-3 md:py-2 md:text-xl" >
                    <span>{price}</span>
                    <span className="text-sm">▼</span>
                </button>

                {active && (
                    <ul className="absolute w-full bg-white border border-gray-300 rounded mt-1 shadow z-10">
                        {priceSlabs.map((slab) => (
                            <li key={slab.value} onClick={() => {
                                setPrice(slab.label); setActive(false);
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
                    <ul className="absolute w-full bg-white border border-gray-300 rounded mt-1 shadow z-10">
                        {shoeSize.map((s, id) => (
                            <li key={s.id} onClick={() => {
                                setSize(s); setSelect(false);
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
                    <ul className="absolute w-full bg-white border border-gray-300 rounded mt-1 shadow z-10">
                        {shoeCategory.map((s, id) => (
                            <li key={s.id} onClick={() => {
                                setCategory(s); setAlive(false);
                            }}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                                {s}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Filters
