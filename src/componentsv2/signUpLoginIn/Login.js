import React from 'react'
import GoogleLogin from 'react-google-login'
import { useState } from 'react'
const Login = ({errors,loginFunction,switchFunction,text}) => {

  const [email, setEmail] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
  
    if(!email){
      alert('Please Enter A Goal Before Submitting')
      return
    }
  
    loginFunction(e,email)
    setEmail('')

  }

  return (
  
    <form className="login-container" onSubmit={onSubmit}>
      <div> Login </div>
      <div className='form-control'>
        <label> Enter Email</label>
        <input type='text' value ={email} onChange={(e)=> setEmail(e.target.value)} placeholder='johndoe123@gmail.com'/>
      </div>
      {errors.notValidName?<div>{errors.notValidName}</div>: ''}
      {/* <div className='form-control-check'>
        <label> Remember Me</label>
        <input type='checkbox'/>
      </div> */}


      <input className='btn btn-block' type="submit" value="next"/>

      <button className = 'btn' onClick={switchFunction}> {text}</button>
    </form>
  )
}

export default Login
