import React from 'react'

const Login = () => {
  return (
    <form className="log-form">
      <div className='form-control'>
        <label> Enter Email</label>
        <input type='text' placeholder='johndoe123@gmail.com'/>
      </div>
      <div className='form-control'>
        <label> Enter Password</label>
        <input type='text' placeholder='include a symbol and number'/>
      </div>
      <div className='form-control-check'>
        <label> Remember Me</label>
        <input type='checkbox'/>
      </div>


      <input className='btn btn-block' type="submit" value="next"/>
    </form>
  )
}

export default Login
