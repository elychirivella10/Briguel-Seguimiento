import {INSERT_USER, DESLOGEAR_USER, AUTHENTICATION_USER} from '../actions/types'

//importar store general
import store from '../store'

//importar axios
import axios from 'axios'

//
import {rutaAxios} from '../variablesGoblales'


export const agregarUsuario = (body) => async dispatch => {

        const respuesta = await axios.post(`${rutaAxios}user/public/api/user/info`,{nick:body})
        if(respuesta.data !== null){

            store.subscribe( () => {
                localStorage.setItem('infoUser', JSON.stringify(respuesta.data))
            });

            setTimeout(function(){ dispatch ({
                type:INSERT_USER, 
                payload: respuesta.data
            }) },1000);
            return true
        }
        return false
} 

export const infoUserData = (body) => async dispatch => {

        const respuesta = await axios.post(`${rutaAxios}user/token`,{nick:body})
        if(respuesta.data !== null){

            return respuesta.data
        }
        return false
} 

export const desInfoUser = () => {
    localStorage.removeItem('infoUser');
    return {
        type:DESLOGEAR_USER
    }
}