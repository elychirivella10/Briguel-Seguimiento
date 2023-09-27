import moment from "moment"

import axios from "axios"

import alerta from "components/alert/Alert"

import { rutaAxios } from "variablesGoblales"
import { errors } from "./errorApi"
import { validarEmpty } from "./validator/validateEmpty"




export const errorDate = (dateInitial, dateEstimated, setDateEstimated, setDateError)=>{
    const date1 = moment(dateInitial)
    const date2 = moment(dateEstimated)
    if (date1.isAfter(date2) ===false) {
        setDateError(false)
    }else{
        alerta.open({type:"error", message:'FECHA DE INICIO es mayor a la FECHA DE CIERRE'})
        setDateError(true)
        setDateEstimated("0000-00-00")
    }
}

export const getType = async (id,setTypeTasks,setDataRegistro,dataRegistro) =>{
    const respuesta = await axios.get(`${rutaAxios}type_tasks/${id}`)
    setDataRegistro({
        ...dataRegistro,
        id_type_task:0,
        id_area:id
    })
    setTypeTasks(respuesta.data.typeTaskXAreas)
}
export const getResponsible = async (setResponsibles) =>{
    const respuesta = await axios.get(`${rutaAxios}responsibles`)
    return respuesta.data.responsibles
}

export const insertTask = async (data, e,navigate)=>{
    const error =  validarEmpty(data)
    e.target.setAttribute("disabled", true);
    if (error === 0) {
        data.initial_date = moment(data.initial_date).format('YYYY-MM-DD hh:mm:ss')
        data.estimated_date = moment(data.estimated_date).format('YYYY-MM-DD hh:mm:ss')
        const respuesta = await axios.post(`${rutaAxios}tasks`, {...data})
        .then(respuesta=>{
            if (respuesta.data.task_id) {
                alerta.open({type:"success", message:'Se ha agregado la tarea correctamente'})
                navigate('/dep'); 
            }
        })
        .catch(function (error) {
            e.target.removeAttribute("disabled");
            errors(error.response, alerta)
        })
    }else{
        alerta.open({type:"error", message:'Campos vacios en el formulario'})
        e.target.removeAttribute("disabled");
    }
    
}
export const updateTask = async (data, e,navigate, id)=>{
    console.log(data)
    e.target.setAttribute("disabled", true);
    let error = 0
    for (let clave in data){
        if (data[clave]===""||data[clave]===0||data[clave]==="0000-00-00") {
            error=1
        }
    }
    if (error === 0) {
        data.due_date = moment(data.due_date).format('YYYY-MM-DD hh:mm:ss')
        const respuesta = await axios.put(`${rutaAxios}tasks/${id}`, {...data})
        if (respuesta.data.update) {
            alerta.open({type:"success", message:'Se actualizo correctamente'})
            navigate('/dep');
            
        }
        console.log(respuesta.data.task_id)
    }else{
        alerta.open({type:"error", message:'Campos vacios en el formulario'})
        e.target.removeAttribute("disabled");
    }
    
}

export const getTask = async (id, setDataRegistro, setDateInitial, setDateEstimated)  =>{
    const respuesta = await axios.get(`${rutaAxios}tasks/${id}`)
    setDataRegistro({
        title:respuesta.data.title,
        description:respuesta.data.description,
        id_status:respuesta.data.id_status,
        id_area:respuesta.data.id_area,
        id_responsable:respuesta.data.id_responsable,
        id_type_task:respuesta.data.id_type_task
    })
    setDateInitial(respuesta.data.initial_date)
    setDateEstimated(respuesta.data.estimated_date)
}