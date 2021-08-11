import React from 'react'
import GoalsSegment from '../Goals/GoalsSegment'

const DateBody = ({goals,deleteGoal, submitMethod}) => {
  return (
    <div>
      <GoalsSegment goals = {goals} deleteGoal = {deleteGoal} submitMethod ={submitMethod}/>
    </div>
  )
}

export default DateBody
