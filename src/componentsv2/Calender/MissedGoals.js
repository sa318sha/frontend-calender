import React from 'react'
import MissedGoalsOnBoard from './MissedGoalsOnBoard';

const MissedGoals = ({goals,months,deleteMethod}) => {
  const currentDay = new Date();
  currentDay.setHours(0,0,0,0)
  let array =[];
  for(let i = 0; i < goals.length; i++){
    const goalDay = new Date(goals[i].date)
    if(goalDay < currentDay){
      let diff = currentDay.getTime() - goalDay.getTime()
      diff=diff/(1000*60*60*24)
      array.push(<MissedGoalsOnBoard color = 'red' text ='Finish' deleteMethod ={deleteMethod} key= {goals[i].id} goal = {goals[i]} days={diff}/>)
      
    }

  }
  return (
    <div className='missed-goals'>
      <h3>Missed Goals: </h3>
      {array}
    </div>
  )


}

export default MissedGoals
