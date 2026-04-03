import axios from "axios"

let timeout;
export const CartToBackend = async ({ productId, quantity, shoeSize }) => {
    return new Promise((resolve, reject) => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(async () => {
            try {
                const res = await axios.put(
                    `${import.meta.env.VITE_API_URL}/cart/update`,
                    { productId, quantity, shoeSize },
                    { withCredentials: true }
                );
                resolve(res.data.cart.items)
            } catch (error) {
                console.error("Server err,", error)
                reject(error)
            }
        }, 500);
    })
}