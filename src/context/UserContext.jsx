import { createContext, useContext, useState, useMemo } from "react";

const UserContext = createContext();

export function UserProvider ({children}){
    const [token, setToken] = useState(true);

    const logout = () => setToken(false);
    const login = () => setToken(true);

    const value = useMemo (() => ({token, login, logout}), [token]);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext);