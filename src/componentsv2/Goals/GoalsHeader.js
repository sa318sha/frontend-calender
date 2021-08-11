import React from 'react'
import Button from '../Buttons/Button'
const GoalsHeader = ({exitClicked,edit}) => {
  return (
    <div className = 'header'>
      <h3>Goals</h3>
      <Button color = {edit?'red': 'green'} text = {edit? 'Hide': 'Add'} method = {exitClicked}/>
    </div>
  )
}

export default GoalsHeader
