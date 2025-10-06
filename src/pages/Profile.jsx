import React from 'react'

export default function Profile() {
    const email = 'usuario@mail.com'
    const handleLogout = () => {
        alert ('Su sesión se cerró')
    }
  return (
    <div className='max-w-5xl mx-auto p-4'>
        <h1>Perfil</h1>
        <p>Email:{email}</p>
        <button onClick={handleLogout} className='mt-2 px-4 py-2 border rounded'>Cerrar sesión</button>
    </div>
  )
}
