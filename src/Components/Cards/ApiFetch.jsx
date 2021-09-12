import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { ContCards } from '../Styled/Styles'

const ApiFetch = ({ dato, datoSearch }) => {

    let url = ''
    const [movies, setMovies] = useState([])
    const [movies2, setMovies2] = useState([])
    const [page, setPage] = useState(1)


    if (datoSearch.length > 0) {
        url = `https://api.themoviedb.org/3/search/movie?api_key=0ca79cfff3d14ef15bb56bac5dad90f8&language=en-US&query=${datoSearch}&api_key=0ca79cfff3d14page=1&include_adult=false`
    } else {
        url = `https://api.themoviedb.org/3/movie/popular?api_key=0ca79cfff3d14ef15bb56bac5dad90f8&page=1&language=es-LA`
    }



    useEffect(() => {

        obtenerDatos()

    }, [datoSearch])


    useEffect(() => {

        fetchScroll()

    }, [page])



    const obtenerDatos = async () => {
        const res = await fetch(url)
        const data = await res.json()

        setMovies(data.results)
    }


    const fetchScroll = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0ca79cfff3d14ef15bb56bac5dad90f8&page=${page}&language=es-LA`)
        const data = await res.json()

        setMovies([...movies, ...data.results])
    }


    const scrollToEnd = () => {
        setPage(page + 1)
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
                        movies.map(data => (
                            <Cards
                                key={data.id}
                                personaje={data}
                            />
                        )) : dato == 'Peliculas más valoradas' ?
                            movies.filter(vote => vote.vote_average >= 7).map(data => (
                                <Cards
                                    key={data.id}
                                    personaje={data}
                                />
                            )) : dato == 'Peliculas menos valoradas' ?
                                // console.log('es less')
                                movies.filter(voto => voto.vote_average < 7).map(data => (
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
