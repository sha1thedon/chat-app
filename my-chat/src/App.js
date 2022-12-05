import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import React from 'react'
import Login from './views/Login'
import HomePage from './views/HomePage'

function App (){
  return(
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path = '/' element = {<Login/>}/>
        <Route path = '/homepage' element = {<HomePage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
