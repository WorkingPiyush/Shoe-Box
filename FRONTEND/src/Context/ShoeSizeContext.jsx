import React, { createContext, useState } from "react";
import CheckBox from "../components/CheckBox";
export const itemSizeContext = createContext();

function ShoeSizeContext() {
    const [ShoeSize, setShoeSize] = useState([])
    return (
        <>
            <itemSize.Provider value={setShoeSize}>
                <CheckBox />
            </itemSize.Provider>
        </>
    )
}

export default ShoeSizeContext

