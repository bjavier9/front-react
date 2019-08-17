import React from 'react'
import {NavLink} from 'react-router-dom'
const Navegacion=()=> {

        return(
           
                 <ul className="nav nav-tabs justify-content-center">
                 <li className="nav-item">
                   <NavLink to={'/'} className="nav-link" activeClassName="active">Autos</NavLink> 
                </li>
                <li className="nav-item">
                   <NavLink to={'/login'} className="nav-link" activeClassName="active">Login</NavLink> 
                </li>
               
                <li className="nav-item">
                   <NavLink to={'/registro'} className="nav-link" activeClassName="active">Registro</NavLink> 
                </li>
                <li className="nav-item">
                   <NavLink to={'/alquiler'} className="nav-link" activeClassName="active">Autos alquiler</NavLink> 
                </li>
                <li className="nav-item">
                   <NavLink to={'/listado'} className="nav-link" activeClassName="active">Historial de facturas</NavLink> 
                </li>
                <li className="nav-item">
                   <NavLink to={'/perfil'} className="nav-link" activeClassName="active">Perfil</NavLink> 
                </li>
                
                
            </ul>
            
        )
    
}
export default Navegacion