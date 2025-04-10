import React from 'react'
import { useAppointment } from '../store/AppointmentContext'
const DetailsForm = () => {
    const {appointment,updateFileds, nextStep}=useAppointment()

    // function for handling the Next step 
    const handleNextstep=()=>{
        if(appointment.name&&appointment.email&&appointment.mobile)nextStep()
        else alert("please fill all the Fileds")
    }

  return (
    <div className='container border border-white p-5 rounded shadow'>
        {/* name filed */}
      <input 
       className='form-control p-3  '
       type="text"
       placeholder='enter ur fullname' 
       value={appointment.name}
       onChange={(e)=>updateFileds("name",e.target.value)} // it updates the fields the user typed values [field]:e.target.value 
      />
      {/* email Filed */}
      <input 
       className='form-control my-3 p-3'
       type="email"
       placeholder='enter ur email' 
       value={appointment.email}
       onChange={(e)=>updateFileds("email",e.target.value)}
      />
     <input 
       className='form-control mb-3 p-3'
       type="tel"
       maxLength={10}
       placeholder='enter ur Mobile' 
       value={appointment.mobile}
       onChange={(e)=>updateFileds("mobile",e.target.value)}
      />
      {/* button for Next */}
      <button className='btn btn-success' onClick={handleNextstep}>Next</button>
    </div>
  )
}

export default DetailsForm
