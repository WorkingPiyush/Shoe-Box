import axios from "axios"

let timeout;
export const WishListToBackend = async ({ productId }) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(async () => {
        try {
            await axios.post(
                `${import.meta.env.VITE_API_URL}/wishlist/toggle`,
                { productId },
                { withCredentials: true }
            ).then(res => console.log(res.data))
        } catch (error) {
            console.error("Server err,", error)
        }
    }, 500);
}
