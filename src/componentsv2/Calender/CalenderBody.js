import React from 'react'
import Day from '../days/Day'
const CalenderBody = ({months, currentMonth,method,goals,days, year}) => {


  var daysOfMonth =[]

  for(let i = 0; i < days; i++){

    daysOfMonth.push(<Day key = {i} className ='grey-day' 
    day = {((currentMonth-1) >= 0)? (months[currentMonth-1].days)-days+i+1: (months[11].days-days+i+1)} 
    month ={((currentMonth-1) >= 0)? (currentMonth-1): 11}
    year ={((currentMonth-1) >= 0)? (year): year-1}
    method ={method} 
    goal = {goals.filter(goal => (
      goal.date === ((currentMonth-1)>=0 ?
      (`${currentMonth}/${(months[currentMonth-1].days)-days+i+1}/${year}`):
      (`12/${months[11].days-days+i+1}/${year-1}}`))))}

    />)
    
  
  }
  for(let i = 0; i < months[currentMonth].days; i++){

    daysOfMonth.push(<Day key = {i+days}
    className ='day' 
    day = {i+1} 
    month ={currentMonth}
    year ={year}
    method ={method} 
    
    goal ={goals.filter((goal) => (
      goal.date === `${currentMonth+1}/${i +1}/${year}`
      ))}

    />);

  }
  let number = 7-((months[currentMonth].days + days) % 7)
  if(number ===7 ){
    number =0
  }

  for(let i =0; i < number; i++ ){

    daysOfMonth.push(<Day key ={i+ months[currentMonth].days +days} 
    className='grey-day'
    day = {i+1} 
    month ={((currentMonth+1) <= 11)? (currentMonth+1): 0}
    year = {((currentMonth+1) <= 11)? (year): year+1}
    method ={method} 
    
    goal ={goals.filter((goal) => (
      goal.date === `${currentMonth+2}/${i +1}/${year}`
    ))}

    />)
    
  }

  return <div className='grid-container'> {daysOfMonth} </div>;
  
}

export default CalenderBody
