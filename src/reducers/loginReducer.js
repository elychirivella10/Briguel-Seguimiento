import {INSERT_USER, GET_USER} from '../actions/types'
 
const initialState = {
    login: false
}

const login=(state = initialState, action)=>{
    switch (action.type) {
        case GET_USER :
            return {
                ...state
            }
        case INSERT_USER:
            return {
                ...state,
                login: action.payload
            }
        default:
            return state
    }
}
export default login