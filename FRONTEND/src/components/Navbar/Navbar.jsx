import React, { useEffect, useRef, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import SlidingMenu from '../SlidingMenu/SlidingMenu';
import { Link, Route, Routes } from 'react-router-dom';
function Navbar() {
  const menuBar = useRef(null)
  const [open, setOpen] = useState(false)
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
    <div className='w-full bg-white/60 p-5 flex justify-center fixed top-0 z-50 backdrop-blur-lg'>
      <div className='w-full flex justify-around items-center max-md:px-0 max-md:justify-between relative'>
        <h1 className='font-extrabold text-xl'>Shoe Box</h1>
        <div className="flex gap-9 font-bold max-md:hidden">

          <div><Link to="/">HOME</Link></div>
          <div><Link to="/male">MEN</Link></div>
          <div><Link to="/female">WOMEN</Link></div>
          <div><Link to="/kids">KIDS</Link></div>
        </div>
        <div className='flex gap-4 font-bold justify-center items-center'>
          <div>PIYUSH</div>
          <FaShoppingCart className='cursor-pointer' />
          <img className='h-10 w-10 rounded-full cursor-pointer' src='src/assets/Images/headphone.jpg' alt="useimage" />
          <RiMenu3Fill onClick={() => { setOpen(true) }} className="text-xl hidden max-md:block cursor-pointer" />
        </div>
      </div>
    </div >
  )
}

export default Navbar
