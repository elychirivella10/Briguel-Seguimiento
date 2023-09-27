import React, { useEffect } from 'react';
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min';
import 'css/bulma-calendar.css';
import moment from 'moment';



function Calendar({type, range, getDate, state,nameObjeto, name, date}) {
  
  useEffect(() => {
    // Initialize all input of date type.
    const calendars = bulmaCalendar.attach(`[type="date"]`, {
    });
    // Loop on each calendar initialized
    calendars.forEach((calendar) => {
      // Add listener to date:selected event
    calendar.on('date:selected', (date) => {
      date("2022-05-12")
      });
    });

    // To access to bulmaCalendar instance of an element
    // eslint-disable-next-line no-undef
    const element = document.querySelector("#"+name);
    if (element) {
      // bulmaCalendar instance is available as element.bulmaCalendar
      element.bulmaCalendar.on('select', (datepicker) => {
        const data = datepicker.data.datePicker.date.start
        getDate(data)
      });
    }
  }, []);

  return (
    <div className="field is-small">
        <div className="control is-small">
            <input id={name} className="is-small" data-display-mode="dialog" type="date" color = "is-info" data-date-format="yyyy-MM-dd"/>
        </div>
    </div>
  );
}



export default Calendar;