import React,{useState} from 'react'
import Navbar from './components/Navbar'
import Lowerbar from './components/Lowerbar'
import './App.css'

function App() {
  const [theme, setTheme] = useState(0)
  return (
    <>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Lowerbar theme={theme} setTheme={setTheme}/>
    </>
  )
}

export default App
