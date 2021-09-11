import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Link, NavLink } from 'react-router-dom'
import { IoPersonCircleSharp } from "react-icons/io5";
import { Perfil} from './Styled/Styles'

const NavBar = ({estado, estadoSearch}) => {

    const handleClick = (e) =>{
        e.preventDefault();
        estado(e.target.name)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    const handleInputChange = (e) =>{
        estadoSearch(e.target.value)
    }
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white" to="/Peliculas"><img src="https://res.cloudinary.com/duaokxfsp/image/upload/v1631319195/BLOCKMASTER/logo-blockBuster_1_ecwv3y.png" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-conttols="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item ">
                                <Link 
                                className="nav-link text-white" 
                                to="/"
                                >Home</Link>
                            </li>
                            <li className="nav-item ">
                                <Link 
                                className="nav-link text-white" 
                                to="/Login"
                                >Login</Link>
                            </li>
                            <li className="nav-item ">
                                <Link                                
                                className="nav-link text-white" 
                                to="/Register"
                                >Register</Link>
                            </li> */}
                            <li className="nav-item ">
                                <NavLink
                                name="Todas las peliculas"
                                className="nav-link text-white" 
                                to="/Peliculas"
                                onClick={handleClick}
                                >Todas</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink
                                name="Peliculas más valoradas"
                                className="nav-link text-white" 
                                to="/Peliculas"
                                onClick={handleClick}
                                >Mas Valoradas</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink
                                name="Peliculas menos valoradas"
                                className="nav-link text-white" 
                                to="/Peliculas"
                                onClick={handleClick}
                                >Menos Valoradas</NavLink>
                            </li>
                        </ul>
                        
                        <form className="d-flex" onSubmit={handleSubmit}>
                        <input 
                        type="text" 
                        placeholder="Buscar tu pelicula favorita" 
                        onChange={handleInputChange} 
                        />

                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>

                        <Perfil className="perfil" >
                            <IoPersonCircleSharp/>
                        </Perfil>
                            
                            
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
