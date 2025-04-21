import React from 'react'
import ContactList from './pages/ContactList'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Services from './pages/Services'
import PageNotFound from './pages/PageNotFound'
import ContactDetails from './pages/ContactDetails'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
         <Route path='/login' element={<Login/>}/>
         <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
         <Route path='/about' element={<ProtectedRoute><AboutUs/></ProtectedRoute>}/>
         <Route path='/contact' element={<ProtectedRoute><Contact/></ProtectedRoute>}/>
         <Route path='/users' element={<ProtectedRoute><ContactList/></ProtectedRoute>}/>
         <Route path='/users/:id' element={<ProtectedRoute><ContactDetails/></ProtectedRoute>}/>
         <Route path='/services' element={<ProtectedRoute><Services/></ProtectedRoute>}/>
         <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </>
  )
}

export default App
