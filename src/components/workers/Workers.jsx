import React, {useState} from 'react'

const Workers=({workerPanel})=>{
    const [worker, insertWorker] = useState(workerPanel?workerPanel:'Seleccione un trabajador')
    return(

        <div className="field has-addons is-justify-content-end">
            <p className="control">
                <span className="select is-small">
                <select name="worker"  onChange={(e)=>{
                    insertWorker(e.target.value)
                }}>
                    <option value="Seleccione un trabajador">Seleccione un trabajador</option>
                    <option value="1">Ely</option>
                </select>
                </span>
            </p>
            <p className="control">
                <span className="button is-static is-small">
                    {worker}
                </span>
            </p>
        </div>
    )
}
export default Workers