import React from 'react'
import NewsList from "./components/NewsList"
import { Routes,Route } from 'react-router-dom'
import Home from "./pages/Home"
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import NewsDetails from './pages/NewsDetails'
import Stopwatch from './pages/Stopwatch'

const App = () => {
  return (
    <div>
     

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/stopwatch' element={<Stopwatch/>}/>
        <Route path='/news' element={<NewsList/>}/>
        <Route path='news/:newsId' element={<NewsDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
