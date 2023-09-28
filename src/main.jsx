import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About/>}/>
          </Route>      
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
