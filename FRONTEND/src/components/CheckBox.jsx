import React, { useContext, useRef, useState } from 'react'
import { ItemSizeContext } from '../Context/ShoeSizeContext'

function CheckBox({ size }) {
    const { shoeSize, setShoeSize } = useContext(ItemSizeContext)
    return (
        <div className='flex gap-4 font-bold text-xl'>
            {size.map((s, idx) => {
                return <label key={idx} className='flex justify-center items-center gap-1.5 bg-black text-white p-2 rounded shadow-black cursor-pointer'>
                    <input className='h-4 w-4' type="radio" name='shoeSize' value={s} onChange={() => setShoeSize(s)} />{s}
                </label>
            })}
        </div>
    )
}

export default CheckBox
