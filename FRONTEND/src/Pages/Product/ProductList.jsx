import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Filters from '../../sections/Filters'
import Sorting from '../../sections/Sorting'
import ProductGrid from '../../sections/ProductGrid'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { ThreeDot } from 'react-loading-indicators'
import PageNotFound from '../../components/PageNotFound'
import axios from 'axios'
import { CategoryContext } from '../../Context/CategoryFilterContext'

function ProductList() {
    const { gender } = useParams();
    const allowedCategories = ['male', 'female', 'kids'];
    if (!allowedCategories.includes(gender)) return <PageNotFound />;
    const [selectedBrand, setSelectedBrand] = useState('all');
    const [selectedSlab, setSelectedSlab] = useState('all');
    const [selectedSize, setSelectedSize] = useState("all");
    const { selectCategory, setSelectCategory } = useContext(CategoryContext);
    const [sortOrder, setSortOrder] = useState('none');
    const [isNew, setIsNew] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const queryClient = useQueryClient();

    const fetchProduct = async ({ queryKey }) => {
        const [_key, gender, page] = queryKey;
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/product/products?gender=${gender}&page=${page}&limit=20`);
        return res.data;
    }
    const { data, isLoading } = useQuery({
        queryKey: ['products', gender, currentPage],
        queryFn: fetchProduct,
        staleTime: 10 * 60 * 1000,
        keepPreviousData: true,
    })
    useEffect(() => {
        if (data?.totalPages > currentPage) {
            queryClient.prefetchQuery({
                queryKey: ['products', gender, currentPage + 1],
                queryFn: fetchProduct,
            });
        }

    }, [data, currentPage, gender, queryClient])

    useEffect(() => {
        setCurrentPage(1)
    }, [gender])

    if (isLoading) {
        return (
            <div className="min-h-screen flex justify-center items-center text-6xl">
                <ThreeDot color={["#205788", "#2a72b1", "#3d8cd1", "#66a4db"]} />
            </div>
        );

    }
    
    return (
        <div>
            <div>
                <div className='text-4xl text-center font-bold p-2 flex justify-center'>
                    <h1 className='uppercase mt-28'>{`${gender}'s Section`}</h1></div>
                <Filters data={data} updatefilter={setSelectedBrand} updatePriceSlab={setSelectedSlab} updateSize={setSelectedSize} updateCategory={setSelectCategory} />
                <Sorting sortHtLOrder={setSortOrder} sortHtLOrderVal={sortOrder} sortIsNewVal={isNew} sortIsNew={setIsNew} />
                <div className='flex justify-center'>
                    <ProductGrid setCurrentPage={setCurrentPage} isLoading={isLoading} data={data} currentPage={currentPage} gender={gender} selectedBrand={selectedBrand} selectedSlab={selectedSlab} selectedSize={selectedSize} selectedCategory={selectCategory} sortedHtLOrder={sortOrder} sortIsNewVal={isNew} />
                </div>
            </div>

        </div>
    )
}

export default ProductList
