import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { ContCards } from './Styled/Styles'

const ApiFetch = ({ dato, datoSearch }) => {

    let url = ''
    let page_number = 1
    const [movies, setMovies] = useState([])
    const [movies2, setMovies2] = useState([])
    const [page, setPage] = useState(1)


    if (datoSearch.length > 0) {
        url = `https://api.themoviedb.org/3/search/movie?api_key=0ca79cfff3d14ef15bb56bac5dad90f8&language=en-US&query=${datoSearch}&api_key=0ca79cfff3d14page=1&include_adult=false`
    } else if (page > 1) {
        url = `https://api.themoviedb.org/3/movie/popular?api_key=0ca79cfff3d14ef15bb56bac5dad90f8&page=${page}&language=es-LA`
        console.log('segundo if')
    } else {
        url = `https://api.themoviedb.org/3/movie/popular?api_key=0ca79cfff3d14ef15bb56bac5dad90f8&page=1&language=es-LA`
        console.log('else')
    }


       console.log(movies2)


    useEffect(() => {

        obtenerDatos()

    }, [datoSearch])


    const obtenerDatos = async () => {
        const res = await fetch(url)
        const data = await res.json()

        console.log(res)


        setMovies(data.results)
        setMovies2([...movies2,...data.results])
    }


    const scrollToEnd = () => {
        setPage(page + 1)
        console.log(page)

        if (page>1) {
            obtenerDatos()
        }
        // obtenerDatos()
    }

    window.onscroll = function () {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            scrollToEnd()
        }
    }

    return (
        <div>
            <h1>{dato}</h1>
            <ContCards>
                {
                    
                    dato == 'Todas las peliculas' ?
                        movies2.map(data => (
                            <Cards
                                key={data.id}
                                personaje={data}
                            />
                        )) : dato == 'Peliculas más valoradas' ?
                            movies2.filter(vote => vote.vote_average >= 7).map(data => (
                                <Cards
                                    key={data.id}
                                    personaje={data}
                                />
                            )) : dato == 'Peliculas menos valoradas' ?
                                // console.log('es less')
                                movies2.filter(voto => voto.vote_average < 7).map(data => (
                                    // console.log(data)
                                    <Cards
                                        key={data.id}
                                        personaje={data}
                                    />
                                )) : console.log('no existe')
                }
            </ContCards>
        </div>
    )
}

export default ApiFetch
