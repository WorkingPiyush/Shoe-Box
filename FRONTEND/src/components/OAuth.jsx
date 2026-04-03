import React, { useContext, useEffect } from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

function OAuth() {
    return (
        <div className="flex gap-2 mt-2">
            <Link to={`${import.meta.env.VITE_API_URL}/auth/google`} className="border cursor-pointer border-gray-300 py-3 h-10 w-10 flex justify-center rounded-lg hover:bg-gray-100 transition" ><FaGoogle /></Link>
            <Link to={`${import.meta.env.VITE_API_URL}/auth/github`} className="border cursor-pointer border-gray-300 py-3 h-10 w-10 flex justify-center rounded-lg hover:bg-gray-100 transition" ><FaGithub /></Link>
        </div>
    )
}

export default OAuth
