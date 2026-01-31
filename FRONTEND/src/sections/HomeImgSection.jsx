import React from 'react'
import ImgCard from '../components/ImgCard/ImgCard';
import ProductListArr from '../data/ProductList2.json'

function HomeImgSection() {
    return (
        <div className='p-4 bg-gray-100 rounded-2xl grid grid-cols-2 place-items-center justify-evenly relative md:flex md:flex-wrap md:justify-evenly'>
            <h1 className='absolute left-5 -top-8 font-bold text-3xl italic'>Featured Shoes</h1>
            {ProductListArr.slice(0, 15).map(shoe => {
                return <ImgCard key={shoe.id} props={shoe} />
            })}
        </div>
    )
}

export default HomeImgSection
