import React from 'react'
import Stepper from './components/Stepper'
import FormSteps from './components/FormSteps'

const App = () => {
  return (
    <div>
      <h1 className='my-3 text-center text-uppercase text-danger'>APpoint Booking Form</h1>
      <Stepper/>
      <FormSteps/>
    </div>
  )
}

export default App
