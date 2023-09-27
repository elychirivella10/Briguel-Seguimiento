import axios from 'axios'
import { rutaAxios } from 'variablesGoblales'
import { errors } from './errorApi'
import alerta from 'components/alert/Alert'

export const getNotes = async (set, id) => {
    const respuesta = await axios.get(`${rutaAxios}notes/unique/${id}`)
    .then(respuesta=>{
        if (respuesta.data) {
            set(respuesta.data)
        }
    })
    .catch(function (error) {
        errors(error.response, alerta)
    })
    
}


export const deleteFile = async (id) => {
    const respuesta = await axios.get(`${rutaAxios}notes/fileDelete/${id}`)
    .then(respuesta=>{
        if (respuesta.data) {
            alerta.open({type:"success", message:'Se ha eliminado el archivo'})
        }
    })
    .catch(function (error) {
        errors(error.response, alerta)
    })
}