import React, { Component } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom"

import Login from '../Components/Login/Login'
import Register from '../Components/Register/Register'
import ApiFetch from '../Components/Cards/ApiFetch'
import AppBM from '../Containers/AppBM'
import NavBar from '../Components/NavBar'



export default class AppRouter extends Component {
    render() {
        return (
            
            <div>
               <Router>               
                    <Switch>
                        <Route  path="/Login" component={Login}  />
                        <Route  path="/Register" component={Register}  />
                        <Route  path="/Peliculas" component={AppBM}  />
                    </Switch>                    
                    {/* <Redirect to="/"  /> */}
               </Router> 
            </div>
        )
    }
}
