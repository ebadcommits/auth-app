import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <nav className="flex gap-6 bg-gray-900 text-white p-4">
            <Link to={"/"} className="hover:text-yellow-400">Home</Link>
            <Link to={"/login"} className="hover:text-yellow-400">Login</Link>
            <Link to={"/dashboard"} className="hover:text-yellow-400">Dashboard</Link>
        </nav>
    )
}