import React, { Component } from 'react'
import Axios from 'axios'

export default class Perfil extends Component {
  state={
            usuario:[]
        }
  componentDidMount(){
            this.datos()
        }
    datos=()=>{
         let datos = localStorage.getItem('datos');
                     datos = JSON.parse(datos)
                      Axios.get(`https://ebf4a80a.ngrok.io/usuario/${datos.token}`).then(r=>{
                        console.log(r)
                        this.setState({
                            usuario: r.data
                        }) 
            }) 
    }
    render() {  
      
        
       
      
      
      
        let {usuario_rol, usuario_correo, usuario_movil, usuario_ubicacion,usuario_telefono, usuario_cedula, usuario_nombre,usuario_id} =this.state.usuario;
            
        return (
            <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">       
<div className="col-md-4 order-md-2 mb-4">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Tu perfil</span>
        <span className="badge badge-secondary badge-pill">:v</span>
      </h4>
      <ul className="list-group mb-3">
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">Nombre:</h6>
            <small className="text-muted">{usuario_nombre}</small>
          </div>
          <span className="text-muted">{usuario_cedula}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">{usuario_telefono}</h6>
            <small className="text-muted">{usuario_ubicacion}</small>
          </div>
          <span className="text-muted">{usuario_movil}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">{usuario_correo}</h6>
            <small className="text-muted">{usuario_rol}</small>
          </div>
          <span className="text-muted">{usuario_id}</span>
        </li>
      </ul>  
      
    </div> </div> </div>
        )
    }
}












