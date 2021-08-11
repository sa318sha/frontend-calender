import React from 'react'


const ArrowButtons = ({color,text,changeMonth}) => {
  return (
    <button onClick={(e) => changeMonth(e.target.value)} value = {text} className= {`button ${text}`} style={{backgroundColor:color, color:'white'}}>{text}</button>
  )
}

export default ArrowButtons
