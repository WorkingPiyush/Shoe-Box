import axios from "axios"

export const updateAddress = async ({ id, data }) => {
    try {
        const res = await axios.put(`${import.meta.env.VITE_API_URL}/api/address/${id}`, data, {
            withCredentials: true,
            headers: { 'Content-Type': 'application/json' }
        })
        return res.data;
    } catch (error) {
        throw error.response?.data.message || "Failed to update address";
    }
}
export const createAddress = async (data) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/address`, data, {
            withCredentials: true,
            headers: { 'Content-Type': 'application/json' }
        })
        return res.data;
    } catch (error) {
        throw error.response?.data.message || "Failed to create address";
    }

}
export const deleteAddress = async (id) => {
    try {
        const res = await axios.delete(`${import.meta.env.VITE_API_URL}/api/address/${id}`, {
            withCredentials: true,
        })
        console.log(res.data)
    } catch (error) {
        throw error.response?.data.message || "Failed to delete address";
    }

}
