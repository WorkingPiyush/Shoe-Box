import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
function Navbar() {
  return (
    <div className='w-full bg-white p-5 flex justify-center fixed top-0 z-5'>
      <div className='w-full flex justify-around items-center max-md:px-0 max-md:justify-between'>
        <h1 className='font-extrabold text-xl'>Shoe Box</h1>
        <div className="flex gap-9 font-bold max-md:hidden">
          <div>HOME</div>
          <div>MEN</div>
          <div>WOMEN</div>
          <div>KIDS</div>
        </div>
        <div className='flex gap-4 font-bold justify-center items-center'>
          <div>PIYUSH</div>
          <FaShoppingCart className='cursor-pointer' />
          <img className='h-10 w-10 rounded-full cursor-pointer' src='src/assets/Images/headphone.jpg' alt="useimage" />
          <RiMenu3Fill className="text-xl hidden max-md:block cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
