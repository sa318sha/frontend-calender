import React from 'react'

const GoalButton =({color, text, method, data}) => {
  return (
    <button style = {{backgroundColor: color}} className ='btn' onClick = {() => method(data.id)}> {text} </button>
  )
}

export default GoalButton
