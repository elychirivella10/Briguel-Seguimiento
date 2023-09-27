import React, {useState, useEffect} from 'react'

import Calendar from 'components/calendar/CalendarDate'
import Panel from 'components/Panel/Panel'

import { errorDate, getType, getResponsible, insertTask } from 'helpers/helpersRegister'

import {useNavigate} from 'react-router-dom';

const Register=()=>{
    const navigate = useNavigate();
    const [dateInitial, setDateInitial] = useState("0000-00-00")
    const [dateEstimated, setDateEstimated] = useState("0000-00-00")
    const [dateError, setDateError] = useState(false)
    const [typeTasks, setTypeTasks] =useState([])
    const [responsibles, setResponsibles] =useState([])
    const [dataRegistro, setDataRegistro] = useState({
        title:"",
        description:"",
        id_status:0,
        id_area:0,
        id_responsable:0,
        id_type_task:0
    })
    
    useEffect(() => {
        errorDate(dateInitial,dateEstimated,setDateEstimated,setDateError)
        handleChangeResponsibles()
    }, [dateEstimated])
    
    const handleChangeAreas = (e)=>{
        const value = e.target
        
       getType(value.value, setTypeTasks, setDataRegistro,dataRegistro)
       
    } 

    const handleChangeResponsibles = async () =>{
        const data = await getResponsible(setResponsibles)
        setResponsibles(data)
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        const data ={...dataRegistro, initial_date:dateInitial,estimated_date:dateEstimated}
        insertTask(data, e,navigate)
    }
    return(
        <div className="columns is-centered is-multiline">
            <div className="column is-7">
                <Panel title='Registro' subtitle='Tareas'/>
            </div>
            <div className="column is-7">
                <div className="box">
                    <div className="columns is-multiline">
                        <div className="form">
                            <div className="column">
                                <div className="columns is-multiline">
                                    <div className="column is-6 ">
                                        <div className="field" id={1}>
                                            <label className="label">Area</label>
                                            <div className="control">
                                                <div className="select is-rounded">
                                                    <select  name="estado" onChange = {handleChangeAreas}>
                                                        <option value={0}>--Seleccione un area--</option>
                                                        <option value={1}>Despacho</option>
                                                        <option value={2}>Direccion General</option>
                                                        <option value={3}>Direccion de linea</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column is-6 ">
                                        <div className="field" id={2}>
                                            <label className="label">Tipo</label>
                                            <div className="control">
                                                <div className="select is-rounded">
                                                    <select  name="estado" value={dataRegistro.id_type_task} onChange={(e)=>{
                                                        setDataRegistro({
                                                            ...dataRegistro,
                                                            id_type_task:e.target.value
                                                        })
                                                    }}>
                                                        <option value={0}>--Seleccione un tipo de tarea--</option>
                                                        {typeTasks.map((t, index)=>(
                                                            <option value={t.id} key={index}>{t.tipo_tarea}</option>
                                                        ))}
                                                    
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column is-12 ">
                                        <div className="field" id={3}>
                                            <label className="label">Tarea</label>
                                            <div className="control">
                                                <input className="input" type="text" defaultValue={dataRegistro.title} onChange={(e)=>(
                                                    setDataRegistro({
                                                        ...dataRegistro,
                                                        title:e.target.value
                                                    })
                                                )}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column is-12 ">
                                        <div className="field" id={4}>
                                            <label className="label">Descripcion</label>
                                            <div className="control">
                                                <input className="input" type="text" defaultValue={dataRegistro.description} onChange={(e)=>(
                                                    setDataRegistro({
                                                        ...dataRegistro,
                                                        description:e.target.value
                                                    })
                                                )}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column is-6 ">
                                        <div className="field" id={5}>
                                            <label className="label">Responsable</label>
                                            <div className="control">
                                                <div className="select is-rounded">
                                                    <select  name="estado" value={dataRegistro.id_responsable} onChange={(e)=>(
                                                        setDataRegistro({
                                                            ...dataRegistro,
                                                            id_responsable:e.target.value
                                                        })
                                                    )}>
                                                        <option value={0} id={0}>--Seleccione un responsable--</option>
                                                        {
                                                            responsibles.map((r,index)=>(
                                                                <option value={r.id} key={r.id}>{r.direccion}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column is-6 ">
                                        <div className="field" id={5}>
                                            <label className="label">Estatus</label>
                                            <div className="control">
                                                <div className="select is-rounded">
                                                    <select  name="estado" value={dataRegistro.id_status} onChange={(e)=>(
                                                        setDataRegistro({
                                                            ...dataRegistro,
                                                            id_status:e.target.value
                                                        })
                                                    )}>
                                                        <option value={0} id={0}>--Seleccione un Estatus--</option>
                                                        <option value={1}>Por iniciar</option>
                                                        <option value={2}>En proceso</option>
                                                        <option value={3}>Culminado</option>
                                                        <option value={4}>Detenido</option>
                                                        
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-12"><div className="divider">Fechas</div></div>
                            <div className="column">
                                <div className="columns">
                                    <div className="column is-6">
                                        <div className="field" id={6}>
                                            <label className="label">Fecha de inicio</label>
                                            <div className="control">
                                                <Calendar getDate={setDateInitial} date={dateEstimated}  name={'initial'}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column is-6">
                                        <div className="field" id={7}>
                                            <label className="label">Fecha de Estimada de cierre</label>
                                            <div className="control">
                                                
                                                <Calendar getDate={setDateEstimated} date={dateInitial}  name={'estimated'}/>
                                            </div>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register