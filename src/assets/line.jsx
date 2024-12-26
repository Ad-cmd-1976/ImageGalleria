import React from 'react'

const Line = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="30" viewBox="0 0 2 50">
      <line x1="1" y1="0" x2="1" y2="50" stroke={props.theme? "gray":"white"} strokeWidth="2" />
    </svg>
  )
}

export default Line
