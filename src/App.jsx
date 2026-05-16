import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardHome from "./pages/dashboard/DashboardHome";
import DashboardProfile from "./pages/dashboard/DashboardProfile";
import Logout from "./pages/dashboard/Logout";

export default function App(){
    return(
        <div>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/dashboard" 
                element = {
                    <ProtectedRoute>
                        <Dashboard/> 
                    </ProtectedRoute>
                } />
                <Route path="dashboardhome" element={<DashboardHome/>}/>
                <Route path="dashboardprofile" element={<DashboardProfile/>} />
                <Route path="Logout" element={<Logout/>}/>
            </Routes>
        </div>
    )
}