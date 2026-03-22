import axios from 'axios';

export const fetchUser = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/user`, {
        withCredentials: true,
    });
    return res.data;
};