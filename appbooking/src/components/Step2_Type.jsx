import React from 'react'
import { useAppointment } from '../store/AppointmentContext'

const  ScheduleForm = () => {
    const {appointment,prevStep,updateFileds,nextStep}=useAppointment()

    const handleNextstep=()=>{
        if(appointment.date&&appointment.time)nextStep()
        else alert("select the date and time")
    }
  return (
    <div className='container'>
      {/* date */}
      <input 
       className='form-control'
       type="date" 
       value={appointment.date}
       onChange={(e)=>updateFileds("date",e.target.value)} // it updates the fields the user typed values [field]:e.target.value 
      />
      {/* time */}
      <input 
       className='form-control'
       type="time" 
       value={appointment.time}
       onChange={(e)=>updateFileds("time",e.target.value)} // it updates the fields the user typed values [field]:e.target.value 
      />
 {/*  previous and next buttons */}
      <div className='my-3 border border-info d-flex justify-content-between'>
        {/* back */}
      <button className='btn btn-success' onClick={prevStep}>Back</button>
        {/* next */}
      <button className='btn btn-success' onClick={handleNextstep}>Next</button>
      </div>
    </div>
  )
}

export default ScheduleForm
