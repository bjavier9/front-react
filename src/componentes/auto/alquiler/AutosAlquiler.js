import React, { Component } from 'react'
import AutoAlquiler from './AutoAlquiler'

import Axios from 'axios'
export default class AutosAlquiler extends Component {
state={
    autos:[]
}
componentDidMount(){
    this.obtengo()
}
obtengo=()=>{
    let datos = localStorage.getItem('datos'); 
    datos = JSON.parse(datos)
    Axios.get(`https://ebf4a80a.ngrok.io/alquiler?secret_token=${datos.token}`).then(r=>{
    this.setState({
        autos: r.data
    }) 
  
  
    }) 
}
    render() {
     

        

        return (
            <div className="container">
<h1>Autos Disponibles para alquiler</h1>
                
<br/>
<div className="row">
    {Object.keys(this.state.autos).map(auto=>(
        <AutoAlquiler informacion={this.state.autos[auto]}
        key={auto}
        />
    ))}
</div>
</div>

        )
    }
}

