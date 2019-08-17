import React, { Component } from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
export default class Alquiler extends Component {
  state={
            auto:[]
        }
  componentDidMount(){
            this.datos()
        }
    datos=()=>{
         let datos = localStorage.getItem('datos');
                     datos = JSON.parse(datos)
                      Axios.get(`https://ebf4a80a.ngrok.io/autos/all/${this.props.alquiler}?secret_token=${datos.token}`).then(r=>{
                        console.log(r)
                        this.setState({
                            auto: r.data[0]
                        }) 
            }) 
    }
    render() {  
      
        
       
      
        let visibilityStado = "hidden"
      
        if(this.state.auto===undefined){
            visibilityStado = "hidden"
        }else{
            visibilityStado = "visible";
                     

        }
        let {auto_id, auto_imagen, auto_marca, auto_modelo, auto_year, auto_descripcion, auto_precio, disponible_cantidad} =this.state.auto;
            
        return (
            
            <div className="card mb-3" style={{visibility: visibilityStado}}>               
                   <img src={auto_imagen} className="card-img-top" alt={auto_modelo}   />
                   <div className="card-body">
                   <Link to={`/procesar/${auto_id}`} className="btn btn-sm btn-success">
                                        Reservar 
                                       </Link>
                       <h5 className="card-title">{auto_modelo}--{auto_marca}--- disponibles {disponible_cantidad}</h5>
                       <p className="card-text">{auto_year}---${auto_precio} x día</p>
                       <p className="card-text"><small className="text-muted">{auto_descripcion}</small>
                       
                       </p>
                   </div>
               
            </div>
        )
    }
}
