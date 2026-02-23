import EmptyCartMessage from "../components/EmptyCartMessage"

function CardCartSection({ cartItem, setCartItem, addItem }) {
    function MrptoCurrency(input) {
        return input.toLocaleString('en-IN')
    }
    const removeItem = (product) => {
        const updatedCart = cartItem.filter((item) => item.id !== product.id)
        setCartItem(updatedCart)
    }
    const decreaseQty = (item) => {
        console.log("qty decreased")
        
    }
    const increaseQty = () => {
        console.log("qty Increased")
    }

    return (
        <div className='w-full h-screen'>
            {cartItem.length === 0 ? <EmptyCartMessage/> : (<table className="min-w-195 bg-white rounded-lg shadow-lg">
                <thead className="bg-gray-400 text-white">
                    <tr>
                        <th className="px-6 py-3 text-left">Product</th>
                        <th className="px-6 py-3 text-left">Details</th>
                        <th className="px-6 py-3 text-center">Quantity</th>
                        <th className="px-6 py-3 text-center">Size</th>
                        <th className="px-6 py-3 text-center">Price</th>
                        <th className="px-10 py-3 text-center">Total</th>
                    </tr>
                </thead>
                {cartItem && cartItem.map((item) => {
                    return (
                        <tbody className="divide-y divide-gray-200">
                            <tr className="hover:bg-blue-50 transition-colors relative">
                                <td className="px-6 py-4"><img src={item?.image[0]} alt="ProductImg" className='h-15 w-35 object-contain' /></td>
                                <td className="pxi-6 py-4 text-center">{item.details}</td>
                                <td className="px-6 py-4 text-center"><div className="inline-flex items-center border border-gray-300 rounded-lg overflow-hidden"><button onClick={() => decreaseQty(item)} className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors">-</button><span className="px-4 py-1 bg-white text-sm font-medium">{item.quantity}</span><button onClick={() => increaseQty()} className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors" >+</button></div></td>
                                <td className="pxi-6 py-4 text-center">{item.size}</td>
                                <td className="pxi-6 py-4 text-center">{MrptoCurrency(item.price)}</td>
                                <td className="px-6 py-4 text-center ">{MrptoCurrency(item.total)}</td>
                                <td><span onClick={() => removeItem(item)} className='absolute top-8 right-1 bg-gray-300 h-7 w-7 text-center rounded-full cursor-pointer'>x</span></td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>)}
        </div>
    )
}

export default CardCartSection
