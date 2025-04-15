import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { IncrementCount } from './actions/countActions'


const App = () => {
  let data=useSelector(state=>state.count)
  let dispatch=useDispatch()
  
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={()=>dispatch(IncrementCount())}>increment</button>
    </div>
  )
}

export default App
