import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class Logueate extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
    <h1>Logueate</h1>
    <p className="lead">Tienes que estar logueado para ver esta sección.</p>
  
                   <NavLink to={'/login'} className="btn btn-lg btn-primary">Login</NavLink> 
              

  </div>
            </div>
        )
    }
}
