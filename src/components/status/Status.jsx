import React, {useState} from 'react'

const Status=({statusPanel})=>{
    const [status, insertStatus] = useState(statusPanel?statusPanel:'Seleccione un status')
    return(

        <div className="field has-addons is-justify-content-end">
            <p className="control">
                <span className="select is-small">
                <select name="typeIdentification" onChange={(e)=>{
                    insertStatus(e.target.value)
                }}>
                    <option value="Seleccione un status">Seleccionar un estatus</option>
                    <option value="Asignado">Asignado</option>
                </select>
                </span>
            </p>
            <p className="control">
                <span className="button is-static is-small">
                    {status}
                </span>
            </p>
        </div>
    )
}
export default Status