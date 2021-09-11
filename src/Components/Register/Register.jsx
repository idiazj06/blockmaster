import React, { useState } from 'react'
import RegisterForm from './RegisterForm'


import axios from 'axios'
import md5 from 'md5'
import uuid from 'react-uuid'

import {Contenedor} from '../Styled/Styles'

const url = 'https://api-blockmaster.herokuapp.com/users' //Data de usuarios

const Register = () => {
    const [user, setUser] = useState({
        id: '',
        nombre: '',
        apellido: '',
        email: '',
        username: '',
        password: ''
    })

    const [error, setError]= useState('')

    const Registro = async datos =>{
        console.log(datos)
        await axios.post(url, {
            id: uuid,
            nombre: datos.nombre,
            apellido:datos.apellido,
            email: datos.email ,
            username: datos.username,
            password: md5(datos.password)
        }).then(Respuesta => {
            alert('Usuario Registrado')
        }).catch(error => {
            console.log(error.message);
        })
    }



    return (
        <Contenedor>
            <RegisterForm Registro={Registro} error={error} />
        </Contenedor>
    )
}

export default Register
