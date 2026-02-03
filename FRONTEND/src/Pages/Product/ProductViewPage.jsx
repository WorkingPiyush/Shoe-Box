import React from 'react'
import { useParams } from 'react-router-dom'
import ProductListArr from '../../data/ProductList2.json'
import ProductViewSection from '../../sections/ProductViewSection'

function ProductViewPage() {
    const { id } = useParams()
    const selectedProduct = ProductListArr.find((prod) => prod.id === Number(id));
    console.log(selectedProduct)
    return (
        <div>
            {
                selectedProduct &&
                <ProductViewSection item={selectedProduct} />
            }
        </div>
    )
}

export default ProductViewPage
