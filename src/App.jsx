import React from 'react'
import './app.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyNav from './componetns/MyNav'
import Home from './componetns/Home'
const App = () => {
  return (
    <div className='app'>
        <BrowserRouter>
        <MyNav/>
        <Routes>
            <Route element={<Home/>} path='/'/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App