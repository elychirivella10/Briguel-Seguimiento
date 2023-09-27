import React from 'react'

const ShowUser=()=>{
    return(
        
        <div className="columns is-multiline">
            <div className="column is-3">
                <div className="control has-icons-right pb-4 is-small is-expanded">
                    <input className="input" type="text" placeholder="Nombre" name="Buscar"/>
                    <span className="icon is-small is-right">
                        <i className="fas fa-magnifying-glass"></i>
                    </span>
                </div> 
            </div>
            <div className="column is-3">
                <div className="control has-icons-right pb-4 is-small is-expanded">
                    <input className="input" type="text" placeholder="Apellido" name="Buscar"/>
                    <span className="icon is-small is-right">
                        <i className="fas fa-magnifying-glass"></i>
                    </span>
                </div> 
            </div>
            <div className="column is-3">
                <div className="control has-icons-right pb-4 is-small is-expanded">
                    <input className="input" type="text" placeholder="Correo" name="Buscar"/>
                    <span className="icon is-small is-right">
                        <i className="fas fa-magnifying-glass"></i>
                    </span>
                </div> 
            </div>
            <div className="column is-3">
                <div className="control has-icons-right pb-4 is-small is-expanded">
                    <input className="input" type="text" placeholder="Telefono" name="Buscar"/>
                    <span className="icon is-small is-right">
                        <i className="fas fa-magnifying-glass"></i>
                    </span>
                </div> 
            </div>
            <div className="column is-3">
                <div className="control has-icons-right pb-4 is-small is-expanded">
                    <input className="input" type="text" placeholder="Bufete o Empresa" name="Buscar"/>
                    <span className="icon is-small is-right">
                        <i className="fas fa-magnifying-glass"></i>
                    </span>
                </div> 
            </div>

        </div>
    )
}
export default ShowUser