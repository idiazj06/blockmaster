import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const Cards = ( {personaje} ) => {

    console.log(personaje)

    const poster = `https://image.tmdb.org/t/p/w500/${personaje.poster_path}`

    
    return (
        <div className="container">
            <div className="card w-50" >
                <img src={poster} className="card-img-top " alt={personaje.title} />
                <div className="card-body">
                    <h5 className="card-title">{personaje.title}</h5>
                </div>
            </div>
        </div>
        // <h1>TARJETAS</h1>
    )
}

export default Cards
