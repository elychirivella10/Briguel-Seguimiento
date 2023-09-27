import React, {useState, useEffect} from "react";

import Panel from "components/Panel/Panel";

import { getResponsibleUpdate, getCharge, insertResponsible } from "helpers/responsibles";

import { useParams } from "react-router-dom";

import {useNavigate} from 'react-router-dom';

const EditResponsible = () => {
    const navigate = useNavigate();
    const [responsible, setResponsible] = useState({
        nombre:'',
        direccion:'',
        gmail:'',
        id_charge:0
    })
    const [charges, setCharges] = useState([])

    useEffect(() => {
        getResponsibleUpdate(id, setResponsible)
        getCharge(setCharges)
    }, [])

    let {id} = useParams('id')

    const handleSubmit = (e) =>{
        e.preventDefault()
        insertResponsible(responsible, id, e, navigate)
    }
    
    return(
        <div className="columns is-multiline is-centered">
            <div className="column is-7">
                <Panel title='Actualizar Responsable' subtitle={responsible.direccion}/>
            </div>
            <div className="column is-7">
                <div className="box">
                    <form className="form">
                        <div className="columns is-multiline">
                            <div className="column is-6">
                                <div className="field" id={4}>
                                    <label className="label">Nombre</label>
                                    <div className="control">
                                        <input className="input" type="text" name="nombre" value={responsible.nombre} onChange={(e)=>(
                                            setResponsible({
                                                ...responsible,
                                                [e.target.name]:e.target.value
                                            })
                                        )}/>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-6">
                                <div className="field" id={4}>
                                    <label className="label">Direccion</label>
                                    <div className="control">
                                        <input className="input" type="text" name="direccion" value={responsible.direccion} onChange={(e)=>(
                                            setResponsible({
                                                ...responsible,
                                                [e.target.name]:e.target.value
                                            })
                                        )}/>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-6">
                                <div className="field" id={4}>
                                    <label className="label">Gmail</label>
                                    <div className="control">
                                        <input className="input" name="gmail" type="email" value={responsible.gmail} onChange={(e)=>(
                                            setResponsible({
                                                ...responsible,
                                                [e.target.name]:e.target.value
                                            })
                                        )}/>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-6">
                                <div className="field" id={4}>
                                    <label className="label">Cargo</label>
                                    <div className="control">
                                        <div className="select is-rounded">
                                            <select  name="id_charge" value ={responsible.id_charge} onChange={(e)=>(
                                            setResponsible({
                                                ...responsible,
                                                [e.target.name]:e.target.value
                                            })
                                        )}>
                                                <option value={0}>--Seleccione un cargo--</option>
                                                {charges.map(c=>(
                                                    <option value={c.id}>{c.charge}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="control">
                                    <button className="button is-fullwidth is-primary" onClick={handleSubmit}>Guardar</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default EditResponsible