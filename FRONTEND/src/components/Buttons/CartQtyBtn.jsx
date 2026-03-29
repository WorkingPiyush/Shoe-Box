import React, { useContext } from 'react'
import { useUser } from '../../hooks/useUser';
import { toast } from 'react-toastify';
import { CartToBackend } from '../../Services/cartServices';
import { CartContext } from '../../Context/CartContext';
function CartQtyBtn({ productId }) {
    const { data: user } = useUser();
    const { cart, setCart } = useContext(CartContext)
    const product = cart.find((i) => i.productId === productId)

    const decreaseQty = async (product) => {
        const updatedCart = cart.map(prod => {
            if (prod.productId === product.productId && prod.shoeSize === product.shoeSize) {
                return { ...prod, quantity: Math.max(prod.quantity - 1, 0) }
            }
            return prod
        }).filter(prod => prod.quantity >= 0);
        setCart(updatedCart);
        const newQty = updatedCart.find(p => p.productId === product.productId & p.shoeSize === product.shoeSize)?.quantity ?? 0;
        if (user) {
            try {
                await CartToBackend({ productId: product.productId, quantity: newQty, shoeSize: product.shoeSize })
            } catch (error) {
                console.log(error)
                toast.error('Server Issues,Cart not updated')
                setCart(cart)
            }
        } else {
            localStorage.setItem('cart', JSON.stringify(updatedCart))
        }

    }
    const increaseQty = async (product) => {
        const updatedCart = cart.map(prod => {
            if (prod.productId === product.productId && prod.shoeSize === product.shoeSize) {
                return { ...prod, quantity: prod.quantity + 1 };
            }
            return prod;
        })
        setCart(updatedCart);
        const newQty = updatedCart.find(p => p.productId === product.productId & p.size === product.size)?.quantity ?? 0;
        if (user) {
            try {
                await CartToBackend({ productId: product.productId, quantity: newQty, shoeSize: product.shoeSize })
            } catch (error) {
                console.log(error)
                toast.error('Server Issues,Cart not updated')
                setCart(cart)
            }
        } else {
            localStorage.setItem('cart', JSON.stringify(updatedCart))
        }

    }

    return (
        <div>
            <div className="inline-flex flex-col items-center border border-gray-300 rounded-lg overflow-hidden md:flex-row"><button onClick={() => decreaseQty(product)} className="px-3 py-1 bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors">-</button><span className="px-4 py-1 bg-white text-sm font-medium">{product.quantity}</span><button onClick={() => increaseQty(product)} className="px-3 py-1 bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors" >+</button></div>
        </div>
    )
}

export default CartQtyBtn;
