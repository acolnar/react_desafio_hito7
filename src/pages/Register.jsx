import {useState} from 'react'

export default function Register() {
    const [email, setEmail] = useState("")
    const [contrasena, setContrasena] = useState("")
    const [confirmecontrasena, setConfirmeContrasena] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [tipo, setTipo] = useState("")
    const validarInput = (e) => {
        e.preventDefault()
        if(!email.trim() || !contrasena.trim()){
            setMensaje("Todos los campos son obligatorios");
            setTipo("danger")
            return
        }
        setMensaje("Registro exitoso")
        setTipo("success")
        setEmail('');
        setContrasena('');
        setConfirmeContrasena('');
    }

  return (
    <div className='d-flex justify-content-center py-5'>
      <form onSubmit={validarInput} className='w-50'>
        {mensaje && (
          <p className={`alert alert-${tipo} text-center fw-bold`}>{mensaje}</p>
        )}
        <div className='form-group d-flex flex-column text-center align-item-center gap-3'>
            <label className='text-start mt-4'>Email</label>
            <input className='form-control' name='email' placeholder='Ingrese Email'
            onChange={(e) => setEmail(e.target.value)} value={email}/>
        </div>
        <div className='form-group d-flex flex-column text-center align-item-center gap-3'>
            <label className='text-start mt-4'>contraseña</label>
            <input type='password' minLength={6} className='form-control' name='Contrasena' placeholder='Ingrese contraseña' onChange={(e) => setContrasena(e.target.value)} value={contrasena}/>
        </div>
        <div className='form-group d-flex flex-column text-center align-item-center gap-3'>
            <label className='text-start mt-4'>confirme contraseña</label>
            <input type='password' minLength={6} className={`form-control ${confirmecontrasena && contrasena !== confirmecontrasena ? "is-valid" : ""}`} name='confirmeContrasena' placeholder='Ingrese contraseña nuevamente'
            onChange={(e) => setConfirmeContrasena(e.target.value)} value={confirmecontrasena}/>
            {confirmecontrasena &&
            (contrasena === confirmecontrasena ? (
              <p className="text-success">Password iguales</p>
            ) : (
              <p className="text-danger">Password no coinciden</p>
            ))}
        </div>
            <button className='btn btn-dark my-4' type='submit'>Enviar</button>
      </form>
    </div>
  )
}
