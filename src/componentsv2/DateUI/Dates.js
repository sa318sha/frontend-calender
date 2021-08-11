import React from 'react'
import DateHeader from './DateHeader'
import DateBody from './DateBody'




const Dates = ({day, month, year, method, goals, deleteGoal ,submitMethod}) => {

  const DateOFObject = `${month} ${day}, ${year}`
  
  
  return (
    <div className= 'date-container'>
      
      <DateHeader DateOFObject = {DateOFObject} method = {method}/>
      <DateBody goals = {goals} deleteGoal={deleteGoal} submitMethod={submitMethod}/> 
    </div>
  )
}

export default Dates
