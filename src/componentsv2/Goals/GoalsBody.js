import React from 'react'
import IndividualGoals from './IndividualGoals'
const GoalsBody = ({goals, method}) => {

  return (
    <>
      {goals.map( (goal) => (
        
        <IndividualGoals key = {goal.id} goal = {goal} method = {method}/> 
      ))

      }
    </>
  )
}

export default GoalsBody
