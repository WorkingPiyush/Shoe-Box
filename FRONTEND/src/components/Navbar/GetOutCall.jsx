import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
function GetOutCall({ isiconClicked, setIsIconClicked }) {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const logout = async () => {

        const res = await axios.post(`${import.meta.env.VITE_API_URL}/users/logout`, {}, { withCredentials: true })
        if (res.data.success) {
            queryClient.setQueryData(['user'], null);
            queryClient.invalidateQueries(['user']);
            navigate('/', { replace: true });
            setIsIconClicked(false)
        }
    }
    return (
        <div className={`absolute top-11 left-4 cursor-pointer flex flex-col justify-around items-center border bg-gray-100 rounded p-2 h-fit w-35 z-9999 transition-all duration-300 ease-in-out ${isiconClicked ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
            <div onClick={() => navigate('/profile')} className='bg-black w-full text-center text-white p-2 rounded border hover:text-black hover:bg-white'>PROFILE</div>
            <div onClick={logout} className='bg-black w-full text-center text-white p-2 rounded border hover:text-black hover:bg-white'>LOGOUT</div>
        </div>
    )
}

export default GetOutCall

