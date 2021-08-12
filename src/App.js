

import './App.css';
import Dates from './componentsv2/DateUI/Dates'
import Calender from './componentsv2/Calender/Calender';
import { useState, useEffect, useMemo } from 'react';
import * as Context from './componentsv2/contextHooks/ContextFile';

function App() {

  const event = new Date();
  const [showCalender, setShowCalender] = useState([true])
  
  const [activeDay, setActiveDay] = useState(event.getDate())

  const [activeMonth, setActiveMonth] = useState(event.getMonth())//this is the month that will change if a date is clicked that is not within the month
  const [displayMonth, setDisplayMonth] = useState(event.getMonth())//this is the month that will be displayed
  const [activeYear, setActiveYear] = useState(event.getFullYear())
  const [differenceBetweenFirstDayAndLastSunday, setDifferenceBetweenFirstDayAndLastSunday] = useState(0)
  //possible error when goals might read from a different year when on the edge of the year
  var activeDate = {activeDay,displayMonth,activeYear}
  var currentDate = {event}
  
  const [goals, setGoals] = useState([
    {
      id:1,
      goal: "have this done by friday",
      date: '8/8/2021'
    },
    {
      id:2,
      goal: "poo eyes",
      date: '8/9/2021'
    },
    {
      id:4,
      goal: "hello",
      date: '8/8/2021'
    },
    {
      id:3,
      goal: "test 4",
      date: '9/2/2021'
    },
    {
      id:5,
      goal: "test 8",
      date: '8/12/2021'
    }
    ]);
  
  const months = [{
    month: 'January',
    days: 31

  },
  {
    month: 'February',
    days: 28,
    leapYear: 29
  },
  {
    month: 'March',
    days: 31,

  },
  {
    month: 'April',
    days: 30,
  },
  {
    month: 'May',
    days: 31,
  },
  {
    month: 'June',
    days: 30,
  },
  {
    month: 'July',
    days: 31,
  },
  {
    month: 'August',
    days: 31,
  },
  {
    month: 'September',
    days: 30,
  },
  {
    month: 'October',
    days: 31,
  },
  {
    month: 'November',
    days: 30,
  },
  {
    month: 'December',
    days: 31,
  }]
  document.val = 'hello'
  useEffect( ()=> {
    console.log('mounted')

    return ()=>{
      console.log('unmounted')
    }
  },[activeMonth]);
  function toggleCalender(object) {
    
    
    console.log(object.year)
    setActiveDay(object.day)
    setActiveMonth(object.month)
    setActiveYear(object.year)
    setShowCalender(!showCalender)
  }

  function exitClicked() {
    setShowCalender(!showCalender)
  }

  function getSpecificDaysGoal() {

    var filteredGoals = []

    for(let i =0; i < goals.length; i++){
      if(goals[i].date === `${activeMonth+1}/${activeDay}/${activeYear}`){
        
        filteredGoals.push(goals[i])
      }
    }

    return filteredGoals
 
  }

  function deleteGoal(id) {

      setGoals(goals.filter((goal => goal.id !== parseInt(id))))
    }
  function submitForm(submittedObject) {
    const id = Math.floor(Math.random()*10000 +1);
    const date = submittedObject.DateOFObject;
    const goal = submittedObject.text;
    const newGoal = { id, goal,date}
   
    setGoals([...goals,newGoal])


  }
  const AddingDate = (text) =>{

    const DateOFObject = `${activeMonth+1}/${activeDay}/${activeYear}`;

    submitForm({DateOFObject,text})
  
  }
  const toggleMonth = (value) => {

    if(value === 'next'){
      
      setDifferenceBetweenFirstDayAndLastSunday((months[displayMonth ].days + differenceBetweenFirstDayAndLastSunday)%7)
      if(displayMonth+1 ===12){
        setDisplayMonth(0)
        setActiveYear(activeYear+1)
      }else{
        setDisplayMonth(displayMonth+1)
      }
    }
    
    if(value === 'prev'){
      if(displayMonth-1 === -1){
        setDisplayMonth(11)
        setDisplayMonth(activeYear-1)
      }else{
        setDisplayMonth(displayMonth-1)
      }
      let replacementVal =0
      if(displayMonth -1 === -1){
        replacementVal= 11
      }else{
        replacementVal = displayMonth-1
      }
      console.log(replacementVal)
      let x =0
      console.log('this should be the new month',displayMonth)
      console.log('this should be the next month', displayMonth-1)
      while((x + months[replacementVal].days) % 7 !== differenceBetweenFirstDayAndLastSunday){
 
        x++;
      }

      setDifferenceBetweenFirstDayAndLastSunday(x)
    }

  }
  return (
    
    <div className ='background'>
      <Context.Months.Provider value ={months}>

        <Context.ActiveDate.Provider value ={activeDate}>

          <Context.CurrentDate.Provider value ={event}>
            {showCalender?
            <Calender 
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

export default App;
