import React from 'react'

const CalenderHeader = ({months,month,year}) => {
 
  const event = new Date();

  return (
    <div className='calender-header'>
      <div>{`Today is ${months[event.getMonth()].month} ${event.getDate()}, ${event.getFullYear()}`}</div>
      <h3>{`${months[month].month} ${year}`}</h3>
      <div> Sign Out </div>
    </div>
  )
}

export default CalenderHeader
