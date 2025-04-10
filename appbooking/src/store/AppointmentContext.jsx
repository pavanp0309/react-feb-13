// step1: import the create context  
import { createContext ,useContext,useState} from "react";

// step2 :create the Context for the appointment 
export let AppointmentContext=createContext() 


export function AppointmentProvider({children}){
     console.log("children",children) //app
//  logic for appointment : details ,steps etc 

   let [step,setStep]=useState(1)
   let [loading,setLoading]=useState(false)
   let [appointment,setAppointement]=useState({
     name:"",
     email:"",
     mobile:"",
     date:"",
     time:""
   })

//  functions (logic)for handling the steps 
let nextStep=()=>setStep(s=>Math.min(s+1,3))
let prevStep=()=>setStep(s=>Math.max(s-1,1))

// function for Updating the Filed(name,email,date etc..) 
// [filed]:value : dynamic update of the fields based user input 
// ...prev : copying the previous values when we update objects or arrays to make all values update properly
let updateFileds=(filed,value)=>{
   setAppointement((prev)=>({...prev,[filed]:value}))
}

// function for handling the appointment Submission 
let submitAppointment=(callback)=>{
     setLoading(true)
     setTimeout(()=>{
          setLoading(false)
          // to display to toast message 
        callback()// toast message Function which excute after 1.5sec on successfull submission
     },1500)
}



 return <AppointmentContext.Provider value={{step,appointment ,
            nextStep,prevStep,loading,submitAppointment,updateFileds}}>
            {children}
       </AppointmentContext.Provider>
}


// customhook : (reusable logic)
export let useAppointment=()=>useContext(AppointmentContext)