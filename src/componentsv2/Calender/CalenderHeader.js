import React from 'react'
import { useContext } from 'react';
import * as Context from '../contextHooks/ContextFile';
const CalenderHeader = () => {
  const {activeDay,displayMonth,activeYear} = useContext(Context.ActiveDate)
  const currentDay = useContext(Context.CurrentDate)

  const monthsArray = useContext(Context.Months)
  console.log(monthsArray)
  return (
    <div className='calender-header'>
      <div>{`Today is ${monthsArray[currentDay.getMonth()].month} ${currentDay.getDate()}, ${currentDay.getFullYear()}`}</div>
      <h3>{`${monthsArray[displayMonth].month} ${activeYear}`}</h3>
      <div> Sign Out </div>
    </div>
  )
}

export default CalenderHeader
