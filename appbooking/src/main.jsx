
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import { AppointmentProvider } from './store/AppointmentContext.jsx'

createRoot(document.getElementById('root')).render(
  <AppointmentProvider>
    
    <App />
</AppointmentProvider>
)
