import { useContext } from "react";
import { AuthContext } from "../context/Authcontext";

export default function Home() {
  const {user} = useContext(AuthContext)

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <p className="mt-2 text-gray-600">{user ?  `logged in as: ${user.email}` : "not logged in"}
         </p>
    </div>
  );
}