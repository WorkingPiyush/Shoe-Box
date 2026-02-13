import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Filters from '../../sections/Filters'
import Sorting from '../../sections/Sorting'
import ProductGrid from '../../sections/ProductGrid'
function ProductList() {
    const gender = useLocation().pathname.slice(1);
    const [selectedBrand, setSelectedBrand] = useState('all');
    const [selectedSlab, setSelectedSlab] = useState('all');
    const [selectedSize, setSelectedSize] = useState("all");
    const [selectCategory, setSelectCategory] = useState('all');
    const [sortOrder, setSortOrder] = useState('none');
    const [isNew, setIsNew] = useState(false);
    return (
        <div>
            <div>
                <div className='text-4xl text-center font-bold p-2 flex justify-center mt-20'><h1 className='uppercase'>{`${gender}'s Section`}</h1></div>
                <Filters updatefilter={setSelectedBrand} updatePriceSlab={setSelectedSlab} updateSize={setSelectedSize} updateCategory={setSelectCategory} />
                <Sorting sortHtLOrder={setSortOrder} sortHtLOrderVal={sortOrder} sortIsNewVal={isNew} sortIsNew={setIsNew} />
                <div className='flex justify-center'>
                    <ProductGrid routedGender={gender} selectedBrand={selectedBrand} selectedSlab={selectedSlab} selectedSize={selectedSize} selectedCategory={selectCategory} sortedHtLOrder={sortOrder} sortIsNewVal={isNew} />
                </div>
            </div>

        </div>
    )
}

export default ProductList
