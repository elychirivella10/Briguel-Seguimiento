import React from 'react'

const Export=()=>{

    const ChangeStatusExport=(e)=>{

    }
    return(
        <div className="box">
            <p className=" has-text-weight-semibold">Exportacion</p>
            <div className="field">
                <input id="switchExample" type="checkbox" name="switchExample" className="switch is-rounded" onChange={ChangeStatusExport}/>
                <label htmlFor="switchExample">PDF</label>
            </div>
            <div className="field">
                <input id="switchExample2" type="checkbox" name="switchExample" className="switch is-rounded" onChange={ChangeStatusExport} />
                <label htmlFor="switchExample2">Excel</label>
            </div>
            <button className = "button is-fullwidth is-blue">Exportar</button>
        </div>
    )
}
export default Export