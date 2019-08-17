import React, { Component } from 'react'
import Axios from 'axios'
import { Message } from 'element-react';

import 'element-theme-default';
export default class Factura extends Component {
 state={
        auto:[]
    }
componentDidMount(){
        this.datos()
    }
    diasRef = React.createRef();
    
    reservar = (e) => {
        e.preventDefault()         
            let dias= this.diasRef.current.value
            let auto= this.props.auto
            console.log(dias)
            let datos = localStorage.getItem('datos');
            datos = JSON.parse(datos)
             Axios.get(`https://ebf4a80a.ngrok.io/alquilar/${dias}/${auto}/${datos.token}`).then(r=>{
               console.log(r)
               Message({
                message: 'Se registro correctamente',
                type: 'success'
              });
               
              
   })         
    }
   
datos=()=>{

                  Axios.get(`https://ebf4a80a.ngrok.io/autos/${this.props.auto}`).then(r=>{
                    console.log(r)
                    this.setState({
                        auto: r.data[0]
                    }) 
        }) 
}


    render() {
     const{auto_imagen}=this.state.auto;
        return (
            <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center">
                    <form onSubmit={this.reservar} className="col-6 ">
                        <legend className="text-center">
                            <img src={auto_imagen} alt="tesla" height="120" width="auto" />
                            <br/>
                            Alquilar auto</legend>
                        <div className="form-group">
                            <label htmlFor="dias">Dias:</label>
                            <input type='date' ref={this.diasRef} className="form-control" placeholder="Dias" required />
                        </div>
                        
                        <button type='submit' className="btn btn-primary">Alquilar</button>

                    </form>
                </div>
            </div>
        )
    }
}
