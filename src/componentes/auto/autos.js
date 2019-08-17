import React, { Component } from 'react'
import Auto from './auto'
import Buscador from '../buscador/buscador'
export default class Autos extends Component {
    render() {
        return (
            <div className="container">
                <h1>Nuestros Autos</h1>
                <Buscador
busqueda={this.props.busquedaAuto}
/>
               <br/>
                <div className="row">

                    {Object.keys(this.props.autos).map(auto=>(
                        <Auto informacion={this.props.autos[auto]}
                        key={auto}
                        />
                    ))}
                </div>
            </div>


        )
    }
}
