import { Outlet, Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      
      <aside className="w-64 bg-gray-900 text-white p-6 space-y-4">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        
        <nav className="flex flex-col space-y-3">
          <Link to={"/dashboardhome"} className="hover:text-gray-300">Home</Link>
          <Link to={"/profile"} className="hover:text-gray-300">Profile</Link>
        </nav>
      </aside>
       
        <main className="flex-1 bg-gray-100 p-10">
          <Outlet />
        </main>
    
    </div>
  );
}