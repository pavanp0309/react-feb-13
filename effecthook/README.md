useEffect Hook : it is used for managing the sideeffects in a functional components 

Sideeffects :
 1.Timers (setTimeout,setIntervals )
 2.handling the api 
 3.handling the events 

LIFECYCLE METHODS 
  Classcomponents :
     componentdidmount
     componentdidupdate
     componentdidunmount 
  Lifecycle of functional is performed with the help of useEffect 
    1.mouting phase
    2.updation phase
    3.unMounting phase
     
      syntax:
         useEffect(()=>{
            // mouting phase 
            
            return ()=>{} / unmounting phase

         },[dependencies]) // updation phase
    
1.mouting phase : happens at initial render and on  the component re-renders 
        useEffect will once on initial render and every re-render
2.umouting Phase :
3.Updation phase : 
    useffect with empty array dependencies  [] : runs only once at initial rendering 
    useffect with dependencies  [] : will run once at mouting and on every dependencies changes 

UseCase: digitial clocks timers ,searchfunctionality(debouncing) , limitation of api calls fetching data handling the popus etc..