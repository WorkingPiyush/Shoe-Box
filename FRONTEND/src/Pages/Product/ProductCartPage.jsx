import React, { useContext, useEffect } from 'react'
import CardCartSection from '../../sections/CardCartSection'
import OrderSummary from '../../sections/OrderSummary'

function ProductCartPage() {
  return (
    <div className='pt-30 h-full p-2'>
      <div className='flex flex-col justify-center gap-5 md:flex-row'>
        <CardCartSection />
        <OrderSummary />
      </div>
    </div>
  )
}

export default ProductCartPage
