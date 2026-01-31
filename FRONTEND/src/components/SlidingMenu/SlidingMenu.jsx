import React, { useEffect, useRef, useState } from 'react'
import { ImCross } from "react-icons/im";

function SlidingMenu({ open, setOpen }) {
    const menuBar = useRef(null)
    useEffect(() => {
        const handleclickOutside = (event) => {
            if (menuBar.current && !menuBar.current.contains(event.target)) {
                setOpen(false)
            }
        }
        if (open) {
            document.addEventListener('mousedown', handleclickOutside)
        } else {
            document.addEventListener('mousedown', handleclickOutside)
        }
        return () => {
            document.removeEventListener('mousedown', handleclickOutside)
        }
    }, [open])



    return (
        <div className={`fixed -right-6 top-1 h-screen w-80 bg-white/80 backdrop-blur-lg text-black p-15 text-center font-bold text-xl  transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"} md:hidden`}>
            <ImCross onClick={() => { setOpen(false) }} className='absolute right-11 top-7 cursor-pointer' />
            <div className='border m-1'>HOME</div>
            <div className='border m-1'>MEN</div>
            <div className='border m-1'> WOMEN</div>
            <div className='border m-1'>KIDS</div>
        </div>
    )
}

export default SlidingMenu
