import React from 'react'
import Button from '../Buttons/Button'
const DateHeader = ({DateOFObject, method}) => {
  return (
    <div className = 'header'>
      <h3>{DateOFObject}</h3>
      <Button color ='red' text = 'Exit' method = {method}/>
    </div>
  )
}

export default DateHeader
