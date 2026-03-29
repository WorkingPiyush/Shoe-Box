import EmptyCartMessage from "../components/EmptyCartMessage"
import { CartToBackend } from "../Services/cartServices"
import { useUser } from "../hooks/useUser"
import { toast } from "react-toastify"
import CartQtyBtn from "../components/Buttons/CartQtyBtn"
import { CartContext } from "../Context/CartContext"
import { useContext } from "react"
function CardCartSection() {
    const { data: user } = useUser();
    const { cart, setCart } = useContext(CartContext)
    function MrptoCurrency(input) {
        return input.toLocaleString('en-IN')
    }
    const removeItem = async (item) => {
        const prevCart = cart;
        if (user) {
            try {
                const updatedCart = cart.filter((prod) => !(prod.productId === item.productId && prod.shoeSize === item.shoeSize))
                await CartToBackend({ productId: item.productId, quantity: 0, shoeSize: item.shoeSize })
                setCart(updatedCart);
            } catch (error) {
                console.log(error)
                toast.error('Server Issues,Cart not updated')
                setCart(prevCart);
            }
        } else {
            const updatedCart = cart.filter((prod) => !(prod.productId === item.productId && prod.shoeSize === item.shoeSize))
            setCart(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        }


    }
    if (!cart) {
        return (
            <div className="min-h-screen flex justify-center items-center text-6xl">
                <ThreeDot color={["#205788", "#2a72b1", "#3d8cd1", "#66a4db"]} />
            </div>
        );
    }
    return (
        <div className='w-full h-full'>
            {cart?.length === 0 ? <EmptyCartMessage /> :
                (<table className="w-[100% - 40%] bg-white shadow-lg rounded-xl md:min-w-195">
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
                    {cart && cart.map((item) => {
                        return (
                            <tbody key={`${item.productId}-${item.shoeSize}`} className="divide-y divide-gray-200 rounded-xl">
                                <tr className="hover:bg-blue-50 transition-colors relative">
                                    <td className="px-4 py-2 md:px-6 md:py-3"><img src={item?.thumbnail} alt="ProductImg" className='h-15 w-25 rounded object-contain' /></td>
                                    <td className="px-1 py-2 text-left  hidden md:px-6 md:py-3 sm:block">{item.details}</td>
                                    <td className="px-1 py-2 text-center md:px-6 md:py-3"><CartQtyBtn productId={item.productId} /></td>
                                    <td className="px-1 py-2 text-center md:px-6 md:py-3">{item.size}</td>
                                    <td className="px-1 py-2 text-center md:px-6 md:py-3">{MrptoCurrency(item?.price)}</td>
                                    <td className="px-4 py-2 text-center md:px-6 md:py-3">{MrptoCurrency(item?.total)}</td>
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
