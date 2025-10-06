import { Link, NavLink } from "react-router-dom";
const linkBase = "px-3 py-2 rounded-md text-sm font-medium"
const active = 'underline'

export default function Navbar() {
    const total = 25000;
    // const token = false;
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-3">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Pizzeria Mamma Mia!</Link>
          <div className="flex items-center gap-2">
            <NavLink to="/" className={({isActive}) => `${linkBase} ${isActive ? active : ''}`}>Home</NavLink>
            <NavLink to="/register" className={({isActive}) => `${linkBase} ${isActive ? active : ''}`}>Register</NavLink>
            <NavLink to="/login" className={({isActive}) => `${linkBase} ${isActive ? active : ''}`}>Login</NavLink>
            <NavLink to="/profile" className={({isActive}) => `${linkBase} ${isActive ? active : ''}`}>Profile</NavLink>
            <Link to="/cart" className="ml-3 px-4 py-2 border rounded-md">Total: ${total}</Link>
          </div>
        </div>
        </nav>
    </div>
  )
}
