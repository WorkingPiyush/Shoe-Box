import React from 'react'
import ImgCard from '../components/ImgCard.jsx';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function HomeImgSection() {
    const fetchHomeProducts = async () => {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/product/home`, {
            params: {
                limit: 15
            }
        });
        return res.data
    }
    const { data, isLoading } = useQuery({
        queryKey: ['Homeproducts'],
        queryFn: fetchHomeProducts,
        staleTime: 10 * 60 * 1000,  
        keepPreviousData: true,
    })
    return (
        <div className='p-4 bg-gray-100 rounded-2xl grid grid-cols-3 gap-5 place-items-center justify-evenly relative md:gap-1 md:flex md:flex-wrap md:justify-evenly'>
            <h1 className='absolute left-5 -top-8 font-bold text-3xl italic'>Featured Shoes</h1>
            {isLoading ? <p>Loading....</p> : data.map(shoe => {
                return < ImgCard key={shoe.id} shoe={shoe} />
            })}
        </div>
    )
}

export default HomeImgSection
