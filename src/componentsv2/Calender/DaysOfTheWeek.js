import React from 'react'
import DaysName from './DaysName'
const DaysOfTheWeek = () => {
  var array =[]
  const daysOFTHeWeeksNameArray = ['Sunday','Monday','Tuesday', 'Wednesday', 'Thursday','Friday','Saturday']
  for(let i = 0; i < 7; i++){
    array.push(<DaysName key ={i} name={daysOFTHeWeeksNameArray[i]}/>)
  }
  return (
    <div className='days-of-the-week-container'>
      {array}
    </div>
  )
}

export default DaysOfTheWeek
