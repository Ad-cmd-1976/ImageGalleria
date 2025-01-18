import React,{useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/login'
import Signup from './components/Signup'
import RefreshHandler from './RefreshHandler'
import './App.css'

function App() {
  const [isAuthenticated, setisAuthenticated]=useState(false);
  return (
    <>
      <RefreshHandler setisAuthenticated={setisAuthenticated}/>
      <Routes>
        <Route path='/home' element={<Home isAuthenticated={isAuthenticated} setisAuthenticated={setisAuthenticated}/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </>
  )
}

export default App
