import React, { Component } from 'react'
import Facturas from './facturas'

import Axios from 'axios'
export default class Listado extends Component {
state={
    facturas:[]
}
componentDidMount(){
    this.obtengo()
}
obtengo=()=>{
    let datos = localStorage.getItem('datos'); 
    datos = JSON.parse(datos)
    Axios.get(`https://ebf4a80a.ngrok.io/alquilar/${datos.token}`).then(r=>{
    this.setState({
        facturas: r.data
    }) 
  
  
    }) 
}
    render() {
     

        

        return (
            <div className="container">
<h1>Facturas</h1>
                
<br/>
<div className="row">
    {Object.keys(this.state.facturas).map(e=>(
        <Facturas informacion={this.state.facturas[e]}
        key={e}
        />
    ))}
</div>
</div>

        )
    }
}

