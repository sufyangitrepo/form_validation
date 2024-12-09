import { useState } from 'react'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyRouter from './routes'
import Home from './pages/home/Home'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
