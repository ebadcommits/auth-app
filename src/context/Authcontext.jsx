import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()

export function AuthProvider({children}) {
    const [user, setUser] = useState(null)

    useEffect(() =>{
        const savedUser = localStorage.getItem("user")
        if(savedUser){
            setUser(JSON.parse(savedUser))
        }
    }, [])

    function login(email, password) {
        if(email === "test@test.com" && password === "12345"){
            setUser({email})
            localStorage.setItem("user", JSON.stringify(user))
            return {success: true}
        }
        return {success: false, message: "invalid credentials"}
    }

    function logout(){
        setUser(null)
        localStorage.removeItem("user")
    }

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}