import React from 'react'
import { useState, useReducer,useEffect } from 'react'
import GoogleLogin from 'react-google-login'
import Login from './Login'
import SignUp from './SignUp'


const MainLogInMenu = ({errors,loginFunction,signUpFunction}) => {
  

  const[login, setLogin] = useState(true)
  
  const switchFunction = () =>{
    setLogin(!login)
  }



  return (
    <div>
      {login? <Login errors ={errors} loginFunction = {loginFunction} switchFunction={switchFunction} text ='Create Account'/>:
       <SignUp errors={errors} signUpFunction = {signUpFunction} switchFunction={switchFunction} text ='Log in'/>}
      
      {/* <input className='' type="submit" value="Create Account"/>
      <input className='' type="submit" value="Continue without Signing in"/> */}
    </div>
  )
}

export default MainLogInMenu
