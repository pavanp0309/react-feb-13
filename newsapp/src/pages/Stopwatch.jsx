import React,{useEffect, useState} from 'react'

const Stopwatch = () => {
    const [time,setTime]=useState(0) // these holds the time
    const [isRunning,setIsRunning]=useState(false)
    const [intervalId,setIntervalId]=useState(null) //creating the id for intervals
   console.log(isRunning)
   console.log(time)

useEffect(()=>{
 
    // mouting phase -where timer start and creates the intervals
   if(isRunning){
    let id=setInterval(()=>{
        setTime(prev=>prev+10) // updating the timer based user Action (start ,stop reset)
    },10)
    setIntervalId(id)
   }else if(intervalId){
     clearInterval(intervalId)
     setIntervalId(null)
   }






},[isRunning]) //updation phase


// function for formatting the Time
const formatTime=(time)=>{
    console.log(time)
    let millisec=(`0${(time%1000)/10}`).slice(-2)
    console.log(millisec)
    let sec=(`0${Math.floor((time/1000)%60)}`).slice(-2)
    console.log(sec)
    let min=(`0${Math.floor((time/60000)%60)}`).slice(-2)
    console.log(min)
    let hours=`00`
    return ` ${hours} :${min} :${sec} :${millisec} `
}


// function for handling the stART TIME
const handleStartTime=()=>setIsRunning(true)
// function for handling the stop time
const handleStopTime=()=>setIsRunning(false)
// function for handling the reset time
const handleResetTime=()=>{
    setIsRunning(false)
    setTime(0)
}











  return (
    <div className='container my-2'>
       <h1 className='display border border-danger p-5 
       text-center fw-bold display-1 
       bg-warning text-danger shadow rounded-pill'>{formatTime(time)}</h1>

       {/* buttons */}
       <div className='stopwatch-btn text-center'>
     <button className='btn btn-lg btn-outline-success' onClick={handleStartTime}>Start</button>
     <button className='btn btn-lg btn-outline-success mx-2' onClick={handleStopTime}>Stop</button>
     <button className='btn  btn-lg btn-outline-success' onClick={handleResetTime}>Reset</button>
       </div>
    </div>
  )
}

export default Stopwatch
