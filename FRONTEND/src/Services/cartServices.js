import axios from "axios"

let timeout;
export const CartToBackend = async ({ productId, quantity, shoeSize }) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(async () => {
        try {
            const res = await axios.put(
                `${import.meta.env.VITE_API_URL}/cart/update`,
                { productId, quantity, shoeSize },
                { withCredentials: true }
            );
            return res.data.cart;
        } catch (error) {
            console.error("Server err,", error)
        }
    }, 500);
}