import React, { useState } from 'react'

const Login = ({Login, error}) => {

    const [datos, setDatos] = useState({email:"", password:""});
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        Login(datos)
    }
    
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>LOGIN</h1>
                <label htmlFor="email">Email:</label>
                <input 
                type="email" 
                id="email" 
                placeholder="Ingrese su email"
                onChange={e=>setDatos({...datos, email:e.target.value})} value={datos.email} 
                />

                <label htmlFor="password">Contraseña:</label>
                <input 
                type="password" 
                id="password" 
                placeholder="Ingrese su Contraseña"
                onChange={e=>setDatos({...datos, password:e.target.value})} value={datos.password} 
                />

                <input 
                type="submit" v
                alue="Enviar"
                />
            </form>
        </div>
    )
}

export default Login