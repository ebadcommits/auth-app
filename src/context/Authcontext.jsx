import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()

export function AuthProvider({children}) {
    const [user, setUser] = useState(null)

    useEffect(() =>{
        const savedUser = localStorage.getItem("user")
        if(savedUser){
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setUser(JSON.parse(savedUser))
        }
    }, [])

    function login(email, password) {
        if(email === "test@test.com" && password === "12345"){
            const userData = {email}    
            setUser(userData)
            localStorage.setItem("user", JSON.stringify(userData))
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