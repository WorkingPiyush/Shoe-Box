import React, { useContext, useEffect, useState } from 'react'
import CardCartSection from '../../sections/CardCartSection'
import OrderSummary from '../../sections/OrderSummary'
import { CartContext } from '../../Context/CartContext'
import axios from 'axios';

function ProductCartPage() {
  const { cartItem, setCartItem } = useContext(CartContext)
  const [cartProduct, setCartProduct] = useState([])

  const loadCartDetails = async (cart) => {
    if (!cart || cart.length == 0) return;
    try {
      const res = await axios.post('http://localhost:3000/cart/your-cart', { Usercart: cart }, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(res.data)
      setCartProduct(res.data);
    } catch (error) {
      console.error("Failed to fetch user cart:", error);
      setCartProduct([]);
    }
  }

  useEffect(() => {
    loadCartDetails(cartItem);
  }, [cartItem]);
  return (
    <div className='pt-30 h-full p-5'>
      <div className='flex flex-col gap-5 lg:flex-row'>
        <CardCartSection cartProduct={cartProduct} cartItem={cartItem} setCartItem={setCartItem} />
        <OrderSummary cartProduct={cartProduct} />
      </div>
    </div>
  )
}

export default ProductCartPage
