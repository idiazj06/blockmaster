import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import {ContCards} from './Styled/Styles'

const ApiFetch = ({dato,datoSearch}) => {
    const [movies, setMovies] = useState([])
    

    const url = 'https://api-blockmaster.herokuapp.com/movies?_limit=10&q='

    
    useEffect(() => {

        obtenerDatos()  

    }, [datoSearch])

    const obtenerDatos = async () =>{
        const res = await fetch(`${url}${datoSearch}`)
        const data =  await res.json()

        setMovies(data)

        console.log(data)
       
        
    }

    return (
        <div>
            
                <h1>Prueba Fetch</h1>

            <ContCards>
                {
                    // console.log(movies)
                    dato == 'popular'?
                    movies.map(data => (
                        <Cards
                            key={data.id}
                            personaje={data}
                        />
                    )):dato == 'top'?
                    movies.filter(vote =>vote.vote_average > 7).map(data => (
                        <Cards
                            key={data.id}
                            personaje={data}
                            />
                    )):dato == 'less'?
                    // console.log('es less')
                    movies.filter(voto=>voto.vote_average < 7).map(data => (
                        // console.log(data)
                        <Cards
                            key={data.id}
                            personaje={data}
                            />
                    )):console.log('no existe')
                }
            </ContCards>
        </div>
    )
}

export default ApiFetch
