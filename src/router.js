import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Axios from 'axios'
import Header from "./componentes/header/header"
import Autos from "./componentes/auto/autos";
import Login from "./componentes/login/login";
import Error from "./componentes/error/error";
import Singleauto from './componentes/auto/unauto';
import Navegacion from './componentes/navegacion/Navegacion';
import Registro from './componentes/registro/registro';
import AutosAlquiler from "./componentes/auto/alquiler/AutosAlquiler";
import Alquiler from "./componentes/auto/alquiler/alquiler";
import Factura from "./componentes/factura/factura";
import Listado from "./componentes/factura/listado";
import Perfil from './componentes/perfil/perfil';
import Logueate from './componentes/login/logueate';


import 'element-theme-default';

export default class Router extends Component {

    state = {
        autos: [],
        terminoBusqueda: '',
        temp: []
    }

    componentDidMount() {
        this.autos_muestra()
        this.valido()
        

    }

    autos_muestra = () => {
        Axios.get('https://ebf4a80a.ngrok.io/autos').then(r => {
            this.setState({
                autos: r.data
            })
        })
    }


    aunthenticate = () => {
        let datos = localStorage.getItem('datos');
        datos = JSON.parse(datos)
        console.log(datos)
        if (datos === null || datos === undefined) {


            return false

        } else {
            return true;

        }
    }
    
    valido = () => {
        let datos = localStorage.getItem('datos');
        if (datos === null || datos === undefined) {
            console.log("nada")
        } else {
            datos = JSON.parse(datos)
            Axios.get(`https://ebf4a80a.ngrok.io/valido/${datos.token}`).catch(e => {
                localStorage.removeItem('datos');


            })
        }
    }




    busquedaAuto = (busqueda) => {
        if (busqueda.length > 3) {
            this.setState({
                terminoBusqueda: busqueda
            })
        } else {
            this.setState({
                terminoBusqueda: ''
            })

        }
    }



    render() {

        let autos = [...this.state.autos];
        let busqueda = this.state.terminoBusqueda;
        let resultado

        if (busqueda !== '') {
            resultado = autos.filter(auto => (
                auto.auto_modelo.toLowerCase().indexOf(busqueda.toLowerCase()) !== -1
            ))
        } else {
            resultado = autos;
        }




        return (
            <BrowserRouter>
                <Header titulo="Alquiler de autos" />
                <Navegacion />
                <Switch>
                    <Route exact path="/" render={() => (
                        <Autos
                            autos={resultado}
                            busquedaAuto={this.busquedaAuto}


                        />)}
                    />
                    <Route  path="/login" render={() => {
                        return (<Login />)

                    }} />

                    <Route  path="/auto/:autoId" render={(props) => (

                        <Singleauto
                            alquiler={props.location.pathname.replace('/auto/', '')}
                        />)} />


                    <Route exact path="/alquiler/:autoId" render={(props) => (
                        this.aunthenticate() === true
                            ? <Alquiler
                                alquiler={props.location.pathname.replace('/alquiler/', '')}

                            />
                            : <Redirect to="/logueate" />

                    )} />
                    <Route exact path="/procesar/:autoId" render={(props) => (
                        this.aunthenticate() === true
                            ? <Factura
                                auto={props.location.pathname.replace('/procesar/', '')}
                            />
                            : <Redirect to="/logueate" />

                    )} />

                    <Route  path="/registro" component={Registro} />
                    <Route  path="/logueate" component={Logueate} />


                    <Route  path="/listado" render={() => (
                        this.aunthenticate() === true
                            ? <Listado />
                            : <Redirect to="/logueate" />
                    )}
                    />
                      <Route  path="/perfil" render={() => (
                        this.aunthenticate() === true
                            ? <Perfil />
                            : <Redirect to="/logueate" />
                    )}
                    />
                    {/* rutas privadas sin props context */}


                    <Route exact path="/alquiler" render={() => (
                        this.aunthenticate() === true
                            ? <AutosAlquiler />
                            : <Redirect to="/logueate" />
                    )} />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        )
    }
}
