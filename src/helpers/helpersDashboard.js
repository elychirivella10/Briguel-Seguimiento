import axios from "axios";
import { rutaAxios } from "variablesGoblales"; 

export const getDashTop = async (set) =>{
    const respuesta = await axios.get(`${rutaAxios}tasks/byAreas`)
    set(respuesta.data.taskbyAreas)
}

export const getDashMid = async (set) => {
    const respuesta = await axios.get(`${rutaAxios}tasks/byResponsablesAll`)
    set(respuesta.data.taskbyResponsables)
}

export const getDashBot = async (set) => {
    const respuesta = await axios.get(`${rutaAxios}tasks/byMonth/2023`)
    set(respuesta.data.taskbyMonths)
}
 
export const getTypeTask = async (set)=>{
    const respuesta = await axios.get(`${rutaAxios}type_tasks`)
    set(respuesta.data.typeTasks)
}

export const getDashStatus = async (set, id) =>{
    const respuesta = await axios.get(`${rutaAxios}tasks/byStatus/1/${id}`)
    set(respuesta.data.taskbyStatuss)
}
