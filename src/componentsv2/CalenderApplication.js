

import '../App.css';
import Dates from './DateUI/Dates'
import Calender from './Calender/Calender'
import * as Context from './contextHooks/ContextFile';
import useCalenderApplicationFunctions from './useCalenderApplicationFunctions';
import { useEffect, useState } from 'react';

function CalenderApplication({index,userGoals,name,signOutFunction}) {
  const [id, setId] = useState(index)
  const event = new Date();
  const {showCalender, activeDay, 
    activeMonth, displayMonth, 
    activeYear,differenceBetweenFirstDayAndLastSunday,
    goals,months,
    toggleCalender,
    exitClicked,
    getSpecificDaysGoal,
    deleteGoal,
    AddingDate,
    toggleMonth,
  } = useCalenderApplicationFunctions(event,userGoals,id)
  
  const fetchTask = async () =>{
    const res = await fetch(`http://localhost:9000/users`,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
    })
    const data = await res.json();

    return data
  }

  useEffect (async () =>{
    const data = await fetchTask()

    if(index === data.length){
      const res = await fetch(`http://localhost:9000/users`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({name})
      })
      const dataFromUser = await res.json();

      setId(dataFromUser[0].id)

      
    }else{
      setId(index)
    }

  },[])
  return (
    
    <div className ='background'>
      
      <Context.Months.Provider value ={months}>

        <Context.ActiveDate.Provider value ={{activeDay,displayMonth,activeYear}}>

          <Context.CurrentDate.Provider value ={event}>
            {showCalender?
            <Calender
            name={name}
            signOutFunction ={signOutFunction} 
            months={months} 
            currentMonth = {displayMonth} 
            method = {toggleCalender} 
            goals ={goals}
            days = {differenceBetweenFirstDayAndLastSunday}
            changeMonth ={toggleMonth}
            currentYear={activeYear}
            deleteMethod={deleteGoal}/>: 
            <Dates 
            day ={activeDay} 
            month = {months[activeMonth].month} 
            year = {activeYear} 
            method = {exitClicked} 
            goals = {getSpecificDaysGoal()}
            deleteGoal ={ deleteGoal} 
            submitMethod = {AddingDate}/>}
          
          </Context.CurrentDate.Provider>
          
        </Context.ActiveDate.Provider>

      </Context.Months.Provider>
      
      
    </div>
      /* <Date Date= 'Hello' goals = {goals} deleteGoal = {deleteGoal} reminders = {reminders}/> */
    
    // <div className ='container'>
    //   {/* <LoginMenu/> */}
    // </div>
  );
}

export default CalenderApplication;
