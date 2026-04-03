import axios from 'axios';

export const fetchOrders = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/orders`, { withCredentials: true })
    return res.data;
};