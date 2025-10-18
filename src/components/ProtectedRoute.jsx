import {Navigate, useLocation} from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function ProtectedRoute({children}){
    const{token} = useUser();
    const location = useLocation();

    if (!token){
        return <Navigate to="/login" replace state={{from: location}}/>;
    }

    return children;
}