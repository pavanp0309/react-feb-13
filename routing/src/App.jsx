import React from 'react'
// step:2 import all the pages that u want render(display)
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'
import Navbar from './components/Navbar'
// step3:import Routes and Route components from react-router library to create the urls 
import { Routes,Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      {/* error handling */}
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
