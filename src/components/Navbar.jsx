import { Link, NavLink } from "react-router-dom";
import { useCart, formatCLP } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const linkBase = "px-3 py-2 rounded-md text-sm font-medium"
const active = 'underline'

export default function Navbar() {
    const {total, items} = useCart();
    const count = items.reduce((acc, p) => acc + p.qty, 0);
    const {token, logout} = useUser();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-3">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Pizzeria Mamma Mia!</Link>

          <div className="flex items-center gap-2">
            <NavLink to="/" className={({isActive}) => `${linkBase} ${isActive ? active : ''}`}>Home</NavLink>

            {!token && (
              <>
              <NavLink to="/register" className={({isActive}) => `${linkBase} ${isActive ? active : ''}`}>Register</NavLink>
  
              <NavLink to="/login" className={({isActive}) => `${linkBase} ${isActive ? active : ''}`}>Login</NavLink>
              </>
            )}

            {token && (
              <>
              <NavLink to="/profile" className={({isActive}) => `${linkBase} ${isActive ? active : ''}`}>Profile</NavLink>
  
              <button onClick={logout} className="btn btn-sm btn-danger ms-2">Logout</button>
              </>
            )}

            <Link to="/cart" className="ml-3 px-4 py-2 border rounded-md">{formatCLP(total)} ({count})</Link>
          </div>

        </div>
        </nav>
    </div>
  )
}