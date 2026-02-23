import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function GetInCall({ isimgClicked, setIsImgClicked }) {
    return (
        <div className={`absolute top-9 left-2 md:-left-2 transition-all duration-300 ease-in-out ${isimgClicked ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
            <div className='flex flex-col '>
                <span className='text-center text-xl'>▼</span>
                <div className='flex flex-col justify-around items-center border bg-gray-100 rounded p-2 h-28 w-30 z-9999 md:p-2 md:h-28 md:w-50 '>
                    <Link className='bg-black w-full text-center text-white p-2 rounded border hover:text-black hover:bg-white' to="/signup">SIGNUP</Link>
                    <Link className='bg-black w-full text-center text-white p-2 rounded border hover:text-black hover:bg-white' to="/login">LOGIN</Link>
                </div>
            </div>
        </div>
    )
}

export default GetInCall

