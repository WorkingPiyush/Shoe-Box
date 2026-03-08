import EmptyCartMessage from "../components/EmptyCartMessage"
import { CartToBackend } from "../Services/cartServices"
import { UserContext } from "../Context/UserContext"
import { useContext } from "react"
import { toast } from "react-toastify"
function CardCartSection({ cartProduct, cartItem, setCartItem }) {
    const { user } = useContext(UserContext)
    function MrptoCurrency(input) {
        return input.toLocaleString('en-IN')
    }
    const removeItem = async (item) => {
        const updatedCart = cartItem.filter((prod) => !(prod.productId === item.productId && prod.shoeSize === item.size))
        setCartItem(updatedCart);
        if (user) {
            try {
                await CartToBackend({ productId: item.productId, quantity: 0, shoeSize: item.size })
            } catch (error) {
                console.log(error)
                toast.error('Server Issues,Cart not updated')
                setCartItem(cartItem)
            }
        } else {
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        }
    }
    const decreaseQty = async (item) => {
        const updatedCart = cartItem.map(prod => {
            if (prod.productId === item.productId && prod.shoeSize === item.size) {
                return { ...prod, quantity: Math.max(prod.quantity - 1, 0) }
            }
            return prod
        }).filter(prod => prod.quantity > 0);
        setCartItem(updatedCart);
        const newQty = updatedCart.find(p => p.productId === item.productId & p.shoeSize === item.size)?.quantity || 0;
        if (user) {
            try {
                await CartToBackend({ productId: item.productId, quantity: newQty, shoeSize: item.size })
            } catch (error) {
                console.log(error)
                toast.error('Server Issues,Cart not updated')
                setCartItem(cartItem)
            }
        } else {
            localStorage.setItem('cart', JSON.stringify(updatedCart))
        }

    }
    const increaseQty = async (item) => {
        const updatedCart = cartItem.map(prod => {
            if (prod.productId === item.productId && prod.shoeSize === item.size) {
                return { ...prod, quantity: prod.quantity + 1 };
            }
            return prod;
        })
        setCartItem(updatedCart);
        const newQty = updatedCart.find(p => p.productId === item.productId & p.shoeSize === item.size)?.quantity || 0;
        console.log(newQty)
        if (user) {
            try {
                await CartToBackend({ productId: item.productId, quantity: newQty, shoeSize: item.size })
            } catch (error) {
                console.log(error)
                toast.error('Server Issues,Cart not updated')
                setCartItem(cartItem)
            }
        } else {
            localStorage.setItem('cart', JSON.stringify(updatedCart))
        }

    }

    return (
        <div className='w-full h-full'>
            {cartProduct.length === 0 ? <EmptyCartMessage /> : (<table className="w-[100% - 40%] bg-white shadow-lg rounded-xl md:min-w-195">
                <thead className="bg-gray-400 text-white">
                    <tr>
                        <th className="px-4 py-2 md:px-6 md:py-3 text-sm text-left">Product</th>
                        <th className="px-1 py-2 text-sm text-left hidden md:px-6 md:py-3 sm:block">Details</th>
                        <th className="px-1 py-2 text-sm text-center md:px-6 md:py-3">Quantity</th>
                        <th className="px-1 py-2 text-sm text-center md:px-6 md:py-3">Size</th>
                        <th className="px-1 py-2 text-sm text-center md:px-6 md:py-3">Price</th>
                        <th className="px-10 py-3 text-center">Total</th>
                    </tr>
                </thead>
                {cartProduct && cartProduct.map((item) => {
                    return (
                        <tbody className="divide-y divide-gray-200 rounded-xl">
                            <tr className="hover:bg-blue-50 transition-colors relative">
                                <td className="px-4 py-2 md:px-6 md:py-3"><img src={item?.image[0]} alt="ProductImg" className='h-15 w-25 rounded object-contain' /></td>
                                <td className="px-1 py-2 text-left  hidden md:px-6 md:py-3 sm:block">{item.details}</td>
                                <td className="px-1 py-2 text-center md:px-6 md:py-3"><div className="inline-flex flex-col items-center border border-gray-300 rounded-lg overflow-hidden md:flex-row"><button onClick={() => decreaseQty(item)} className="px-3 py-1 bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors">-</button><span className="px-4 py-1 bg-white text-sm font-medium">{item.quantity}</span><button onClick={() => increaseQty(item)} className="px-3 py-1 bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors" >+</button></div></td>
                                <td className="px-1 py-2 text-center md:px-6 md:py-3">{item.size}</td>
                                <td className="px-1 py-2 text-center md:px-6 md:py-3">{MrptoCurrency(item.price)}</td>
                                <td className="px-4 py-2 text-center md:px-6 md:py-3">{MrptoCurrency(item.total)}</td>
                                <td onClick={() => removeItem(item)}><span className='absolute top-8 right-1 bg-gray-300 h-7 w-7 text-center rounded-full cursor-pointer'>x</span></td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>)}
        </div>
    )
}

export default CardCartSection
