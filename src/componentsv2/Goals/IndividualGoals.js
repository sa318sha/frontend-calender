import React from 'react'
import GoalButton from './GoalButton'
const IndividualGoals = ({goal, method}) => {

  return (
    <div className = 'goal'>
      <h3>{goal.goal}</h3> <GoalButton color ='red' text = 'delete' method = {method} data = {goal}/>
      {goal.date? <h5>{goal.date}</h5> : ''}
    </div>
  )
}

export default IndividualGoals
