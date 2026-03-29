import React, { useContext, useEffect } from 'react'
import CardCartSection from '../../sections/CardCartSection'
import OrderSummary from '../../sections/OrderSummary'

function ProductCartPage() {
  return (
    <div className='pt-30 h-full p-5'>
      <div className='flex flex-col gap-5 lg:flex-row'>
        <CardCartSection />
        <OrderSummary />
      </div>
    </div>
  )
}

export default ProductCartPage
