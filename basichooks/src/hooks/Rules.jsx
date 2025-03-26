import { useState,Component } from "react"


// console.log(useState()) //Rules.jsx:3 Invalid hook call. Hooks can only be called inside of the body of a function component
const Rules = () => {
    console.log(useState()) //correct way

    for(let i=0;i<3;i++){
        console.log(useState()) // wrong way
    }

    if(true){
        console.log(useState()) // wrong way
    }


    function data(){
        console.log(useState()) //// wrong way
    }
    data()
    return (
    <div>
        
     <h2>Types of Hooks</h2>
      <p>useState</p>
      <p>useEffect</p>
      <p>useContext</p>
      <p>useReducer</p>
      <p>useRef</p>
      <p>useCallback-(removed in react19)</p>
      <p>useMemo-(removed in react19)</p>

     <h1>🙆‍♀️Rules Of Hooks </h1> 
     <p>1.call hooks only at the top level of functional component</p>
     <p>2.hooks cant be used inside the class components</p>
     
    </div>
  )
}

export default Rules




