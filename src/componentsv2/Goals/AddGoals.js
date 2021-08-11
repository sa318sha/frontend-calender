import React from 'react'
import { useState } from 'react'


const AddGoals = ({submitMethod}) => {

  const [text, setText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
  
    if(!text){
      alert('Please Enter A Goal Before Submitting')
    }
  
    submitMethod(text)
    setText('')

  }
  
  
  return (
    <form className="log-form" onSubmit={onSubmit}>
      <div className='form-control'>
        <label> Enter Goal</label>
        <input type='text' placeholder='poo eyes' value = {text} onChange={(e) => setText(e.target.value)}/>
      </div>
      {/* <div className='form-control'>
        <label> Enter Date</label>
        <input type='date' placeholder='Date' min =202/>
      </div> */}
      <input className='btn btn-block' type="submit" value="Submit"/>
    </form>
  )
}

export default AddGoals
