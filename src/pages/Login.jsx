import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function Login() {
    const {login} = useUser();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        login();
        navigate(from, {replace: true});
    };

  return (
    <main className='max-w-sm mx-auto p-4'>
        <h2 className='text-xl font-semibold mb-3'>Login</h2>
        <form onSubmit={handleLogin} className='space-y-3'>
            <input className='w-full border rounded-md p-2' placeholder='Email'/>
            <input className='w-full border rounded-md p-2' placeholder='Password'/>
            <button className='w-full py-2 bg-indigo-600 text-white rounded-md hover:opacity-90'>
                Ingresar
            </button>
        </form>
    </main>
  );
}
