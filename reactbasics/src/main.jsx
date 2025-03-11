import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import R from './App.jsx'
// import { DummyApp } from './App.jsx'
import R,{ DummyApp } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <R/>
    <DummyApp/>
  </StrictMode>,
)
