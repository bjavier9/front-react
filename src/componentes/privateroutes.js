import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import Axios from 'axios';


function aunthenticate() {
    let datos = localStorage.getItem('datos');
    datos = JSON.parse(datos)
    console.log(datos)
    if (datos === null || datos === undefined) {


        return false

    } else {
        return true;

    }
}
let datos = localStorage.getItem('datos');
if (datos === null || datos === undefined) {
   console.log("nada")
}else{ datos = JSON.parse(datos)
Axios.get(`http://localhost:8080/valido/${datos.token}`).catch(e => {
    localStorage.removeItem('datos');
}) }





console.log(aunthenticate())
const PrivateRoute = ({ component: Component, ...rest }) => (

    <Route {...rest} render={(props) => (
        aunthenticate() === true
            ? <Component {...props} />
            : <Redirect to="/login" />
    )} />
)

export default PrivateRoute
