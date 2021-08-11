import React from 'react'
import DayGoals from './DayGoals'
const Day = ({className, day , month, year, method, goal,}) => {
  const currentDay = new Date();
  
  return (
    <div onClick={() => method({day,month,year})} 
    className = {(currentDay.getMonth() === month && currentDay.getDate() === day)?
    (`${className} current-day`):(className)}>
      {day}
      
      {goal.map((individualGoals) =>(
        <DayGoals key={individualGoals.id} text = {individualGoals.goal}/>
      ))}
    </div>
  )
}

export default Day
