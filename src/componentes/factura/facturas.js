import React from 'react'



const Facturas = (props)=> {
    const{factura_id, tiempo_inicial, tiempo_final, factura_costo, auto_modelo, auto_marca}=props.informacion;
        return (
            <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                              
                                <ul className="card-text">
                                    <li>{auto_marca}</li>
                                     <li>{auto_modelo}</li>
                                     <li>{factura_costo}</li>
                                     <li>{tiempo_final}</li>
                                     <li>{tiempo_inicial}</li>
                                     <li>{factura_id}</li>
                                </ul>
                               
                              
                            </div>
                        </div>
                    </div>

        )
    
}
export default Facturas;