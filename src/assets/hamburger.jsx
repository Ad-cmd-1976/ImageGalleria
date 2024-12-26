import React from 'react'

const Hamburger = (props) => {
    return (
        <svg className='max-h-7 hover:cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#fffff" fill="none">
            <path d="M4 5L20 5" stroke={props.theme? 'gray':'white'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12L20 12" stroke={props.theme? 'gray':'white'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 19L20 19" stroke={props.theme? 'gray':'white'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default Hamburger