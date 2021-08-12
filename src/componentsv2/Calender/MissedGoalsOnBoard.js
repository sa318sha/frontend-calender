import React from 'react'
import GoalButton from '../Goals/GoalButton'
const MissedGoalsOnBoard = ({goal,days, deleteMethod,color,text}) => {
  return (
    <div className='seperate-goals'>
      {days? 
      <h5> {goal.goal} is late by {days} days</h5>:
      <h5> HURRY UP you still have time to fishish {goal.goal}</h5>}
      <GoalButton color ={color} text ={text} method={deleteMethod} data={goal}/>
    </div>
  )
}

export default MissedGoalsOnBoard
