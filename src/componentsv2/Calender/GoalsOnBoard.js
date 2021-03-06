import React from 'react'
import GoalButton from '../Goals/GoalButton'
const GoalsOnBoard = ({goal,days, deleteMethod,color,text}) => {
  return (
    <div className='seperate-goals'>
      {days? 
      <h5> There is {days} days left to do {goal.goal}</h5>:
      <h5> HURRY UP {goal.goal} IS DUE TODAY</h5>}
      <GoalButton color ={color} text ={text} method={deleteMethod} data={goal}/>
      
    </div>
  )
}

export default GoalsOnBoard
