import ImgCard from '../components/ImgCard.jsx';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import SkeletonLoader from '../components/SkeletonLoader.jsx';
import { useEffect, useRef, useState } from 'react';

function HomeImgSection() {
    const ref = useRef();
    const [loadProducts, setLoadProducts] = useState(false)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setLoadProducts(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "200px" }
        )
        if (ref.current) return observer.observe(ref.current)
        return () => observer.disconnect();
    }, [])
    const fetchHomeProducts = async () => {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/product/products?page=1&limit=15`);
        return res.data;
    }
    const { data, isLoading } = useQuery({
        queryKey: ['Homeproducts'],
        queryFn: fetchHomeProducts,
        enabled: loadProducts,
        staleTime: 10 * 60 * 1000,
        keepPreviousData: true,
    })
    return (
        <div ref={ref}>
            {!loadProducts && <SkeletonLoader length={18} />}
            {loadProducts && isLoading && <SkeletonLoader length={18} />}
            <h1 className='absolute left-5 -top-8 font-bold text-3xl italic'>Featured Shoes</h1>
            {data && (
                <div className='p-4 bg-gray-100 rounded-2xl grid grid-cols-3 gap-5 place-items-center justify-evenly relative md:gap-1 md:flex md:flex-wrap md:justify-evenly'>
                    {data.product.map(shoe => {
                        return < ImgCard key={shoe.id} shoe={shoe} />
                    })}
                </div>
            )}
        </div>
    )
}

export default HomeImgSection
