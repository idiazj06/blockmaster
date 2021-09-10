import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Link, NavLink } from 'react-router-dom'

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
                    <Link className="navbar-brand text-white" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-conttols="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
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
                            </li>
                            <li className="nav-item ">
                                <Link
                                name="popular"
                                className="nav-link text-white" 
                                to="/Peliculas"
                                onClick={handleClick}
                                >Todas</Link>
                            </li>
                            <li className="nav-item ">
                                <Link
                                name="top"
                                className="nav-link text-white" 
                                to="/Peliculas"
                                onClick={handleClick}
                                >Mas Valoradas</Link>
                            </li>
                            <li className="nav-item ">
                                <Link
                                name="less"
                                className="nav-link text-white" 
                                to="/Peliculas"
                                onClick={handleClick}
                                >Menos Valoradas</Link>
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
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
