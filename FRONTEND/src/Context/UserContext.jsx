import axios from "axios";
import { useState, createContext, useEffect } from "react";

export const UserContext = createContext(undefined);


export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(undefined);
    const getUser = async () => {
        try {
            const res = await axios.get('http://localhost:3000/api/user', { withCredentials: true });
            setUser(res.data)
        } catch (error) {
            setUser(null);
        }
    }
    useEffect(() => {
        getUser();
    }, [])
    return (
        <UserContext.Provider value={{ user, setUser, getUser }}>
            {children}
        </UserContext.Provider>
    )
}
