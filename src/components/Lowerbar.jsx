import React, { useState } from 'react'
import Line from '../assets/line'

const Lowerbar = (props) => {
  const [scroll, setScroll] = useState(0);
  return (
    <div className={`${props.theme ? "text-gray-400" : "bg-black text-white"} flex p-3 gap-4 border-2 border-red-600`}>
      <div className='flex gap-5'>
        <div><a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'}`}>Photos</a></div>
        <div><a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'}`}>IIIlustrations</a></div>
        <div><a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'}`}>Freepixz+</a></div>
      </div>

      <div>
        <Line theme={props.theme} />
      </div>

      <div className="flex gap-9 justify-between overflow-x-auto scrollbar-hide">
        <a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'}`}>Wallpapers</a>
        <a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'}`}>Nature</a>
        <a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'} min-w-fit`}>3D Renders</a>
        <a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'}`}>Film</a>
        <a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'}`}>Experimental</a>
        <a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'}`}>Travel</a>
        <a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'}`}>Fashion</a>
        <a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'}`}>Beauty</a>
        <a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'}`}>Archival</a>
        <a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'}`}>Animals</a>
        <a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'}`}>Spirituality</a>
        <a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'}`}>Sports</a>
        <a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'} min-w-fit`}>AI Generated</a>
      </div>
    </div>
  )
}

export default Lowerbar