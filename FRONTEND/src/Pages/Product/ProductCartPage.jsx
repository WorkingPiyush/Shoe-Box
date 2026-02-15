import React, { useContext } from 'react'
import CardCartSection from '../../sections/CardCartSection'
import OrderSummary from '../../sections/OrderSummary'
import { CartContext } from '../../Context/CartContext'

function ProductCartPage() {
  const { cartItem, setCartItem,addItem } = useContext(CartContext)
  return (
    <div className='pt-20 h-180 p-10'>
      <h1 className='font-bold text-center text-4xl m-5'>CART SECTION</h1>
      <div className='flex'>
        <CardCartSection cartItem={cartItem} setCartItem={setCartItem} addItem={addItem}  />
        <OrderSummary cartItem={cartItem} setCartItem={setCartItem} />
      </div>
    </div>
  )
}

export default ProductCartPage
