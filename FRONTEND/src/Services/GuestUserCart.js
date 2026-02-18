import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export const useCart = () => {
    const { setCartItem, cartItem } = useContext(CartContext);
    console.log(cartItem)    
    const addItem = (product) => {
            setCartItem((prevCart) => {
                const existingItem = prevCart.find((item) => item.id === product.id && item.size === product.size)
                if (existingItem) {
                    return prevCart.map((item) => item.id === product.id && item.size === product.size ? { ...item, quantity: item.quantity + 1 } : item);
                }
                return [...prevCart, { ...product, quantity: 1 }]
            })
    };
    return {cartItem,addItem};
}