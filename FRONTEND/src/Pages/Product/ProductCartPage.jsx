import React, { useContext, useState } from 'react'
import CardCartSection from '../../sections/CardCartSection'
import OrderSummary from '../../sections/OrderSummary'
import { CartContext } from '../../Context/CartContext'

function ProductCartPage() {
  const { cartProduct, cartItem, setCartItem} = useContext(CartContext)
  return (
    <div className='pt-30 h-full p-5'>
      <div className='flex flex-col gap-5 lg:flex-row'>
        <CardCartSection cartProduct={cartProduct} cartItem={cartItem} setCartItem={setCartItem}/>
        <OrderSummary cartProduct={cartProduct} />
      </div>
    </div>
  )
}

export default ProductCartPage
