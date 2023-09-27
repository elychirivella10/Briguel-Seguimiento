import React from 'react'
import Calendar from 'components/calendar/CalendarDate'

const SearchDate=()=>{
    return(
        <div className="box">
            <p className=" has-text-weight-semibold mb-5">Fecha</p>
            <p className="mb-5 has-text-grey">Ingrese un rango de fechas para filtrar en la lista de requerimientos</p>
            <Calendar range={true} type="date"/>
        </div>
    )
}
export default SearchDate