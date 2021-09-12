import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import {ImgSwiper,ContImgs} from  '../Styled/Styles'


const Carrusel = ({ data }) => {

    const [dataCarrusel, setDataCarrusel] = useState([])
    const [valorTranslate, setValorTranslate] = useState(0)


    useEffect(() => {
        getRandomData(data)
    }, [data])

    const getRandomData = (data) => {
        setDataCarrusel([...data]
            .sort(() => Math.random() > 0.5 ? 1 : -1)
            .slice(0, 5))
    }




    return (
        
            <Carousel itemPadding={[0, 10]} itemsToShow={1.01} outerSpacing={50}>
                
                    {
                    dataCarrusel.map(data=>(
                        <ImgSwiper src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} alt={data.title} />
                    ))
                    }
                
            
            </Carousel>
    )
}

export default Carrusel
