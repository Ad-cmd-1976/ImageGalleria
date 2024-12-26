import React from 'react'

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
    <div className='bg-black text-white flex justify-between gap-2'>
        <div>Hamburger</div>
        <div>Search</div>
        <div>Login</div>
    </div>
  )
}

export default Navbar;