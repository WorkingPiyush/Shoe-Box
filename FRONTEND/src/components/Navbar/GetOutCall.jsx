import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext';
import axios from 'axios';
function GetOutCall({ isiconClicked, setIsIconClicked }) {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const logout = async () => {
        const res = await axios.post('http://localhost:3000/users/logout', {}, { withCredentials: true })
        if (res.data.success) {
            setUser(null)
            navigate('/', { replace: true });
            setIsIconClicked(false)
        }
    }
    return (
        <div className={`absolute top-11 left-4 cursor-pointer flex flex-col justify-around items-center border bg-gray-100 rounded p-2 h-18 w-35 z-9999 transition-all duration-300 ease-in-out ${isiconClicked ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
            <div onClick={logout} className='bg-black w-full text-center text-white p-2 rounded border hover:text-black hover:bg-white'>LOGOUT</div>
        </div>
    )
}

export default GetOutCall

