function CardCartSection({ cartItem, setCartItem, addItem }) {
    function MrptoCurrency(input) {
        return input.toLocaleString('en-IN')
    }
    const removeItem = (product) => {
        const updatedCart = cartItem.filter((item) => item.id !== product.id)
        setCartItem(updatedCart)
    }
    const decreaseQty = (item) => {
        const updatedCart = cartItem.filter((prod) => prod.id == item.id)
        
    }
    const increaseQty = () => {
        console.log("qty Increased")
    }
    return (
        <div className='w-3/4 h-screen'>
            {cartItem.length === 0 ? <p className='w-350 text-6xl text-center text-gray-500 border p-4'>Empty Cart</p> : (<table className="min-w-195 bg-white rounded-lg shadow-lg">
                <thead className="bg-gray-400 text-white">
                    <tr>
                        <th className="px-6 py-3 text-left">Product</th>
                        <th className="px-6 py-3 text-center">Price</th>
                        <th className="px-6 py-3 text-center">Quantity</th>
                        <th className="px-6 py-3 text-center">Total</th>
                    </tr>
                </thead>
                {cartItem && cartItem.map((item) => {
                    return (
                        <tbody className="divide-y divide-gray-200">
                            <tr className="hover:bg-blue-50 transition-colors relative">
                                <td className="px-6 py-4"><img src={item?.image[0]} alt="ProductImg" className='h-15 w-35 object-contain' /></td>
                                <td className="pxi-6 py-4 text-center">{MrptoCurrency(item.price)}</td>
                                <td className="px-6 py-4 text-center"><div className="inline-flex items-center border border-gray-300 rounded-lg overflow-hidden"><button onClick={() => decreaseQty(item)} className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors">-</button><span className="px-4 py-1 bg-white text-sm font-medium">{item.quantity}</span><button onClick={() => increaseQty()} className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors" >+</button></div></td>
                                <td className="px-6 py-4 text-center ">{MrptoCurrency(item.price * item.quantity)}</td>
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
