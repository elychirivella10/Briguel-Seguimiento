import {GET_CALENDAR, RESET_CALENDAR} from 'actions/types'

//importar axios
import axios from 'axios'

//var
import {rutaAxios} from 'variablesGoblales'

//moment
import moment from 'moment'



export const getCalendar = (date) => async dispatch => {
    date =moment(date).format('YYYY-MM-')
    const initial = date+'01'
    const final = date+'31'
    console.log(final, initial)
        let request = await axios.get(`${rutaAxios}tasks/byCalendar/1/10000/${initial}/${final}`)
        request = request.data.taskCalendars
        for (let index = 0; index < request.length; index++) {
            request[index].start = new Date (moment(request[index].start).format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ (a)"))
            request[index].end = new Date(moment(request[index].start).format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ (a)"))
        }
        
    dispatch ({
        type:GET_CALENDAR, 
        payload: request
    })
    
} 

export const resetCalendar = (body) => async dispatch => {
    dispatch ({
        type:RESET_CALENDAR
    }) 

    return true
}
