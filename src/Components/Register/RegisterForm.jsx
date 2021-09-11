import React, {useState} from 'react'
import { Formulario, Labels, Inputs, Buttons} from '../Styled/Styles'
import { Link, NavLink } from 'react-router-dom'

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
        <>
            <Formulario onSubmit={handleSubmit}>

                <Labels htmlFor="nombre">Nombre</Labels>
                <Inputs
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder="Ingrese su nombre completo"
                    required=""
                    onChange={e=>setDatos({...datos, nombre:e.target.value})} value={datos.nombre}
                />

                <Labels htmlFor="apellido">Apellido</Labels>
                <Inputs
                    type="text"
                    name="apellido"
                    id="apellido"
                    placeholder="Ingrese su apellido completo"
                    required=""
                    onChange={e=>setDatos({...datos, apellido:e.target.value})} value={datos.apellido}
                />

                <Labels htmlFor="Email">Email</Labels>
                <Inputs
                    type="email"
                    name="Email"
                    id="Email"
                    placeholder="Ingrese su Email"
                    required=""
                    onChange={e=>setDatos({...datos, email:e.target.value})} value={datos.email}
                />

                <Labels htmlFor="password">Contraseña</Labels>
                <Inputs
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Ingrese su Contraseña"
                    required=""
                    onChange={e=>setDatos({...datos, password:e.target.value})} value={datos.password}
                />

                <Buttons
                    type="submit" 
                    value="Registrarme"
                />

                <span>¿Ya tienes una cuenta? <Link to="/Login">Inicia Sesion</Link></span>
            </Formulario>
        </>
    )
}

export default RegisterForm
