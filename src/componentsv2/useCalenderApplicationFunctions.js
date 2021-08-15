import { useState } from "react";
export default function useCalenderApplicationFunctions (event,userGoals) {

  
  const [showCalender, setShowCalender] = useState([true])
  
  const [activeDay, setActiveDay] = useState(event.getDate())

  const [activeMonth, setActiveMonth] = useState(event.getMonth())//this is the month that will change if a date is clicked that is not within the month
  const [displayMonth, setDisplayMonth] = useState(event.getMonth())//this is the month that will be displayed
  const [activeYear, setActiveYear] = useState(event.getFullYear())
  const [differenceBetweenFirstDayAndLastSunday, setDifferenceBetweenFirstDayAndLastSunday] = useState(0)
  
  //possible error when goals might read from a different year when on the edge of the year

  const [goals, setGoals] = useState(userGoals)

  console.log('goals in calender application functions', goals)
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

  const fetchTask = async () =>{
    const res = await fetch(`http://localhost:9000/calenderAPI`,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
    })
    const data = await res.json();
    return data
  }
    
  function toggleCalender(object) {
    
    

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

  async function deleteGoal(id) {
      const res = await fetch(`http://localhost:9000/calenderAPI/${id}`,{
        method: 'DELETE'
      })
      //console.log('the response is', res.msg)
      setGoals(goals.filter((goal => goal.id !== parseInt(id))))
    }


  async function submitForm(submittedObject) {

  const date = submittedObject.DateOFObject;
  const goal = submittedObject.text;
  const id = Math.floor(Math.random()*10000 +1);
  
    const res = await fetch(`http://localhost:9000/CalenderAPI`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({id, goal, date})
    })

    const data = await res.json()
    console.log(data)
    
    
    //const newGoal = { id, goal,date}
   
    setGoals([...goals,data])


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
      if(displayMonth -1  === -1){
        setDisplayMonth(11)
        setActiveYear(year => year-1)
      }else{
        setDisplayMonth(displayMonth-1)
      }
      let replacementVal =0
      if(displayMonth -1 === -1){
        replacementVal= 11
      }else{
        replacementVal = displayMonth-1
      }

      let x =0

      while((x + months[replacementVal].days) % 7 !== differenceBetweenFirstDayAndLastSunday){
 
        x++;
      }

      setDifferenceBetweenFirstDayAndLastSunday(x)
    }

  }


  return {showCalender, activeDay, 
    activeMonth, displayMonth, 
    activeYear,differenceBetweenFirstDayAndLastSunday,
    goals,months,
    toggleCalender,
    exitClicked,
    getSpecificDaysGoal,
    deleteGoal,
    AddingDate,
    toggleMonth,
  }
}


