import React, { Component, useState } from 'react'
import ApiFetch from '../Components/Cards/ApiFetch'
import NavBar from '../Components/NavBar'


const AppBM = () => {

    const [seccion,setSeccion] = useState('popular')
    const [search,setSearch] = useState('')

    console.log(search)
    

    return (
        <div>
           <NavBar estado={setSeccion} estadoSearch={setSearch}/>
           <ApiFetch dato={seccion} datoSearch={search}/> 
        </div>
    )

    
}

export default AppBM

