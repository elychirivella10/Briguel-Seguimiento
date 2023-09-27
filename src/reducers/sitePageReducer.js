import {GET_SITEPAGE, INSERT_SITEPAGE} from '../actions/types'
 
const initialState = {
    sitePage: ""
}

const sitePage = (state = initialState, action) => {
    switch (action.type) {
        case GET_SITEPAGE :
            return {
                ...state
            }
        case INSERT_SITEPAGE :
            return {
                ...state,
                sitePage: action.payload
            }
        default:
            return state
    }
}

export default sitePage