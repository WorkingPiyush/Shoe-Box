import React, { useContext, useEffect, useRef, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import SlidingMenu from '../SlidingMenu';
import profileImg from '../../assets/Images/headphone.jpg'
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import GetInCall from './GetInCall';
import { UserContext } from '../../Context/UserContext';
import GetOutCall from './GetOutCall';
import { CartContext } from '../../Context/CartContext';
function Navbar() {
  const [open, setOpen] = useState(false)
  const [isimgClicked, setIsImgClicked] = useState(false);
  const [isiconClicked, setIsIconClicked] = useState(false);
  const { cartItem } = useContext(CartContext)
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const showGetCall = () => { setIsImgClicked(prev => !prev) }
  const ShowOutCall = () => { setIsIconClicked(prev => !prev) }
  return (
    <div className='w-full bg-white/60 p-5 flex justify-center fixed top-0 z-999 backdrop-blur-lg'>
      <div className='w-full flex justify-around items-center max-md:px-0 max-md:justify-between relative'>
        <h1 className='font-extrabold text-xl'>Shoe Box</h1>
        <div className="flex gap-9 font-bold max-md:hidden">
          <div><Link to="/">HOME</Link></div>
          <div><Link to="/male">MEN</Link></div>
          <div><Link to="/female">WOMEN</Link></div>
          <div><Link to="/kids">KIDS</Link></div>
        </div>
        <div className='w-30 flex justify-around items-center relative'>
          <div onClick={()=>navigate('/cartpage')} className='relative h-8 w-10 rounded flex items-center justify-center cursor-pointer active:bg-gray-400/10'>
            <FaShoppingCart className='cursor-pointer text-2xl' />
            {cartItem.length === 0 ? <span></span> : <span className='absolute -top-2 left-5 text-center bg-black text-white rounded-full h-6 w-6'>{cartItem.length}</span>}
          </div>

          <div className='h-10 w-12 rounded  cursor-pointer'>
            {user ? <div onClick={ShowOutCall} className='flex bg-amber-950 rounded items-center justify-center'><h1 className='text-white text-3xl font-bold'>{user.name.slice(0, 1)}</h1></div> : <img onClick={showGetCall} className='object-contain rounded-full cursor-pointer' src={profileImg} alt="useimage" />}
          </div>
          {isimgClicked && <GetInCall setIsImgClicked={setIsImgClicked} />}
          {isiconClicked && <GetOutCall setIsIconClicked={setIsIconClicked} />}
          <RiMenu3Fill onClick={() => { setOpen(true) }} className="text-xl hidden max-md:block cursor-pointer" />
          <SlidingMenu open={open} setOpen={setOpen} />
        </div>
      </div>
    </div >
  )
}

export default Navbar
