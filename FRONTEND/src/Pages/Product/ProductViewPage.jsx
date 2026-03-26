import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductViewSection from '../../sections/ProductViewSection'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function ProductViewPage() {
    const { id } = useParams()
    const fetchProductPage = async () => {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/product/page?id=${id}`, {
        });
        return res.data
    }
    const { data, isLoading } = useQuery({
        queryKey: ['products', id],
        queryFn: fetchProductPage,
        staleTime: 10 * 60 * 1000,
        keepPreviousData: true,
    })
    let ProductList = data || [];
    return (
        <div>
            {isLoading ? <p>Loading...</p> : <ProductViewSection item={ProductList} />}
        </div>
    )
}

export default ProductViewPage
