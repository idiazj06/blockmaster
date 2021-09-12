import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import {ImgSwiper,ContImgs} from  '../Styled/Styles'


const Carrusel = ({ data }) => {

    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=0ca79cfff3d14ef15bb56bac5dad90f8&page=1&language=es-LA'

    const [dataCarrusel, setDataCarrusel] = useState([])


    useEffect(() => {
        fetch(url)
        .then(response=>response.json())
        .then(response=>setDataCarrusel(response.results.sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, 5)))
        .catch(error=>console.log(error))
    }, [])

    return (
        
            <Carousel itemPadding={[0, 10]} itemsToShow={1.01} outerSpacing={50}>
                    {
                    dataCarrusel.map(data=>(
                        <ImgSwiper key={data.id} src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} alt={data.title} />
                    ))
                    }
            </Carousel>
    )
}

export default Carrusel
