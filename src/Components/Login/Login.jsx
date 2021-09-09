import React, { useState } from 'react'
import axios from 'axios'
import md5 from 'md5'
import LoginForm from './LoginForm'

const url = 'https://api-blockmaster.herokuapp.com/users' //Data de usuarios

const Login = () => {

    const [user, setUser] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const Login = async datos =>{
        console.log(datos)
        await axios.get(url,{
            params:{
                email:datos.email,
                password:md5(datos.password)
            }
        })
        .then(respuesta=>{
            return respuesta.data
        })
        .then(respuesta=>{
            if(respuesta.length > 0){
                var res = respuesta[0];
                alert(`Bienvenido ${res.nombre} ${res.apellido}`);
            }else{
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const LogOut = () =>{
        console.log('Logout')
    }

    return (
        <div>
            <LoginForm Login={Login} error={error} />
        </div>
    )
}

export default Login
