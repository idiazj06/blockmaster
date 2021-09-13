import React, { Component } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom"

import Login from '../Components/Login/Login'
import Register from '../Components/Register/Register'
import AppBM from '../Containers/AppBM'
import Perfil from '../Components/Perfil'



export default class AppRouter extends Component {
    render() {
        return (
            
            <div>
               <Router>               
                    <Switch>                        
                        <Route exact  path="/blockmaster/perfil" component={Perfil}  />
                        <Route exact  path="/registro" component={Register}  />
                        <Route exact  path="/peliculas" component={AppBM}  />
                        <Route exact  path="/blockmaster/" component={Login}  />
                    </Switch>                  
               </Router> 
            </div>
        )
    }
}