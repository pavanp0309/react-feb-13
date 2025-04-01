import {useEffect, useState} from 'react'

const App = () => {
  const [count,setCount]=useState(0) //state of component --0
  const [count1,setCount1]=useState(10) //state of component --0
  const [showTime,setShowTime]=useState(true) //state of component --0

 useEffect(()=>{
  // Mounting phase
  console.log("Mounting....")
 })

// 2.updation phases 
//  without dependencies
 useEffect(()=>{
  // Mounting phase
  console.log("Updation....")
 },[]) //emtpy array dependecies --> runs only  once (at initial rendering phase)


// with dependencies 
useEffect(()=>{
  // Mounting phase
  console.log("Updation.... with depenedcies")
 },[count1]) //with array dependecies --> runs on denpendence  changes 


//  Unmouting Phase


  return (
    <div>
      <h1>useEffect Hook </h1>
      <h2>LifeCycle Methods</h2>
      <p>{count}</p>
      <p>{count1}</p>
      <button onClick={()=>setCount(count+1)}>increment</button>
      <button onClick={()=>setCount1(count1+1)}>increment-1</button>
     {showTime && <Timer/>}
      <button onClick={()=>setShowTime(!showTime)}>{showTime?"showtime":"stopTime"}</button>
    </div>
  )
}

export default App



const Timer=()=>{
  const [time,setTime]=useState(0)
  useEffect(()=>{
    // mouting
 
    const intervalId=setInterval(()=>{
      console.log("timer started")
       setTime(prev=>prev+1)
    },1000)
  
  
    // cleanup 
    return ()=>{
      console.log("timer stoped")
      clearInterval(intervalId)
    }

  },[])


  return <h1>time: { time} sec</h1>
}