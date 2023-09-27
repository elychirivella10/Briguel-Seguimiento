import {GET_REQUIREMENT, GET_TASK_DIRECCION_GERENERAL,GET_TASK_DIRECCION_LINEAS, GET_TASK_DESPACHO, RESET_TASK} from 'actions/types'

//importar axios
import axios from 'axios'

//var
import {rutaAxios} from 'variablesGoblales'

//moment
import moment from 'moment'

export const getRequirements = (pag, cant, type) => async dispatch => {
    let typeReducer = ""
    let filter = ""
    switch (type) {
        case 'despacho':
            filter = "despacho"
            typeReducer = GET_TASK_DESPACHO
            break;
        case 'direccionL':
            filter = "direcciones de linea"
            typeReducer = GET_TASK_DIRECCION_LINEAS
            break;
        case 'direccionG':
            filter = "direccion general"
            typeReducer = GET_TASK_DIRECCION_GERENERAL
            break;
        default:
            break;
    }
    let respuesta = await axios.get(`${rutaAxios}tasks/${pag}/${cant}/%7B"area":%20"${filter}"%7D`) 
    respuesta = respuesta.data.tasks
    for (let index = 0; index < respuesta.length; index++) {
        respuesta[index].initial_date = moment(respuesta[index].initial_date).format('YYYY-MM-DD')
        respuesta[index].estimated_date = moment(respuesta[index].estimated_date).format('YYYY-MM-DD')
    }
    if (respuesta) {
        dispatch ({
            type:typeReducer, 
            payload: respuesta
        })
        return true
    }
} 

export const getRequirement = (id , requirements) => async dispatch => {
    let requirement = null
    if (requirements.length === 0) {
        requirement = await axios.get(`${rutaAxios}requirements/unique/${id}`)
        requirement = requirement.data
    }else{
        requirement = requirements.filter(r=>r.id ==id)
        requirement = requirement[0]
    }

    dispatch ({
        type:GET_REQUIREMENT, 
        payload: requirement
    })
    
} 

export const resetTask = (body) => async dispatch => {
    dispatch ({
        type:RESET_TASK
    }) 

    return true
}
