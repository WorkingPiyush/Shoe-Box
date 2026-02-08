import React from 'react'
import { Link } from 'react-router-dom'

function UserCall() {
    return (
        <div className='absolute top-9 -left-12 flex flex-col justify-around items-center border bg-gray-100 rounded p-2 h-28 w-50 z-9999 '>
            <Link className='bg-black w-full text-center text-white p-2 rounded border hover:text-black hover:bg-white' to="/signup">SIGNUP</Link>
            <Link className='bg-black w-full text-center text-white p-2 rounded border hover:text-black hover:bg-white' to="/login">LOGIN</Link>
        </div>
    )
}

export default UserCall
