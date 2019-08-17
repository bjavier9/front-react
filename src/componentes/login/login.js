import React, { Component } from 'react'
import Axios from 'axios'
import { Message } from 'element-react';

import 'element-theme-default';
export default class Login extends Component {

    correoRef = React.createRef();
    passwordRef = React.createRef();
    loguearse = (e) => {
        e.preventDefault()

        const datos = {
            correo: this.correoRef.current.value,
            password: this.passwordRef.current.value,

        }
        Axios.post('https://ebf4a80a.ngrok.io/login', datos).then(e => {
            Message({
                message: 'Inicio sesión correctamente',
                type: 'success'
              });
            let login = {
                token: e.data.token,
                logueado: true,
                rol: e.data.rol
            }
            localStorage.setItem('datos', JSON.stringify(login));
            this.props.history.push("/alquiler");
           
        }).catch(e => {

        })
    }


    render() {
        return (
            <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center">
                    <form onSubmit={this.loguearse} className="col-6 ">
                        <legend className="text-center">
                            <img src="https://photos7.motorcar.com/used-2017-ferrari-488_spider-convertible-1769-18474036-13-1024.jpg" alt="ferrari" height="120" width="auto" />
                            <br/>
                            Login</legend>

                            <small>admin@admin.com   Pass: admin</small>
                        <div className="form-group">
                            <label htmlFor="correo">Correo</label>
                            <input type='email' ref={this.correoRef} className="form-control" placeholder="Correo" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contraseña">Contraseña</label>
                            <input type="password" ref={this.passwordRef} className="form-control" placeholder="Password" required />
                        </div>
                        <button type='submit' className="btn btn-primary">Login</button>

                    </form>
                </div>
            </div>
        )
    }
}
