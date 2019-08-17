import React, { Component } from 'react'
import Axios from 'axios';
const autoscontext = React.createContext();
export {autoscontext};
export default class autosProvider extends Component {
    state={
        autos:[]
    }
    componentDidMount() {
        this.autos_muestra()       
     }
     autos_muestra = ()=>{
        let datos = localStorage.getItem('datos'); 
        datos = JSON.parse(datos)
        Axios.get(`http://localhost:8080/alquiler?secret_token=${datos.token}`).then(r=>{
        this.setState({
            autos: r.data
        })
        }) 
    }
    render() {
        return (
            <autoscontext.Provider value={{
                state:this.state.autos
            }}>
                {this.props.children}
            </autoscontext.Provider>
        )
    }
}
