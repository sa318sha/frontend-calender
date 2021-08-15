import React from 'react'
import CalenderHeader from './CalenderHeader'
import CalenderBody from './CalenderBody'
import ArrowButtons from '../Buttons/ArrowButtons'
import DaysOfTheWeek from './DaysOfTheWeek'
import GoalsBlockInCalender from './GoalsBlockInCalender'
const Calender = ({name,signOutFunction, months, currentMonth, method,goals, days,changeMonth,currentYear, deleteMethod}) => {

  
  return (
    <div>
      <CalenderHeader name ={name} signOutFunction ={signOutFunction}/>
      <div className='calender-container'>

        <ArrowButtons color ='black' text ='prev' changeMonth = {changeMonth}/>
        <div>
          <DaysOfTheWeek/>
          <CalenderBody months ={months} currentMonth={currentMonth}
          method ={method} goals ={goals} days={days} year = {currentYear}/>
          
        </div>
        
        

        <ArrowButtons color ='black' text ='next' changeMonth = {changeMonth}/>
        <GoalsBlockInCalender goals ={goals} months={months} deleteMethod={deleteMethod}/>
        
      </div>
      
    </div>
  )
}

export default Calender
