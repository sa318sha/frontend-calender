import React from 'react'
import MissedGoals from './MissedGoals'
import UpComingGoals from './UpComingGoals'

const GoalsBlockInCalender = ({goals,months,deleteMethod}) => {
  return (
    <div className='goals-calender-container'>
      <UpComingGoals goals ={goals} months={months} deleteMethod={deleteMethod}/>
      <MissedGoals goals ={goals} months={months} deleteMethod={deleteMethod}/>
    </div>
  )
}

export default GoalsBlockInCalender
