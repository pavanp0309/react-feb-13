import React from 'react'
import { useAppointment } from '../store/AppointmentContext'

const Stepper = () => {
    const {step}=useAppointment()
    let steps=["Details","Shedule","Review"]
  return (
  <div className='container'>
      <div className='d-flex justify-content-between mb-3'>
      {
        steps.map((stepsname,i)=>(
         <div key={i} className={` fs-3 fw-bold  rounded-pill px-3 ${(step==i+1?" bg-warning text-white":"bg-info text-white")}`}>{stepsname}</div>
        ))
      }
    </div>
  </div>
  )
}

export default Stepper
