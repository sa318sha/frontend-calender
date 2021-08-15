import React, {useState} from 'react'

const SignUp = ({errors,signUpFunction,switchFunction,text}) => {
  const [signUpEmail, setSignUpEmail] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
  
    if(!signUpEmail){
      alert('Please Enter A Goal Before Submitting')
      return
    }
  
    signUpFunction(e,signUpEmail)
    setSignUpEmail('')

  }

  return (
    <div>
    
    <form className="login-container" onSubmit={onSubmit}>
      <div> Sign Up </div>
      <div className='form-control'>
        <label> Enter Email</label>
        <input type='text' value ={signUpEmail} onChange={(e)=> setSignUpEmail(e.target.value)} placeholder='johndoe123@gmail.com'/>
      </div>
      {errors.NameTaken?<div>{errors.NameTaken}</div>: ''}
      


      <input className='btn btn-block' type="submit" value="next"/>
      <button className = 'btn' onClick={switchFunction}> {text}</button>

    </form>
    </div>
  )
}

export default SignUp
