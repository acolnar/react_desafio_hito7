import {useState} from 'react'

export default function Login() {
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")
    const [mensaje, setMensaje] = useState ("")
    const [tipo, setTipo] = useState("")
    const validarInput = (e) => {
        e.preventDefault()
        if (!email.trim() || !password.trim()){
            setMensaje("Todos los campos son obligatorios");
            setTipo("danger");
            return;
        }
        if (email === "alex@mail.com" && password === "123456"){
            setMensaje("Login exitoso");
            setTipo("success")
        } else {
            setMensaje("Credenciales incorrectas")
            setTipo("danger")
        }
    }
    
  return (
    <div className='d-flex justify-content-center py-5'>
        <form onSubmit={validarInput} className='w-50'>
        {mensaje && (
            <p className={`text-${tipo} fw-bold text-center`}>{mensaje}</p>
        )}
            <div className='py-2'>
                <label>Email</label>
                <input className='form-control' placeholder='ingrese su email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}/>
            </div>
            <div className='py-2'>
                <label>Contraseña</label>
                <input minLength={6} className='form-control' type="password" placeholder='ingrese su contraseña'
                onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button className='btn btn-dark my-4' type='submit' >Enviar</button>
        </form>
    </div>
  )
}
