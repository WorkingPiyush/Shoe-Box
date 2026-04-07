import React, { useContext } from 'react'
import { useUser } from '../../hooks/useUser';
import { toast } from 'react-toastify';
import { CartToBackend, localCart } from '../../Services/cartServices';
import { CartContext } from '../../Context/CartContext';
import { useQueryClient } from '@tanstack/react-query';

function CartQtyBtn({ productId, shoeSize }) {
    const queryClient = useQueryClient();
    const { data: user } = useUser();
    const { cart, refetch } = useContext(CartContext)
    const product = cart.find((i) => i.productId === productId && i.shoeSize == shoeSize)

    const decreaseQty = async (product) => {
        if (user) {
            try {
                await CartToBackend({ productId: product.productId, quantity: -1, shoeSize: product.shoeSize })
                queryClient.setQueryData(['cart', user?.id], (old = []) => {
                    return old
                        .map(i => {
                            if (i.productId === product.productId && i.shoeSize === product.shoeSize) {
                                return { ...i, quantity: i.quantity - 1 };
                            }
                            return i;
                        })
                        .filter(i => i.quantity > 0); // auto-remove if 0
                });
                refetch()
            } catch (error) {
                console.log(error)
                toast.error('Server Issues,Cart not updated')

            }
        } else {
            localCart({ productId: product.productId, quantity: -1, shoeSize: product.shoeSize })
            refetch()
        }

    }
    const increaseQty = async (product) => {
        if (user) {
            try {
                queryClient.setQueryData(['cart', user?.id], (old = []) => {
                    return old
                        .map(
                            i => {
                                if (i.productId === product.productId && i.shoeSize === product.shoeSize) {
                                    return { ...i, quantity: i.quantity + 1 };
                                }
                                return i;
                            });
                })
                await CartToBackend({ productId: product.productId, quantity: 1, shoeSize: product.shoeSize })
                refetch()
            } catch (error) {
                console.log(error)
                toast.error('Server Issues,Cart not updated')

            }
        } else {
            localCart({ productId: product.productId, quantity: 1, shoeSize: product.shoeSize })
            refetch()
        }

    }
    return (
        <div>
            <div className="inline-flex flex-col items-center border border-gray-300 rounded-lg overflow-hidden md:flex-row"><button onClick={() => decreaseQty(product)} className="px-3 py-1 bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors">-</button><span className="px-4 py-1 bg-white text-sm font-medium">{product.quantity}</span><button onClick={() => increaseQty(product)} className="px-3 py-1 bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors" >+</button></div>
        </div>
    )
}

export default CartQtyBtn;
