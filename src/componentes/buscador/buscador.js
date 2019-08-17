import React, { Component } from 'react'


export default class Buscador extends Component {
    leerDatos=(e)=>{
        const termino = e.target.value;

        // enviamos por props
        this.props.busqueda(termino);
    }
    render() {
        return (
            <form  className="form-inline my-2 my-lg-0">
            <input  className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.leerDatos}/>
          </form>
        )
    }
}
