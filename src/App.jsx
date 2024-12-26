import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [theme, setTheme] = useState(0)
  return (
    <>
      <Navbar theme={theme} setTheme={setTheme}/>
    </>
  )
}

export default App
