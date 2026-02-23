import React, { useContext } from 'react'
import CardCartSection from '../../sections/CardCartSection'
import OrderSummary from '../../sections/OrderSummary'
import { CartContext } from '../../Context/CartContext'

function ProductCartPage() {
  const { cartItem, setCartItem,addItem } = useContext(CartContext)
  return (
    <div className='pt-30 h-full p-10'>
      <div className='flex'>
        <CardCartSection cartItem={cartItem} setCartItem={setCartItem} addItem={addItem}  />
        <OrderSummary cartItem={cartItem} setCartItem={setCartItem} />
      </div>
    </div>
  )
}

export default ProductCartPage
