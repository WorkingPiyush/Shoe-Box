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
export const localCart = ({ productId, quantity, shoeSize }) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const index = cart.findIndex(i => i.productId === productId && i.shoeSize === shoeSize)
    if (index !== -1) {
        if (quantity === 0) {
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            return;
        }
        const newQty = cart[index].quantity + quantity;
        if (newQty <= 0) {
            cart.splice(index, 1);
        } else {
            cart[index].quantity = newQty;
        }
    } else if (quantity > 0) {
        cart.push({ productId, quantity, shoeSize });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}