import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()

export function AuthProvider({children}) {
    const [user, setUser] = useState(null)

    function login(email, password) {
        if(email === "test@test.com" && password === "12345"){
            setUser({email})
            return {success: true}
        }
        return {success: false, message: "invalid credentials"}
    }

    function logout(){
        setUser(null)
    }

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}