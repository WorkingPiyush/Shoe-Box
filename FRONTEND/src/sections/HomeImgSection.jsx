import React from 'react'
import ImgCard from '../components/ImgCard.jsx';
import { useProducts } from '../Context/ProductContext.js';
import SkeletonImgCard from '../components/SkeletonImgCard.jsx';


function HomeImgSection() {
    const { data, isLoading } = useProducts();
    return (
        <div className='p-4 bg-gray-100 rounded-2xl grid grid-cols-2 place-items-center justify-evenly relative md:flex md:flex-wrap md:justify-evenly'>
            <h1 className='absolute left-5 -top-8 font-bold text-3xl italic'>Featured Shoes</h1>
            {data && data.slice(0, 15).map(shoe => {
                return (isLoading ? <SkeletonImgCard /> : < ImgCard key={shoe._id} shoe={shoe} />)
            })}
        </div>
    )
}

export default HomeImgSection
