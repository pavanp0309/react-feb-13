import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({children}) => {
  let isloggedIn=useSelector(state=>state.auth.isloggedin)

  return isloggedIn ? children : <Navigate to={'/login'}  replace/>
}

export default ProtectedRoute
