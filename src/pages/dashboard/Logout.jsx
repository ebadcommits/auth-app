import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/Authcontext"

export default function Logout(){
    const {logout} = useContext(AuthContext)
    const navigate = useNavigate()

    function handleLogout(){
        logout()
        navigate("/login")
    }

    return(
        <div className="flex h-screen justify-center items-center">
            

            <div className="w-80 bg-white shadow-lg flex flex-col gap-4 items-center justify-center p-8 rounded-xl">
            <h2 className="text-2xl font-semibold text-center">Logout</h2>
                <button 
                onClick={handleLogout}
                className="bg-blue-600 text-white py-1 px-10 cursor-pointer rounded-sm hover:bg-blue-700">Logout</button>
            </div>
        </div>
    )
}