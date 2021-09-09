import React, { useEffect, useState } from 'react'
import Cards from './Cards'

const ApiFetch = (busqueda) => {

    console.log(busqueda.dato)

    let url = ''

    // if(busqueda === 'null' || busqueda === 'undefined') {
    //     // url = 'https://api.themoviedb.org/3/movie/popular?api_key=0ca79cfff3d14ef15bb56bac5dad90f8&page=1&language=es-LA'
    //     console.log('es igual')
    // }else{
    //     // url = `https://api.themoviedb.org/3/movie/${busqueda}?api_key=0ca79cfff3d14ef15bb56bac5dad90f8&page=1&language=es-LA`
    //     console.log('no lo es')
    // }

    const [movies, setMovies] = useState([])

    // let valorUrlInicial = 'popular'



    const url2 = `https://api.themoviedb.org/3/movie/popular?api_key=0ca79cfff3d14ef15bb56bac5dad90f8&page=1&language=es-LA`
    
    
    
    useEffect(() => {

        obtenerDatos()  

    }, [])

    const obtenerDatos = async () =>{
        const res = await fetch(url2)
        const data =  await res.json()

        setMovies(data.results)


        
    }

    return (
        <div>
            <h1>Prueba Fetch</h1>
            {
                // console.log(movies)
                busqueda.dato == 'popular'?
                movies.map(data => (
                    <Cards
                        key={data.id}
                        personaje={data}
                    />
                )):busqueda.dato == 'top'?
                movies.filter(vote =>vote.vote_average > 7).map(data => (
                    <Cards 
                        key={data.id}
                        personaje={data}
                        />
                )):busqueda.dato == 'less'?
                // console.log('es less')
                movies.filter(voto=>voto.vote_average < 7).map(data => (
                    // console.log(data)
                    <Cards 
                        key={data.id}
                        personaje={data}
                        />
                )):console.log('no existe')
            }
        </div>
    )
}

export default ApiFetch
