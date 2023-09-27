import {GET_CALENDAR, RESET_CALENDAR} from 'actions/types'
 
const initialState = {
    calendar: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CALENDAR:
            return {
                ...state,
                calendar: action.payload
            }
        case RESET_CALENDAR:
            return {
                calendar: []
            }
        default:
            return state
    }
}