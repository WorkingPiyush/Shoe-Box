import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

function ProfileOptions({value}) {
    return (
        <div className="flex justify-between items-center p-1 rounded border hover:bg-gray-100">
            <h2 className="text-gray-500 font-bold">{value}</h2>
            <span className="text-xl"><IoIosArrowForward /></span>
        </div>
    )
}

export default ProfileOptions
