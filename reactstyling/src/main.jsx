import { createRoot } from 'react-dom/client'
import App from "./App"
import Services from './components/Services'
import "./index.css"

{/* all elements must self closed & it should conatain single parent */}
createRoot(document.getElementById('root')).render(
  <>
   <App/> 
   <Services/>
  </>
)
