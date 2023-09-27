import {GET_TASK_DIRECCION_GERENERAL,GET_TASK_DIRECCION_LINEAS, GET_TASK_DESPACHO, INSERT_REQUIREMENTS, GET_REQUIREMENT, RESET_TASK} from 'actions/types'
 
const initialState = {
    task:{},
    despacho: [],
    direccionG: [],
    direccionL: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_REQUIREMENT:
            return {
                ...state,
                requirement: action.payload
            }
        case GET_TASK_DESPACHO:
            return {
                ...state,
                despacho: action.payload
            }
        case GET_TASK_DIRECCION_GERENERAL:
            return {
                ...state,
                direccionG: action.payload
            }
        case GET_TASK_DIRECCION_LINEAS:
            return {
                ...state,
                direccionL: action.payload
            }
        case INSERT_REQUIREMENTS:
            return {
                requirements: action.payload
            }
        case RESET_TASK:
            return {
                despacho: [],
                direccionG: [],
                direccionL: []
            }
        default:
            return state
    }
}