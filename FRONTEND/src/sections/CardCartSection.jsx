import EmptyCartMessage from "../components/EmptyCartMessage"
import { CartToBackend } from "../Services/cartServices"
import { useUser } from "../hooks/useUser"
import { toast } from "react-toastify"
import CartQtyBtn from "../components/Buttons/CartQtyBtn"
import { CartContext } from "../Context/CartContext"
import { useContext } from "react"
import { useQueryClient } from "@tanstack/react-query"

function CardCartSection() {
    const queryClient = useQueryClient();
    const { data: user } = useUser();
    const { cart, refetch } = useContext(CartContext)
    const removeItem = async (item) => {
        if (user) {
            try {
                await CartToBackend({ productId: item.productId, quantity: 0, shoeSize: item.shoeSize })
                queryClient.setQueryData(['cart', user?.id], (old = []) => {
                    return old.filter(
                        i => !(i.productId === item.productId && i.shoeSize === item.shoeSize)
                    );
                });
                refetch()
            } catch (error) {
                console.log(error)
                toast.error('Server Issues,Cart not updated')
            }
        } else {
            let guestCart = JSON.parse(localStorage.getItem('cart'));
            const updated = guestCart.filter((prod) => !(prod.productId === item.productId && prod.shoeSize === item.shoeSize));
            localStorage.setItem('cart', JSON.stringify(updated));
            refetch()
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
                                    <td className="px-1 py-2 text-left  hidden md:px-6 md:py-3 sm:block">{item.name}</td>
                                    <td className="px-1 py-2 text-center md:px-6 md:py-3"><CartQtyBtn productId={item.productId} shoeSize={item.shoeSize} /></td>
                                    <td className="px-1 py-2 text-center md:px-6 md:py-3">{item.shoeSize}</td>
                                    <td className="px-1 py-2 text-center md:px-6 md:py-3">{item?.price}</td>
                                    <td className="px-4 py-2 text-center md:px-6 md:py-3">{item?.total}</td>
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
