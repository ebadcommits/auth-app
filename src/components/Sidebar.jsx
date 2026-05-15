import { Link } from "react-router-dom"

export default function Sidebar() {
    return(
        <aside className="w-64 bg-gray-900 text-white h-full p-6">
            <h2 className="text-2xl font-bold mb-10">Dashboard</h2>

            <nav className="flex flex-col gap-4">
                <Link to="/dashboard">Home</Link>
                <Link to="/dashboard/users">Users</Link>
                <Link to="/dashboard/settings">Settings</Link>
            </nav>
        </aside>
    )
}