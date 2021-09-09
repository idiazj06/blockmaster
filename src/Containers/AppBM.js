import React, { Component, useState } from 'react'
import ApiFetch from '../Components/Cards/ApiFetch'
import NavBar from '../Components/NavBar'


const AppBM = () => {

    const [search,setSearch] = useState('popular')
    

    return (
        <div>
           <NavBar busqueda={search} estado={setSearch} />
           <ApiFetch dato={search}/> 
        </div>
    )

    
}

export default AppBM

