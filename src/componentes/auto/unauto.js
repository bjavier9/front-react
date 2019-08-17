import React, { Component } from 'react'
import Axios from 'axios'

export default class Alquiler extends Component {
  state={
            auto:[]
        }
  componentDidMount(){
            this.datos()
        }
    datos=()=>{
    
                      Axios.get(`https://ebf4a80a.ngrok.io/autos/${this.props.alquiler}`).then(r=>{
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
        let {auto_imagen, auto_marca, auto_modelo, auto_year, auto_descripcion} =this.state.auto;
            
        return (
            
            <div className="card mb-3" style={{visibility: visibilityStado}}>               
                   <img src={auto_imagen} className="card-img-top" alt={auto_modelo}   />
                   <div className="card-body">
                       <h5 className="card-title">{auto_modelo}--{auto_marca}</h5>
                       <p className="card-text">{auto_year}</p>
                       <p className="card-text"><small className="text-muted">{auto_descripcion}</small>
                       
                       </p>
                   </div>
               
            </div>
        )
    }
}
