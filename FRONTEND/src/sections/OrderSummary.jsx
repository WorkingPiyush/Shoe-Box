import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import { toast } from 'react-toastify';
import { useCart } from '../Context/CartContext';

function OrderSummary() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [totalAmount, setTotalAmount] = useState(0);
  const { data: user } = useUser();
  useEffect(() => {
    const itemVlaue = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity
    }, 0)
    setTotalAmount(itemVlaue)
  }, [cart])

  function userCheck() {
    if (!user) {
      toast.error("Please Sign in to Proceed")
      return
    } else {
      navigate('/summary')
    }
  }
  console.log(cart)
  return (
    <div className=''>
      {cart.length > 0 && (
        <div className='w-65 h-fit m-auto bg-gray-100 p-2 md:w-90'>
          <div className='bg-gray-200 mb-0.5 rounded'> <h1 className='p-2 font-bold md:p-4'>Order Summary</h1></div>
          <div className='bg-gray-300 p-3 md:p-8'>
            <div className='flex justify-between'><span>Subtotal</span><span>{totalAmount.toLocaleString('en')}</span></div>
            <div className='flex justify-between'><span>Shipping</span><span>Free</span></div>
          </div>
          <div className='bg-gray-200 mt-0.5 p-2 rounded font-bold flex justify-between md:p-4'><span className='px-4 font-bold'>Total</span><span className='px-4 font-bold'>{totalAmount.toLocaleString('en')}</span></div>
          <div onClick={() => userCheck()} className='p-2 text-center bg-green-600 cursor-pointer hover:bg-green-400'>CHECKOUT</div>
        </div>
      )}
    </div>
  )
}

export default OrderSummary
