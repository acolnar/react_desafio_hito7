import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='max-w-5xl mx-auto p-4 text-center'>
        <h1>404 - Página no encontrada</h1>
        <p>La ruta que buscaste no existe.</p>
        <Link to='/' className='inline-block mt-3 px-4 py-2 border rounded'>Volver al inicio</Link>
    </div>
  )
}
