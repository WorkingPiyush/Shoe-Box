import React, { useEffect, useMemo, useState } from 'react'
import ImgCard from '../components/ImgCard'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
function ProductGrid({ routedGender, selectedBrand, selectedSlab, selectedSize, selectedCategory, sortedHtLOrder, sortIsNewVal }) {
    const gender = routedGender
    const fetchProduct = async () => {
        const res = await axios.get('http://localhost:3000/product/section', {
            params: {
                gender: routedGender
            }
        });
        return res.data
    }
    const { data, isLoading } = useQuery({
        queryKey: ['products', gender],
        queryFn: fetchProduct,
        staleTime: 10 * 60 * 1000,
        keepPreviousData: true,
    })
    const priceSlabsLog = [
        ["slab-1", [0, 1000]],
        ["slab-2", [1000, 2000]],
        ["slab-3", [2000, 3000]],
        ["slab-4", [3000, 4000]],
        ["slab-5", [4000, 5000]],
        ["slab-6", [5000, Infinity]],
    ];
    let ProductList = data || [];
    const filterdBrandedList = useMemo(() => {
        if (!ProductList) return []
        let secProductListArr = ProductList;
        if (selectedBrand !== "all") {
            secProductListArr = secProductListArr.filter(prod => {
                const BrandArr = Array.isArray(prod.brand) ? prod.brand : [prod.brand];
                return BrandArr.some(b => b.toLowerCase() === selectedBrand.toLowerCase());
            })
        }
        if (selectedSlab !== "all") {
            const [min, max] = priceSlabsLog.find(([key]) => key === selectedSlab)[1];
            secProductListArr = secProductListArr.filter(prod => {
                return prod.price >= min && prod.price <= max
            })
        }
        if (selectedSize !== "all") {
            secProductListArr = secProductListArr.filter(prod => {
                const SizeArr = Array.isArray(prod.sizes) ? prod.sizes : [prod.sizes];
                return SizeArr.includes(selectedSize);
            })
        }
        if (selectedCategory !== "all") {
            secProductListArr = secProductListArr.filter(prod => {
                const CategoryArr = Array.isArray(prod.category) ? prod.category : [prod.category];
                return CategoryArr.some(b => b.toLowerCase() === selectedCategory.toLowerCase());
            })
        }
        if (sortedHtLOrder === "low-high") {
            secProductListArr.sort((a, b) => a.price - b.price)
        }
        if (sortedHtLOrder === "high-low") {
            secProductListArr.sort((a, b) => b.price - a.price)
        }
        if (sortIsNewVal) {
            secProductListArr.sort((a, b) => a.isNew - b.isNew)
        }
        return secProductListArr;
    }, [ProductList, selectedBrand, selectedSlab, selectedSize, selectedCategory, sortedHtLOrder, sortIsNewVal])
    return (
        <div className='flex justify-center flex-wrap mt-1 w-fit bg-gray-500/15 rounded-xl'>
            {filterdBrandedList.map(shoe => {
                if (shoe.gender == routedGender) {
                    return (isLoading ? "Loading.." : <ImgCard key={shoe.id} shoe={shoe} />)
                }
            })}
        </div >
    )
}


export default ProductGrid
