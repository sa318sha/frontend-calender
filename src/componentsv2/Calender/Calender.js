import React from 'react'
import CalenderHeader from './CalenderHeader'
import CalenderBody from './CalenderBody'
import ArrowButtons from '../Buttons/ArrowButtons'
import UpComingGoals from './UpComingGoals'
import DaysOfTheWeek from './DaysOfTheWeek'
const Calender = ({months, currentMonth, method,goals, days,changeMonth,currentYear, deleteMethod}) => {

  
  return (
    <div>
      <CalenderHeader months = {months} month ={currentMonth} year ={currentYear}/>
      <div className='calender-container'>

        <ArrowButtons color ='black' text ='prev' changeMonth = {changeMonth}/>
        <div>
          <DaysOfTheWeek/>
          <CalenderBody months ={months} currentMonth={currentMonth}
          method ={method} goals ={goals} days={days} year = {currentYear}/>
          
        </div>
        
        

        <ArrowButtons color ='black' text ='next' changeMonth = {changeMonth}/>
        <UpComingGoals goals ={goals} months={months} deleteMethod={deleteMethod}/>
      </div>
      
    </div>
  )
}

export default Calender
