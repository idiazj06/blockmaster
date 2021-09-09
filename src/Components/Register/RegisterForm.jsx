import React, {useState} from 'react'

const RegisterForm = ({Registro,error}) => {

    const [datos,setDatos] = useState({
        nombre: '',
        apellido: '',
        email: '',
        username: '',
        password: ''
    })

    const handleSubmit = (e)=>{
        e.preventDefault();
        Registro(datos)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder="Ingrese su nombre completo"
                    required=""
                    onChange={e=>setDatos({...datos, nombre:e.target.value})} value={datos.nombre}
                />

                <label htmlFor="apellido">Apellido</label>
                <input
                    type="text"
                    name="apellido"
                    id="apellido"
                    placeholder="Ingrese su apellido completo"
                    required=""
                    onChange={e=>setDatos({...datos, apellido:e.target.value})} value={datos.apellido}
                />

                <label htmlFor="Email">Email</label>
                <input
                    type="email"
                    name="Email"
                    id="Email"
                    placeholder="Ingrese su Email"
                    required=""
                    onChange={e=>setDatos({...datos, email:e.target.value})} value={datos.email}
                />

                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Ingrese su Contraseña"
                    required=""
                    onChange={e=>setDatos({...datos, password:e.target.value})} value={datos.password}
                />

                <input
                    type="submit" 
                    value="Registrarme"
                />
            </form>
        </div>
    )
}

export default RegisterForm
