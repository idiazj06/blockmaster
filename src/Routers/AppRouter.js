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

export default class AppRouter extends Component {
    render() {
        return (
            <div>
                
               <Router>
                    <AppBM/>
                    <Switch>
                        <Route  path="/Login" component={Login}  />
                        <Route  path="/Register" component={Register}  />
                        {/* <Route  path="/Peliculas" component={ApiFetch}  /> */}
                    </Switch>
                    
                    {/* <Redirect to="/"  /> */}
               </Router> 
            </div>
        )
    }
}
