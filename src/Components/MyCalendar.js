import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import myEventsList from '../assets/data/myEventsList'
//import Title from '../Layout/Title'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import '../assets/css/MyCalendar.css'

const localizer = momentLocalizer(moment)

const MyCalendar = props => (
  <div className="calenderLayout">
    <div className="calender">
      <Calendar
        localizer={localizer}
        events={myEventsList}
        endAccessor="end"
      />
    </div>
  </div>
)

export default MyCalendar