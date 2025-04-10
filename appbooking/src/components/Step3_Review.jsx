import React, { useState } from 'react'
import { useAppointment } from '../store/AppointmentContext'

const ReviewDetails= () => {
    let {appointment,prevStep,loading,submitAppointment}=useAppointment()
    let [toast,setToast]=useState(false)
    let handleNextstep=()=>{
      submitAppointment(()=>setToast(true))
    }
  return (
    <div className='container border border-white p-5 rounded shadow'>
       <h1 className='my-4 text-danger fw-bold text-center'>Review your appointment Details</h1>
       <ul className='list-group fw-bold'>
         <li className='list-group-item'>Name:{appointment.name}</li>
         <li className='list-group-item my-2'>Email:{appointment.email}</li>
         <li className='list-group-item'>Mobile:{appointment.mobile}</li>
         <li className='list-group-item my-2'>Date:{appointment.date}</li>
         <li className='list-group-item'>Time:{appointment.time}</li>
         
       </ul>

{/* prev & submission button */}
    <div className='my-3  d-flex justify-content-between'>
        {/* back */}
      <button className='btn btn-success' onClick={prevStep}>Back</button>
        {/* next */}
      <button className='btn btn-success' onClick={handleNextstep}>
        {
            loading?(<>
             <span class="spinner-border text-success" role="status"></span>
            </>):(<>
              confirm booking
            </>)
        }
      </button>
      </div>
    {/* prev & submission button end */}



    {
      toast && (
        <>
          <div className='toast-container bg-primary position-fixed bottom-0 end-0'>
            <div className='toast show'>
            <div class="toast-body">
                successfull submitted 
            </div>
            </div>
          </div>
        </>
      )
    }

    </div>
  )
}

export default ReviewDetails
