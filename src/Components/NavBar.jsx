import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Link, NavLink } from 'react-router-dom'

const NavBar = ({busqueda, estado}) => {
    
    // const [seccion, setSeccion] = useState([''])

    // console.log(estado)

    const handleChange = (e) =>{
        e.preventDefault();
        estado(e.target.name)
        // console.log(e.target.name)
        // console.log(busqueda)
    }
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-conttols="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link 
                                className="nav-link" 
                                to="/"
                                >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                className="nav-link" 
                                to="/Login"
                                >Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link                                
                                className="nav-link" 
                                to="/Register"
                                >Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                name="popular"
                                className="nav-link" 
                                to="/Peliculas"
                                // onClick={e=>setSeccion(e.target.name)}
                                onClick={handleChange}
                                >Todas</Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                name="top"
                                className="nav-link" 
                                to="/Peliculas"
                                // onClick={e=>setSeccion(e.target.name)}
                                onClick={handleChange}
                                >Mas Valoradas</Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                name="less"
                                className="nav-link" 
                                to="/Peliculas"
                                // onClick={e=>setSeccion(e.target.name)}
                                onClick={handleChange}
                                >Menos Valoradas</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
