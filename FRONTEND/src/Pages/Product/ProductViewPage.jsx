import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductListArr from '../../data/ProductList2.json'
import ProductViewSection from '../../sections/ProductViewSection'
export const ItemContext = React.createContext();

function ProductViewPage() {
    const [shoeSize, setShoeSize] = React.useState([])
    console.log(shoeSize)
    const { id } = useParams()
    const selectedProduct = ProductListArr.find((prod) => prod.id === Number(id));
    return (
        <div>
            {
                <ItemContext.Provider value={{ setShoeSize }}>
                    < ProductViewSection item={selectedProduct} />
                </ItemContext.Provider>
            }
        </div>
    )
}

export default ProductViewPage
