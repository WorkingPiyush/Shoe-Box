import axios from "axios"

let timeout;
export const localCartToBackend = async ({ productId, quantity, shoeSize }) => {
    console.log(productId, quantity, shoeSize)
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(async () => {
        try {
            const res = await axios.put(
                'http://localhost:3000/cart/update',
                { productId, quantity, shoeSize },
                {withCredentials: true}
            );
            console.log(res.data);
        } catch (error) {
            console.error("Server err,", error)
        }
    }, 500);
}
