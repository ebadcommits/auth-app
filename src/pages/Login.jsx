import { useContext, useState } from "react";
import { AuthContext } from "../context/Authcontext";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const {login} = useContext(AuthContext)
  const Navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassord] = useState("")
  const [error, setError] = useState("")

  function handleClick(e) {
    e.preventDefault()

    if (!email || !password){
      setError("Please enter email and password.")
      return
    }

    login(email, password)

    Navigate("/dashboard")
  }
  
  return (
    <div className="flex justify-center items-center h-screen">
      <form 
      className="flex flex-col bg-white p-8 rounded-xl shadow-lg w-80 gap-4 "
      onSubmit={handleClick} >
        <h1 className="text-2xl font-semibold text-center">Login</h1>

        {error && <p className="text-red-500 text-center">{error}</p> }

        <input 
        type="email"
        className="border p-2 round"
        placeholder="test@test.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)} />

        <input 
        type="password"
        className="border p-2 round"
        placeholder="12345"
        value={password}
        onChange={(e) => setPassord(e.target.value)} />

        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer  ">Login</button>
      </form>
    </div>
  );
}


