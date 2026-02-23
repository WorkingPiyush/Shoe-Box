import axios from "axios"

export const localCartToBackend = async ({ productId, quantity, shoeSize }) => {
    console.log(productId, quantity, shoeSize)
    let timeout;
    if (timeout) clearTimeout(timeout);
    let res = await axios.put('http://localhost:3000/cart/update',
        { productId, quantity, shoeSize },
        {
            withCredentials: true
        })

    timeout = setTimeout(() => {
        res
    }, 500)
    console.log(await res.data)
}
