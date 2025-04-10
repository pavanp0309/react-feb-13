import React from 'react'
import { useAppointment } from '../store/AppointmentContext'

const ReviewDetails= () => {
    const {appointment,prevStep,loading}=useAppointment()
  return (
    <div className='container'>
       <h1>Review your appointment Details</h1>
       <ul className='list-group'>
         <li className='list-group-item'>Name:{appointment.name}</li>
         <li className='list-group-item'>Email:{appointment.email}</li>
         <li className='list-group-item'>Mobile:{appointment.mobile}</li>
         <li className='list-group-item'>Date:{appointment.date}</li>
         <li className='list-group-item'>Time:{appointment.time}</li>
         <li className='list-group-item'>@pavankumar</li>
       </ul>

{/* prev & submission button */}
    <div className='my-3 border border-info d-flex justify-content-between'>
        {/* back */}
      <button className='btn btn-success' onClick={prevStep}>Back</button>
        {/* next */}
      <button className='btn btn-success' onClick={handleNextstep}>
        {
            loading?(<>
             <span class="spinner-border text-success" role="status">Loading...</span>
            </>):(<>
              <span>confirm booking</span>
            </>)
        }
      </button>
      </div>
    {/* prev & submission button end */}

    </div>
  )
}

export default ReviewDetails
