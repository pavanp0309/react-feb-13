// state hook
import React,{useState} from 'react'


const Hook1 = () => {
    console.log(useState())
    // syntax : const [initialvale,updatefn/setfn]=useState(intialvalue)
     let [count,setCount]=useState(1)
     console.log(count)
  return (
    <div>
       <h1>{count}</h1>
      <button className='btn btn-primary' onClick={()=>setCount(count+=1)}>increment</button>
      <button className='btn btn-primary' onClick={()=>setCount(count-=1)}>decrement</button>
      <button className='btn btn-primary' onClick={()=>setCount(count=0)}>rest</button>
    </div>
  )
}

export default Hook1
