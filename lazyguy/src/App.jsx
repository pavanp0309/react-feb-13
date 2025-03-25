import React, { Suspense } from 'react'
// import Home from './pages/Home'
// import Contact from './pages/Contact'
// import Services from './pages/Services'
// import About from './pages/About'

import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
// lazy load the component required for loading the app 
const Home=React.lazy(()=>import('./pages/Home'))
const About=React.lazy(()=>import('./pages/About'))
const Contact=React.lazy(()=>import('./pages/Contact'))
const Services=React.lazy(()=>import('./pages/Services'))
const Products=React.lazy(()=>import('./pages/Products'))


const App = () => {
  return (
    <>
    <Navbar/>
     <Suspense fallback={<h1>loading....</h1>}>
     <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/products'  element={<Products/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/contact' element={<Contact/>}/>
        <Route  path='/services' element={<Services/>}/>
      </Routes>
     </Suspense>
    </>
  )
}

export default App
