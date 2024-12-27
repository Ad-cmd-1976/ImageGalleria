import React from 'react'

const Mode = (props) => {
  return (
    <svg
      className="max-h-7 hover:cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="40"
      height="40"
      fill={props.theme ? "black" : "white"}
    >
      {props.theme ?
        <g className="dark-mode">
          <path d="M12 3a9 9 0 1 0 9 9 6.71 6.71 0 0 1-.36-2.12 5.87 5.87 0 0 1-5.63-5.76A6.71 6.71 0 0 1 12 3Z" />
        </g> : <g className="light-mode">
          <circle cx="12" cy="12" r="5" fillOpacity="1.0" />
          <line
            x1="12"
            y1="0.5"
            x2="12"
            y2="5"
            stroke="white"
            strokeWidth="1.5"
          />
          <line
            x1="12"
            y1="19"
            x2="12"
            y2="23.5"
            stroke="white"
            strokeWidth="1.5"
          />
          <line
            x1="0.5"
            y1="12"
            x2="5"
            y2="12"
            stroke="white"
            strokeWidth="1.5"
          />
          <line
            x1="19"
            y1="12"
            x2="23.5"
            y2="12"
            stroke="white"
            strokeWidth="1.5"
          />
          <line
            x1="3.5"
            y1="3.5"
            x2="6.5"
            y2="6.5"
            stroke="white"
            strokeWidth="1.5"
          />
          <line
            x1="17.5"
            y1="17.5"
            x2="20.5"
            y2="20.5"
            stroke="white"
            strokeWidth="1.5"
          />
          <line
            x1="3.5"
            y1="20.5"
            x2="6.5"
            y2="17.5"
            stroke="white"
            strokeWidth="1.5"
          />
          <line
            x1="17.5"
            y1="6.5"
            x2="20.5"
            y2="3.5"
            stroke="white"
            strokeWidth="1.5"
          />
        </g>
      }
    </svg>
  )
}

export default Mode
