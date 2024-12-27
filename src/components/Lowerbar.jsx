import React, { useState } from 'react'
import Line from '../assets/line'

const Lowerbar = (props) => {
  const [scroll, setScroll] = useState(0);
  return (
    <div className={`${props.theme ? "text-gray-400" : "bg-black text-white"} flex p-3 gap-4`}>
      <div className='flex gap-5'>
        <div><a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'}`}>Photos</a></div>
        <div><a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'}`}>IIIlustrations</a></div>
        <div><a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'}`}>Freepixz+</a></div>
      </div>

      <div>
        <Line theme={props.theme} />
      </div>

      <div className="relative w-full overflow-hidden">
        <button
          onClick={() => {
            const container = document.getElementById('scrollable-container');
            container.scrollBy({ left: -100, behavior: 'smooth' });
          }}
          className={`absolute left-0 top-0 bottom-0 px-2 bg-gradient-to-r from-gray-800 to-transparent text-white`}
        >
          &lt;
        </button>

        <div id="scrollable-container" className="flex gap-5 overflow-x-auto scrollbar-hide whitespace-nowrap">
            <a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'}`}>Wallpapers</a>
            <a href="#" className={`hover:underline-offset-8 hover:underline z-50 ${props.theme ? 'decoration-gray-400' : 'decoration-white'}`}>Nature</a>
            <a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'}`}>3D Renders</a>
            <a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'}`}>Film</a>
            <a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'}`}>Experimental</a>
            <a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'}`}>Travel</a>
            <a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'}`}>Fashion</a>
            <a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'}`}>Beauty</a>
            <a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'}`}>Archival</a>
            <a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'}`}>Animals</a>
            <a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'}`}>Spirituality</a> 
            <a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'}`}>Sports</a> 
            <a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'}`}>AI Generated</a> 
            <a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'}`}>Architecture & Interiors</a> 
            <a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'}`}>Food & Drinks</a> 
            <a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme ? 'decoration-gray-400' : 'decoration-white'}`}>Animations</a>  
        </div>

        <button
          onClick={() => {
            const container = document.getElementById('scrollable-container');
            container.scrollBy({ left: 100, behavior: 'smooth' });
          }}
          className={`absolute right-0 top-0 bottom-0 px-2 bg-gradient-to-l from-gray-800 to-transparent text-white`}
        >
          &gt;
        </button>
      </div>

    </div>
  )
}

export default Lowerbar