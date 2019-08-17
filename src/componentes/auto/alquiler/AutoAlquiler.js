import React from 'react'
import {Link} from 'react-router-dom'


const AutoAlquiler = (props)=> {
    const{auto_imagen, auto_marca, auto_modelo, auto_year, auto_id}=props.informacion;
  
        return (
            <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <img className="bd-placeholder-img card-img-top" src={auto_imagen} width="100" height="auto" alt={auto_modelo} />
                            <div className="card-body">
                                <p className="card-text">{auto_marca}-{auto_modelo}-{auto_year}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                       <Link to={`/alquiler/${auto_id}`} className="btn btn-sm btn-primary">
                                       Mas informacion
                                       </Link>
                                       <Link to={`/procesar/${auto_id}`} className="btn btn-sm btn-success">
                                        Reservar 
                                       </Link>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

        )
    
}
export default AutoAlquiler;