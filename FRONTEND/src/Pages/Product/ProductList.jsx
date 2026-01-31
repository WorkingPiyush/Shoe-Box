import React from 'react'
import ImgCard from '../../components/ImgCard/ImgCard'
import ProductListArr from "../../data/ProductList2.json"
import Filters from '../../sections/Filters'
import { useLocation } from 'react-router-dom'
import Sorting from '../../sections/Sorting'
function ProductList() {
    const websiteDir = useLocation()
    const gender = websiteDir.pathname.slice(1)
    return (
        <div>
            <div>
                <div className='text-4xl text-center font-bold p-2 flex justify-center mt-20'><h1 className='uppercase'>{gender === "male" ? "Men's Section" : ""}</h1></div>
                <Filters />
                <Sorting />
                <div className='flex justify-center flex-wrap mt-1 w-fit bg-gray-500/15 rounded-xl'>
                    {ProductListArr.slice(0, 16).map(item => {
                        if (item.gender == gender) {
                            return <ImgCard key={item.id} props={item} />
                        }
                    })}
                </div>
            </div>

        </div>
    )
}

export default ProductList
