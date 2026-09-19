import axios from 'axios';

export const fetchOrders = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/orders`, { withCredentials: true })
    return res.data;
};

export const getSearchResult = async (query, options = {}, searchSection) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/product/search`, {
        params: { query, gender: searchSection },
        signal: options.signal
    });
    return res.data.products;
};