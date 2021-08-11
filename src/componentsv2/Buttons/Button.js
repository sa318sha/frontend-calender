import React from 'react'

const Button = ({color, text, method}) => {
  return (
    <button style = {{backgroundColor: color}} className ='btn' onClick = {method}> {text} </button>
  )
}

export default Button
