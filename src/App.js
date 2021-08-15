
import CalenderApplication from './componentsv2/CalenderApplication'
import { useEffect, useState, useReducer } from 'react'
import MainLogInMenu from './componentsv2/signUpLoginIn/MainLogInMenu'
const App = () => {
  
  const errors = {}
  const[users, setUsers] = useState({})
  const[goalsFromDatabase,setGoalsFromDatabase] =useState([])
  function reducer(state,action){
    switch(action.type){
      case 'login':  
        for(let i =0; i < users.length; i++){
          if(users[i].nameValue === action.name){

            return {
              name: action.name,
              goals: goalsFromDatabase.filter((goal)=> goal.user_id === users[i].id ),
              index: users[i].id
            }
          }
        }
        errors.notValidName = 'Incorrect Username try hello world for pregenerated template'
        return{
          name: '',
          goals: [],
          index: null
        };
      case 'sign-up':
        for(let i =0; i < users.length; i++){
          if(users[i].nameValue === action.name){
            errors.NameTaken ='Name is Taken'
            return{
              name: '',
              goals: [],
              index: null
            };
          }
        }
        return {
          name: action.name,
          goals: [],
          index: users.length
        }
      case 'sign-out':
        return{
          name: '',
          goals: [],
          index: null
        };
      default:
        return state
    }
  }

  const[{name, goals,index}, dispatch] = useReducer(reducer, {name:'', goals: [], index: null})

  const loginFunction = (e,name) =>{
    e.preventDefault()
    dispatch({type: 'login', name})
    
  }
  const signUpFunction = (e,name) =>{
    
    e.preventDefault()

    dispatch({type: 'sign-up', name})
    
  }
  const signOutFunction = () =>{

    dispatch({type: 'sign-out'})
  }

  
  useEffect(() => {
    const getUsers = async() =>{
      const getUsersFromDatabase = await fetchTask(`http://localhost:9000/users`)

      setUsers(getUsersFromDatabase)

      
    }
    getUsers()
  }, [index])
  useEffect(() => {
    const getGoals = async() =>{
      const getGoalsFromDatabase = await fetchTask(`http://localhost:9000/CalenderAPI`)

      setGoalsFromDatabase(getGoalsFromDatabase)

      
    }
    getGoals()
  }, [index])

  
const fetchTask = async (customURL) =>{
  const res = await fetch(customURL,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
  })
  const data = await res.json();
  return data

}

  
  return (
    
    <div>
      {name?
      <CalenderApplication
      index ={index}
      name ={name} 
      signOutFunction={signOutFunction}
      userGoals={goals}
      />:
      <MainLogInMenu
      errors ={errors}
      loginFunction ={loginFunction}
      signUpFunction = {signUpFunction}/>}
      
      {/*  */}
    </div>
  )
}

export default App
