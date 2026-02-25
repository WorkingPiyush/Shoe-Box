import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import { toast } from 'react-toastify';

function OrderSummary({ cartProduct, setCartItem }) {
  const navigate = useNavigate();
  const [totalAmount, setTotalAmount] = useState(0);
  const { user } = useContext(UserContext)
  useEffect(() => {
    const itemVlaue = cartProduct.reduce((acc, item) => {
      return acc + item.price * item.quantity
    }, 0)
    setTotalAmount(itemVlaue)
  }, [cartProduct])

  function MrptoCurrency(input) {
    return input.toLocaleString('en-IN')
  }
  function userCheck() {
    if (user === null) {
      toast.error("Please Sign in to Proceed")
    } else {
      navigate('/')
    }
  }
  return (
    <div className=''>
      {cartProduct.length === 0 ? "" : (<div className='w-65 h-65 m-auto bg-gray-100 p-2 md:w-90'>
        <div className='bg-gray-200 mb-0.5 rounded'> <h1 className='p-2 font-bold md:p-4'>Order Summary</h1></div>
        <div className='bg-gray-300 p-3 md:p-8'>
          <div className='flex justify-between'><span>Subtotal</span><span>{MrptoCurrency(totalAmount)}</span></div>
          <div className='flex justify-between'><span>Shipping</span><span>Free</span></div>
        </div>
        <div className='bg-gray-200 mt-0.5 p-2 rounded font-bold flex justify-between md:p-4'><span className='px-4 font-bold'>Total</span><span className='px-4 font-bold'>{MrptoCurrency(totalAmount)}</span></div>
        <div onClick={() => userCheck()} className='p-2 text-center bg-green-600 cursor-pointer hover:bg-green-400'>CHECKOUT</div>
      </div>)}
    </div>
  )
}

export default OrderSummary
