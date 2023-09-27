import axios from "axios"
import alerta from "components/alert/Alert"
import moment from "moment"

//funciones y ayudas
import { rutaAxios } from "variablesGoblales"
import { errors } from "./errorApi"
import { validarEmpty } from "./validator/validateEmpty"


//Funcion para obtener la lista de responsibles
export const getResponsible = async (id, setResponsible) => {
    const respuesta = await axios.get(`${rutaAxios}responsibles/${id}`)
    if (respuesta.data) {
        setResponsible(respuesta.data)
    } else {
        alerta.open({type:"error", message:'Error en consultar los datos'})
    }
}

//Funcion para obtener la lista de responsibles para el update
export const getResponsibleUpdate = async (id, setResponsible) => {
    const respuesta = await axios.get(`${rutaAxios}responsibles/${id}`)
    if (respuesta.data) {
        setResponsible({
            nombre:respuesta.data.nombre,
            direccion:respuesta.data.direccion,
            gmail:respuesta.data.gmail,
            id_charge:respuesta.data.id_charge
        })
    } else {
        alerta.open({type:"error", message:'Error en consultar los datos'})
    }
}

//Funcion para obtener las tareas por responsible
export const getTasksByResponsible = async (id, setTasks) => {
    const respuesta = await axios.get(`${rutaAxios}tasks/byResponsable/${id}`)
    if (respuesta.data) {
        let respuestaData = respuesta.data.taskbyResponsables
        for (let index = 0; index < respuestaData.length; index++) {
            respuestaData[index].initial_date = moment(respuestaData[index].initial_date, 'DD/MM/YYYY HH:mm:ss').format('YYYY-MM-DD')
            respuestaData[index].estimated_date = moment(respuestaData[index].estimated_date, 'DD/MM/YYYY HH:mm:ss').format('YYYY-MM-DD')
        }
        setTasks(respuestaData)
    } else {
        alerta.open({type:"error", message:'Error en consultar los datos'})
    }
}

//Funcion para obtener los cargos
export const getCharge = async (setCharges) => {
    const respuesta = await axios.get(`${rutaAxios}charges`)
    if (respuesta.data.charges) {
        setCharges(respuesta.data.charges)
    } else {
        alerta.open({type:"error", message:'Error en consultar los datos'})
    }
}

//funcion para insertar respnsibles
export const insertResponsible = async (data, id, e, navigate) =>{
    e.target.setAttribute("disabled", true);
    const error =  validarEmpty(data)
    if (error === 0) {
        const respuesta = await axios.put(`${rutaAxios}responsibles/${id}`, {...data})
        .then(respuesta=>{
            if (respuesta.data.datosNuevos) {
                alerta.open({type:"success", message:'Se actualizaron los datos correctamente'})
                navigate(`/responsables/${id}`);
            }
        }
        )
        .catch(function (error) {
            e.target.removeAttribute("disabled");
            errors(error.response, alerta)
        })
        
    }else{
        alerta.open({type:"error", message:'Campos vacios en el formulario'})
        e.target.removeAttribute("disabled");
    }
    
}