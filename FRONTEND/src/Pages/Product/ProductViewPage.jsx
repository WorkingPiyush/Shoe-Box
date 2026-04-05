import { useParams } from 'react-router-dom'
import ProductViewSection from '../../sections/ProductViewSection'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ThreeDot } from 'react-loading-indicators';
import PageNotFound from '../../components/PageNotFound';
import { toast } from 'react-toastify';

function ProductViewPage() {
    const { gender, slug } = useParams()
    if (!['male', 'female', 'kids'].includes(gender)) {
        return <PageNotFound />
    }
    const fetchProductPage = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/product/page?gender=${gender}&slug=${slug}`);
            return res.data
        } catch (err) {
            throw new Error(err.response?.data?.message || err.message);
        }
    }
    const { data, isLoading, error } = useQuery({
        queryKey: ['products', slug, gender],
        queryFn: fetchProductPage,
        staleTime: 10 * 60 * 1000,
        keepPreviousData: true,
        onError: (err) => console.log(err.message),
    });
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
