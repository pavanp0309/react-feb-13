import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../features/auth/userSlice'

const Login = () => {
  let dispatch=useDispatch()
  let navigate=useNavigate()

  // function to handle Login 
  const handleLogin=()=>{
    dispatch(login()) // set login =true in redux store 
   navigate("/") //on successfull login navigate home page
  }
  return (
<div className='container my-3 '>
<div className='card p-5  shadow'>
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">Email</label>
        <input type="email" class="form-control p-3"  placeholder="enter a Email"/>
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">Password</label>
        <input type="password" class="form-control  p-3"  placeholder="enter a password"/>
      </div>
      <button type="button" class="btn btn-primary btn-lg" onClick={handleLogin}>Login</button>
    </div>
</div>
  )
}

export default Login
