import React,{useState} from 'react'
import logo from '../assets/logo.svg'
import Line from '../assets/line'
import Mode from '../assets/mode'
import Ham from '../assets/hamburger.jsx'
import Search from '../assets/Search.jsx'

const Navbar = (props) => {
  const [name, setname] = useState("")
  const handleChange=(e)=>{
    setname(e.target.value)
  }
  const changeTheme=(theme)=>{
    props.setTheme(!theme)
    console.log(theme);
  }
  return (
    <div className={`${props.theme? 'text-gray-400' :'bg-black text-white' } flex justify-between gap-2 p-4 w-screen`}>
        <div className='flex gap-7'>
          <div className=''>
            <Ham theme={props.theme}/>
          </div>
          <div>
            <img className='max-h-8' src={logo} alt="Error" />
          </div>
          <div className='flex flex-row bg-white border-2 rounded-md'>
            <Search theme={props.theme}/>
            <input onChange={handleChange} className='w-[50vw] p-1 rounded-md text-gray-400 outline-none' value={name} type="search" placeholder=' Search Photos and Wallpapers'/>
          </div>
        </div>

        <div className='flex gap-8'>
            <div onClick={()=>changeTheme(props.theme)}>
              <Mode theme={props.theme}/>
            </div>

            <div><a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme? 'decoration-gray-400': 'decoration-white'}`}>Explore</a></div>

            <div><a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme? 'decoration-gray-400': 'decoration-white'}`}>Advertise</a></div>

            <div><a href="#" className={`hover:underline-offset-8 hover:underline ${props.theme? 'decoration-gray-400': 'decoration-white'}`}>Get FreePixz+</a></div>

            <div>
              <Line theme={props.theme}/>
            </div>
          <div>
            <button className='bg-blue-700 px-3 rounded-xl py-1 hover:bg-blue-600'>Login</button>
          </div>
        </div>
  </div>
  )
}

export default Navbar;