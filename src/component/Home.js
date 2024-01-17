import React from 'react'
import Clock from './Clock'
import MyCalendar from './Calendar.js'
import ToDo from './ToDo.js'

export default function Home() {
  return (
    <div className='Home'>
      <div className='Homeleft'>
        <div className='clock'>
          <Clock/>
        </div>
        <div className='calendar'><MyCalendar/></div>
      </div>
      <div className='Homeright'>
        <div>ToDo</div>
        <ToDo/>
      </div>
    </div>
  )
}
