import React, { useContext, useEffect } from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, githubProvider } from '../Services/firebase';
import axios from 'axios';
import { UserContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';
function OAuth() {
    const { getUser } = useContext(UserContext);
    const navigate = useNavigate();
    const handleSiginWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            if (!result) return;
            const idToken = await result.user.getIdToken();
            const response = await axios.post(
                'http://localhost:3000/users/firbase-login',
                { Pass: idToken },
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            )
            await getUser()
            if (response.data.success) {
                navigate("/", { replace: true });
            }
        } catch (error) {
            console.error(error);
        }
    }
    const handleSiginWithGithub = async () => {
        try {
            const result = await signInWithPopup(auth, githubProvider);
            if (!result) return;
            const user = result.user;
            const idToken = await user.getIdToken();
            const response = await axios.post(
                'http://localhost:3000/users/firbase-login',
                { Pass: idToken },
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            )
            await getUser()
            if (response.data.success) {
                navigate("/", { replace: true });
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="flex gap-2 mt-2">
            <button onClick={handleSiginWithGoogle} type="button" className="border cursor-pointer border-gray-300 py-3 h-10 w-10 flex justify-center rounded-lg hover:bg-gray-100 transition" ><FaGoogle /></button>
            <button onClick={handleSiginWithGithub} type="button" className="border cursor-pointer border-gray-300 py-3 h-10 w-10 flex justify-center rounded-lg hover:bg-gray-100 transition" ><FaGithub /></button>
        </div>
    )
}

export default OAuth
