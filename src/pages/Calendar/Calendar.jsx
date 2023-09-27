import React, {useEffect} from 'react'

import CalendarG from 'components/calendar/CalendarGoogle'
import LegendStatus from 'components/help/LegendStatus'
import {connect} from 'react-redux'
import { getCalendar } from 'actions/calendarActions'

const Calendar = ({data, getCalendar}) =>{

    useEffect(() => {
        getCalendar(new Date())
    }, [])
    
    return(
        <div className="box vh85">
            <LegendStatus
                arr={[
                    {'title':'Despacho', 'type':'has-background-despacho'},
                    {'title':'Direccion General', 'type':'has-background-DG'},
                    {'title':'Direcciones de Linea', 'type':'has-background-DL'},
                ]}
            />
            <CalendarG data={data} getCalendar={getCalendar}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
	data:state.calendar.calendar
});

export default connect (mapStateToProps,{getCalendar}) (Calendar) 
