import { createContext, useState } from "react";
export const ItemSizeContext = createContext();

export function ShoeSizeProvider({ children }) {
    const [shoeSize, setShoeSize] = useState([])
    return (
        <ItemSizeContext.Provider value={{ shoeSize, setShoeSize }}>
            {children}
        </ItemSizeContext.Provider>
    )
}

export default ShoeSizeProvider;

