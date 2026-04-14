import { createContext, useState } from "react";
export const CategoryContext = createContext();

export function CategoryFilterContextProvider({ children }) {
    const [selectCategory, setSelectCategory] = useState("all");
    return (
        <CategoryContext.Provider value={{ selectCategory, setSelectCategory }}>
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryFilterContextProvider;

