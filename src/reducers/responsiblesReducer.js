import {GET_RESPONSIBLE, GET_RESPONSIBLES} from 'actions/types'
 
const initialState = {
    responsible:{},
    responsibles: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_RESPONSIBLE:
            return {
                ...state,
                responsible: action.payload
            }
        case GET_RESPONSIBLES:
            return {
                ...state,
                responsibles: action.payload
            }
        default:
            return state
    }
}