import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import { toast } from 'react-toastify';

function OrderSummary({ cartItem, setCartItem }) {
  const navigate = useNavigate();
  const [totalAmount, setTotalAmount] = useState(0);
  const { user } = useContext(UserContext)
  useEffect(() => {
    const itemVlaue = cartItem.reduce((acc, item) => {
      return acc + item.price * item.quantity
    }, 0)
    setTotalAmount(itemVlaue)
  }, [cartItem])

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
      {cartItem.length === 0 ? "" : (<div className='w-90 bg-gray-100 p-2'>
        <div className='bg-gray-200 mb-0.5 rounded'> <h1 className='p-4 font-bold'>Order Summary</h1></div>
        <div className='bg-gray-300 p-8'>
          <div className='flex justify-between'><span>Subtotal</span><span>{MrptoCurrency(totalAmount)}</span></div>
          <div className='flex justify-between'><span>Shipping</span><span>Free</span></div>
        </div>
        <div className='bg-gray-200 mt-0.5 p-4 rounded font-bold flex justify-between'><span className='px-4 font-bold'>Total</span><span className='px-4 font-bold'>{MrptoCurrency(totalAmount)}</span></div>
        <div onClick={() => userCheck()} className='p-2 text-center bg-green-600 cursor-pointer hover:bg-green-400'>CHECKOUT</div>
      </div>)}
    </div>
  )
}

export default OrderSummary
