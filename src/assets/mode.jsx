import React from 'react'

const Mode = (props) => {
  return (
    <svg className='max-h-7 hover:cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill={props.theme? "black":"white"}>
      <g className="light-mode">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="4" stroke={props.theme? "black":"white"} strokeWidth="2" />
        <line x1="12" y1="20" x2="12" y2="23" stroke={props.theme? "black":"white"} strokeWidth="2" />
        <line x1="1" y1="12" x2="4" y2="12" stroke={props.theme? "black":"white"} strokeWidth="2" />
        <line x1="20" y1="12" x2="23" y2="12" stroke={props.theme? "black":"white"} strokeWidth="2" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke={props.theme? "black":"white"} strokeWidth="2" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke={props.theme? "black":"white"} strokeWidth="2" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke={props.theme? "black":"white"} strokeWidth="2" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke={props.theme? "black":"white"} strokeWidth="2" />
      </g>
      <g className="dark-mode">
        <path d="M12 3a9 9 0 1 0 9 9 6.71 6.71 0 0 1-.36-2.12 5.87 5.87 0 0 1-5.63-5.76A6.71 6.71 0 0 1 12 3Z" />
      </g>
    </svg>
  )
}

export default Mode
