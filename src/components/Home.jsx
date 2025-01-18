import {useState} from 'react'
import Navbar from './Navbar'
import Lowerbar from './Lowerbar'
import Sidebar from './Sidebar'
import Landingpage from './Landingpage'

const Home = ({isAuthenticated,setisAuthenticated}) => {
    const [theme, setTheme] = useState(0)
    const [display, setdisplay] = useState(0)
    return (
        <>
            <Navbar theme={theme} setTheme={setTheme} display={display} setdisplay={setdisplay} isAuthenticated={isAuthenticated} setisAuthenticated={setisAuthenticated}/>
            <Lowerbar theme={theme} setTheme={setTheme} />
            <Sidebar theme={theme} setTheme={setTheme} display={display}/>
            <Landingpage theme={theme} setTheme={setTheme}/>
        </>
  )
}

export default Home