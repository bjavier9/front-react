import React, { Component } from 'react'
import { Message } from 'element-react';

import 'element-theme-default';
import Axios from 'axios';

export default class Registro extends Component {
    correoRef = React.createRef();
    passwordRef = React.createRef();
    nombreRef = React.createRef();
    telefonoRef = React.createRef();
    ubicacionRef = React.createRef();
    movilRef = React.createRef();
    imagenRef = React.createRef();
    CedulaRef= React.createRef();
    crear = (e) => {
        e.preventDefault()
       
        const datos = {
            correo: this.correoRef.current.value,
            password: this.passwordRef.current.value,
            nombre:this.nombreRef.current.value,
            cedula:this.CedulaRef.current.value,
            telefono:this.telefonoRef.current.value,
            ubicacion:this.ubicacionRef.current.value,
            movil:this.movilRef.current.value,
            imagen:this.imagenRef.current.value
               }
      
        Axios.post('https://ebf4a80a.ngrok.io/usuario', datos).then(e=>{
            Message({
                    message: 'Se registro correctamente',
                    type: 'success'
                  });
        })
       
            
       
      

        

    }




    render() {
        return (
            <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center">
                    <form onSubmit={this.crear} className="col-6 ">
                        <legend className="text-center">
                            <img src="https://media.istockphoto.com/photos/young-woman-in-a-car-picture-id106557390?k=6&m=106557390&s=612x612&w=0&h=N2W-BRCrtbYG81ugumHOMUVS_OeB2Jfx1Zu46J5n1mU=" alt="señora" height="120" width="auto" />
                            <br />
                            Crear cuenta</legend>
                        <div className="form-group">
                            <label htmlFor="correo">Correo</label>
                            <input type='email' ref={this.correoRef} className="form-control" placeholder="Correo" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contraseña">Contraseña</label>
                            <input type="password" ref={this.passwordRef} className="form-control" placeholder="Password" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre:</label>
                            <input type='text' ref={this.nombreRef} className="form-control" placeholder="Nombre" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Cedula">Cedula:</label>
                            <input type='text' ref={this.CedulaRef} className="form-control" placeholder="Cedula" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefono">telefono</label>
                            <input type='text' ref={this.telefonoRef} className="form-control" placeholder="telefono" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ubicacion">Ubicacion:</label>
                            <input type='text' ref={this.ubicacionRef} className="form-control" placeholder="Ubicacion" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="movil">Telefono Movil:</label>
                            <input type='text' ref={this.movilRef} className="form-control" placeholder="Movil" required />
                        </div>
                        <div className="form-group">
                            <small>Me quede sin tiempo para subir la imagen, pega un link :ccc.</small>
                            <label htmlFor="imagen">Imagen:</label>
                            <input type='text' ref={this.imagenRef} className="form-control" placeholder="imagen" required />
                        </div>
                        <button type='submit' className="btn btn-primary">Crear</button>

                    </form>
                </div>
            </div>
        )
    }
}
