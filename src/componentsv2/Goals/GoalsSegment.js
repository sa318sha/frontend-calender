import React from 'react'
import GoalsHeader from './GoalsHeader'
import GoalsBody from './GoalsBody'
import AddGoals from './AddGoals'
import { useState } from 'react'
const GoalsSegment = ({goals,deleteGoal,submitMethod}) => {

  const [showGoals, setshowGoals] = useState(false)
  
  function headerClicked(e) {
    setshowGoals(!showGoals)
    
  }
  

  return (
    <div className = 'goals-container'>
      <GoalsHeader exitClicked = {headerClicked} edit={showGoals} />
      {showGoals? <AddGoals submitMethod ={submitMethod}/> : ''}
      <GoalsBody method = {deleteGoal} goals={goals}/>
    </div>
  )
}

export default GoalsSegment
