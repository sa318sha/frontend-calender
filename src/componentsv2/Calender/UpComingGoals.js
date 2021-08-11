import React from 'react'
import GoalsOnBoard from './GoalsOnBoard';
const UpComingGoals = ({goals,months,deleteMethod}) => {

const currentDay = new Date();
var month = currentDay.getMonth()+1;
var day = currentDay.getDate()
var year = currentDay.getFullYear()


var array = []
for(var i = 0; i < 8;i++){
  
  for(var x=0; x <goals.length; x++){
    if(goals[x].date === `${month}/${day}/${year}`){

      array.push(<GoalsOnBoard deleteMethod ={deleteMethod} key= {goals[x].id} goal = {goals[x]} days={i}/>)
    }
  }
  day++;
  if(months[month-1].days === day ){
    day = 1;
    month++;
  }
  if(month ===12){
    month = 1;
    year++;
  }

}



  return (
    <div className='upcoming-goals'>
      <h3>UpComing Goals: </h3>
      {array}
    </div>
  )
}

export default UpComingGoals
