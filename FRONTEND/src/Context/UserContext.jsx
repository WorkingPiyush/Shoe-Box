import { useState, createContext, useEffect } from "react";

export const UserContext = createContext(null);


export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/user', {
            method: "GET",
            credentials: "include",
        }).then(async (res) => {
            if (!res.ok) throw new Error("Not Authenticated")
            const data = await res.json();
            setUser(data);
        }).catch(() => setUser(null));
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
