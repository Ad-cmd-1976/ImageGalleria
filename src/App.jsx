import React,{useState} from 'react'
import Navbar from './components/Navbar'
import Lowerbar from './components/Lowerbar'
import Sidebar from './components/Sidebar'
import Landingpage from './components/Landingpage'
import './App.css'

function App() {
  const [theme, setTheme] = useState(0)
  const [display, setdisplay] = useState(0)
  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} display={display} setdisplay={setdisplay}/>
      <Lowerbar theme={theme} setTheme={setTheme} />
      <Sidebar theme={theme} setTheme={setTheme} display={display}/>
      <Landingpage theme={theme} setTheme={setTheme}/>
    </>
  )
}

export default App
