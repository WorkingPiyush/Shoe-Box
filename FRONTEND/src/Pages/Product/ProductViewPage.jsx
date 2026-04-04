import { useParams } from 'react-router-dom'
import ProductViewSection from '../../sections/ProductViewSection'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ThreeDot } from 'react-loading-indicators';

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
    if (isLoading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <ThreeDot color={["#205788", "#2a72b1", "#3d8cd1", "#66a4db"]} />
            </div>
        );
    }
    return (
        <div>
            <ProductViewSection item={ProductList} />
        </div>
    )
}

export default ProductViewPage
